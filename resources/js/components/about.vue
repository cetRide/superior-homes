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
            <ul class="slideshow">
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/t1.jpg')"></span></li>
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/t2.jpg')"></span></li>
                <li><span style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/t3.jpg')"></span></li>
            </ul>
        </div>
        <div class="container">
            <div class="about-page">
                <div class="mission">
                    <div class="p-grid">
                        <div class="p-col-12 p-md-6 p-lg-6" style="text-align: justify">
                            <h3>Our Mission</h3>
                            <p class="p-text-bold">To Innovate, Improve & Inspire.</p>
                            <p>
                                Superior Homes Kenya PLC is a family-owned real estate development company that was
                                registered in 2004. The company takes pride in being the pioneers of the open-plan gated
                                community concept in the region, which is now recognized as the future for sustainable
                                living in East Africa. Superior Homes plans to diversify into hospitality and leisure by
                                offering holidays at its three sites while continuing to develop beautiful houses within
                                outstanding environments.
                            </p>
                        </div>
                        <div class="p-col-12 p-md-6 p-lg-6">
                            <h3>Our Vision</h3>
                            <p class="p-text-bold">To become the Largest and Most Trusted Provider of New Houses in East Africa.</p>
                            <p>Our vision is to become the largest and the most respected and trusted provider of new
                                houses in East Africa while engaging positively and to the mutual benefit of customers,
                                staff, contractors, suppliers, and the wider community.</p>
                        </div>
                    </div>
                </div>
                <div class="team-statement">
                    <h2>The Team</h2>
                    <p class="quote">
                        <strong>&#8220;</strong>
                        <i>Individual commitment to a group effort. That is what makes a team work, a company work, a
                            society work, a civilisation work.</i>
                        <strong>&#8221;</strong>
                    </p>
                    <span>- Vince Lombardi</span>
                </div>
                <!--                team scroll-->
                <div>
                    <Carousel :value="team" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                              class="custom-carousel" :circular="true" :autoplayInterval="3000">
                        <template #item="slotProps">
                            <div class="team-wrap">
                                <div class="team-card">
                                    <div class="pic">
                                        <img :src="slotProps.data.img" :alt="slotProps.data.name">
                                    </div>
                                    <div class="desc">
                                        <p class="title">{{ slotProps.data.name }}</p>
                                        <h6>{{ slotProps.data.title }}</h6>
                                        <p>{{ slotProps.data.abt }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                </div>
                <div class="team-statement">
                    <h2>Meet The Board</h2>
                    <p class="quote">
                        <strong>&#8220;</strong>
                        <i>Teamwork is the ability to work together toward a common vision. The ability to direct
                            individual accomplishments toward organizational objectives. It is the fuel that allows
                            common people to attain uncommon results.</i>
                        <strong>&#8221;</strong>
                    </p>
                    <span>- Andrew Carnegie</span>
                </div>
                <div>
                    <Carousel :value="board" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                              class="custom-carousel" :circular="true" :autoplayInterval="3000">
                        <template #item="slotProps">
                            <div class="team-wrap">
                                <div class="team-card">
                                    <div class="pic">
                                        <img :src="slotProps.data.img" :alt="slotProps.data.name">
                                    </div>
                                    <div class="desc">
                                        <p class="title">{{ slotProps.data.name }}</p>
                                        <h6>{{ slotProps.data.title }}</h6>
                                        <p>{{ slotProps.data.abt }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Carousel>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from 'primevue/carousel';
import team from "../data/team";
export default {
    components: {
        Carousel
    },
    name: "about",
    data() {
        return {
            team: [],
            board: [],
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
            ]
        }
    },
    mounted() {
        this.showBoardMembers()
        this.showBoardTeam()
    },
    methods:{
        track () {
            this.$gtag.pageview(this.$route)
        },
        showBoardMembers() {
            axios.get("/api/get-all-board").then(res => {
                this.board = res.data
            }, function (error) {
                console.log(error);
            });
        },
        showBoardTeam() {
            axios.get("/api/get-all-team").then(res => {
                this.team = res.data
            }, function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/shk_family.jpg');
    height: 100vh;
}
</style>
