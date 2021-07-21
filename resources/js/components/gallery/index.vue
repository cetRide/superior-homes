<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="2000" class="top-landing-details">
                    <h2>Our Gallery</h2>
                    <h4>Because Every Photo Has A Story To Tell</h4>
                </div>
            </div>
        </div>
        <div class="gallery-section">
            <div class="container">
                <div class="tab-section">
                    <h4 style="margin: 20px 0; text-align: center">Photo Gallery</h4>
                    <TabView ref="tabview1">
                        <TabPanel header="GreenPark Estate">
                            <div v-if="images" class="p-grid">
                                <div v-for="(image, index) of images" class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="'/images/shk_properties/greenpark/' + image.src" alt="Greenpark" style="cursor: pointer"
                                         @click="imageClick(index, 'greenpark')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Fadhili Care">
                            <div v-if="images" class="p-grid">
                                <div v-for="(image, index) of images" class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="'/images/shk_properties/fadhili/' + image.src" alt="Fadhili" style="cursor: pointer"
                                         @click="imageClick(index, 'fadhili')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Pazuri At Vipingo">
                            <div v-if="images" class="p-grid">
                                <div v-for="(image, index) of images" class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="'/images/shk_properties/pazuri/' + image.src" alt="Pazuri at Vipingo" style="cursor: pointer"
                                         @click="imageClick(index, 'pazuri')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Greenpark Sundowner">
                            <div v-if="images" class="p-grid">
                                <div v-for="(image, index) of images" class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="'/images/shk_properties/sundowner/' + image.src" alt="Greenpark Sundowner" style="cursor: pointer"
                                         @click="imageClick(index, 'sundowner')"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Lake Elementaita Mountain Lodge">
                            <div v-if="images" class="p-grid">
                                <div v-for="(image, index) of images" class="p-col-12 p-md-6 p-lg-4 image-cont" :key="index">
                                    <img :src="'/images/shk_properties/leml/' + image.src" alt="Lake Elementaita Mountain Lodge" style="cursor: pointer"
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
                            <img :src="path + slotProps.item.src" alt="gallery image"
                                 style="width: 100%; display: block;"/>
                        </template>
                        <template #thumbnail="slotProps">
                            <img :src="path + slotProps.item.src" alt="gallery image"
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
        TabPanel, TabView,Galleria
    },
    data() {
        return {
            // images: null,
            activeIndex: 0,
            displayCustom: false,
            images:[{src: '1.jpg'}, {src: '2.jpg'}, {src: '3.jpg'}, {src: '4.jpg'}, {src: '5.jpg'}, {src: '6.jpg'},],
            path: '/images/shk_properties/greenpark/',
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
        }
    },
    methods: {
        imageClick(index, type) {
            if (type === 'greenpark'){
                this.path = '/images/shk_properties/greenpark/'
            }
            if (type === 'pazuri'){
                this.path = '/images/shk_properties/pazuri/'
            }
            if (type === 'fadhili'){
                this.path = '/images/shk_properties/fadhili/'
            }
            if (type === 'leml'){
                this.path = '/images/shk_properties/leml/'
            }
            if (type === 'sundowner'){
                this.path = '/images/shk_properties/sundowner/'
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

