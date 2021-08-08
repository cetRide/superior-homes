let mutations = {
    FETCH_VIDEOS(state, videos) {
        return state.videos = videos
    },
    FETCH_FAQS(state, faqs) {
        return state.faqs = faqs
    },
    SEND_EMAIL(state, res) {
        return state.emailSend = res
    },
   TOAST(state, res) {
        return state.toast = res
    },
    TOAST_ERR(state, res) {
        return state.toast_err = res
    },
    FETCH_ARTICLES(state, res) {
        return state.articles = res
    },
    FETCH_RECENT_ARTICLES(state, res) {
        return state.recentArticle = res
    },
    FETCH_ARTICLE(state, res) {
        return state.article = res
    }
}
export default mutations
