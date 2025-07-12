<template>
<div>
    <section class="main_slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Swiper -->
                    <div class="swiper main_slider_box">
                        <div class="swiper-wrapper">
                            <span v-if="loading">
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </span>
                            <div class="swiper-slide" v-for="(item, index) in products" :key="index">
                                <div class="slide_box">
                                    <img :src="item.images" class="img-fulid" loading="lazy" alt="">
                                </div>
                            </div>

                        </div>
                        <div class="navi_op">
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            products: [],
        }
    },
    mounted() {
        this.mainSlider();
        this.$nextTick(() => {
            this.initCarousel();
        });
    },
    methods: {
        async mainSlider() {
            try {
                this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/slidersImages');
                this.products = response.data;
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching sellingFast:', error);
                // Handle error if needed
            } finally {
                this.loading = false; // Hide loader after response or error
            }
        },
        initCarousel() {
            // Main slider box
            new Swiper(".main_slider_box", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                },
                spaceBetween: 10,
            });

        }
    }
}
</script>
