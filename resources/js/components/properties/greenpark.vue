<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="2000" class="prop-landing-details">
                    <p>{{ greenParkData.title }}</p>
                    <span>{{ greenParkData.sub }}</span>
                    <a href="#reserve">
                        <div class="prop-btn" @click="reserve(greenParkData.title)">
                            Reserve Now
                        </div>
                    </a>
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
                            <a href="#reserve">
                                <div class="properties-btn" @click="reserve(data.name)">
                                    Reserve
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="reserve">
                <div class="cont-form-wrapper" style="margin: 30px 0 10px 0; width: 100% !important;">
                    <div class="form-title">
                        <div>
                            <img :src="logo" alt="Superior homes logo">
                        </div>
                        <div>
                            <h2>Send us an Inquiry</h2>
                        </div>
                    </div>
                    <div class="form-container">
                        <div class="p-grid properties-cont">
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="text" v-model="firstname" required placeholder="First Name">
                                </div>
                                <small v-if="firstnameValid !== ''" class="p-error"
                                >{{ firstnameValid }}.</small>
                            </div>
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="text" v-model="lastname" required placeholder="Last Name">
                                </div>
                                <small v-if="lastnameValid !== ''" class="p-error"
                                >{{ lastnameValid }}.</small>
                            </div>
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="email" v-model="form.email" required placeholder="Email Address">
                                </div>
                                <small v-if="emailValid !== ''" class="p-error"
                                >{{ emailValid }}.</small>
                            </div>
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="number" v-model="form.phone" required placeholder="Phone number">
                                </div>
                                <small v-if="phoneValid !== ''" class="p-error"
                                >{{ phoneValid }}.</small>
                            </div>
                        </div>
                        <div>
                            <textarea name="message" v-model="form.message" rows="8" cols="100"></textarea>
                            <small v-if="messageValid !== ''" class="p-error"
                            >{{ messageValid }}.</small>
                        </div>

                        <Button
                            :loading="emailSend"
                            @click="sendEmail()"
                            style="margin-top: 20px;
                          background-color: #F68D2E !important;
                          border-radius: 20px!important;
                          border: none !important;
                          box-shadow: none !important;
                           height: 40px !important;"
                            label="Send Message"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import greenPark from "../../data/greenPark";
import {mapGetters} from "vuex";
import Button from "primevue/button";

export default {
    name: "GreenPark",
    components: {
        Button
    },
    data() {
        return {
            logo: '/images/logos/logo_1.png',
            green_park: '/images/shk_properties/GPhomepage.jpg',
            greenParkData: greenPark,
            form: {
                phone: '',
                message: '',
                email: '',
            },
            firstname: '',
            lastname: '',
            firstnameValid: "",
            lastnameValid: "",
            emailValid: "",
            phoneValid: "",
            messageValid: "",
        }
    },
    mounted() {
        this.initMap()
    },
    computed: {
        ...mapGetters([
            'emailSend'
        ])
    },
    methods: {
        canSendRequest() {
            return (
                this.firstnameValid === "" &&
                this.lastnameValid === "" &&
                this.emailValid === "" &&
                this.phoneValid === "" &&
                this.messageValid === ""
            );
        },
        clearFormErrors() {
            this.firstnameValid = "";
            this.lastnameValid = "";
            this.emailValid = "";
            this.phoneValid = "";
            this.messageValid = "";
        },
        validateForm(data) {
            this.clearFormErrors();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                this.emailValid = "Email is invalid";
            }
            if (this.firstname === "") {
                this.firstnameValid = "First Name is required";
            }
            if (this.lastname === "") {
                this.lastnameValid = "Last Name is required";
            }
            if (data.phone === "") {
                this.phoneValid = "Phone is required";
            }
            if (data.phone.length > 12) {
                this.phoneValid = "Phone number cannot be more than 12 digits";
            }
            if (/\D/.test(data.phone)) {
                this.phoneValid = "Phone number should contain only digits";
            }
            if (data.message === "") {
                this.messageValid = "Message is required";
            }
            if (data.email === "") {
                this.emailValid = "Email is required";
            }
        },
        sendEmail() {
            this.validateForm(this.form);
            this.form.page = 'Green Park'
            this.form.name = this.firstname + '  ' + this.lastname;
            if (this.canSendRequest()) {
                this.$store.dispatch('sendEmail', this.form)
            }
        },
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
