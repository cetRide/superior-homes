<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="2000" class="prop-landing-details">
                    <p>{{ pazuriData.title }}</p>
                    <span>{{ pazuriData.sub }}</span>
                    <div class="prop-btn" @click="reserve(pazuriData.title)">
                        Reserve Now
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="p-grid prop-top">
                <div class="p-col-12 p-md-12 p-lg-6 prop-desc">
                    <h4>{{ pazuriData.title }}</h4>
                    <h5>{{ pazuriData.sub }}</h5>
                    <p>
                        {{ pazuriData.abt }}
                    </p>
                </div>
                <div class="p-col-12 p-md-12 p-lg-6">
                    <div id="map"></div>
                </div>
            </div>

            <div class="p-grid">
                <div v-for="data in pazuriData.type" class="p-col-12 p-md-6 p-lg-4">
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

            <div class="cont-form-wrapper" style="margin: 30px 0 10px 0; width: 100% !important;">
                <div class="form-title">
                    <div>
                        <img src="/images/logos/logo_1.png" alt="Superior homes logo">
                    </div>
                    <div>
                        <h2>Send us an Inquiry</h2>
                    </div>
                </div>
                <div class="form-container">
                    <div class="p-grid properties-cont">
                        <div class="p-col-12 p-2 p-md-6 p-lg-6">
                            <div>
                                <input type="text" required placeholder="First Name">
                            </div>
                        </div>
                        <div class="p-col-12 p-2 p-md-6 p-lg-6">
                            <div>
                                <input type="text" required placeholder="Last Name">
                            </div>
                        </div>
                        <div class="p-col-12 p-2 p-md-6 p-lg-6">
                            <div>
                                <input type="text" required placeholder="Email Address">
                            </div>
                        </div>
                        <div class="p-col-12 p-2 p-md-6 p-lg-6">
                            <div>
                                <input type="text" required placeholder="Phone number">
                            </div>
                        </div>
                    </div>
                    <div>
                        <textarea name="message" id="" cols="100"></textarea>
                    </div>
                    <button style="margin-top: 20px" class="shk-btns">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pazuri from "../../data/pazuri";
export default {
    name: "Pazuri",
    data() {
        return {
            green_park: '/images/shk_properties/fadhili.jpg',
            pazuriData: pazuri
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
            const uluru = { lat: -3.785953, lng: 39.803321 };
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
    background-image: url('/images/shk_properties/Pazuri_at_Vipingo.jpg');
    height: 100vh;
}
</style>
