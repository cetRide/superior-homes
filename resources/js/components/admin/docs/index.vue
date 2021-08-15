<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - Docs
            </div>
            <div>
                <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
        </div>
        <div>
            <Dialog header="Upload Documents" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="title">Title</label>
                        <InputText id="title" type="text" v-model="form.title"/>
                    </div>
                    <Message v-if="errorSize" severity="error">File size exceeds 60MB</Message>
                    <div style="margin-bottom: 10px">
                        <label for="jd">Upload Document(limit-size - 60MB)</label><br>
                        <input class="jd" type="file" id="jd" ref="jd" v-on:change="handleFileUpload()"/>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_add_modal = false" class="p-button-text"/>
                    <Button :loading="loadingAdd" label="Upload Doc" @click="uploadDoc"/>
                </template>
            </Dialog>
        </div>

        <div>
            <input type="hidden" id="testing-code" :value="testingCode">
            <DataTable :value="docs" responsiveLayout="scroll">
                <Column field="name" header="Document Name"></Column>
                <Column field="id" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-trash" @click="confirmDel($event, slotProps.data.id)"
                                class="p-button-rounded p-button-danger"
                                style="margin-right: 10px; margin-bottom: 10px"/>

                        <Button icon="pi pi-copy" @click.stop.prevent="copyLink(slotProps.data.path)"
                                class="p-button-rounded p-button-primary"
                                style="margin-right: 10px; margin-bottom: 10px"/>
                    </template>
                </Column>
            </DataTable>
            <ConfirmPopup></ConfirmPopup>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {createToast} from "mosha-vue-toastify";
import ConfirmPopup from 'primevue/confirmpopup';

export default {
    name: "index",
    setup() {
        const successToast = (message) => {
            createToast(message, {
                hideProgressBar: "true",
                showIcon: "true",
                position: "top-right",
                type: "success",
                transition: "zoom",
                timeout: 1500,
                toastBackgroundColor: "#6cb2eb",
            });
        };
        const errorToast = (message) => {
            createToast(message, {
                hideProgressBar: "true",
                showIcon: "true",
                position: "top-right",
                type: "success",
                transition: "zoom",
                timeout: 1500,
                toastBackgroundColor: "#E46464",
            });
        };
        return {successToast, errorToast};
    },
    components: {
        ConfirmPopup,
        DataTable,
        Column,
        Dialog,
        Button,
        Message,
        InputText
    },
    data() {
        return {
            show_add_modal: false,
            show_edit_modal: false,
            isError: false,
            form: {title: ''},
            docs: [],
            doc: '',
            imgUrl: '',
            loadingAdd: false,
            testingCode: ''
        }
    },
    computed: {
        errorSize() {
            return this.isError
        }
    },
    mounted() {
        this.showDocs()
    },
    methods: {
        handleFileUpload() {
            this.isError = false;
            if (this.$refs.jd.files[0].size > 62914560) {
                this.isError = true;
            } else {
                this.doc = this.$refs.jd.files[0];
            }
        },
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteDocs(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        uploadDoc() {
            if (this.form.title === '') {
                this.errorToast("Title missing")
            } else if (this.doc === '') {
                this.errorToast("Upload the file")
            } else {
                this.loadingAdd = true
                let formData = new FormData();
                formData.append("title", this.form.title)
                formData.append("file", this.doc);
                axios.post("/api/create-doc", formData)
                    .then(res => {
                        this.successToast("Document uploaded")
                        this.show_add_modal = false
                        this.loadingAdd = false
                        this.docs.push(res.data)
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        showDocs() {
            axios.get("/api/list-docs").then(res => {
                this.docs = res.data
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteDocs(id) {
            axios.delete(`/api/delete-docs/${id}`).then(res => {
                this.successToast(res.data)
                this.docs.splice(this.docs.findIndex(item => item.id === id), 1)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        copyLink(path) {
            this.testingCode = window.location.origin + '/docs/' + path
            let testingCodeToCopy = document.querySelector('#testing-code')
            testingCodeToCopy.setAttribute('type', 'text')
            testingCodeToCopy.select()
            try {
                let successful = document.execCommand('copy');
                successful ? this.successToast('Link copied successfully') :
                    this.errorToast("Oops, unable to copy!");
            } catch (err) {
                this.errorToast("Oops, unable to copy!")
            }
            testingCodeToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
        },
    }
}
</script>

<style scoped>
.jd::file-selector-button {
    border: 2px solid #555555;
    color: #555555;
    padding: 8px;
    border-radius: 4px;
    background-color: #ffffff;
}

.jd::file-selector-button:hover {
    background-color: #e9e9e9;
}

.jd::-webkit-file-upload-button {
    border: 2px solid #555555;
    color: #555555;
    padding: 8px;
    border-radius: 4px;
    background-color: #ffffff;
}

.jd::-webkit-file-upload-button:hover {
    background-color: #e9e9e9;
}
</style>
