<template>
    <div>
        <div class="off_canvars_overlay"></div>
        <div class="offcanvas_menu">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Open Button -->
                        <div class="canvas_open" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
                            <a><i class="ion-navicon" style="color:white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header>

            <div class="main_header">
                <!--header top start-->
                <div class="header_top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-4 col-md-5">
                                <div class="header_account">
                                    <ul>
                                        <li class="language"><a href="#"><img src="/assets/img/logo/language.png"
                                                    alt="">
                                                english <i class="ion-chevron-down"></i></a>
                                            <ul class="dropdown_language">
                                                <li><a href="#">English</a></li>
                                            </ul>
                                        </li>
                                        <li class="currency"><a href="#">USD</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7">
                                <div class="header_top_links text-right">
                                    <ul>
                                        <!-- <li><nuxt-link to="/register">Register</nuxt-link></li>
                                        <li><nuxt-link to="/login">Login</nuxt-link></li> -->
                                        <li><nuxt-link to="/cart">Shopping Cart</nuxt-link></li>
                                        <li><nuxt-link to="/checkout">Checkout</nuxt-link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--header top start-->

                <!--header middel start-->
                <div class="header_middle">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-2 col-md-4 col-sm-4 col-4">
                                <div class="logo">
                                    <nuxt-link to="/"><img src="/assets/img/logo/companyLogo.png" alt="Images"
                                            style="background-color: white; border-radius: 10px;"></nuxt-link>
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-6 col-sm-6 col-6">
                                <div class="header_right_box">
                                    <div class="search_container">
                                        <form action="#">

                                            <div class="hover_category">
                                                <select class="select_option" name="select" v-model="selectedCategory">
                                                    <option value="">All Categories</option>
                                                    <option v-for="category in categoriesData" :key="category.id"
                                                        :value="category.id">
                                                        {{ category.name }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="search_box" style="position: relative;">
                                                <input id="product-search" placeholder="Search product..." type="text"
                                                    autocomplete="off" @keyup="autocompleteSearch"
                                                    @keydown.enter.prevent="searchProduct" />
                                                <div v-if="autocompleteResults.length" class="autocomplete-box">
                                                    <div v-for="item in autocompleteResults" :key="item.id"
                                                        class="autocomplete-item"
                                                        @click="selectAutocomplete(item.slug)">
                                                        {{ item.name }}
                                                    </div>
                                                </div>
                                                <button @click="searchProduct" type="button">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="header_configure_area">
                                        <div class="mini_cart_wrapper">
                                            <nuxt-link to="/cart">
                                                <i class="icon-shopping-bag2"></i>
                                                <!-- <span class="cart_price">0</span> -->
                                                <span class="cart_count">{{ itemCounts }}</span>
                                            </nuxt-link>
                                            <!--mini cart end-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--header middel end-->
                <!--header bottom satrt-->
                <div class="header_bottom sticky-header off-canvas">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12">
                                <div class="main_menu menu_position text-center">
                                    <nav>
                                        <ul>
                                            <li><nuxt-link to="/" class="active">home</nuxt-link></li>
                                            <li><a href="#">Company Info<i class="fa fa-angle-down"></i></a>
                                                <ul class="sub_menu pages">
                                                    <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                                    <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
                                                    <li><nuxt-link to="/terms-and-condition">Terms and
                                                            Condition</nuxt-link></li>
                                                </ul>
                                            </li>
                                            <li><nuxt-link to="/aircraft">Aircraft Parts</nuxt-link></li>
                                            <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                            <li><nuxt-link to="/contact"> Contact Us</nuxt-link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!--header bottom end-->


                <!-- Mobile Off-Canvas Menu -->
                <!-- Mobile Menu -->
                <div class="collapse d-lg-none off-canvas-mobile" id="mobileMenu">
                    <div class="off-canvas-inner bg-white shadow-sm p-3">
                        <nav>
                            <ul class="list-unstyled">
                                <li><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>

                                <li>
                                    <a class="nav-link d-flex justify-content-between" data-bs-toggle="collapse"
                                        href="#companyCollapse" role="button" aria-expanded="false"
                                        aria-controls="companyCollapse">
                                        Company Info <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="sub_menu collapse ps-3" id="companyCollapse">
                                        <li><nuxt-link class="nav-link" to="/about">About Us</nuxt-link></li>
                                        <li><nuxt-link class="nav-link" to="/contact">Contact Us</nuxt-link></li>
                                        <li><nuxt-link class="nav-link" to="/terms-and-condition">Terms and
                                                Condition</nuxt-link></li>
                                    </ul>
                                </li>

                                <li><nuxt-link class="nav-link" to="/aircraft">Aircraft Parts</nuxt-link></li>
                                <li><nuxt-link class="nav-link" to="/about">About Us</nuxt-link></li>
                                <li><nuxt-link class="nav-link" to="/contact">Contact Us</nuxt-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>




            </div>
        </header>
    </div>
</template>

<script>
import bus from '~/plugins/bus.js';
export default {
    data() {
        return {
            navbarVisible: true,
            cart: [],
            categoriesData: [],
            selectedCategory: '',
            autocompleteResults: [],
            _itemCount: 0,
            itemCounts: 0,
        }
    },
    mounted() {
        this.loadCart();
        this.getCategory()
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

        autocompleteSearch(event) {
            const query = event.target.value.trim();

            if (query.length > 1) {
                this.$axios
                    .get('/unauthenticate/search-products', {
                        params: { query: query }
                    })
                    .then(response => {
                        this.autocompleteResults = response.data;
                    })
                    .catch(error => {
                        console.error('Autocomplete search error:', error);
                        this.autocompleteResults = [];
                    });
            } else {
                this.autocompleteResults = [];
            }
        },

        selectAutocomplete(slug) {
            this.autocompleteResults = [];
            this.$router.push(`/product-details/${slug}`);
        },

        searchProduct() {
            const searchInput = document.getElementById('product-search');
            const searchValue = searchInput.value.trim();

            if (searchValue) {
                this.$router.push({
                    path: '/search',
                    query: {
                        q: searchValue,
                        category: this.selectedCategory,
                    },
                });
            } else {
                this.$router.push('/');
            }
        },





        async getCategory() {
            try {
                //  this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/filterCategorys');
                this.categoriesData = response.data;
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching loadingProduct:', error);
                // Handle error if needed
            } finally {
                //   this.loading = false; // Hide loader after response or error
            }
        },
        toggleNavbar() {
            this.navbarVisible = !this.navbarVisible;
        },
        redirectHomePages() {
            this.$router.push('/');
        },
        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                // Parse the saved cart
                this.cart = JSON.parse(savedCart);

                // Remove duplicates based on id
                this.cart = this.cart.reduce((unique, item) => {
                    return unique.some(u => u.id === item.id) ? unique : [...unique, item];
                }, []);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });

            // Update the itemCount
            this.itemCounts = itemCount;
        },

        async logout() {
            await this.$auth.logout()
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },

    },

}

</script>
<style scoped>
.autocomplete-box {
    position: absolute;
    background: #fff;
    border: 1px solid #ccc;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
}

.autocomplete-item {
    padding: 8px;
    cursor: pointer;
}

.autocomplete-item:hover {
    background-color: #f0f0f0;
}
</style>