let getters = {
    videos: state => {
        return state.videos
    },
    faqs: state => {
        return state.faqs
    },
    emailSend: state => {
        return state.emailSend
    },
    toast: state => {
        return state.toast
    },
    toast_err: state => {
        return state.toast_err
    },
    articles: state => {
        return state.articles
    },
    article: state => {
        return state.article
    },
    recentArticle: state => {
        return state.recentArticle
    }
}
export default getters
