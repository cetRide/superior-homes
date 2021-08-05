<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - Team
            </div>
            <div>
                <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
        </div>
        <div>
            <Dialog header="Add team Member" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Full Name</label>
                        <InputText id="name" type="text" v-model="form.name"/>
                    </div>
                    <div>
                        <label for="pos">Position</label>
                        <InputText type="text" id="pos" v-model="form.position"/>
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
                    <Button :loading="loadingAdd" label="Save team Member" @click="createTeam"/>
                </template>
            </Dialog>
        </div>

        <!--        edit-->
        <div>
            <Dialog header="Edit team Member" v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Full Name</label>
                        <InputText id="fname" type="text" v-model="formEdit.name"/>
                    </div>
                    <div>
                        <label for="fpos">Position</label>
                        <InputText type="text" id="fpos" v-model="formEdit.title"/>
                    </div>
                    <div>
                        <label for="fdesc">Description</label>
                        <Textarea id="fdesc" v-model="formEdit.abt" :autoResize="true" rows="7" cols="30"/>
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
                    <Button :loading="loadingEdit" label="Edit team Member" @click="editTeamMember"/>
                </template>
            </Dialog>
        </div>
        <!--        edit-->
        <div>
            <DataTable :value="team" responsiveLayout="scroll">
                <Column field="name" header="Name"></Column>
                <Column field="title" header="Title"></Column>
                <Column field="abt" header="About"></Column>
                <Column field="id" header="Action">
                    <template #body="slotProps">
                        <Button icon="pi pi-trash" @click="confirmDel($event, slotProps.data.id)"
                                class="p-button-rounded p-button-danger" style="margin-right: 10px; margin-bottom: 10px"/>
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
    name: "team",
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
            team: [],
            imgUrl: '',
            loadingEdit: false,
            loadingAdd: false
        }
    },
    mounted() {
        this.showTeamMembers()
    },
    methods: {
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteTeamMember(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        showEdit(item) {
            this.show_edit_modal = true
            this.formEdit.name = item.name;
            this.formEdit.title = item.title
            this.formEdit.abt = item.abt;
            this.formEdit.id = item.id;
            this.imgUrl = item.img
        },
        onFileChange(item, e) {
            this.errorSize = false
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            if (files[0].size > 2097152) {
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
        editTeamMember() {
            this.loadingEdit = true
            let theData = new FormData();
            if (this.imagesArray !== null) {
                theData.append("file", this.imagesArray, this.imagesArray.name);
            }
            theData.append("name", this.formEdit.name);
            theData.append("abt", this.formEdit.abt);
            theData.append("title", this.formEdit.title);
            theData.append("id", this.formEdit.id);
            axios.post("/api/edit-team", theData)
                .then(res => {
                    this.successToast("Team member details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    for (let i in this.team) {
                        if (this.team[i].id === this.formEdit.id) {
                            this.team[i].name = res.data.name;
                            this.team[i].title = res.data.title;
                            this.team[i].abt = res.data.abt;
                            this.team[i].img = res.data.img;
                            break;
                        }
                    }
                }).catch(err => {
                this.loadingEdit = false
                this.errorToast("An error occurred!")
            });
        },
        createTeam() {
            this.loadingAdd = true
            let formData = new FormData();
            formData.append("name", this.form.name);
            formData.append("abt", this.form.description);
            formData.append("title", this.form.position);
            if (this.imagesArray !== null) {
                formData.append("file", this.imagesArray, this.imagesArray.name);
                axios.post("/api/create-team", formData)
                    .then(res => {
                        this.successToast("Team member saved")
                        this.show_add_modal = false
                        this.imagesArray = null
                        this.loadingAdd = false
                        this.team.push(res.data)
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        showTeamMembers() {
            axios.get("/api/get-all-team").then(res => {
                this.team = res.data
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteTeamMember(id) {
            axios.delete(`/api/delete-team/${id}`).then(res => {
                this.successToast(res.data)
                this.team.splice(this.team.findIndex(item => item.id === id), 1)
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
