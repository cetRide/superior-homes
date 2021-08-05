<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - Video
            </div>
            <div>
                <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
        </div>
        <div>
            <Dialog header="Add Video" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Video Title</label>
                        <InputText id="name" type="text" v-model="form.title"/>
                    </div>
                    <div>
                        <label for="pos">Video You-tube Link</label>
                        <InputText type="text" id="pos" v-model="form.link"/>
                    </div>
                    <div>
                        <label for="desc">Description</label>
                        <Textarea id="desc" v-model="form.abt" :autoResize="true" rows="7" cols="30"/>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_add_modal = false" class="p-button-text"/>
                    <Button :loading="loadingAdd" label="Save Video" @click="createVideo"/>
                </template>
            </Dialog>
        </div>

        <!--        edit-->
        <div>
            <Dialog header="Edit Video " v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="fname">Video Title</label>
                        <InputText id="fname" type="text" v-model="formEdit.title"/>
                    </div>
                    <div>
                        <label for="fpos">Video You-tube Link</label>
                        <InputText type="text" id="fpos" v-model="formEdit.link"/>
                    </div>
                    <div>
                        <label for="fdesc">Description</label>
                        <Textarea id="fdesc" v-model="formEdit.abt" :autoResize="true" rows="7" cols="30"/>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_edit_modal = false" class="p-button-text"/>
                    <Button :loading="loadingEdit" label="Edit Video " @click="editVideo"/>
                </template>
            </Dialog>
        </div>
        <!--        edit-->
        <div>
            <DataTable :value="video" responsiveLayout="scroll">
                <Column field="title" header="Video Title"></Column>
                <Column field="link" header="Video Link"></Column>
                <Column field="abt" header="Description"></Column>
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
    name: "video",
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
            imagesArray: null,
            video: [],
            loadingEdit: false,
            loadingAdd: false
        }
    },
    mounted() {
        this.showVideo()
    },
    methods: {
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteVideo(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        showEdit(item) {
            this.show_edit_modal = true
            this.formEdit.title = item.title;
            this.formEdit.abt = item.abt
            this.formEdit.link = item.link;
            this.formEdit.id = item.id;
        },
        editVideo() {
            this.loadingEdit = true
            axios.put("/api/edit-video", this.formEdit)
                .then(res => {
                    this.successToast("Video  details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    for (let i in this.video) {
                        if (this.video[i].id === this.formEdit.id) {
                            this.video[i].link = res.data.link;
                            this.video[i].title = res.data.title;
                            this.video[i].abt = res.data.abt;
                            break;
                        }
                    }
                    this.faq.push(res.data)
                }).catch(err => {
                this.loadingEdit = false
                this.errorToast("An error occurred!")
            });
        },
        createVideo() {
            this.loadingAdd = true
            axios.post("/api/create-video", this.form)
                .then(res => {
                    this.successToast("Video  saved")
                    this.show_add_modal = false
                    this.loadingAdd = false
                    this.video.push(res.data)
                    this.faq.push(res.data)
                }).catch(err => {
                this.loadingAdd = false
                this.errorToast("An error occurred!")
            });
        },
        showVideo() {
            axios.get("/api/get-all-video").then(res => {
                this.video = res.data
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteVideo(id) {
            axios.delete(`/api/delete-video/${id}`).then(res => {
                this.successToast(res.data)
                this.video.splice(this.video.findIndex(item => item.id === id), 1)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        }
    }
}
</script>

<style scoped>

</style>
