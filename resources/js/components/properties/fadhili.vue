<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="2000" class="prop-landing-details">
                    <p>{{ fadhiliData.title }}</p>
                    <span>{{ fadhiliData.sub }}</span>
                    <div class="prop-btn" @click="reserve(fadhiliData.title)">
                        Reserve Now
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="p-grid prop-top">
                <div class="p-col-12 p-md-12 p-lg-6 prop-desc">
                    <h4>{{ fadhiliData.title }}</h4>
                    <h5>{{ fadhiliData.sub }}</h5>
                    <p>
                        {{ fadhiliData.abt }}
                    </p>
                </div>
                <div class="p-col-12 p-md-12 p-lg-6">
                    <div id="map"></div>
                </div>
            </div>

            <div class="p-grid">
                <div v-for="data in fadhiliData.type" class="p-col-12 p-md-6 p-lg-4">
                    <div class="shk_property_type">
                        <div class="image-wrap">
                            <img :src="data.img" :alt="data.name">
                        </div>
                        <div class="tag">
                            <p class="title">{{ data.name }}</p>
                            <p class="price">{{ data.price }}</p>
                        </div>
                        <div class="desc">

                            {{ data.abt }}

                        </div>
                        <div>
                            <div class="icons">
                                <div class="item">
                                    <img src="/images/icons/bed.svg" alt="bed-icon">
                                </div>
                                <div class="item">
                                    {{ data.beds }} Bedrooms
                                </div>
                            </div>
                            <div class="icons">
                                <div class="item">
                                    <img src="/images/icons/bath.svg" alt="bathtub-icon">
                                </div>
                                <div class="item">
                                    {{ data.baths }} Bathrooms
                                </div>
                            </div>
                            <div class="icons">
                                <div class="item">
                                    <img src="/images/icons/parking.svg" alt="parking-icon">
                                </div>
                                <div class="item">
                                    Private Parking
                                </div>
                            </div>
                        </div>
                        <div class="btn-sec">
                            <div class="properties-btn" @click="reserve(data.name)">
                                Reserve
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fadhili from "../../data/fadhili";

export default {
    name: "Fadhili",
    data() {
        return {
            green_park: '/images/shk_properties/fadhili.jpg',
            fadhiliData: fadhili
        }
    },
    mounted() {
        this.initMap()
    },
    methods: {
        reserve(type) {
            console.log(type)
        },
        initMap() {
            const uluru = { lat: -1.462352, lng: 37.015655 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: uluru,
            });
            const marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });
        }
    }
}
</script>

<style scoped lang="css">
#map {
    height: 300px;
    width: 100%;
}

.parallax-home {
    background-image: url('/images/shk_properties/fadhili.jpg');
    height: 100vh;
}
</style>
