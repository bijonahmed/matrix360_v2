<template>
    <div>
        <main class="page-content">
            <!-- Products Area -->
            <span v-if="loading">
                <Loader />
            </span>
           
            <div class="products-area bg-white section-padding-md">
                <div class="container">
 
                    <div class="row justify-content-center products-wrapper" v-if="conditions && products.length > 0">
                        <!-- Single Product -->
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6" v-for="(item, index) in products"
                            :key="index">
                            <div class="product-item">
                                <div class="product-item-images">
                                    <nuxt-link :to="`/product-details/${item.slug}`" class="product-item-image-inner">
                                        <img :src="item.thumnail" alt="product image" loading="lazy"
                                            class="custom-border" style="height:400px; width: 100%;">
                                        <img :src="item.thumnail" alt="product image" loading="lazy"
                                            class="custom-border">
                                    </nuxt-link>
                                    <a href="javascript:void(0)" @click="addtoCart(item)" class="add-to-cart-button">
                                        <span>ADD TO CART</span>
                                    </a>

                                    <a href="javascript:void(0)" class="add-to-cart-button">
                                        <span>ADD TO CART</span>
                                    </a>
                                </div>

                                <div class="product-item-content">

                                    <nuxt-link :to="`/product-details/${item.slug}`"
                                        style="color:black; font-size: 15px;">{{ item.name }}

                                    </nuxt-link>
                                    <center style="font-size: 15px; font-weight: bold;"><span
                                            class="currency-symbol">$</span><strong>{{ item.price }}<br /></strong>
                                    </center>
                                    <center><b>Free Pajama</b></center>

                                    <div class="product-item-content-left d-none">
                                        <h5>
                                            <nuxt-link :to="`/product-details/${item.slug}`">{{ item.name }}
                                            </nuxt-link>
                                        </h5>
                                        <div class="price-box">
                                            <span class="pricebox-price">
                                                <center><span class="currency-symbol">$</span>{{ item.price }}</center>
                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div v-if="!conditions || conditions.length === 0" class="col-12 text-center">
                        <br />
                        <p>No products available.</p>
                    </div>

                    <div v-if="conditions && conditions.length > 0" class="text-center mt-3">
                        <button @click="loadMore" class="btn" style="background-color: #640002;color: #fff;"
                            :disabled="loading">Load More</button>
                    </div>
                    <div v-if="loading" class="text-center mt-3">
                        <p>Loading...</p>
                    </div>


                </div>
            </div>
            <!--// Products Area -->
            <!-- <Features /> -->
        </main>
        <Footer />
    </div>
</template>

<script>
import bus from '~/plugins/bus.js';
export default {
    data() {
        return {
            imgloading: true,
            loading: true,
            currentPage: 1,
            totalPages: 1,
            cart: [],
            products: [],
            rproducts: [],
            conditions: [],
            itemCount: 0,
            updatedQuantity: 0,
            login: {
                email: '',
                password: '',
            },
            showPassword: false,
            errors: {},
            invaliderror: '',
            notifmsg: '',
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 2000); //
        this.loadingProduct();

    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        async loadMore() {

            this.loading = true;
            try {
                const response = await this.$axios.get(`/unauthenticate/randomProducts?page=${this.currentPage + 1}`);
                this.products = this.products.concat(response.data.data);
                this.conditions = response.data.data;
                this.currentPage = response.data.pagination.current_page;
                this.totalPages = response.data.pagination.last_page;
            } catch (error) {
                console.error('Error fetching loadingProduct:', error);
                // Handle error if needed
            } finally {
                this.loading = false;
            }

        },

        async loadingProduct() {
            try {
                //  this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/randomProducts');
                this.products = response.data.data;
                this.conditions = response.data.data;
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching loadingProduct:', error);
                // Handle error if needed
            } finally {
                //   this.loading = false; // Hide loader after response or error
            }
        },
        addtoCart(product) {
            this.loading = true;
            const isItemInCart = this.cart.some(item => item.id === product.id);
            if (isItemInCart) {
                // If the item is already in the cart, skip adding it
                this.loading = false; // Set loading to false since no change was made
                return;
            }
            // If the item is not in the cart, add it with quantity 1
            this.cart.push({
                ...product,
                quantity: 1
            });
            const existingData = JSON.parse(localStorage.getItem('cart')) || [];
            const newData = [...existingData, ...this.cart];
            localStorage.setItem('cart', JSON.stringify(newData));
            bus.$emit("updateCart", newData);
            setTimeout(() => {
                this.loading = false;
            }, 1000);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "success",
                title: "Add To Cart"
            });
        },

        showhidePassword() {
            this.showPassword = !this.showPassword;
        },
        loginPopup() {
            $(".login_modal").fadeIn();
        },
        closePopup() {
            $(".login_modal").fadeOut();
        },

    }
}
</script>
<style>
.custom-border {
    border-style: solid;
    border-width: 5px;
    border-color: #000;
    border-radius: 5px;
}
.section-padding-md {
	padding: 10px 0;
}
</style>
