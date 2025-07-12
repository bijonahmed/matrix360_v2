<template>
<div>
    <section class="product my-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>Winup360 Store</h4>
                    <!-- Swiper -->
                    <span v-if="loading">
                        <Loader />
                    </span>
                    <div class="swiper pro_slider">
                        <div class="swiper-wrapper">
                            <!-- start  -->
                            <div class="swiper-slide" v-for="(item, index) in products" :key="index">
                                <div class="sell_fast">

                                    <nuxt-link :to="`/product-details/${item.slug}`">
                                        <div class="product_image">
                                            <img :src="item.thumnail" class="img-fluid" loading="lazy" alt="">
                                            <div class="p_tag d-none" v-if="item.addi_pname !== '' && item.addi_thumnail !== ''">
                                                <img :src="item.addi_thumnail" class="img-fluid" loading="lazy" alt="">
                                                <h6>{{ item.addi_pname }}</h6>
                                            </div>

                                        </div>
                                        <!-- <h3>Get a chance to <span>WIN</span></h3> -->
                                        <h2>{{ item.name }}</h2>
                                        <button type="button" class="add_cart">quick view</button>
                                    </nuxt-link>
                                    <!-- <button type="button" class="add_cart" @click="addtoCart(item)">add to cart</button> -->

                                </div>
                            </div>
                            <!-- end -->

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- Login  -->
        <div class="login_modal">
            <div class="main_content">
                <div class="log_regi">
                    <button class="cls_mdal" @click="closePopup"><i class="fa-solid fa-x"></i></button>
                    <div class="login_section">
                        <center><span class="text-danger text-center">{{ invaliderror }}</span></center>
                        <form @submit.prevent="userLogin()" id="formrest_login" class="forms-sample" enctype="multipart/form-data">
                            <h5 class="text-center">Login</h5>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="input-container">
                                        <input placeholder="Email" class="input-field" type="text" v-model="login.email">
                                        <label for="input-field" class="input-label">Email </label>
                                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                        <span class="input-highlight"></span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-container">
                                        <input placeholder="Password" class="input-field" id="password-field" :type="showPassword ? 'text' : 'password'" v-model="login.password">
                                        <label for="input-field" class="input-label">Password </label>
                                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                        <span class="input-highlight"></span>
                                        <i toggle="#password-field" class="fa-solid fa-eye toggle-password" @click="showhidePassword"></i>
                                    </div>
                                </div>
                                <div class="row pe-0">
                                    <div class="col-6">
                                        <div class="input-container  d-none">
                                            <a href="javascript:" class="f_link"><small>
                                                    <p style="color:white;">Forget Password?</p>
                                                </small></a>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-container">
                                            <nuxt-link to="/register" class="f_link" style="text-align: right;">
                                                <div> <small style="color:white;">Register</small></div>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                    <div class="col-12 px-0">
                                        <div class="input-container text-end">
                                            <input class="btn_submit w-100" value="Login" type="submit"><br /><br />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <!-- END  -->
    </section>

</div>
</template>

<style lang="css" scoped>
.add_cart {
    display: inline-block;
    letter-spacing: -1px;
}
</style>

<script>
export default {
    data() {
        return {
            imgloading: true,
            loading: false,
            cart: [],
            products: [],
            rproducts: [],
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
            // this.randomProducts();
            this.imgloading = false;
        }, 2000); //
        this.sellingFast();

        this.$nextTick(() => {
            this.initCarousel();

        });
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        async userLogin() {
            try {

                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                    // Add other parameters as needed
                };

                let {
                    data
                } = await this.$axios.post('/auth/login', postData); //await this.login.post('/auth/login');
                await this.$auth.setUserToken(data.access_token);
                this.closePopup();
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                this.$router.push('/');

            } catch (err) {

                if (err.response.status === 422) {
                    this.errors = err.response.data.errors;
                    this.errorHandler(err);
                }

                console.log(err)
            }
        },

        async wishlist(slug) {
            try {
                this.loading = true; // Show loader
                // Define parameters
                const page = 1;
                const limit = 10;
                // Make GET request with parameters
                const response = await this.$axios.get(`/order/addtowish/${slug}`);
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
                Toast.fire({
                    icon: "success",
                    title: "Item added to wishlist successfully!"
                });
            } catch (error) {
                console.error('Error fetching slidersImages:', error);
            } finally {
                this.loading = false; // Hide loader after response or error
            }

        },
        async sellingFast() {
            try {
                //  this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/sellingFast');
                this.products = response.data;
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching sellingFast:', error);
                // Handle error if needed
            } finally {
                //   this.loading = false; // Hide loader after response or error
            }
        },
        async randomProducts() {
            try {
                this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/randomProducts');
                this.rproducts = response.data;
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching sellingFast:', error);
                // Handle error if needed
            } finally {
                this.loading = false; // Hide loader after response or error
            }
        },
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

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
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
        initCarousel() {
            // Pro slider
            new Swiper(".pro_slider", {
                slidesPerView: 4,
                loop: true,
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev',
                },
                spaceBetween: 30,
                autoplay: {
                    delay: 2000, // Adjust the delay as needed (in milliseconds)
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    377: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 6,
                    }
                }
            });

        }
    }
}
</script>
