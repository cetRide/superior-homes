<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div class="top-landing-details">
                    <h2>Welcome to our Careers Page</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div>
                <div class="careers-page">
                    <h2 class="title">Welcome to our Careers Page</h2>
                    <div class="no-career-wrapper">
                        <div class="no-career">
                            <div>
                                <div class="logo">
                                    <img :src="image_src" alt="logo">
                                </div>
                                <div class="text-desc">
                                    No open vaccancies at the moment.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
import {mapGetters} from "vuex";
import Button from "primevue/button";

export default {
    name: "careers",
    components: {
        Button
    },
    data() {
        return {
            image_src: '/images/logos/logo.png',
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
            'emailSend'
        ])
    },
    methods:{
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
            this.form.page = 'Careers page'
            this.form.name = this.firstname + '  ' + this.lastname;
            if (this.canSendRequest()) {
                this.$store.dispatch('sendEmail', this.form)
            }
        },
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 60vh;
}

</style>
