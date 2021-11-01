<template>
    <div>
        <div class="parallax" style="height: 100vh">
            <ul class="slideshow">
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/ge.jpg')"></span></li>
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/greenpark/4.jpg')"></span></li>
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/greenpark/6.jpg')"></span></li>
            </ul>
        </div>
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="1000" class="prop-landing-details">
                <div class="prop-title">{{ property.title }}</div>
                <div class="prop-sub">{{ property.subt }}</div>
                <a href="#reserve">
                    <div class="prop-btn" @click="reserve(property.title)">
                        Reserve Now
                    </div>
                </a>
            </div>
        </div>
        <div class="container">
            <div class="p-grid prop-top">
                <div class="p-col-12 p-md-12 p-lg-6 prop-desc">
                    <h4>{{ property.title }}</h4>
                    <h5><i>{{ property.subt }}</i></h5>
                    <p>
                        {{ property.art }}
                    </p>
                </div>
                <div class="p-col-12 p-md-12 p-lg-6">
                    <div id="map"></div>
                </div>
            </div>

            <div class="p-grid">
                <div v-for="data in property.property_types" class="p-col-12 p-md-6 p-lg-6">
                    <div class="shk_property_type">
                        <div class="image-wrap">
                            <div class="content-overlay"></div>
                            <img :src="data.img" :alt="data.name">
                        </div>
                        <div class="tag">
                            <p class="title">{{ data.name }}</p>
                            <p class="price">{{ data.price }}</p>
                        </div>
                        <div class="desc">

                            {{ data.description }}

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
                    <div class="wrap">
                        <div class="form-title">
                            <div>
                                <img :src="logo" alt="Superior homes logo">
                            </div>
                            <div>
                                <h3>TALK TO US</h3>
                            </div>
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
import {createToast} from "mosha-vue-toastify";

export default {
    name: "GreenPark",
    components: {
        Button
    },
    setup() {
        const successToast = (message) => {
            createToast(message, {
                hideProgressBar: "true",
                showIcon: "true",
                position: "top-right",
                type: "success",
                transition: "zoom",
                timeout: 1500,
                toastBackgroundColor: "#6cb2eb",
            });
        };
        const errorToast = (message) => {
            createToast(message, {
                hideProgressBar: "true",
                showIcon: "true",
                position: "top-right",
                type: "success",
                transition: "zoom",
                timeout: 1500,
                toastBackgroundColor: "#E46464",
            });
        };
        return {successToast, errorToast};
    },
    data() {
        return {
            logo: '/images/logos/logo_1.png',
            green_park: '/images/shk_properties/GPhomepage.jpg',
            property: {},
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
        this.showPropertyTypes();
        this.initMap()
    },
    computed: {
        ...mapGetters([
            'emailSend',
            'toast', 'toast_err'
        ])
    },
    watch: {
        toast_err: function () {
            if (this.toast_err) {
                this.errorToast("An error occurred. Try again!");
                this.$store.commit('TOAST_ERR', false)
            }
        },
        toast: function () {
            this.successToast("Inquiry send successfully.")
            this.$store.commit('TOAST', false)
            this.form = {}
            this.firstname = ''
            this.lastname = ''
        }
    },
    methods: {
        track() {
            this.$gtag.pageview(this.$route)
        },
        showPropertyTypes() {
            axios.get(`/api/fetch-property/Greenpark Estate`).then(res => {
                this.property = res.data[0]
            }, function (error) {
                console.log(error);
            });
        },
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
