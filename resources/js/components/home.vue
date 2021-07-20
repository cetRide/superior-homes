<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="1000" class="top-landing-details">
                    <h2>Superior Homes Kenya</h2>
                    <h4>East Africa's Leading Master-planned Real Estate Developer</h4>
                    <p>Superior Homes Kenya is East Africa’s first master-planned real estate developer</p>
                    <div class="landing-btn">
                        Learn more
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="p-grid properties-cont">
                <div class="p-col-12 p-2 p-md-6 p-lg-4">
                    <div  class="shk_property">
                        <div class="image-wrap">
                            <img :src="green_park" alt="Green Park Estate">
                        </div>
                        <div class="desc">
                            <p>The award-winning Greenpark Estate on Mombasa Road was the first project to be rolled out
                                and there are now more than 550 houses completed and occupie ...</p>
                        </div>
                        <div class="btn-sec">
                            <div class="properties-btn">
                                Learn more
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-2 p-md-6 p-lg-4">
                    <div  class="shk_property">
                        <div class="image-wrap">
                            <img :src="vipingo" alt="Pazuri at Vipingo">
                        </div>
                        <div class="desc">
                            <p>Pazuri at Vipingo is a master-planned residential and holiday home estate located in
                                Vipingo, adjacent to the luxurious Vipingo Ridge. The estate ...</p>
                        </div>
                        <div class="btn-sec">
                            <div class="properties-btn">
                                Learn more
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-2 p-md-6 p-lg-4">
                    <div   class="shk_property">
                        <div class="image-wrap">
                            <img :src="fadhili" alt="Green Park Estate">
                        </div>
                        <div class="desc">
                            <p>Fadhili Retirement Village is a purpose-built retirement development comprising one and
                                two-bedroom bungalows.</p>
                        </div>
                        <div class="btn-sec">
                            <div class="properties-btn">
                                Learn more
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-2 p-md-6 p-lg-4">
                    <div  class="shk_property">
                        <div class="image-wrap">
                            <img :src="lake" alt="Lake Elementaita Mountain Lodges">
                        </div>
                        <div class="desc">
                            <p>Lake Elementaita Mountain Lodges boasts sensational views from sunrise to sunset and
                                offers guests remarkable standards of accommodation, service, and ...</p>
                        </div>
                        <div class="btn-sec">
                            <div class="properties-btn">
                                Learn more
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-2 p-md-6 p-lg-4">
                    <div  class="shk_property">
                        <div class="image-wrap">
                            <img :src="sundowner" alt="Greenpark Sundowner Hotel">
                        </div>
                        <div class="desc">
                            <p>The Greenpark Sundowner Hotel is the premier choice for world-class accommodation,
                                conference facilities, food, and a variety of activities.</p>
                        </div>
                        <div class="btn-sec">
                            <div class="properties-btn">
                                Learn more
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            green_park: '/images/shk_properties/GPhomepage.jpg',
            vipingo: '/images/shk_properties/Pazuri_at_Vipingo.jpg',
            fadhili: '/images/shk_properties/fadhili.jpg',
            lake: '/images/shk_properties/lem.jpg',
            sundowner: '/images/shk_properties/sundowner.jpg',
        };
    },
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 100vh;
}
</style>
