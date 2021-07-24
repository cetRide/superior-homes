<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="1000" class="top-landing-details">
                    <h2>Superior Homes Kenya</h2>
                    <h4><strong>East Africa's Leading Master-planned Real Estate Developer</strong></h4>
                    <p>Superior Homes Kenya is East Africa’s first master-planned real estate developer</p>
                   <router-link to="/about">
                       <div class="landing-btn">
                           Learn more
                       </div>
                   </router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="p-grid properties-cont">
                <div v-for="item in items" class="p-col-12 p-2 p-md-6 p-lg-4">
                    <div class="shk_property">
                        <div class="image-wrap">
                            <div class="content-overlay"></div>
                            <img :src="item.img" alt="Green Park Estate">
                            <div class="item-desc">
                                <div class="title name">
                                  {{item.title}}
                                </div>
                                <div class="title">
                                    {{item.sub}}
                                </div>
                            </div>
                        </div>
                        <div class="desc">
                            <p>{{ item.intro }}</p>
                        </div>
                        <div class="btn-sec">
                            <div v-if="item.url === ''">
                                <router-link :to="{name: item.route}">
                                    <div class="properties-btn">
                                        Learn more
                                    </div>
                                </router-link>
                            </div>
                            <div v-else>
                                <a :href="item.url" target="_blank"
                                   rel="noopener noreferrer">
                                    <div class="properties-btn">
                                        Learn more
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import homeproperties from "../data/homeproperties";

export default {
    name: "home",
    data() {
        return {
            items: homeproperties
        };
    },
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/gphomesmall.jpg');
    height: 100vh;
}
</style>
