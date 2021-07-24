let actions = {
    fetchVideos({commit}) {
        axios.get('/api/videos')
            .then(res => {
                commit('FETCH_VIDEOS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchFaqs({commit}) {
        axios.get('/api/faqs')
            .then(res => {
                commit('FETCH_FAQS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchArticles({commit}) {
        axios.get('/api/articles')
            .then(res => {
                commit('FETCH_ARTICLES', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    sendEmail({commit}, data) {
        commit('SEND_EMAIL', true)
        commit('TOAST', false)
        commit('TOAST_ERR', false)
        axios.post('/api/mail', data)
            .then(res => {
                commit('SEND_EMAIL', false)
                commit('TOAST', true)
            }).catch(err => {
            commit('SEND_EMAIL', false)
            commit('TOAST_ERR', true)
            console.log(err)
        })
    },
    fetchArticle({commit}, id) {
        axios.get(`/api/article/${id}`)
            .then(res => {
                commit('FETCH_ARTICLE', res.data[0])
            }).catch(err => {
            console.log(err)
        })
    },
    fetchRecentArticle({commit}) {
        axios.get('/api/recent-article')
            .then(res => {
                commit('FETCH_RECENT_ARTICLES', res.data[0])
            }).catch(err => {
            console.log(err)
        })
    }

}

export default actions
