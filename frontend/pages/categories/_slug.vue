<template>
<div>
    <Navbar />
    <!-- cat slider part start here  -->
    <section class="cat_slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="swiper cat_slider_box">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide cat_box" v-for="(item, index) in subcategories" :key="index">
                                <nuxt-link :to="`/categories/${item.slug}`">
                                    <img :src="item.thumnail" class="img-fluid" loading="lazy" alt="">
                                    <h4>{{ item.name }}</h4>
                                </nuxt-link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- cat slider part end here  -->

    <!-- product grid part star there  -->
    <!-- product grid part star there  -->
    <section class="product">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h6>{{ categoryname }}</h6>
                    <span v-if="loading">
                        <Loader />
                    </span>

                    <div v-if="productsLoaded">
                        <div v-if="prouducts.length === 0">
                            <p class="text-center">No available products</p>
                        </div>
                        <div v-else>
                            <div class="product_grid">
                                <div class="product_gview" v-for="(item, index) in prouducts" :key="index">
                                    <button type="button"><i class="fa-solid fa-heart"></i></button>
                                    <nuxt-link :to="`/product-details/${item.slug}`">
                                        <img :src="item.thumnail" class="img-fluid" loading="lazy" alt="">
                                        <h5>{{ item.name }}</h5>
                                        <p>TK{{ item.price }}</p>
                                    </nuxt-link>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div v-else>
                        <!-- Display loading indicator or message while products are being loaded -->
                        <p class="d-none">Loading...</p>
                    </div>
                    <div class="row d-none">
                        <div class="col-md-4 col-12 m-auto">
                            <button class="btn_submit m-0 mb-2 w-100">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- product grid part end here  -->
    <!-- product grid part end here  -->
    <Footer />
    <MobileMenu />
</div>
</template>

<script>
export default {
    head: {
        title: 'Category Products',
    },
    data() {
        return {
            productsLoaded: false,
            loading: false,
            prouducts: [],
            categories: [],
            catProuducts: [],
            categoryname: '',
            subcategories: [],
        }
    },
    mounted() {
        this.fetchData();
        this.allSubCategory();
        this.loadProducts();
        this.$nextTick(() => {
            this.initCarousel();
        });
    },
    computed: {

    },
    methods: {
        loadProducts() {

            this.productsLoaded = true;
        },
        initCarousel() {
            // Main slider box
            new Swiper(".cat_slider_box", {
                slidesPerView: 5,
                spaceBetween: 10,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    377: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    }
                }
            });

        },
        async allSubCategory() {
            const response = await this.$axios.get('/unauthenticate/getsubCategoryList');
            this.subcategories = response.data;
        },

        async fetchData() {
            try {
                this.loading = true; // Show loader
                const prosulg = this.$route.params.slug;
                const response = await this.$axios.get(`/unauthenticate/findCategoryWiseProduct/${prosulg}`);
                console.log(response.data);
                this.prouducts = response.data.result;
                this.categoryname = response.data.categoryname;
            } catch (error) {
                console.error('Error fetching slidersImages:', error);
            } finally {
                this.loading = false; // Hide loader after response or error
            }

        },

    }
}
</script>

<style>
.txtformat {
    text-decoration: none;
    width: 100%;
    text-align: center;
}
</style>
