<template>
    <div class="slim-nav">
        <div class="item">
            <div class="icon">
                <i class="pi pi-envelope"></i>
            </div>
            <div class="desc ml-2">
                sales@superiorhomes.co.ke
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <i class="pi pi-clock"></i>
            </div>
            <div class="desc ml-2">
                Mon-Sun 0800 - 1700 hrs
            </div>

        </div>
        <div class="item">
            <div class="icon">
                <i class="pi pi-phone"></i>
            </div>
            <div class="desc ml-2">
                +254 713 888 333
            </div>

        </div>
    </div>
    <div class="bg-shadow" id="navbar">
        <div class="second-nav container">
            <div class="left-items">
                <img :src="image_src" alt="logo">
            </div>
            <div class="right-items">
                <div class="item">
                    <router-link :to="{ name: 'home' }"
                    >Home
                    </router-link>
                </div>
                <div class="item">
                    <router-link :to="{ name: 'about' }"
                    >About
                    </router-link>
                </div>
                <div class="item">
                    <span> Properties <span style="font-size: 8px">&#9660;</span></span>
                    <div class="dropdown-content" style="width: 300px">
                        <p><router-link to="/greenpark-estate">Greenpark Estate</router-link></p>
                        <p><router-link to="/fadhili">Fadhili Care</router-link></p>
                        <p><router-link to="/pazuri-at-vipingo">Pazuri at Vipingo</router-link></p>
                        <p><a href="https://leml.co.ke/" target="_blank"
                           rel="noopener noreferrer">Lake Elementaita Mountain Lodge</a></p>
                        <p><a href="https://greenparksundowner.co.ke/" target="_blank"
                           rel="noopener noreferrer">Greenpark Sundowner</a></p>
                    </div>
                </div>
                <div class="item">
                    <span>Media <span style="font-size: 8px">&#9660;</span></span>
                    <div class="dropdown-content" style="width: 160px">
                        <p><router-link :to="{ name: 'Articles' }">Articles</router-link></p>
                        <p><router-link :to="{ name: 'videos' }">Videos</router-link></p>
                        <p><router-link :to="{ name: 'faqs' }">FAQs</router-link></p>
                        <!--            <p><router-link :to="{ name: 'about' }">News</router-link></p>-->
                    </div>
                </div>
                <div class="item">
                    <router-link :to="{ name: 'gallery' }"
                    > Gallery
                    </router-link>
                </div>
                <div class="item">
                    <router-link :to="{ name: 'careers' }"
                    > Careers
                    </router-link>
                </div>
                <div class="item">
                    <router-link :to="{ name: 'contact' }"
                    > Contact
                    </router-link>
                </div>
                <div class="toggle-text" @click="visible = true" >
                    <i class="pi pi-bars"></i>
                </div>
            </div>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
    <div class="footer-banner">
        <div class="left">
            <img style="height:  279px; width: 100%; object-fit: cover" :src="footer_banner" alt="Greenpark">
        </div>
        <div class="right">
            <div>
                <h2>Book a Site Tour</h2>
                <h4>Site visits available from 8:00 AM - 5:00 PM</h4>
                <div class="input-btn" style="margin-top: 20px">
                    <input type="email" v-model="email" required placeholder="Email Address">
                    <Button
                        :loading="loadTour"
                        @click="booktour"
                        style="
                          background-color: #F68D2E !important;
                          border-radius: 0 5px 5px 0 !important;
                          margin-left: 0 !important;
                          border: none !important;
                          box-shadow: none !important;
                            height: 37px !important;"
                        label="Send"
                    />
                </div>
                <small v-if="emailValids !== ''" class="p-error"
                >{{ emailValids }}.</small>
            </div>
        </div>
    </div>
    <div v-if="theRoute === 'home' || theRoute === 'about' || theRoute === 'careers'" class="partners my-3">
        <h2 class="text-center font-weight-bold my-3">Our Partners</h2>
        <Carousel :value="brands" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions"
                  class="custom-carousel" :circular="true"
                  :autoplayInterval="2000">
            <template #item="slotProps">
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="p-mb-2">
                            <img :src="'/images/shk_brands/' + slotProps.data.path" class="product-image"
                                 :alt="slotProps.data.path"/>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <div class="footer">
        <div class="container">
            <div class="top-item">
                <div>
                    <div>
                        Follow our social networks
                    </div>
                    <div style="margin: 20px 0" class="social-icons">
                        <div>
                            <a href="https://www.instagram.com/superiorhomeskeplc/" target="_blank"
                               rel="noopener noreferrer">
                                <svg class="instagram-logo" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="15"
                                     height="15"
                                     viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;"
                                     xml:space="preserve">
		<path class="logo" id="XMLID_17_"
              d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>

                                    <path id="XMLID_81_" fill="#555"
                                          d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"/>

                                    <circle id="XMLID_83_" fill="#555" cx="418.306" cy="134.072" r="34.149"/>

</svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/SuperiorHomesKe" target="_blank"
                               rel="noopener noreferrer">
                                <i class="pi pi-facebook"></i></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/SuperiorHomesKe" target="_blank"
                               rel="noopener noreferrer">
                                <i class="pi pi-twitter"></i></a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UC4hqL8EIAlVpFtwcuSRNS7w" target="_blank"
                               rel="noopener noreferrer">
                                <i class="pi pi-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        Be the first one to hear about our updates
                    </div>
                    <div class="input-btn" style="width: 350px; margin-top: 20px">
                        <input type="email" v-model="sub_email" required placeholder="Email Address">
                        <Button
                            :loading="loadSub"
                            @click="subscribe"
                            style="
                          background-color: #F68D2E !important;
                          border-radius: 0 5px 5px 0 !important;
                          margin-left: 0 !important;
                          border: none !important;
                          box-shadow: none !important; min-width: 100px !important;
                            height: 37px !important;"
                            label="Subscribe"
                        />
                    </div>
                    <small v-if="emailValid !== ''" class="p-error"
                    >{{ emailValid }}.</small>
                </div>
            </div>
            <div>
                <hr class="solid">
            </div>
            <div class="middle-items">
                <div>
                    <h2>Contact Us</h2>
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
                <div>
                    <h2>Our Properties</h2>
                    <div class="chunk">
                        <p>
                            <router-link to="/greenpark-estate">Greenpark Estate</router-link>
                            <br>
                            <router-link to="/fadhili">Fadhili Care</router-link>
                            <br>
                            <router-link to="/pazuri-at-vipingo">Pazuri at Vipingo</router-link>
                            <br>
                            <a href="https://leml.co.ke/" target="_blank"
                               rel="noopener noreferrer">Lake Elementaita Mountain Lodge</a>
                            <br>
                            <a href="https://greenparksundowner.co.ke/" target="_blank"
                               rel="noopener noreferrer">Greenpark Sundowner</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <div class="chunk">
                        <p>
                            <router-link :to="{ name: 'faqs' }">FAQ's</router-link>
                            <br>
                            <router-link :to="{ name: 'Articles' }">Blogs</router-link>
                            <br>
                            <router-link :to="{ name: 'videos' }">Testimonials</router-link>
                            <br>
                            <router-link :to="{ name: 'contact' }">Contact Us</router-link>
                        </p>
                    </div>
                </div>
            </div>
            <div style="text-align: center;">
                Copyright &#169; {{ year }} Superior Homes Kenya Plc.
            </div>
        </div>
        <Sidebar v-model:visible="visible" position="full">
           <div class="mobile-nav-side">
               <div class="item">
                   <router-link :to="{ name: 'home' }"
                   >Home
                   </router-link>
               </div>
               <div class="item">
                   <router-link :to="{ name: 'about' }"
                   >About
                   </router-link>
               </div>
               <div class="item">
                   <div class="drop-down">
                      <div>
                          <div class="title">Properties <span style="font-size: 8px">&#9660;</span></div>
                          <div class="dropdown-content">
                              <p><router-link to="/greenpark-estate">Greenpark Estate</router-link></p>
                              <p><router-link to="/fadhili">Fadhili Care</router-link></p>
                              <p><router-link to="/pazuri-at-vipingo">Pazuri at Vipingo</router-link></p>
                              <p><a href="https://leml.co.ke/" target="_blank"
                                    rel="noopener noreferrer">Lake Elementaita Mountain Lodge</a></p>
                              <p><a href="https://greenparksundowner.co.ke/" target="_blank"
                                    rel="noopener noreferrer">Greenpark Sundowner</a></p>
                          </div>
                      </div>
                   </div>
               </div>
               <div class="item">
                   <div class="drop-down">
                  <div>
                      <div class="title">Media <span style="font-size: 8px">&#9660;</span></div>
                      <div class="dropdown-content">
                          <p><router-link :to="{ name: 'Articles' }">Articles</router-link></p>
                          <p><router-link :to="{ name: 'videos' }">Videos</router-link></p>
                          <p><router-link :to="{ name: 'faqs' }">FAQs</router-link></p>
                          <!--            <p><router-link :to="{ name: 'about' }">News</router-link></p>-->
                      </div>
                  </div>
                   </div>
               </div>
               <div class="item">
                   <router-link :to="{ name: 'gallery' }"
                   > Gallery
                   </router-link>
               </div>
               <div class="item">
                   <router-link :to="{ name: 'careers' }"
                   > Careers
                   </router-link>
               </div>
               <div class="item">
                   <router-link :to="{ name: 'contact' }"
                   > Contact
                   </router-link>
               </div>
           </div>
        </Sidebar>
    </div>
</template>
<script>
import OverlayPanel from 'primevue/overlaypanel';
import Carousel from 'primevue/carousel';
import Button from "primevue/button";
import {createToast} from "mosha-vue-toastify";
import Sidebar from 'primevue/sidebar';

export default {
    name: "app",
    components: {
        OverlayPanel, Carousel, Button,Sidebar
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
            image_src: '/images/logos/logo.png',
            footer_banner: '/images/shk_general/Greenpark_SHK_Drone_3.jpg',
            year: new Date().getFullYear(),
            visible: false,
            brands: [
                {path: 'fdh.jpg'},
                {path: 'GREENPARK.jpg'},
                {path: 'GulfAfricanBank.jpg'},
                {path: 'LEML.jpg'},
                {path: 'NCBA-landscape.jpg'},
                {path: 'Pazuri.jpg'},
                {path: 'Stanbic.jpg'},
                {path: 'Stanchart.jpg'},
                {path: 'uhu.jpg'},
                {path: 'Victoria-Courts.jpg'},
            ],
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
            emailSend: false,
            property: 'General  Estate',
            email: '',
            sub_email: '',
            emailValid: '',
            emailValids: '',
            loadSub: false,
            loadTour: false,
            the_property: '',
        };
    },
    computed: {
        theRoute() {
            return this.$route.name;
        }
    },
    watch: {
        '$route' () {
           this.visible = false
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        let route = this.$route.name;
        if (route === 'Green Park') {
            this.property = 'Green Park Estate'
        }
        if (route === 'Fadhili') {
            this.property = 'Fadhili Care'
        }
        if (route === 'Pazuri at Vipingo') {
            this.property = 'Pazuri at Vipingo'
        }
    },
    methods: {
        validForm(data) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)) {
                this.emailValids = "Email is invalid";
            }
            if (data === "") {
                this.emailValids = "Email Adrress is required";
            }
        },
        validFormSub(data) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)) {
                this.emailValid = "Email is invalid";
            }
            if (data === "") {
                this.emailValid = "Email Adrress is required";
            }
        },
        booktour() {
            this.emailValids = '';
            this.validForm(this.email)
            if (this.emailValids === '') {
                this.loadTour = true
                axios.post('/api/book_tour', {
                    email: this.email,
                    property: this.property
                })
                    .then(res => {
                        if (res.data.success) {
                            this.loadTour = false
                            this.successToast("Booked successfully")
                            this.email = ''
                        } else {
                            this.errorToast("An error occurred. Try again!");
                        }
                    }).catch(err => {
                    this.errorToast("An error occurred. Try again!");
                    this.loadTour = false
                })
            }
        },
        subscribe() {
            this.emailValid = '';
            this.validFormSub(this.sub_email)
            if (this.emailValid === '') {
                this.loadSub = true
                axios.post('/api/subscribe', {
                    email: this.sub_email
                })
                    .then(res => {
                        if (res.data.success) {
                            this.loadSub = false
                            this.successToast("Sucribed successfully")
                            this.sub_email = ''
                        } else {
                            this.errorToast("An error occurred. Try again!");
                        }
                    }).catch(err => {
                    this.loadSub = false
                    this.errorToast("An error occurred. Try again!");
                })
            }
        },
        handleScroll() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.background = "white";
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.boxShadow = "0 0.4px 10px -1px rgba(0, 0, 0, 0.29), 0 1.1px 21.9px -1px rgba(0, 0, 0, -0.039), 0 2.1px 36.6px -1px rgba(0, 0, 0, -0.076), 0 3.4px 55.9px -1px rgba(0, 0, 0, -0.081), 0 5.3px 82.7px -1px rgba(0, 0, 0, -0.074), 0 7.9px 118.8px -1px rgba(0, 0, 0, -0.062), 0 11.7px 158.4px -1px rgba(0, 0, 0, -0.049), 0 17.4px 194.5px -1px rgba(0, 0, 0, -0.035), 0 26.3px 226px -1px rgba(0, 0, 0, -0.022), 0 40px 254px -1px rgba(0, 0, 0, -0.01)";

            } else {
                document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.5)";
                document.getElementById("navbar").style.top = "24px";
                document.getElementById("navbar").style.boxShadow = "none"
            }
        },
        toggleProperties(event) {
            this.$refs.properties.toggle(event);
        },
        toggleMedia(event) {
            this.$refs.media.toggle(event);
        }
    }
}
</script>
<style lang="sass">
a
    text-decoration: none !important

#app
    font-family: 'Nunito Sans', Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #000000

#nprogress
    .bar
        background: #F68D2E !important
        height: 6px

    .spinner-icon
        border: none !important

.product-item
    .product-item-content
        border-radius: 3px
        margin: .3rem
        text-align: center
        padding: 0.5rem 0

    .product-image
        cursor: pointer
        width: 75%
        height: 150px
        object-fit: contain
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
</style>

