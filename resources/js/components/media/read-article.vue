<template>
    <div>
        <div style="margin-top: 100px">
            <div class="container">
                <hr>
                <div>
                    <h1>{{article.title}}</h1>
                    <div>
                        <div>
                            Author: <strong>{{article.auth}}</strong> |  Posted: <strong> {{article.date }}</strong>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <hr>
                <div v-html="article.abt">
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "read-article",
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            'article', 'recentArticle'
        ])
    },
    mounted() {
        let title = this.$route.params.title.replace(/-/g, ' ');
        console.log(title)
        this.$store.dispatch('fetchArticle', title)
        this.$store.dispatch('fetchRecentArticle')
    },
    methods: {
        track () {
            this.$gtag.pageview(this.$route)
        },
    }
}
</script>

<style scoped>

</style>
