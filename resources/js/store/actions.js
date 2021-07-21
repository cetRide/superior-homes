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
    sendEmail({commit}, data) {
        commit('SEND_EMAIL', true)
        commit('TOAST', false)
        axios.post('/api/mail', data)
            .then(res => {
                commit('SEND_EMAIL', false)
                commit('TOAST', true)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions
