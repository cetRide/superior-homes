<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div class="top-landing-details">
                    <h2>Contact Us</h2>
                </div>
            </div>
        </div>
        <div class="">
            <div class="cont-one container">
                <div class="details">
                    <h3 style="margin-top: 20px">CONTACT DETAILS</h3>
                    <div class="chunk">
                        <p>Greenpark Estate, Athi River <br>
                            P.O Box 12345-00100, Nairobi, Kenya</p>
                    </div>
                    <div class="chunk">
                        <p><span class="title">Sales</span><br>
                            <a href="mailto:sales@superiorhomes.co.ke">Email: sales@superiorhomes.co.ke</a><br>
                            <a href="tel: +254 713 888 333">Mobile: +254 713 888 333</a><br>
                            <a href="tel: +254 713 888 333">Whatsapp: +254 713 888 333</a><br></p>
                    </div>
                    <div class="chunk">
                        <p><span class="title">General Inquiries</span><br>
                            <a href="mailto:info@superiorhomes.co.ke">Email: info@superiorhomes.co.ke</a><br>
                            <a href="tel: +254 724 253 258">Mobile: +254 724 253 258</a><br>
                            <a href="tel: +254 724 253 258">Whatsapp: +254 724 253 258</a><br></p>
                    </div>
                </div>
                <div class="cont-form-wrapper">
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
            <div id="map"></div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import Button from "primevue/button";
import {createToast} from "mosha-vue-toastify";

export default {
    name: "contact",
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
        };
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
        }
    },
    mounted() {
        this.initMap()
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
            this.form.page = 'Contact Us'
            this.form.name = this.firstname + '  ' + this.lastname;
            if (this.canSendRequest()) {
                this.$store.dispatch('sendEmail', this.form)
            }

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

        },
    }
}
</script>

<style scoped lang="css">
#map {
    height: 400px;
    width: 100%;
}

.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 70vh;
}
</style>
