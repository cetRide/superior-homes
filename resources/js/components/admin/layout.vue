<template>
    <div>
        <div id="main">
            <div class="admin-top-bar">
                <div class="admin-left-items">
                    <div class="brand-item">
                        SHK - ADMIN
                    </div>
                    <div class="icon-toggle" v-if="open" @click="w3_open()">
                        <i class="pi pi-window-maximize"></i>
                    </div>
                    <div class="icon-toggle" v-if="close" @click="w3_close()">
                        <i class="pi pi-window-minimize"></i>
                    </div>
                </div>
                <div class="admin-right-items">

                </div>
            </div>
            <div class="contents-wrap">
                <div class="breadcrumb-admin">
                    <p>Superior Homes Kenya<span> | {{routeName}}</span></p>
                </div>
                <router-view></router-view>
            </div>
        </div>
        <div id="mySidebar" class="admin-side-nav">
            <div class="logo-icon">

            </div>
            <div class="the-nav-item" v-tooltip="'Dashboard'">
                <div class="icon-side">
                    <i class="pi pi-compass"></i>
                </div>
                <div class="nav-desc">
                    Dashboard
                </div>
            </div>
            <div>
                <hr>
            </div>
            <div class="the-nav-item" v-tooltip="'Listings'" @click="handleMenu('Property Listing')">
                <div class="icon-side">
                    <i class="pi pi-tags"></i>
                </div>
                <div class="nav-desc">
                    Properties
                </div>
            </div>
            <div>
                <hr>
            </div>
            <div class="the-nav-item" v-tooltip="'About us'" @click="handleMenu('Team')">
                <div class="icon-side">
                    <i class="pi pi-info-circle"></i>
                </div>
                <div class="nav-desc">
                    About Us
                </div>
            </div>
            <div>
                <hr>
            </div>
            <div class="the-nav-item" v-tooltip="'Media'" @click="handleMenu('Admin-Videos')">
                <div class="icon-side">
                    <i class="pi pi-th-large"></i>
                </div>
                <div class="nav-desc">
                    Media
                </div>
            </div>
            <div>
                <hr>
            </div>
            <div class="the-nav-item" v-tooltip="'Careers'">
                <div class="icon-side">
                    <i class="pi pi-briefcase"></i>
                </div>
                <div class="nav-desc">
                    Careers
                </div>
            </div>
            <div>
                <hr>
            </div>
            <div class="the-nav-item" v-tooltip="'Users'">
                <div class="icon-side">
                    <i class="pi pi-users"></i>
                </div>
                <div class="nav-desc">
                    System Users
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tooltip from 'primevue/tooltip';
import router from "../../router/router";

export default {
    name: "layout",
    directives: {
        'tooltip': Tooltip
    },
    data() {
        return {
            open: true,
            close: false,
        }
    },
    computed: {
        routeName() {
            return this.$route.name;
        }
    },
    methods: {
        handleMenu(name) {
            router.push({name: name})
        },
        w3_open() {
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("mySidebar").style.width = "250px";
            let items = document.getElementsByClassName("nav-desc");
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "block"
            }
            this.open = false
            this.close = true
        },
        w3_close() {
            document.getElementById("main").style.marginLeft = "50px";
            document.getElementById("mySidebar").style.width = "50px";
            let items = document.getElementsByClassName("nav-desc");
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "none"
            }
            this.open = true
            this.close = false
        }
    }
}
</script>

<style scoped>

</style>
