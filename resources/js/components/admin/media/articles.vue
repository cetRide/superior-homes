<template>
    <div>
        <div>
            <h2>Create a new Article</h2>
            <div>
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
                            <Button style="background: indianred" @click="removeImage(item)">Remove image</Button>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 20px">
                    <label for="desc">Article Title</label>
                    <Textarea id="desc" v-model="form.title" :autoResize="true" rows="4" cols="30"/>
                </div>
                <div style="margin-top: 20px">
                    <label for="auth">Article Author</label>
                    <InputText id="auth" v-model="form.auth" type="text"/>
                </div>
            </div>
        </div>
        <div>
            <editor
                initialValue="<p>Article contents</p>"
                api-key="dooeanipvyv792bved3c6noxt3vtu9rotq517mdw6lno14ia"
                :disabled=false
                id="uuid"
                v-model="form.abt"
                :init="{
                   height: 500,
                   menubar: 'file edit view insert format tools table tc help',
                   autosave_ask_before_unload: true,
                   autosave_interval: '30s',
                   autosave_prefix: '{path}{query}-{id}-',
                   autosave_restore_when_empty: false,
                   autosave_retention: '2m',
                   image_advtab: true,
                  plugins: [
                    'advlist autolink lists link image charmap',
                    'searchreplace visualblocks code fullscreen',
                    'print preview anchor insertdatetime media',
                    'paste code help wordcount table'
                  ],
                  toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                 }"
                model-events=""
                plugins=""
                tag-name="div"
                toolbar=""
                value=""
            >
            </editor>
        </div>
        <div style="margin: 20px 0">
            <Button :loading="loadingAdd" @click="createArticle()">Create Article</Button>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import {createToast} from "mosha-vue-toastify";
import router from "../../../router/router";
import InputText from "primevue/inputtext";

export default {
    name: 'app',
    components: {
        editor: Editor, Message, Button, Textarea, InputText
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
    data() {
        return {
            form: {abt: '', title: ''},
            items: [{image: false}],
            editItems: [{image: false}],
            errorSize: false,
            imagesArray: null,
            imgUrl: '',
            loadingAdd: false
        }
    },
    methods: {
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
        createArticle() {
            if (this.imagesArray === null) {
                this.errorToast("Upload Image Banner")
            } else if (this.form.title === '' || this.form.abt === '') {
                this.errorToast("Fill all fields")
            } else {
                this.loadingAdd = true
                let formData = new FormData();
                formData.append("title", this.form.title);
                formData.append("abt", this.form.abt);
                formData.append("auth", this.form.auth);
                formData.append("file", this.imagesArray, this.imagesArray.name);
                axios.post("/api/create-article", formData)
                    .then(res => {
                        this.successToast("Article created")
                        this.show_add_modal = false
                        this.imagesArray = null
                        this.loadingAdd = false
                        this.form = {}
                        router.push({name: 'Admin-Articles'})
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        }
    }
}
</script>
<style scoped>
img {
    width: 70%;
    height: 350px;
    margin-bottom: 10px;
    object-fit: contain;
}
</style>
