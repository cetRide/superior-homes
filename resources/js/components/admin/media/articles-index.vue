<template>
    <div>
        <div class="bar-head">
            <div class="heading-text">
                SHK - Articles
            </div>
            <div v-if="routeName === 'Admin-Articles'">
                <Button @click="addArticle" style="background-color: white; color: black" icon="pi pi-plus"
                        class="p-button-rounded"/>
            </div>
            <div v-else style="cursor: pointer" @click="backHome">
                Back
            </div>
        </div>
        <div style="padding: 20px 10px">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import router from "../../../router/router";
import Button from "primevue/button";
export default {
    name: "index",
    components:{
       Button
    },
    data() {
        return {}
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
        addArticle(){
            router.push({name: 'Add-article'})
        },
        backHome(){
            router.push({name: 'Admin-Articles'})
        }
    }
}
</script>

<style scoped>

</style>
