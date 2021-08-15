<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - Real Estate Listings
            </div>
            <div>
                <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
        </div>
        <div>
            <Dialog header="Add Property Listing" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Property Name</label>
                        <InputText id="name" type="text" v-model="form.title"/>
                    </div>
                    <div>
                        <label for="pos">Sub Title</label>
                        <InputText type="text" id="pos" v-model="form.subt"/>
                    </div>
                    <div>
                        <label for="desc">Description</label>
                        <Textarea id="desc" v-model="form.art" :autoResize="true" rows="7" cols="30"/>
                    </div>
                    <div>
                        <Message v-if="errorSize" severity="error">Image size exceeds 5MB</Message>
                        <div v-for="item in items">
                            <div v-if="!item.image">
                                <input type="file" @change="onFileChange(item, $event)" accept="image/*" id="upload"
                                       hidden/>
                                <label class="label-upload" for="upload">Select Image</label>
                            </div>
                            <div v-else>
                                <img :src="item.image"/>
                                <Button @click="removeImage(item)">Remove image</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_add_modal = false" class="p-button-text"/>
                    <Button :loading="loadingAdd" label="Save Property Listing" @click="createProperty"/>
                </template>
            </Dialog>
        </div>

        <!--        edit-->
        <div>
            <Dialog header="Edit Property " v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Property Name</label>
                        <InputText id="fname" type="text" v-model="formEdit.title"/>
                    </div>
                    <div>
                        <label for="fpos">Sub Title</label>
                        <InputText type="text" id="fpos" v-model="formEdit.subt"/>
                    </div>
                    <div>
                        <label for="fdesc">Description</label>
                        <Textarea id="fdesc" v-model="formEdit.art" :autoResize="true" rows="7" cols="30"/>
                    </div>
                    <div>
                        <div>
                            <p>Old Photo</p>
                            <img :src="imgUrl"/>
                        </div>
                        <Message v-if="errorSize" severity="error">Image size exceeds 5MB</Message>
                        <div v-for="item in editItems">
                            <div v-if="!item.image">
                                <input type="file" @change="onFileChange(item, $event)" accept="image/*" id="fupload"
                                       hidden/>
                                <label class="label-upload" for="fupload">Change Image</label>
                            </div>
                            <div v-else>
                                <p>New Photo</p>
                                <img :src="item.image"/>
                                <Button @click="removeImage(item)">Remove image</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_edit_modal = false" class="p-button-text"/>
                    <Button :loading="loadingEdit" label="Edit Property" @click="editPropertyMember"/>
                </template>
            </Dialog>
        </div>
        <!--        edit-->
        <div>
            <DataTable :value="property" responsiveLayout="scroll">
                <Column field="title" header="Title"></Column>
                <Column field="subt" header="Sub Title"></Column>
                <Column field="img" header="Banner">
                    <template #body="slotProps">
                        <div>
                            <img style="height: 150px; width: 150px" :src="slotProps.data.img"
                                 alt="slotProps.data.title">
                        </div>
                    </template>
                </Column>
                <Column field="art" header="Description"></Column>
                <Column field="id" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-eye" @click="viewProperty(slotProps.data.id, slotProps.data.title)"
                                class="p-button-rounded"
                                style="margin-right: 10px; margin-bottom:10px; background-color: slategray"/>
                        <Button icon="pi pi-trash" @click="confirmDel($event, slotProps.data.id)"
                                class="p-button-rounded p-button-danger"
                                style="margin-right: 10px; margin-bottom:10px"/>
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
import router from "../../../router/router";

export default {
    name: "property",
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
            items: [{image: false}],
            editItems: [{image: false}],
            errorSize: false,
            imagesArray: null,
            property: [],
            imgUrl: '',
            loadingEdit: false,
            loadingAdd: false
        }
    },
    mounted() {
        this.showProperty()
    },
    methods: {
        viewProperty(id, title) {
            localStorage.setItem('title', title)
            localStorage.setItem('id', id)
            router.push({
                name: 'Property Details', params: {
                    id: id
                }
            })
        },
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deletePropertyMember(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        showEdit(item) {
            this.show_edit_modal = true
            this.formEdit.subt = item.subt;
            this.formEdit.title = item.title
            this.formEdit.art = item.art;
            this.formEdit.id = item.id;
            this.imgUrl = item.img
        },
        onFileChange(item, e) {
            this.errorSize = false
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            if (files[0].size > 5242880) {
                this.errorSize = true;
                this.removeImage(item);
                return;
            }
            this.imagesArray = event.target.files[0]
            this.createImage(item, files[0]);
        },
        createImage(item, file) {
            let image = new Image();
            let reader = new FileReader();
            reader.onload = (e) => {
                item.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (item) {
            item.image = false;
        },
        editPropertyMember() {
            this.loadingEdit = true
            let theData = new FormData();
            if (this.imagesArray !== null) {
                theData.append("file", this.imagesArray, this.imagesArray.name);
            }
            theData.append("subt", this.formEdit.subt);
            theData.append("art", this.formEdit.art);
            theData.append("title", this.formEdit.title);
            theData.append("id", this.formEdit.id);
            axios.post("/api/edit-property", theData)
                .then(res => {
                    this.successToast("Property  details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    for (let i in this.property) {
                        if (this.property[i].id === this.formEdit.id) {
                            this.property[i].subt = res.data.subt;
                            this.property[i].title = res.data.title;
                            this.property[i].art = res.data.art;
                            this.property[i].img = res.data.img;
                            break;
                        }
                    }
                }).catch(err => {
                this.loadingEdit = false
                this.errorToast("An error occurred!")
            });
        },
        createProperty() {
            this.loadingAdd = true
            let formData = new FormData();
            formData.append("title", this.form.title);
            formData.append("art", this.form.art);
            formData.append("subt", this.form.subt);
            if (this.imagesArray !== null) {
                formData.append("file", this.imagesArray, this.imagesArray.name);
                axios.post("/api/create-property", formData)
                    .then(res => {
                        this.successToast("Property saved")
                        this.show_add_modal = false
                        this.imagesArray = null
                        this.loadingAdd = false
                        this.property.push(res.data)
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        showProperty() {
            axios.get("/api/get-all-property").then(res => {
                this.property = res.data
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deletePropertyMember(id) {
            axios.delete(`/api/delete-property/${id}`).then(res => {
                this.successToast(res.data)
                this.property.splice(this.property.findIndex(item => item.id === id), 1)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        }
    }
}
</script>

<style scoped>
img {
    width: 50%;
    display: block;
    margin-bottom: 10px;
}
</style>
