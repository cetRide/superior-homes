<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="1000" class="top-landing-details">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
        </div>
        <div class="container">
           <div class="faqs">
               <h2 class="title">Frequently Asked Questions</h2>
               <div>
                   <Accordion>
                       <AccordionTab v-for="faq in faqs" :key="faq.id" :header="faq.qtn">
                           {{faq.ans}}
                       </AccordionTab>
                   </Accordion>

               </div>
           </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
export default {
    name: "Faqs",
    components: {
        Accordion,AccordionTab
    },
    methods: {
        track () {
            this.$gtag.pageview(this.$route)
        },
    },
    computed: {
        ...mapGetters([
            'faqs'
        ])
    },
    created() {
        if (this.faqs.length < 1){
            this.$store.dispatch('fetchFaqs')
        }
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 70vh;
    object-fit: contain;
}
</style>
