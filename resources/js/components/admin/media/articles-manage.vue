<template>
    <div>
        <div>
            <DataTable :value="articles" responsiveLayout="scroll">
                <Column field="title" header="Title"></Column>
                <Column field="auth" header="Author"></Column>
                <Column field="date" header="Date"></Column>
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
        <div>
            <Dialog header="Edit Article" v-model:visible="show_edit_modal"
                    :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
            >
                <div style="padding-top: 10px">
                    <div>
                        <label for="title">Title</label>
                        <InputText id="title" type="text" v-model="formEdit.title"/>
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
                    <Button :loading="loadingEdit" label="Edit" @click="editArticle"/>
                </template>
            </Dialog>
        </div>
    </div>
</template>

<script>
import Textarea from "primevue/textarea";
import ConfirmPopup from "primevue/confirmpopup";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Message from "primevue/message";
import {createToast} from "mosha-vue-toastify";
import {mapGetters} from "vuex";

export default {
    name: "articles-manage",
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
            loadingAdd: false,
            items: [{image: false}],
            editItems: [{image: false}],
            imagesArray: null,
            team: [],
            imgUrl: '',
        }
    },
    computed: {
        ...mapGetters([
            'articles'
        ])
    },
    mounted() {
        if (this.articles.length < 1) {
            this.$store.dispatch('fetchArticles')
        }
    },
    methods: {
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
            this.formEdit.title = item.title;
            this.formEdit.img = item.img
            this.formEdit.id = item.id;
        },
        editArticle() {
            this.loadingEdit = true
            let theData = new FormData();
            if (this.imagesArray !== null) {
                theData.append("file", this.imagesArray, this.imagesArray.name);
            }
            theData.append("img", this.formEdit.img);
            theData.append("title", this.formEdit.title);
            theData.append("id", this.formEdit.id);
            axios.post("/api/edit-article", theData)
                .then(res => {
                    this.successToast("Article details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    for (let i in this.team) {
                        if (this.team[i].id === this.formEdit.id) {
                            this.team[i].img = res.data.img;
                            this.team[i].title = res.data.title;
                            break;
                        }
                    }
                }).catch(err => {
                this.loadingEdit = false
                this.errorToast("An error occurred!")
            });
        },
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
</script>

<style scoped>

</style>
