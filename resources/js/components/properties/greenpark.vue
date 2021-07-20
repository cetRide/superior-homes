<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="2000" class="prop-landing-details">
                    <p>{{ greenParkData.title }}</p>
                    <span>{{ greenParkData.sub }}</span>
                    <div class="prop-btn" @click="reserve(greenParkData.title)">
                        Reserve Now
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="p-grid prop-top">
                <div class="p-col-12 p-md-12 p-lg-6 prop-desc">
                    <h4>{{ greenParkData.title }}</h4>
                    <h5>{{ greenParkData.sub }}</h5>
                    <p>
                        {{ greenParkData.abt }}
                    </p>
                </div>
                <div class="p-col-12 p-md-12 p-lg-6">
                    <div id="map"></div>
                </div>
            </div>

            <div class="p-grid">
                <div v-for="data in greenParkData.type" class="p-col-12 p-md-6 p-lg-4">
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
import greenPark from "../../data/greenPark";

export default {
    name: "GreenPark",
    data() {
        return {
            green_park: '/images/shk_properties/GPhomepage.jpg',
            greenParkData: greenPark
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
            const uluru = {lat: -1.462344, lng: 37.012593};
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
    background-image: url('/images/shk_properties/GPhomepage.jpg');
    height: 100vh;
}
</style>
