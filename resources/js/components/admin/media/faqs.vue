<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - FAQs
            </div>
            <div>
                <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
        </div>
        <div>
            <Dialog header="Add FAQs" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Question</label>
                        <InputText id="name" type="text" v-model="form.qtn"/>
                    </div>
                    <div>
                        <label for="desc">Answer</label>
                        <Textarea id="desc" v-model="form.ans" :autoResize="true" rows="7" cols="30"/>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_add_modal = false" class="p-button-text"/>
                    <Button :loading="loadingAdd" label="Save FAQs" @click="createFAQs"/>
                </template>
            </Dialog>
        </div>

        <!--        edit-->
        <div>
            <Dialog header="Edit FAQs " v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="fname">Question</label>
                        <InputText id="fname" type="text" v-model="formEdit.qtn"/>
                    </div>
                    <div>
                        <label for="fdesc">Answer</label>
                        <Textarea id="fdesc" v-model="formEdit.ans" :autoResize="true" rows="7" cols="30"/>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_edit_modal = false" class="p-button-text"/>
                    <Button :loading="loadingEdit" label="Edit FAQs " @click="editFAQs"/>
                </template>
            </Dialog>
        </div>
        <!--        edit-->
        <div>
            <DataTable :value="faq" responsiveLayout="scroll">
                <Column field="qtn" header="Question"></Column>
                <Column field="ans" header="Answer"></Column>
                <Column field="id" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-trash" @click="confirmDel($event, slotProps.data.id)"
                                class="p-button-rounded p-button-danger"
                                style="margin-right: 10px; margin-bottom: 10px"/>
                        <Button @click="showEdit(slotProps.data)" icon="pi pi-pencil"
                                class="p-button-rounded p-button-primary"/>
                    </template>
                </Column>
            </DataTable>
            <ConfirmPopup></ConfirmPopup>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {createToast} from "mosha-vue-toastify";
import ConfirmPopup from 'primevue/confirmpopup';

export default {
    name: "faq",
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
        Textarea,
        ConfirmPopup,
        DataTable,
        Column,
        InputText,
        Dialog,
        Button,
        Message
    },
    data() {
        return {
            show_add_modal: false,
            show_edit_modal: false,
            form: {},
            formEdit: {},
            errorSize: false,
            faq: [],
            loadingEdit: false,
            loadingAdd: false
        }
    },
    mounted() {
        this.showFAQs()
    },
    methods: {
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteFAQs(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        showEdit(item) {
            this.show_edit_modal = true
            this.formEdit.qtn = item.qtn;
            this.formEdit.ans = item.ans
            this.formEdit.id = item.id;
        },
        editFAQs() {
            this.loadingEdit = true
            axios.post("/api/edit-faq", this.formEdit)
                .then(res => {
                    this.successToast("FAQs details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    for (let i in this.faq) {
                        if (this.faq[i].id === this.formEdit.id) {
                            this.faq[i].qtn = res.data.qtn;
                            this.faq[i].ans = res.data.ans;
                            break;
                        }
                    }
                }).catch(err => {
                this.loadingEdit = false
                this.errorToast("An error occurred!")
            });
        },
        createFAQs() {
            this.loadingAdd = true
            axios.post("/api/create-faq", this.form)
                .then(res => {
                    this.successToast("FAQs  saved")
                    this.show_add_modal = false
                    this.loadingAdd = false
                    this.faq.push(res.data)
                }).catch(err => {
                this.loadingAdd = false
                this.errorToast("An error occurred!")
            });
        },
        showFAQs() {
            axios.get("/api/get-all-faq").then(res => {
                this.faq = res.data
                this.faq.push(res.data)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteFAQs(id) {
            axios.delete(`/api/delete-faq/${id}`).then(res => {
                this.successToast(res.data)
                this.faq.splice(this.faq.findIndex(item => item.id === id), 1)
                this.faq.push(res.data)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        }
    }
}
</script>

<style scoped>

</style>
