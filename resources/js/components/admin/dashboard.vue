<template>
    <div class="container-fluid">
       <div class="p-grid">
           <div v-for="item in referrals" class="p-col-12 p-md-3 p-lg-2 dash-card">
               <p>Name: <strong>{{item.name}}</strong></p>
               <p>Today: <strong>{{item.today}}</strong></p>
               <p>Yesterday: <strong>{{item.yesterday}}</strong></p>
               <p>Last Month: <strong>{{item.lastMonth}}</strong></p>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "dashboard",
    data(){
        return{
          referrals:[]
        }
    },
    mounted() {
        this.fetchReferrals();
    },
    methods:{
        fetchReferrals() {
            axios.get("/api/fetch-referrals").then(res => {
                this.referrals = res.data
            }).catch(err => {
                console.log(err)
            });
        },
    }
}
</script>

<style scoped>

</style>
