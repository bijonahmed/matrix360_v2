<template>
<div>
    <!-- desktop view profile section start here  -->
    <Navbar />
    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">
                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Wishlist </h6>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 desktop_view">
                <LeftsidebarDesktop />
            </div>
            <div class="col-xl-9">
                <span v-if="loading">
                    <Loader />
                </span>
                <div class="profile_right">
                    <h1 class="desktop_view">Wishlist</h1>
                    <div class="cart_list">

                        <ul>
                            <li v-for="(item, index) in products" :key="index">
                                <div class="cart_item ">

                                    <div class="row" style="width: 100%;">
                                        <div class="col-md-6">
                                            <div class="cart_left">
                                                <div class="c_price" style="position: unset;">
                                                    <img :src="item.thumnail_img" class="img-fulid" style="width: 100%;" alt="">
                                                </div>
                                                <div class="cart_title">
                                                    <h1>{{ item.product_name }}</h1>
                                                    <!-- <h6>Lottery credit</h6> -->
                                                    <p>BDT{{ item.price }}</p>
                                                    <div class="sell_progress d-none">
                                                        <div class="d-none">
                                                            <span id="timer" class="end_date" data-date="29 April 2028 23:59:00 GMT+01:00">
                                                                Closing:
                                                                <strong class="days" style="color: limegreen;"></strong>
                                                                <strong class="hours" style="color: limegreen;"></strong>
                                                                <strong class="minutes" style="color: limegreen;"></strong>
                                                                <strong class="seconds" style="color: limegreen;"></strong>
                                                            </span>
                                                        </div>
                                                        <div class="">
                                                            <span>1372 sold out of 1950</span>
                                                            <div class="progress " role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div class="progress-bar" style="width: 25%"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="value_change">
                                                <div class="value_box">
                                                    <nuxt-link :to="`/product-details/${item.slug}`" class="btn_submit" style="display: block; text-decoration: none;">View Details</nuxt-link>
                                                    <!-- <button type="button" class="btn_submit" style="display: block;" @click="addtoCart(item)">Add To cart</button> -->

                                                    <button type="button" class="btn_submit rm_w" @click="remove(item.wishid)">Remove from wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--desktop view profile section end here  -->

    <Footer />
    <MobileMenu/>
</div>
</template>

<script>
export default {
    head: {
        title: 'Wishlist',
    },
    data() {
        return {
            loading: false,
            products: [],
            cart: [],
        }
    },
    mounted() {
        this.mainSlider();
    },
    methods: {
        addtoCart(product) {
            this.loading = true;
            // const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = this.cart.find(item => item.id === product.id);
            if (existingProduct) {
                // existingProduct.quantity += 1;
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1
                });
            }
            // Merge with existing data if any
            const existingData = JSON.parse(localStorage.getItem('cart')) || [];
            const newData = [...existingData, ...this.cart];

            localStorage.setItem('cart', JSON.stringify(newData));

            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        async remove(wishid) {
            try {
                this.loading = true; // Show loader
                // Define parameters
                const page = 1;
                const limit = 10;
                // Make GET request with parameters
                const response = await this.$axios.get(`/order/removeWishList/${wishid}`);
                console.log(response.data);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                this.mainSlider();
                Toast.fire({
                    icon: "success",
                    title: "Item removed from wishlist successfully!"
                });
            } catch (error) {
                console.error('Error fetching slidersImages:', error);
            } finally {
                this.loading = false; // Hide loader after response or error
            }

        },
        async mainSlider() {
            try {
                this.loading = true; // Show loader
                const response = await this.$axios.get('/order/allWishList');
                this.products = response.data;
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching sellingFast:', error);
                // Handle error if needed
            } finally {
                this.loading = false; // Hide loader after response or error
            }
        },

    }
}
</script>
