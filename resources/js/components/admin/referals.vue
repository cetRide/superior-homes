<template>
    <div class="redir">
        <div v-if="pg" class="classic-7">Redirecting ...</div>
        <div v-if="notfound" class="classic-7"> 404 | Page not Found</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            referral: {},
            fetching: false,
            pg: true,
            notfound: false
        }
    },
    mounted() {
        this.fetchRedirectUrl(this.$route.params.id);
    },
    methods: {
        fetchRedirectUrl(id) {
            if (id !== 'undefined') {
                this.notfound = false
                this.pg = true
                axios.get(`/api/get-referral/${id}`).then(res => {
                    this.referral = res.data
                    if (this.referral !== '') {
                        this.postRedirects(this.referral.id)
                        window.location.href = this.referral.redirect_link
                    } else {
                        this.pg = false
                        this.notfound = true
                    }
                }).catch(err => {
                    this.pg = false
                    this.notfound = true
                });
            } else {
                this.pg = false
                this.notfound = true
            }
        },
        postRedirects(id) {
            if (id !== 'undefined') {
                this.fetching = false
                axios.post(`/api/create-referral-lead/${id}`)
                    .then(res => {
                        if (res.data) {
                            this.fetching = true
                        } else {
                            this.pg = false
                            this.notfound = true
                        }
                    }).catch(err => {
                    this.fetching = false
                    this.pg = false
                    this.notfound = true
                });
            } else {
                this.pg = false
                this.notfound = true
            }

        }
    }
}
</script>
<style scoped>

.classic-7 {
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    background: linear-gradient(90deg, #F68D2E calc(50% + 0.5ch), #000 0) right/calc(200% + 1ch) 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: c7 2s infinite steps(11);
}

@keyframes c7 {
    to {
        background-position: left
    }
}

.redir {
    height: 100vh;
    background: #e3e6eb;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
