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
                    </div>
                    <div class="p-col-12 p-md-12 p-lg-4">
                        <div id="twit" class="twitter-frame">
                            <a class="twitter-timeline" data-height="800" data-theme="dark"
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
export default {
    name: "articles",
    created() {
        twttr.ready(() => twttr.widgets.load(
            document.getElementById("twit")
        ));
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 70vh;
}
</style>
