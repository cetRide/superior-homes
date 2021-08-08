<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - Careers
            </div>
            <div>
                <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
        </div>
        <div>
            <Dialog header="Create Job" v-model:visible="show_add_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="name">Job Title</label>
                        <InputText id="name" type="text" v-model="form.title"/>
                    </div>
                    <div>
                        <label for="pos">Location</label>
                        <InputText type="text" id="pos" v-model="form.loc"/>
                    </div>
                    <div>
                        <label for="date">Date</label>
                        <Calendar dateFormat="dd.mm.yy" id="date" style="width: 100%" v-model="form.dat"/>
                    </div>
                    <div>
                        <label for="desc">Description</label>
                        <Textarea id="desc" v-model="form.descr" :autoResize="true" rows="7" cols="30"/>
                    </div>
                    <div style="margin-bottom: 10px">
                        <label for="jd">Upload Job description document</label><br>
                        <input class="jd" type="file" id="jd" ref="jd" v-on:change="handleFileUpload()"/>
                    </div>
                    <div>
                        <Message v-if="errorSize" severity="error">Image size exceeds 5MB</Message>
                        <div v-for="item in items">
                            <div v-if="!item.image">
                                <input type="file" @change="onFileChange(item, $event)" accept="image/*" id="upload"
                                       hidden/>
                                <label class="label-upload" for="upload">Select Image Banner</label>
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
                    <Button :loading="loadingAdd" label="Save Job" @click="createJob"/>
                </template>
            </Dialog>
        </div>

        <!--        edit-->
        <div>
            <Dialog header="Edit Job" v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="fname">Job Title</label>
                        <InputText id="fname" type="text" v-model="formEdit.title"/>
                    </div>
                    <div>
                        <label for="fpos">Location</label>
                        <InputText type="text" id="fpos" v-model="formEdit.loc"/>
                    </div>
                    <div>
                        <label for="fdate">Date</label>
                        <Calendar dateFormat="dd.mm.yy" id="fdate" style="width: 100%" v-model="formEdit.dat"/>
                    </div>
                    <div>
                        <label for="fdesc">Description</label>
                        <Textarea id="fdesc" v-model="formEdit.descr" :autoResize="true" rows="7" cols="30"/>
                    </div>
                    <div style="margin-bottom: 10px">
                        <label for="fjd">Upload Job description document</label><br>
                        <input class="jd" type="file" id="fjd" ref="jd" v-on:change="handleFileUpload()"/>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>Old Photo</p>
                                <img :src="imgUrl"/>
                            </div>
                            <Message v-if="errorSize" severity="error">Image size exceeds 5MB</Message>
                            <div v-for="item in editItems">
                                <div v-if="!item.image">
                                    <input type="file" @change="onFileChange(item, $event)" accept="image/*"
                                           id="fupload"
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
                </div>
                <template #footer>
                    <Button label="Cancel" @click="show_edit_modal = false" class="p-button-text"/>
                    <Button :loading="loadingEdit" label="Edit Job" @click="editJob"/>
                </template>
            </Dialog>
        </div>
        <!--        edit-->
        <div>
            <DataTable :value="job" responsiveLayout="scroll">
                <Column field="title" header="Title"></Column>
                <Column field="loc" header="Location"></Column>
                <Column field="dat" header="Date"></Column>
                <Column field="descr" header="Description"></Column>
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
import Calendar from 'primevue/calendar';
import moment from "moment";

export default {
    name: "job",
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
        Message,
        Calendar
    },
    data() {
        return {
            show_add_modal: false,
            show_edit_modal: false,
            form: {dat: '', title: '', descr: '', loc: ''},
            formEdit: {dat: '', title: '', descr: '', loc: ''},
            items: [{image: false}],
            editItems: [{image: false}],
            errorSize: false,
            imagesArray: null,
            job: [],
            imgUrl: '',
            jd: '',
            loadingEdit: false,
            loadingAdd: false
        }
    },
    created() {
        this.moment = moment;
    },
    mounted() {
        this.showJobs()
    },
    methods: {
        handleFileUpload() {
            this.jd = this.$refs.jd.files[0];
        },
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteJob(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        showEdit(item) {
            this.show_edit_modal = true
            this.formEdit.loc = item.loc;
            this.formEdit.title = item.title
            this.formEdit.descr = item.descr;
            this.formEdit.dat = item.dat;
            this.formEdit.id = item.id;
            this.imgUrl = item.img
        },
        onFileChange(item, e) {
            this.errorSize = false
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            if (files[0].size > 5097152) {
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
        editJob() {
            if (this.formEdit.title === ''
                || this.formEdit.loc === '' ||
                this.formEdit.dat === '' ||
                this.formEdit.descr === ''
            ) {
                this.errorToast("Make sure you have filled all the fields.")
            } else {
                this.loadingEdit = true
                let theData = new FormData();
                if (this.imagesArray !== null) {
                    theData.append("file", this.imagesArray, this.imagesArray.name);
                }
                if (this.jd !== '') {
                    theData.append("jd", this.jd);
                }
                theData.append("loc", this.formEdit.loc);
                theData.append("dat", moment(this.formEdit.dat).format('YYYY-MM-DD'));
                theData.append("title", this.formEdit.title);
                theData.append("descr", this.formEdit.descr);
                theData.append("id", this.formEdit.id);
                axios.post("/api/edit-job", theData)
                    .then(res => {
                        this.successToast("Job details changed")
                        this.loadingEdit = false
                        this.show_edit_modal = false
                        for (let i in this.job) {
                            if (this.job[i].id === this.formEdit.id) {
                                this.job[i].descr = res.data.descr;
                                this.job[i].title = res.data.title;
                                this.job[i].loc = res.data.loc;
                                this.job[i].img = res.data.img;
                                this.job[i].dat = res.data.dat;
                                break;
                            }
                        }
                    }).catch(err => {
                    this.loadingEdit = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        createJob() {
            if (this.form.title === ''
                || this.form.loc === '' ||
                this.form.dat === '' ||
                this.form.descr === '' ||
                this.imagesArray === null || this.jd === ''
            ) {
                this.errorToast("Make sure you have filled all the fields.")
            } else {
                this.loadingAdd = true
                let formData = new FormData();
                formData.append("title", this.form.title);
                formData.append("loc", this.form.loc);
                formData.append("dat", moment(this.form.dat).format('YYYY-MM-DD'));
                formData.append("jd", this.jd);
                formData.append("description", this.form.descr);
                if (this.imagesArray !== null) {
                    formData.append("file", this.imagesArray, this.imagesArray.name);
                    axios.post("/api/create-job", formData)
                        .then(res => {
                            this.successToast("Job saved")
                            this.show_add_modal = false
                            this.imagesArray = null
                            this.loadingAdd = false
                            this.job.push(res.data)
                        }).catch(err => {
                        this.loadingAdd = false
                        this.errorToast("An error occurred!")
                    });
                }
            }
        },
        showJobs() {
            axios.get("/api/get-all-job").then(res => {
                this.job = res.data
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteJob(id) {
            axios.delete(`/api/delete-job/${id}`).then(res => {
                this.successToast(res.data)
                this.job.splice(this.job.findIndex(item => item.id === id), 1)
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
