<template>
    <div>
        <div v-if="articles.length > 1">
            <div v-for="item in articles.slice(0, 1)">
                <div class="parallax parallax-home" :style="'background-image: url('+item.img+')'">
                    <div class="the-overlay">
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="parallax parallax-home" style="background-image: url('https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_general/Greenpark_SHK_Drone_3.jpg')">
            <div class="the-overlay">
            </div>
        </div>
        <div class="container">
            <div v-if="articles.length > 1" class="article-details">
                <div v-for="item in articles.slice(0, 1)">
                    <h3>{{ item.title }}</h3>
                    <div class="layout-bar">
                        <div class="button-more" @click="readArticle(item)">
                            <i class="pi pi-arrow-right"></i>
                        </div>
                        <div>
                            <span>Article by: {{ item.auth }}</span><br>
                            <span>{{item.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="top-articles">
                    <div class="p-grid prop-top">
                        <div class="p-col-12 p-md-12 p-lg-8">
                            <div v-if="articles.length < 1">
                                <Skeleton class="p-mb-2" height="2rem"/>
                                <Skeleton class="p-mb-2" height="2rem"/>
                                <Skeleton class="p-mb-2" height="2rem"/>
                                <Skeleton width="10rem" height="2rem"/>
                            </div>
                            <div v-else class="article-list">
                                <div class="p-grid">
                                    <div v-for="article in articles" class="p-col-12 p-md-6 p-lg-6 article-window">
                                        <div class="article-image-wrap">
                                            <img :src="article.img" alt="">
                                            <div class="date-desc">
                                                <div class="day">
                                                    {{article.day }}
                                                </div>
                                                <div class="month">
                                                    {{article.month }}
                                                </div>
                                                <div class="read-more" @click="readArticle(article)">
                                                    Read More
                                                </div>
                                            </div>
                                        </div>
                                        <div class="contents">
                                            <div class="title">
                                                {{ article.title }}
                                            </div>
                                            <div>
                                                <p style="margin-top: 10px">Article by: {{ article.auth }}</p>
                                                <p><strong>{{article.date }}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-12 p-lg-4">
                            <div id="twit" class="twitter-frame">
                                <a class="twitter-timeline" data-height="800"
                                   href="https://twitter.com/SuperiorHomesKe?ref_src=twsrc%5Etfw">Tweets by
                                    SuperiorHomesKe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import Skeleton from 'primevue/skeleton';
import router from "../../router/router";

export default {
    name: "articles",
    components: {
        Skeleton
    },
    computed: {
        ...mapGetters([
            'articles'
        ]),
    },
    mounted() {
        if (this.articles.length < 1) {
            this.$store.dispatch('fetchArticles')
        }
        if (localStorage.getItem('reloaded')) {
            localStorage.removeItem('reloaded');
        } else {
            localStorage.setItem('reloaded', '1');
            location.reload();
        }
    },
    methods: {
        track () {
            this.$gtag.pageview(this.$route)
        },
        readArticle(article) {
            router.push({
                name: 'Read Article',
                params: {
                    title: article.title.replace(/\s/g, '-')
                }
            })
        }
    }
}
</script>

<style scoped lang="sass">
.parallax-home
    height: 70vh
    position: relative

    .the-overlay
        position: absolute
        background: rgba(0, 0, 0, 0.4)
        height: 100%
        width: 100%
        left: 0
        top: 0
        right: 0
        opacity: 1
        -webkit-transition: all 0.4s ease-in-out 0s
        -moz-transition: all 0.4s ease-in-out 0s
        transition: all 0.4s ease-in-out 0s
        cursor: pointer

        &:hover
            background: rgba(0, 0, 0, 0.7)

</style>
