<template>
<div>
    <div class="bar-head">
        <div class="heading-text">
            SHK - Referrals
        </div>
        <div>
            <Button @click="show_add_modal = true" style="background-color: white; color: black" icon="pi pi-plus"
                    class="p-button-rounded"/>
        </div>
    </div>
    <div>
        <Dialog header="Create Referral Link" v-model:visible="show_add_modal"
                :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
        >
            <div style="padding-top: 10px">
                <div>
                    <label for="name">Name</label>
                    <InputText id="name" type="text" v-model="form.name"/>
                </div>
                <div>
                    <label for="website">Website</label>
                    <InputText id="website" type="text" v-model="form.redirect_link"/>
                </div>

            </div>
            <template #footer>
                <Button label="Cancel" @click="show_add_modal = false" class="p-button-text"/>
                <Button :loading="loadingAdd" label="Create Link" @click="createLink"/>
            </template>
        </Dialog>
    </div>
    <div>
        <Dialog header="Edit Referral Link" v-model:visible="show_edit_modal"
                :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"
        >
            <div style="padding-top: 10px">
                <div>
                    <label for="ename">Name</label>
                    <InputText id="ename" type="text" v-model="formEdit.name"/>
                </div>
                <div>
                    <label for="ewebsite">Website</label>
                    <InputText id="ewebsite" type="text" v-model="formEdit.redirect_link"/>
                </div>

            </div>
            <template #footer>
                <Button label="Cancel" @click="show_edit_modal = false" class="p-button-text"/>
                <Button :loading="loadingEdit" label="Edit Link" @click="editLink"/>
            </template>
        </Dialog>
    </div>
    <div>
        <div>
            <DataTable :value="referrals" responsiveLayout="scroll">
                <Column field="name" header="Name"></Column>
                <Column field="redirect_link" header="Website"></Column>
                <Column field="link" header="Referral Link"></Column>
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
</div>
</template>

<script>
import ConfirmPopup from "primevue/confirmpopup";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Message from "primevue/message";
import InputText from "primevue/inputtext";
import {createToast} from "mosha-vue-toastify";

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
    data(){
        return {
            referrals:[] ,
            form:{name:'', redirect_link:''},
            show_edit_modal: false,
            show_add_modal: false,
            loadingAdd: false,
            loadingEdit: false,
            formEdit:{}
        }
    },
    mounted() {
        this.fetchReferrals()
    },
    methods:{
        showEdit(item) {
            this.show_edit_modal = true
            this.formEdit.name = item.name;
            this.formEdit.redirect_link = item.redirect_link
            this.formEdit.id = item.id;
        },
        editLink(){
            this.loadingEdit = true
            this.formEdit.link = window.location.origin + '/referral/'+
                this.formEdit.name.replace(/\s+/g, '-').toLowerCase();
            axios.post("/api/edit-referrals", this.formEdit)
                .then(res => {
                    this.successToast("Referral details changed")
                    this.loadingEdit = false
                    this.show_edit_modal = false
                    for (let i in this.referrals) {
                        if (this.referrals[i].id === this.formEdit.id) {
                            this.referrals[i].name = res.data.name;
                            this.referrals[i].link = res.data.link;
                            this.referrals[i].redirect_link = res.data.redirect_link;
                            break;
                        }
                    }
                }).catch(err => {
                this.loadingEdit = false
                this.errorToast("An error occurred!")
            });
        },
        createLink(){
            if (this.form.name === '' || this.form.redirect_link === ''){
                this.errorToast("Fill all fields")
            } else {
                this.loadingAdd = true
                this.form.link = window.location.origin + '/referral/'+
                    this.form.name.replace(/\s+/g, '-').toLowerCase();
                axios.post("/api/create-referrals", this.form)
                    .then(res => {
                        this.successToast("Referral saved")
                        this.show_add_modal = false
                        this.loadingAdd = false
                        this.referrals.push(res.data)
                    }).catch(err => {
                    this.loadingAdd = false
                    this.errorToast("An error occurred!")
                });
            }
        },
        confirmDel(event, id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.deleteReferral(id)
                },
                reject: () => {
                    this.successToast("Canceled")
                }
            });
        },
        fetchReferrals() {
            axios.get("/api/list-referrals").then(res => {
                this.referrals = res.data
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        },
        deleteReferral(id){
            axios.delete(`/api/delete-referral/${id}`).then(res => {
                this.successToast(res.data)
                this.referrals.splice(this.referrals.findIndex(item => item.id === id), 1)
            }).catch(err => {
                this.errorToast("An error occurred!")
            });
        }
    }
}
</script>

<style scoped>

</style>
