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
            <div  class="placeholderimg">
                <ul class="slideshow">
                    <li><span
                        style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/home_1.jpg')"></span>
                    </li>
                    <li><span
                        style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/home_3.jpg')"></span>
                    </li>
                    <li><span
                        style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/home_4.jpg')"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="500" class="top-landing-details">
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
                <p style="font-size: 30px" class="text-center my-3">OUR REAL ESTATE <span style="color: #F68D2E">LISTINGS</span>
                </p>
                <Carousel :value="property" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                          class="custom-carousel" :circular="true" :autoplayInterval="2000">
                    <template #item="slotProps">
                        <div class="item-content">
                            <div class="shk_property">
                                <div class="image-wrap">
                                    <img :src="slotProps.data.img"
                                         :alt="slotProps.data.title">
                                    <div class="item-desc">
                                        <div class="title">
                                            {{ slotProps.data.title }}
                                        </div>
                                        <div v-if="slotProps.data.title === 'Lake Elementaita Mountain Lodge'">
                                            <a href="https://leml.co.ke/" target="_blank"
                                               rel="noopener noreferrer">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div v-else-if="slotProps.data.title === 'The Greenpark Sundowner Hotel'">
                                            <a href="'https://greenparksundowner.co.ke/'" target="_blank"
                                               rel="noopener noreferrer">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div v-else-if="slotProps.data.title === 'Fadhili Retirement Village'">
                                            <router-link to="/fadhili">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div v-else-if="slotProps.data.title === 'Pazuri at Vipingo'">
                                            <router-link to="/pazuri-at-vipingo">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div v-else>
                                            <router-link to="/greenpark-estate">
                                                <div class="more-btn">
                                                    <i class="pi pi-arrow-right"></i>
                                                </div>
                                            </router-link>
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
            property: [],
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
    mounted() {
        this.showProperties()
    },
    methods: {
        track() {
            this.$gtag.pageview(this.$route)
        },
        showProperties() {
            axios.get("/api/get-all-property").then(res => {
                this.property = res.data
            }, function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped lang="css">

.item-content {
    border-radius: 3px;
    margin: .3rem;
    text-align: center;
    padding: 0.5rem 0;
}

.placeholderimg {
    /*background-color: red;*/
    height: 100vh;
    top: 0
}

</style>
