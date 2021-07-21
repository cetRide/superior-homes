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
    }
}
export default mutations
