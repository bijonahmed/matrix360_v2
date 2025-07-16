<template>
    <div>
        <Header />

        <!--breadcrumbs area start-->
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><nuxt-link to="/">home</nuxt-link></li>
                                <li>SHOPPING CART</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--breadcrumbs area end-->

        <!-- Page Conttent -->
        <main class="page-content">
            <span v-if="loading">
                <Loader />
            </span>
            <!-- Shopping Cart Area -->
            <div class="cart-page-area bg-white">
                <div class="container">
                    <!-- Cart Products -->
                    <center>
                        <p>{{ qtymsg }}</p>
                    </center>
                    <div class="cart-table table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="cart-column-image" scope="col">IMAGE</th>
                                    <th class="cart-column-productname" scope="col">PRODUCT</th>
                                    <th class="cart-column-price" scope="col">PRICE</th>
                                    <th class="cart-column-quantity" scope="col">QUANTITY</th>
                                    <th class="cart-column-total" scope="col">TOTAL</th>
                                    <th class="cart-column-remove" scope="col">REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart" :key="item.id">
                                    <td>
                                        <nuxt-link :to="`/product-details/${item.pro_slug}`" class="product-image">
                                            <img :src="item.thumnail" alt="product image"
                                                style="height: 100px; width: 100px;">
                                        </nuxt-link>
                                    </td>
                                    <td style="text-align: left;">
                                        <nuxt-link :to="`/product-details/${item.pro_slug}`" class="product-title">{{
                                            item.name }}</nuxt-link>
                                    </td>
                                    <td>{{ pre_setting.currency }}{{ item.price }}</td>
                                    <td>
                                        <div class="quantity-select text-center">
                                            <!-- <input type="text" value="1"> -->
                                            <input type="text" class="val_input qty" v-model="item.quantity"
                                                @input="updateQuantity(item)"
                                                style="text-align: center; display: block; margin: 0 auto;">
                                        </div>
                                    </td>
                                    <td>
                                        <span class="total-price">{{ calculateTotalPrice(item) }}</span>
                                    </td>
                                    <td>
                                        <button class="remove-product" @click="removefromCart(item.id)"><i
                                                class="fa fa-trash-o"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <!--// Cart Products -->

                    <!-- Cart Content -->
                    <div class="cart-content">
                        <div class="row justify-content-between">
                            <div class="col-lg-6 col-md-6 col-12">
                                <nuxt-link to="/products" class="sn-button sn-button-dark">
                                    <span>CONTINUE SHOPPING</span>
                                </nuxt-link>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">

                                <div class="coupon_code right">
                                    <h3>Cart Totals</h3>
                                    <div class="coupon_inner">
                                        <div class="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p class="cart_amount">{{ pre_setting.currency }}{{ itemSubtotal }}</p>
                                        </div>
                                        <div class="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p class="cart_amount"><span>Flat Rate:</span> {{ pre_setting.currency }}{{
                                                shipfees_amt }}</p>
                                        </div>
                                     
                                        <div class="cart_subtotal">
                                            <p>Total</p><p class="cart_amount">{{ pre_setting.currency }}{{ parseFloat(itemSubtotal) + parseFloat(shipfees_amt) }}
                                            
                                            </p>
                                        </div>
                                        <div class="checkout_btn">
                                            <nuxt-link to="/checkout">Proceed to Checkout</nuxt-link>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <!--// Cart Content -->
                    <!-- Similliar Products -->
                    <br /><br />
                    <!--product area start-->
                    <section class="product_area related_products">
                        <div class="row">
                            <div class="col-12">
                                <div class="section_title title_style2">
                                    <div class="title_content">
                                        <h2><span>Related</span> Products</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-3" v-for="(item, index) in sproducts" :key="index">
                                <article class="single_product mt-3">
                                    <figure>
                                        <div class="product_thumb">
                                            <nuxt-link class="primary_img" :to="`/product-details/${item.slug}`">
                                                <img :src="item.thumnail" alt="product image" loading="lazy"
                                                    style="height:300px; width: 100%;"> </nuxt-link>
                                        </div>
                                        <div class="product_content">
                                            <div class="product_content_inner">
                                                <h4 class="product_name">
                                                    <nuxt-link :to="`/product-details/${item.slug}`">{{ item.name
                                                        }}</nuxt-link>

                                                </h4>
                                                <div class="price_box">
                                                    <!-- <span class="old_price">$320.00</span> -->
                                                    <span class="current_price text-white">{{ item.price }}</span>
                                                </div>
                                            </div>
                                            <div class="action_links d-none">
                                                <ul>
                                                    <li class="add_to_cart"><a href="cart.html" title="Add to cart">Add
                                                            to
                                                            cart</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </figure>
                                </article>
                                <br />
                            </div>
                        </div>
                        <br /><br /><br />
                    </section>
                    <!--product area end-->
                </div>
            </div>
        </main>
        <!--// Page Conttent -->
        <Footer />
    </div>

    <!--// Page Conttent -->
