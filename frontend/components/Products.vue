<template>
    <div>
        <div class="home_section_bg">
            <!--product area start-->
            <div class="product_area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section_title">
                                <h2><span>our</span> Products</h2>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content mt-4">
                        <div class="row" v-if="conditions && products.length > 0">
                            <div class="col-lg-3" v-for="(item, index) in products" :key="index">
                                <div class="product_items mt-2">
                                    <article class="single_product">
                                        <figure>
                                            <div class="product_thumb">
                                                <nuxt-link :to="`/product-details/${item.slug}`" class="primary_img">
                                                    <img :src="item.thumnail" :alt="item.slug"
                                                        style="height:300px; width: 100%;"></nuxt-link>
                                                <div class="quick_button">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        @click="openQuickView(item)" data-bs-target="#modal_box"
                                                        title="quick view"><i class="icon-eye"></i></a>
                                                </div>
                                            </div>
                                            <div class="product_content">
                                                <div class="product_content_inner">
                                                    <h4 class="product_name"><a href="product-details.html">{{ item.name
                                                    }}</a></h4>
                                                    <div class="price_box">
                                                        <!-- <span class="old_price">$320.00</span> -->
                                                        <span class="current_price">${{ item.price }}</span>
                                                    </div>
                                                </div>
                                                <div class="action_links">
                                                    <ul>
                                                        <li class="add_to_cart"><a href="javascript:void(0)"
                                                                @click="addtoCart(item)" title="Add to cart">Add to
                                                                cart</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
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
                    <br/>

                </div>
            </div>
            <!--product area end-->
            <!--banner area start-->
            <div class="banner_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <figure class="single_banner">
                                <div class="banner_thumb">
                                    <a href="#"><img src="/assets/img/bg/banner4.jpg" alt=""></a>
                                </div>
                            </figure>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <figure class="single_banner">
                                <div class="banner_thumb">
                                    <a href="#"><img src="/assets/img/bg/banner5.jpg" alt=""></a>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <!--blog area end-->
        </div>

        <!-- modal area start-->
        <div class="modal fade" id="modal_box" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal_body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 col-sm-12">
                                    <div v-if="selectedProduct">
                                        <img :src="selectedProduct.thumnail" :alt="selectedProduct.slug"
                                            style="max-width: 100%; height: auto;" />
                                    </div>

                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-12">
                                    <div class="modal_right">
                                        <div class="modal_title mb-10">
                                            <h2>{{ selectedProduct?.name }}</h2>
                                        </div>
                                        <div class="modal_price mb-10">
                                            <span class="new_price">${{ selectedProduct?.price }}</span>
                                            <!-- <span class="old_price">$78.99</span>  addtoCartModal-->
                                        </div>
                                        <div class="modal_description mb-15">
                                            <p>{{ selectedProduct?.description.replace(/<[^>]*>/g, '') }}</p>
                                        </div>
                                        <div class="variants_selects">

                                            <div class="modal_add_to_cart">
                                                <form action="#">
                                                    <input min="1" max="100" step="1" value="1" inputmode="numeric"
                                                        pattern="\d*" v-model.number="quantity" @input="onlyInteger"
                                                        type="number">
                                                    <button type="submit"
                                                        @click.prevent="addtoCartModal(selectedProduct)">add to
                                                        cart</button>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal area end-->

    </div>
</template>
<script>
import bus from '~/plugins/bus.js';
export default {
    data() {
        return {
            currentPage: 1,
            totalPages: 1,
            imgloading: true,
            loading: false,
            cart: [],
            products: [],
            rproducts: [],
            selectedProduct: null,
            conditions: [],
            itemCount: 0,
            quantity: 1,
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
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 1500); //
        this.loadingProduct();

    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        onlyInteger(e) {
            // Remove non-digit characters
            let val = e.target.value.replace(/[^\d]/g, '');

            // Convert to integer and enforce limits (optional)
            let intVal = parseInt(val, 10);
            if (isNaN(intVal) || intVal < 1) intVal = 1;
            if (intVal > 100) intVal = 100;

            this.quantity = intVal.toString(); // keep synced with input
        },
        stripHTML(html) {
            const div = document.createElement("div");
            div.innerHTML = html;
            return div.textContent || div.innerText || "";
        },
        openQuickView(product) {
            this.selectedProduct = product;
        },
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

        addtoCartModal(product) {
            //alert(this.quantity);
            //return false;
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
                quantity: this.quantity
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

            const modalElement = document.getElementById('modal_box');
            let modalInstance = bootstrap.Modal.getInstance(modalElement);

            if (!modalInstance) {
                modalInstance = new bootstrap.Modal(modalElement);
            }
            modalInstance.hide();
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
