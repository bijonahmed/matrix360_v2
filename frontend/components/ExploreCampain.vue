<template>
<div>
    <section class="campain_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="campain_list">
                        <h4>Explore campaigns</h4>
                        <ul>
                            <span v-if="loading">
                                <Loader />
                            </span>
                            <div v-if="imgloading" class="loader text-center fade show">
                                <div class="spinner-border text-success" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <li v-for="(item, index) in prouducts" :key="index">
                                <div class="campain_box ">
                                    <!-- total ticket  -->
                                    <div class="available_ticket" v-if="item.qty_status === 1">
                                        <div class="sold">
                                            <h6>{{ item.total_selling }}</h6>
                                            <p>Sold</p>
                                        </div>
                                        <div class="total">
                                            <p>Out of</p>
                                            <h6>{{ item.total_tickets }}</h6>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="c_campain_left">
                                                <div class="camp_count">
                                                    <!-- <div id="timer" class=" c_timer" data-endtime="25 october 2024 10:00:00 GMT+01:00"></div> -->
                                                    <!-- <div>BDT&nbsp;{{ item.price }}Tk.</div> -->
                                                </div>
                                                <div class="campain_image">
                                                    <!-- Swiper -->
                                                    <div class="swiper campain_s">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide"><img :src="item.thumnail" class="img-fulid" loading="lazy" alt=""></div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c_price">
                                                    <div class="creadit_ticket">
                                                        <p>Shoping Card</p>
                                                        <h1>BDT{{ item.price }}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="c_content_right">
                                                <div class="c_content_box">
                                                    <h1>Win</h1>
                                                    <h2>{{ item.name }}</h2>
                                                    <!-- <span>BDT{{ item.price }}</span> -->
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="d-flex">
                                                                <nuxt-link :to="`/product-details/${item.slug}`">View Details</nuxt-link>
                                                                <!-- <button type="button" @click="addToCart(item)" v-if="item.stock_status==1">Add to cart</button> -->
                                                                <!-- <a href="javascript:" class="btn_details show_details" @click="viewDetails(item.slug)">View Details</a> -->
                                                                <button type="button" @click="addToCart(item)" v-if="item.stock_status==1">Add to cart</button>
                                                                <button type="button" v-else>Stock Out</button>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <p v-if="item.draw_details !== null">{{ item.draw_details }}</p>
                                                            <p v-else></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="button_">

                                                    <span v-if="loggedIn">
                                                        <button type="button" class="btn_share active" @click="wishlist(item.slug)"><i class="fa-solid fa-heart"></i></button>
                                                    </span>
                                                    <span v-else>
                                                        <button type="button" class="btn_share active" @click="loginPopup"><i class="fa-solid fa-heart"></i></button>
                                                    </span>

                                                    <button type="button" class="btn_share share_btn" @click="shareBtn(item.slug)"><i class="fa-solid fa-share"></i></button>

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
    </section>

    <!-- View Details Modal -->
    <div class="details_modal">
        <div class="m_content_">
            <div class="d-flex justify-content-between">
                <ul class="nav nav-pills tb_btns tb_btns mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item tb_btns_left" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-prize" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Product Details </button>
                    </li>

                </ul>
                <button class="btn_mclose" type="button" @click="hideDetails"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane p_details fade show active" id="pills-prize" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <p id="description"></p>

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
                                    <div class="input-container">
                                        <nuxt-link to="/forget-password" class="f_link"><small>
                                                <p style="color:white;">Forget Password?</p>
                                            </small>
                                        </nuxt-link>
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

    <!-- share popup  -->
    <div class="modal_share">
        <div class="popup">
            <header>
                <span>Share With </span>
                <div class="close" @click="shareBtnCls"><i class="fa-solid fa-x"></i></div>
            </header>
            <div class="content">
                <p>Share this link via</p>
                <ul class="icons">
                    <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://wa.me/8801827720375" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </ul>
                <p>Or copy link</p>
                <div class="field">
                    <i class="url-icon uil uil-link"></i>
                    <input type="text" readonly :value="'https://winup360.com/product-details/' + ticketslug" ref="myInput">
                    <button @click="copyText" id="change_txt">Copy</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<style scoped>
.c_content_box {
    width: 60%;
}
</style>

<script>
import bus from '~/plugins/bus.js';
export default {
    data() {
        return {
            category_id: '',
            loading: false,
            cart: [],
            prouducts: [],
            itemCount: 0,
            ticketslug: '',
            updatedQuantity: 0,
            imgloading: true,
            login: {
                email: '',
                password: '',
            },
            showPassword: false,
            invaliderror: '',
            notifmsg: '',
            errors: {},
        }

    },
    mounted() {
        setTimeout(() => {
            this.onlyloadingTicket();
            this.imgloading = false;
        }, 1000); //

    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        copyText() {
            this.$refs.myInput.select();
            this.$refs.myInput.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            // You can provide some user feedback (optional)
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
                title: "Link copied"
            });

        },
        showhidePassword() {
            this.showPassword = !this.showPassword;
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

        async onlyloadingTicket() {
            const response = await this.$axios.get('/unauthenticate/getTickets');
            this.prouducts = response.data.tickets;
            this.category_id = response.data.category_id;
            //console.log("tickets: " +  response.data);
        },
        addToCart(product) {
            const existingProduct = this.cart.find(item => item.id === product.id);

            if (existingProduct) {
                // If the product already exists, you can update its quantity or take other actions.
                // For example, increment the quantity:
                existingProduct.quantity += 1;
            } else {
                // If the product doesn't exist, add it to the cart.
                if (this.category_id === 27) {
                    this.cart.push({
                        ...product,
                        category_id: this.category_id,
                        ticketprice: product.price,
                        thumnail_img: product.thumnail,
                        addi_pname: '',
                        addi_thumnail: '',
                        ticket_qty: 1,
                        quantity: 1,
                    });
                }
            }

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

            // Update local storage and emit event to update other components
            const existingData = JSON.parse(localStorage.getItem('cart')) || [];
            const newData = [...existingData, ...this.cart.filter(item => !existingData.some(existing => existing.id === item.id))];
            localStorage.setItem('cart', JSON.stringify(newData));
            bus.$emit("updateCart", newData);
        },

        saveCart() {
            if (process.client) {
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        },
        async viewDetails(slug) {
            const prosulg = slug;
            const response = await this.$axios.get(`/unauthenticate/productSlug/${prosulg}`);
            $("#description").html(response.data.product_descr);
            //console.log("product row " + response.data.product_descr);

            $(".details_modal").fadeIn();
        },

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

        hideDetails() {
            $(".details_modal").fadeOut();
        },
        shareBtn(slug) {
            this.ticketslug = slug;
            $(".modal_share").fadeIn();
        },
        shareBtnCls() {
            $(".modal_share").fadeOut();
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