</template>

<script>
import bus from '~/plugins/bus.js';
export default {
    head: {
        title: 'Cart',
    },
    data() {
        return {
            wallet_balance: 0,
            walletBalance: 0,
            shipfees_amt: 0,
            itemSubtotal: 0,
            categoryId: 27,
            totalShippingFees: 0,
            shippingFee: 0,
            copon_amount: 0,
            isChecked: false,
            showWalletInfo: false,
            couponCode: '',
            couponamt: '',
            apiResponseMessage: '',
            cart: [],
            sproducts: [],
            pre_setting: '',
            itemCount: 0,
            subtotal: 0,
            qtymsg: '',
            loading: true,
            percentageAmount: 0,

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
        this.setting();
        this.loadingCart();
        this.loadCart();
        this.calculateTotalQuantity();
        this.loadingsmiliarProduct();

    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },
    },

    methods: {
        async loadingsmiliarProduct() {
            try {
                //  this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/randomProductslimit');
                this.sproducts = response.data;
                console.log("====" + response.data);
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching loadingProduct:', error);
                // Handle error if needed
            } finally {
                //   this.loading = false; // Hide loader after response or error
            }

        },

        showhidePassword() {
            this.showPassword = !this.showPassword;
        },
        loadTotalAmut() {
            // console.log("loadTotalAmut" + this.subtotal);
            const itemsubtotal = this.itemSubtotal;
            const totalShippingFees = this.totalShippingFees;
            const subtotal = this.subtotal;
            const percentageAmount = this.percentageAmount;
            const walletBalance = this.walletBalance;
            const copon_amount = this.copon_amount;
            // Create an object with dynamic key-value pairs
            const dataObject = {
                itemsubtotal: itemsubtotal,
                subtotal: subtotal,
                percentageAmount: percentageAmount,
                totalShippingFees: totalShippingFees,
                walletBalance: walletBalance,
                copon_amount: copon_amount
            };
            // Save the object back to local storage
            localStorage.setItem('orderSummary', JSON.stringify(dataObject));

        },
        toggleWalletInfo() {
            this.showWalletInfo = !this.showWalletInfo;
            if (this.showWalletInfo) {
                this.getCartTotal();
            }
        },
        async checkCoupon() {
            try {
                this.loading = true; // Show loader
                const response = await this.$axios.post('/unauthenticate/check-coupon', {
                    couponCode: this.couponCode,
                });
                this.couponamt = response.data.wallet_amount;
                this.couponResult = response.data.message;
                this.apiResponseMessage = "";
                this.getCartTotal();

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
                    title: response.data.message
                });

            } catch (error) {

                // Check if error.response exists before accessing its properties
                if (error.response && error.response.data && error.response.data.message) {
                    this.apiResponseMessage = error.response.data.message;
                } else {
                    // If response data is not available, set a generic error message
                    this.apiResponseMessage = 'An error occurred while processing your request.';
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
                    icon: "warning",
                    title: error.response.data.message
                });
            } finally {
                this.loading = false; // Hide loader after response or error
            }

        },
        async setting() {
            try {
                this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/setting');
                this.pre_setting = response.data;
                this.wallet_balance = response.data.wallet_balance;
                this.shippingFee = response.data.shipping_fee;
                this.getCartTotal();
            } catch (error) {
                console.error('Error fetching sellingFast:', error);

            } finally {
                this.loading = false; // Hide loader after response or error
            }

        },
        loadingCart() {
            setTimeout(() => {
                this.loading = false;
            }, 1000); // 5000 milliseconds = 5 seconds
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
        async userLogin() {
            try {

                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                    // Add other parameters as needed
                };

                let {
                    data
                } = await this.$axios.post('/auth/login', postData);
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
                this.$router.push('/payment');

            } catch (err) {

                if (err.response.status === 422) {
                    this.errors = err.response.data.errors;
                    this.errorHandler(err);
                }

                console.log(err)
            }
        },

        errorHandler(error) {
            if (error.response && error.response.data.errors && error.response.data.errors.account) {
                console.log("error : " + error.response.data.errors.account[0]);
                this.invaliderror = error.response.data.errors.account[0];
            } else {
                console.log("An error occurred. Please try again later.");
            }
        },
        orderConfirm() {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to submit an order?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    const response = this.$axios.post('/order/submitOrder', {
                        cart: this.cart,
                    });
                    this.clearCart();
                    console.log(response.data); // Log the API response

                    const savedCart = localStorage.getItem('cart');
                    let cartData = JSON.parse(savedCart);
                    bus.$emit("updateCart", cartData);

                    Swal.fire({
                        title: "Success!",
                        text: "Your order has been submited.",
                        icon: "success"
                    });
                }
            });
        },

        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.calculateTotalQuantity();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },

        calculateTotalQuantity() {
            // Get the cart data from local storage
            const cartData = localStorage.getItem('cart');
            const cart = JSON.parse(cartData) || [];
            const totalQuantity = cart.reduce((total, item) => total + parseInt(item.quantity, 10), 0);
            //  console.log("Total Quantity in Cart:", totalQuantity);
            this.itemCount = totalQuantity;

        },
        calculateTotalPrice(item) {
            // Check if necessary properties are truthy before performing the calculation
            if (item && item.quantity !== undefined && item.price !== undefined) {
                const total = item.quantity * item.price;
                return `${this.formatPrice(total)}`; // Assuming you have a formatPrice method
            } else {
                return "Invalid item data";
            }
        },
        formatPrice(price) {
            return price.toFixed(2);
        },

        increaseQuantity(productId) {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                let cartData = JSON.parse(savedCart);
                const index = cartData.findIndex(cartItem => cartItem.id === productId);
                if (index !== -1) {
                    cartData[index].quantity = (parseInt(cartData[index].quantity, 10) + 1).toString();
                    const totalQuantity = this.cart.reduce((total, item) => total + parseInt(item.quantity, 10), 0);
                    console.log("cart qty:" + totalQuantity);
                    console.log("cart qty:" + cartData[index].quantity);
                    //return false;
                    localStorage.setItem('cart', JSON.stringify(cartData));
                    this.loadCart();
                    bus.$emit("updateCart", cartData);
                    // Call the updateQuantity method as well
                    this.updateQuantity(cartData[index]);
                    this.getCartTotal();
                }
            }
        },

        updateQuantity(item) {
            this.qtymsg = 'Quantity updated';
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                let cartData = JSON.parse(savedCart);
                const index = cartData.findIndex(cartItem => cartItem.id === item.id);

                if (index !== -1) {
                    cartData[index].quantity = parseInt(item.quantity);
                    localStorage.setItem('cart', JSON.stringify(cartData));
                    this.loadCart();
                    this.getCartTotal();
                }

            }
        },
        removefromCart(productId) {
            this.loading = true;
            // Load the cart from local storage
            const savedCart = localStorage.getItem('cart');
            // this.$store.commit('cart/setCart', savedCart);

            if (savedCart) {
                const cartData = JSON.parse(savedCart);
                const updatedCart = cartData.filter(item => item.id !== productId);
                // Update the cart and save it back to local storage
                this.cart = this.getUniqueItems(updatedCart);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                bus.$emit('updateCart', this.cart);
                this.loadCart();
                setTimeout(() => {
                    this.loading = false;
                    this.getCartTotal();
                }, 1000);
            }

        },
        formatPrice(price) {
            if (typeof price === 'number') {
                return price.toFixed(2);
            }
            return price;
        },
        loadCart() {

            this.calculateTotalQuantity();
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {

                const cartdata = JSON.parse(savedCart);
                this.cart = this.getUniqueItems(cartdata);
            }

        },
        getUniqueItems(cart) {
            return cart.filter((item, index, self) =>
                index === self.findIndex(t => t.id === item.id)
            );
        },

        getCartTotal() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const cartData = JSON.parse(savedCart);
                const uniqueCart = cartData.filter((item, index, self) =>
                    index === self.findIndex((t) => t.id === item.id)
                );
                let totalPrice = 0; // Declare totalPrice outside the if-else blocks
                let totalQuantity = 0; // Declare totalQuantity variable
                let uniqueProductIds = []; // Track unique product IDs to ensure shipping fee is added only once
                let totalShippingFees = this.pre_setting.shipping_fee;
                totalPrice = uniqueCart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
                totalQuantity = uniqueCart.reduce((total, item) => total + (item.quantity || 0), 0);
                console.log("Total Item quantity :---" + totalQuantity);
                //let shipfees = this.pre_setting.shipping_fee * totalQuantity;
                //start
                totalPrice = uniqueCart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
                totalQuantity = uniqueCart.reduce((total, item) => total + (item.quantity || 0), 0);
                console.log("Total Item quantity: " + totalQuantity);

                uniqueCart.forEach((item) => {
                    const productId = item.id;
                    const categoryId = item.category_id;
                    // Exclude products with category_id 27
                    if (categoryId !== 27 && !uniqueProductIds.includes(productId)) {
                        const shipFeesForItem = this.pre_setting.shipping_fee;
                        totalShippingFees += parseFloat(shipFeesForItem);
                        uniqueProductIds.push(productId);
                    }
                });
                console.log("Total Shipping Fees:", totalShippingFees);
                this.itemSubtotal = totalPrice;

                this.shipfees_amt = this.pre_setting.shipping_fee;
                let shipfees = totalShippingFees;
                console.log("shipfees :---" + totalShippingFees);
                this.totalShippingFees = totalShippingFees;
                //let walletbalance = this.wallet_balance;
                let wallet_balance;
                if (this.showWalletInfo) {
                    wallet_balance = this.wallet_balance;
                } else {
                    wallet_balance = 0;
                }

                let copon_result;
                if (this.couponamt !== '') {
                    copon_result = parseFloat(this.couponamt);
                } else {
                    copon_result = 0;
                }

                const percetage = this.pre_setting.vat_percentage;
                let percentageAmount;
                percentageAmount = (parseFloat(totalPrice) * percetage) / 100;
                this.percentageAmount = percentageAmount;

                this.walletBalance = wallet_balance;
                this.copon_amount = copon_result;

                console.log(`Formula totalprice: + ${totalPrice}, percentage amount: + ${percentageAmount}, shipping fee: ${shipfees}, walletbalance: - ${wallet_balance} - coupon amount ${copon_result}`);
                const total = parseFloat(totalPrice) + parseFloat(percentageAmount) + parseFloat(shipfees) - parseFloat(wallet_balance) - copon_result;
                console.log("total result : " + total);
                this.subtotal = `${total}`;
                // this.itemsubtotal
                console.log('Total Price for Unique Items:', totalPrice);
                this.loadTotalAmut();

                //Update cart:

                //END 

            } else {
                console.error('No cart data found in local storage.');
            }
        },

        loginpopup() {
            $(".login_modal").fadeIn();
        },

        closePopup() {
            $(".login_modal").fadeOut();
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

.section-padding-md {
    padding: 40px 0;
}
</style>
