<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                <div @click="$router.back()">
                    <i class="pi pi-arrow-left"></i>
                </div>
                <div>
                    {{ property.title }}
                </div>
            </div>
            <div class="heading-text">
                <div v-tooltip="'Gallery'">
                    <Button @click="manageGallery(property.id)" style="background-color: white; color: black"
                            icon="pi pi-images"
                            class="p-button-rounded"/>
                </div>
                <div v-tooltip="'Add Property Type'">
                    <Button @click="show_add_modal = true" style="background-color: white; color: black"
                            icon="pi pi-plus"
                            class="p-button-rounded"/>
                </div>
            </div>

        </div>
        <div>
            <Dialog header="Add Property Type" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Title</label>
                        <InputText id="name" type="text" v-model="form.name"/>
                    </div>
                    <div>
                        <label for="pos">Price</label>
                        <InputText type="text" id="pos" v-model="form.price"/>
                    </div>
                    <div>
                        <label for="desc">Description</label>
                        <Textarea id="desc" v-model="form.description" :autoResize="true" rows="7" cols="30"/>
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
                    <Button :loading="loadingAdd" label="Save Property Type" @click="createProperty"/>
                </template>
            </Dialog>
        </div>
        <!--gallery-->
        <div>
            <Dialog :header="'Manage '+ property.title + ' Gallery' " v-model:visible="show_gallery"
                    :maximizable="true" :modal="true"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '70vw'}"
            >
                <div class="container">
                    <div style="margin-bottom: 10px" @click="openAddPhoto()">
                        <Button label="Add Photo" icon="pi pi-plus"
                                class="p-button-primary"/>
                    </div>
                    <div v-if="property.gallery.length > 0">
                        <DataTable :value="property.gallery" responsiveLayout="scroll">
                            <Column field="id" header="Id"></Column>
                            <Column field="img" header="Photo">
                                <template #body="slotProps">
                                    <div>
                                        <img style="height: 150px; width: 150px" :src="slotProps.data.img"
                                             alt="slotProps.data.title">
                                    </div>
                                </template>
                            </Column>
                            <Column field="id" header="Action">
                                <template #body="slotProps">
                                    <Button icon="pi pi-trash" @click="confirmDelGallery($event, slotProps.data.id)"
                                            class="p-button-rounded p-button-danger"/>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                    <div v-else>
                        <p>No photos </p>
                    </div>
                </div>
                <template #footer>
                    <Button :loading="loadingEdit" label="Close" @click="show_gallery = false"/>
                </template>
            </Dialog>
        </div>
        <!--        gallery-->

        <!--        add photo-->
        <div>
            <Dialog header="Add Photo" v-model:visible="show_Add_image"
                    :maximizable="true" :modal="true"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div>
                    <Message v-if="errorSize" severity="error">Image size exceeds 5MB</Message>
                    <div v-for="item in items">
                        <div v-if="!item.image">
                            <input type="file" @change="onFileChange(item, $event)" accept="image/*" id="supload"
                                   hidden/>
                            <label class="label-upload" for="supload">Choose Image</label>
                        </div>
                        <div v-else>
                            <img :src="item.image"/>
                            <Button @click="removeImage(item)">Remove image</Button>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_Add_image = false" class="p-button-text"/>
                    <Button :loading="loadingAddPhoto" label="Add Image" @click="postImage(property.id)"/>
                </template>
            </Dialog>
        </div>
        <!--        add photo-->

        <!--        edit-->
        <div>
            <Dialog header="Edit Property Type" v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Title</label>
                        <InputText id="fname" type="text" v-model="formEdit.name"/>
                    </div>
                    <div>
                        <label for="fpos">Price</label>
                        <InputText type="text" id="fpos" v-model="formEdit.price"/>
                    </div>
                    <div>
                        <label for="fdesc">Description</label>
                        <Textarea id="fdesc" v-model="formEdit.description" :autoResize="true" rows="7" cols="30"/>
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

            <DataTable :value="property.property_types" responsiveLayout="scroll">
                <Column field="name" header="Title"></Column>
                <Column field="price" header="Price"></Column>
                <Column field="img" header="Banner">
                    <template #body="slotProps">
                        <div>
                            <img style="height: 150px; width: 150px" :src="slotProps.data.img"
                                 alt="slotProps.data.title">
                        </div>
                    </template>
                </Column>
                <Column field="description" header="Description"></Column>
                <Column field="id" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-trash" @click="confirmDel($event, slotProps.data.id)"
                                class="p-button-rounded p-button-danger"/>
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
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Tooltip from "primevue/tooltip";

export default {
    name: "property",
    directives: {
        'tooltip': Tooltip
    },
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
        TabPanel, TabView,
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
            loadingAdd: false,
            show_gallery: false,
            show_Add_image: false,
            loadingAddPhoto: false
        }
    },
    mounted() {
        this.showPropertyTypes(localStorage.getItem('title'))
    },
    methods: {
        postImage(id) {
            this.loadingAddPhoto = true
            let formData = new FormData();
            formData.append("shk_h_property_id", id);
            if (this.imagesArray !== null) {
                formData.append("file", this.imagesArray, this.imagesArray.name);
                axios.post("/api/create-image", formData)
                    .then(res => {
                        this.successToast("Photo Uploaded")
                        this.show_Add_image = false
                        this.imagesArray = null
                        this.loadingAddPhoto = false
                        this.property.gallery.push(res.data)
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        openAddPhoto(){
            this.show_Add_image = true
            this.items[0].image = false
        },
        manageGallery() {
            this.show_gallery = true
            this.imagesArray = null
        },
        confirmDelGallery(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this photo?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteGallery(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
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
            this.formEdit.name = item.name;
            this.formEdit.description = item.description
            this.formEdit.price = item.price;
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
            theData.append("name", this.formEdit.name);
            theData.append("description", this.formEdit.description);
            theData.append("price", this.formEdit.price);
            theData.append("id", this.formEdit.id);
            axios.post("/api/edit-property-type", theData)
                .then(res => {
                    this.successToast("Property details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    let propertyType = this.property.property_types
                    for (let i in propertyType) {
                        if (propertyType[i].id === this.formEdit.id) {
                            propertyType[i].price = res.data.price;
                            propertyType[i].name = res.data.name;
                            propertyType[i].description = res.data.description;
                            propertyType[i].img = res.data.img;
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
            formData.append("name", this.form.name);
            formData.append("description", this.form.description);
            formData.append("id", this.$route.params.id);
            formData.append("price", this.form.price);
            if (this.imagesArray !== null) {
                formData.append("file", this.imagesArray, this.imagesArray.name);
                axios.post("/api/create-property-type", formData)
                    .then(res => {
                        this.successToast("Property saved")
                        this.show_add_modal = false
                        this.imagesArray = null
                        this.loadingAdd = false
                        this.property.property_types.push(res.data)
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        showPropertyTypes(title) {
            axios.get(`/api/fetch-property/${title}`).then(res => {
                this.property = res.data[0]
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deletePropertyMember(id) {
            axios.delete(`/api/delete-property-type/${id}`).then(res => {
                this.successToast(res.data)
                this.property.property_types.splice(this.property.property_types.findIndex(item => item.id === id), 1)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteGallery(id) {
            axios.delete(`/api/delete-image/${id}`).then(res => {
                this.successToast(res.data)
                this.property.gallery.splice(this.property.gallery.findIndex(item => item.id === id), 1)
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
