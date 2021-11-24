<template>
    <div>
        <div class="parallax" style="height: 100vh">
            <div class="banner-loader" style="height: inherit;">
                <div class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <ul class="slideshow">
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/lem.jpg')"></span></li>
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/home_1.jpg')"></span></li>
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/home_10.jpg')"></span></li>
            </ul>
        </div>
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="1000" class="top-landing-details">
                <h2>Gallery</h2>
            </div>
        </div>
        <div class="gallery-section">
            <div class="container">
                <div class="tab-section">
                    <h4 style="margin: 20px 0; text-align: center">Photo Gallery</h4>
                    <TabView ref="tabview1">
                        <TabPanel header="Greenpark Estate">
                            <div v-if="greenpark" class="p-grid">
                                <div v-for="(image, index) of greenpark"
                                     class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="image.img" alt="Greenpark"
                                         style="cursor: pointer"
                                         loading="lazy"
                                         @click="imageClick(index, 'greenpark')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Fadhili Care">
                            <div v-if="fadhili" class="p-grid">
                                <div v-for="(image, index) of fadhili" class="p-col-12 p-md-6 p-lg-4 image-cont"
                                     :key="index">
                                    <img :src="image.img" alt="Fadhili"
                                         style="cursor: pointer"
                                         loading="lazy"
                                         @click="imageClick(index, 'fadhili')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Pazuri At Vipingo">
                            <div v-if="pazuri" class="p-grid">
                                <div v-for="(image, index) of pazuri" class="p-col-12 p-md-6 p-lg-4 image-cont"
                                     :key="index">
                                    <img :src="image.img" alt="Pazuri at Vipingo"
                                         style="cursor: pointer"
                                         loading="lazy"
                                         @click="imageClick(index, 'pazuri')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Greenpark Sundowner">
                            <div v-if="sundowner" class="p-grid">
                                <div v-for="(image, index) of sundowner"
                                     class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="image.img"
                                         loading="lazy"
                                         alt="Greenpark Sundowner" style="cursor: pointer"
                                         @click="imageClick(index, 'sundowner')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Lake Elementaita Mountain Lodge">
                            <div v-if="leml" class="p-grid">
                                <div v-for="(image, index) of leml" class="p-col-12 p-md-6 p-lg-4 image-cont"
                                     :key="index">
                                    <img :src="image.img"
                                         loading="lazy"
                                         alt="Lake Elementaita Mountain Lodge" style="cursor: pointer"
                                         @click="imageClick(index, 'leml')"/>
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>

                    <Galleria :value="images" v-model:activeIndex="activeIndex"
                              :responsiveOptions="responsiveOptions" :numVisible="7"
                              containerStyle="max-width: 850px"
                              :circular="true" :fullScreen="true" :showItemNavigators="true"
                              :showThumbnails="false" v-model:visible="displayCustom">
                        <template #item="slotProps">
                            <img :src="slotProps.item.img" alt="gallery image"
                                 style="width: 100%; display: block;"/>
                        </template>
                        <template #thumbnail="slotProps">
                            <img :src="slotProps.item.img" alt="gallery image"
                                 style="display: block;"/>
                        </template>
                    </Galleria>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Galleria from 'primevue/galleria';

export default {
    name: "index",
    components: {
        TabPanel, TabView, Galleria
    },
    data() {
        return {
            activeIndex: 0,
            displayCustom: false,
            images: [],
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            property: [],
            greenpark: [],
            leml: [],
            sundowner: [],
            fadhili: [],
            pazuri: []
        }
    },
    created() {
        console.log(this.property)
        // this.images = this.property.find(x => x.title === 'Greenpark Estate').gallery;
    },
    mounted() {
        this.showProperty();
        console.log(this.property)
    },
    methods: {
        track() {
            this.$gtag.pageview(this.$route)
        },
        showProperty() {
            axios.get("/api/get-all-property").then(res => {
                this.property = res.data
                this.greenpark = this.property.find(x => x.title === 'Greenpark Estate').gallery;
                console.log('greenpark', this.greenpark)
                this.pazuri = this.property.find(x => x.title === 'Pazuri at Vipingo').gallery;
                this.fadhili = this.property.find(x => x.title === 'Fadhili Retirement Village').gallery;
                this.leml = this.property.find(x => x.title === 'Lake Elementaita Mountain Lodge').gallery;
                this.sundowner = this.property.find(x => x.title === 'The Greenpark Sundowner Hotel').gallery;
            }).catch(err => {
                console.log(err)
                this.errorToast("An error occurred!")
            });
        },
        imageClick(index, type) {
            if (type === 'greenpark') {
                this.images = this.greenpark
            }
            if (type === 'pazuri') {
                this.images = this.pazuri
            }
            if (type === 'fadhili') {
                this.images = this.fadhili
            }
            if (type === 'leml') {
                this.images = this.leml
            }
            if (type === 'sundowner') {
                this.images = this.sundowner
            }
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 60vh;
}
</style>

