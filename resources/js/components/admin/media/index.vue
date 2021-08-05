<template>
    <div>
        <div class="sub-menu-bar">
            <div class="first-bar">
                <div class="menu-item-bar" @click="handleMenu('Admin-Videos')">
                    Videos
                </div>
                <div class="menu-item-bar" @click="handleMenu('Admin-Faqs')">
                    FAQs
                </div>
                <div class="menu-item-bar" @click="handleMenu('Admin-Articles')">
                    Articles
                </div>
            </div>
            <div class="second-bar">
            </div>
            <div class="sub-menu-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../../router/router";

export default {
    name: "index",
    data(){
        return{}
    },
    methods:{
        handleMenu(name){
            router.push({name: name})
        }
    }
}
</script>

<style scoped>

</style>
