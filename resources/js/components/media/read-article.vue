<template>
    <div>
        <div style="margin-top: 100px">
            <div class="container">
                <hr>
                <div>
                    <h1>{{article.title}}</h1>
                    <div>
                        <div>
                            Author: <strong>{{article.auth}}</strong> |  Posted: <strong> {{moment(article.date).format('MMMM d, YYYY') }}</strong>
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
import moment from "moment";

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
    created() {
        this.moment = moment;
    },
    mounted() {
        this.$store.dispatch('fetchArticle', this.$route.params.id)
        this.$store.dispatch('fetchRecentArticle')
    },
    methods: {}
}
</script>

<style scoped>

</style>
