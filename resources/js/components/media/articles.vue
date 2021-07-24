<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div class="top-landing-details">
                    <h2>Articles</h2>
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
                                <div v-for="article in articles" class="p-col-12 p-md-12 p-lg-6 article-window">
                                    <div class="article-image-wrap">
                                        <img src="/images/shk_properties/fadhiliHome.jpg" alt="">
                                        <div class="date-desc">
                                            <div class="day">
                                                {{ moment(article.date).format('d') }}
                                            </div>
                                            <div class="month">
                                                {{ moment(article.date).format('MMM') }}
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
                                            <p><strong>{{ moment(article.date).format('d MMMM, YYYY') }}</strong></p>
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
</template>

<script>
import {mapGetters} from "vuex";
import Skeleton from 'primevue/skeleton';
import router from "../../router/router";
import moment from 'moment';

export default {
    name: "articles",
    components: {
        Skeleton
    },
    computed: {
        ...mapGetters([
            'articles'
        ])
    },
    created() {
        this.moment = moment;
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
        readArticle(article) {
            router.push({
                name: 'Read Article',
                params: {
                    id: article.id,
                    title: article.title.replace(/\s/g, '')
                }
            })
        }
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 70vh;
}
</style>
