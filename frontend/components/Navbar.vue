<template>
<div>
    <section class="top_nav app_hide">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <nuxt-link class="navbar-brand" to="/">
                                <div class="logo_">
                                    <img src="/images/logo.png" class="img-fluid" loading="lazy" alt="">
                                </div>
                            </nuxt-link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa-solid fa-bars"></i>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="https://wa.me/8801827720375" target="_blank">Need Help? Contact
                                            us
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link class="nav-link active" aria-current="page" to="/products">
                                            <div class="creadit_ticket">
                                                <p>Win Exclusive Price</p>
                                                <h1>PRODUCT</h1>
                                            </div>
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link to="/winners" class="nav-link active" aria-current="page">
                                            <div class="creadit_ticket">
                                                <p>Win Exclusive Price</p>
                                                <h1>WINNERS</h1>
                                            </div>
                                        </nuxt-link>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <a class="nav-link mobile_" href="tel:888000">Call 01910000000</a>
                                    </li> -->
                                    <li class="nav-item d-none">
                                        <select name="" class="" id="">
                                            <option value=""><img src="/images/flags/united-states-emoji-96.png" class="img-fulid" loading="lazy" alt="">USDT</option>
                                            <option value="">BDT</option>
                                        </select>
                                    </li>
                                    <li class="nav-item d-none">
                                        <select name="" class="" id="">
                                            <option value="">English</option>
                                            <option value="">Bengali</option>
                                        </select>
                                    </li>

                                    <li class="nav-item">
                                        <nuxt-link class="nav-link mobile_ position-relative" to="/cart">
                                            Cart
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {{ itemCounts }}
                                            </span>
                                        </nuxt-link>
                                    </li>

                                    <li class="nav-item" v-if="loggedIn">
                                        <nuxt-link to="/user/profile" class="nav-link">My Dashboard</nuxt-link>
                                    </li>

                                    <li class="nav-item" v-if="loggedIn">
                                        <a href="#" class="nav-link" @click="logout">Logout</a>
                                    </li>

                                    <li class="nav-item" v-else>

                                        <nuxt-link class="nav-link" to="/login">Register/Login</nuxt-link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <!-- mobile header part start here  -->
    <section class="mobile_header app_show">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="header_button ">
                        <nuxt-link to="/" :class="{ 'active': $route.path === '/' }">
                            <img src="/images/logoudpate.png" class="img-fluid" loading="lazy" alt="" style="padding: 2px;">
                        </nuxt-link>
                        <nuxt-link to="/products" :class="{ 'active': $route.path === '/products' }">

                            <img src="/images/product_icon.png" class="img-fluid" loading="lazy" alt="">
                        </nuxt-link>
                        <nuxt-link to="/winners" :class="{ 'active': $route.path === '/winners' }">
                            <img src="/images/winners_icon.png" class="img-fluid" loading="lazy" alt="">
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- mobile header part end here  -->
</div>
</template>

<script>
import bus from '~/plugins/bus.js';
export default {
    data() {
        return {
            cart: [],
            _itemCount: 0,
            itemCounts: 0,
        }
    },
    mounted() {
        this.loadCart();
        bus.$on('updateCart', (updatedCart) => {
            this.loadCart();
        });
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

        itemCount: {
            get() {
                return this._itemCount;
            },
            set(value) {
                this._itemCount = value;
            },
        },

    },
    methods: {
        redirectHomePages() {
            this.$router.push('/');
        },
        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            //console.log("Finally get total Cart" + itemCount);
            this.itemCounts = itemCount;
        },
        async logout() {
            await this.$auth.logout()
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },

    }
}
</script>
