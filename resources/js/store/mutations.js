let mutations = {
    FETCH_VIDEOS(state, videos) {
        return state.videos = videos
    },
    FETCH_FAQS(state, faqs) {
        return state.faqs = faqs
    }
}
export default mutations
