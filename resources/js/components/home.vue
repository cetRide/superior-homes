<template>
    <div>
        <div class="parallax" style="height: 100vh">
            <ul class="slideshow">
                <li><span style="background-image: url('/images/shk_properties/home_1.jpg')"></span></li>
                <li><span style="background-image: url('/images/banner/home_3.jpg')"></span></li>
                <li><span style="background-image: url('/images/banner/home_4.jpg')"></span></li>
                <li><span style="background-image: url('/images/shk_properties/home_5.jpg')"></span></li>
                <li><span style="background-image: url('/images/banner/home_2.jpg')"></span></li>
            </ul>
        </div>
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="1000" class="top-landing-details">
                <h2>Superior Homes Kenya</h2>
                <h4><strong>East Africa's Leading Master-planned Real Estate Developer</strong></h4>
                <p>Superior Homes Kenya is East Africa’s first master-planned real estate developer</p>
                <router-link to="/about-us">
                    <div class="landing-btn">
                        Learn more
                    </div>
                </router-link>
            </div>
        </div>
        <div class="">
            <div>
                <p style="font-size: 30px" class="text-center my-3">Our Real Estate <span style="color: #F68D2E">Listings</span></p>
                <Carousel :value="properties" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                          class="custom-carousel" :circular="true" :autoplayInterval="2000">
                    <template #item="slotProps">
                        <div class="item-content">
                            <div class="shk_property">
                                <div class="image-wrap">
                                    <img :src="'/images/shk_properties/'+ slotProps.data.img"
                                         :alt="slotProps.data.title">
                                    <div class="item-desc">
                                        <div class="title">
                                            {{ slotProps.data.title }}
                                        </div>
                                        <div v-if=" slotProps.data.url === ''">
                                            <router-link :to="{name:  slotProps.data.route}">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div v-else>
                                            <a :href=" slotProps.data.url" target="_blank"
                                               rel="noopener noreferrer">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import homeproperties from "../data/homeproperties";
import Carousel from "primevue/carousel";

export default {
    name: "home",
    components: {
        Carousel
    },
    data() {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            properties: [
                {
                    title: 'Lake Elementaita Mountain Lodge',
                    sub: 'A Glance of Paradise',
                    img: 'lem.jpg',
                    route: '',
                    url: 'https://leml.co.ke/'
                },
                {
                    title: 'The Greenpark Sundowner Hotel',
                    sub: 'Eat, Drink, Play, Enjoy',
                    img: 'home_10.jpg',
                    route: '',
                    url: 'https://greenparksundowner.co.ke/'
                },
                {
                    title: 'Greenpark Estate',
                    sub: 'Where Dreams Come Home',
                    img: 'home_1.jpg',
                    route: 'Green Park',
                    url: ''
                },
                {
                    title: 'Pazuri at Vipingo',
                    sub: 'Luxury Within Reach',
                    img: 'home_5.jpg',
                    route: 'Pazuri at Vipingo',
                    url: ''
                },
                {
                    title: 'Fadhili Retirement Village',
                    sub: 'A Retirement Oasis in the City',
                    img: 'home_9.jpg',
                    route: 'Fadhili',
                    url: ''
                },
            ]
        };
    },
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/gphomesmall.jpg');
    height: 100vh;
}

.item-content {
    border-radius: 3px;
    margin: .3rem;
    text-align: center;
    padding: 0.5rem 0;
}

/*<img src="/images/shk_properties/Pazuri_at_Vipingo.jpg" alt="Slider">*/
/*<img src="/images/shk_general/gphomesmall.jpg" alt="Slider">*/
/*<img src="/images/shk_general/Greenpark_SHK_Drone_3.jpg" alt="Slider">*/
/*<img src="/images/shk_properties/sundowner.jpg" alt="Slider">*/
/*<img src="/images/shk_properties/leml.jpg" alt="Slider">*/

</style>
