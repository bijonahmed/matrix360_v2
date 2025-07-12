<template>
    <div>
        <Header />
        <!--breadcrumbs area start-->
        <!--breadcrumbs area start-->
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><nuxt-link to="/">home</nuxt-link></li>
                                <li>checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--breadcrumbs area end-->
        <!-- Checkout Area -->
        <div class="checkout-area bg-white section-padding-md">
            <div class="container">

                <form @submit.prevent="checkoutProcess()" id="otp-screen" class="billing-info">
                    <div class="row">
                        <!-- Billing Details -->
                        <div class="col-lg-6">
                            <h3 class="small-title">Billing Details</h3>

                            <p>
                                <label>First Name <span>*</span></label>
                                <input type="text" v-model="paymentGetway.first_name" />
                                <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                            </p>

                            <p>
                                <label>Last Name <span>*</span></label>
                                <input type="text" v-model="paymentGetway.last_name" />
                                <span class="text-danger" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                            </p>

                            <p>
                                <label>Email <span>*</span></label>
                                <input type="email" v-model="paymentGetway.email" />
                                <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            </p>

                            <p>
                                <label>Phone <span>*</span></label>
                                <input type="text" v-model="paymentGetway.phone" />
                                <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                            </p>

                            <p>
                                <label>Street Address <span>*</span></label>
                                <input type="text" v-model="paymentGetway.street_address"
                                    placeholder="Street Address" />
                                <span class="text-danger" v-if="errors.street_address">{{ errors.street_address[0]
                                    }}</span>
                            </p>

                            <p>
                                <label>Apartment, suite, unit etc. (optional)</label>
                                <input type="text" v-model="paymentGetway.appar_suite_address" />
                            </p>

                            <p>
                                <label>State <span>*</span></label>
                                <input type="text" v-model="paymentGetway.state" />
                                <span class="text-danger" v-if="errors.state">{{ errors.state[0] }}</span>
                            </p>

                            <p>
                                <label>Postcode / ZIP <span>*</span></label>
                                <input type="text" v-model="paymentGetway.post_code_zip" />
                                <span class="text-danger" v-if="errors.post_code_zip">{{ errors.post_code_zip[0]
                                    }}</span>
                            </p>

                            <div class="different-address-form-trigger">
                                <input type="checkbox" id="direrent-address-toggle" class="sn-checkbox"
                                    v-model="showDifferentAddress" @click="copybillingAddress" />
                                <label for="direrent-address-toggle">SHIP TO DIFFERENT ADDRESS</label>
                            </div>

                            <div v-if="showDifferentAddress">
                                <h4>Shipping Address</h4>
                                <p>
                                    <label>First Name</label>
                                    <input type="text" v-model="paymentGetway.shipper_first_name" />
                                </p>
                                <p>
                                    <label>Last Name</label>
                                    <input type="text" v-model="paymentGetway.shipper_last_name" />
                                </p>
                                <p>
                                    <label>Email</label>
                                    <input type="text" v-model="paymentGetway.shipper_email" />
                                </p>
                                <p>
                                    <label>Phone</label>
                                    <input type="text" v-model="paymentGetway.shipper_phone_number" />
                                </p>
                                <p>
                                    <label>Address</label>
                                    <input type="text" v-model="paymentGetway.shipper_address" />
                                </p>
                                <p>
                                    <label>Apartment, suite, unit etc. (optional)</label>
                                    <input type="text" v-model="paymentGetway.shipper_apprt_suite_addr" />
                                </p>
                                <p>
                                    <label>State</label>
                                    <input type="text" v-model="paymentGetway.shipper_state" />
                                </p>
                                <p>
                                    <label>Postcode / ZIP</label>
                                    <input type="text" v-model="paymentGetway.shipper_zip" />
                                </p>
                            </div>
                        </div>

                        <!-- Order Summary -->
                        <div class="col-lg-6">

                            <div class="checkout_form_right">
                                <h3>Your order</h3>
                                <div class="order-infobox">
                                    <div class="checkout-table table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="text-left">PRODUCT</th>
                                                    <th class="text-right">PRICE</th>
                                                    <th class="text-right">SUBTOTAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in cart" :key="item.id">
                                                    <td class="text-start">{{ item.name }} <span>× {{ item.quantity
                                                    }}</span></td>
                                                    <td class="text-right">{{ pre_setting.currency }}{{ item.price }}
                                                    </td>
                                                    <td class="text-right">{{ pre_setting.currency }}{{ (item.price *
                                                        item.quantity).toFixed(2) }}</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th class="text-left">CART SUBTOTAL</th>
                                                    <td class="text-right">{{ pre_setting.currency }}{{ itemSubtotal }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="text-left">SHIPPING <small>(Flat)</small></th>
                                                    <td class="text-right">{{ pre_setting.currency }}{{ sh_fees }}</td>
                                                </tr>
                                                <tr class="total-price">
                                                    <th class="text-left">ORDER TOTAL</th>
                                                    <td class="text-right">{{ pre_setting.currency }}
                                                        {{ (parseFloat(itemSubtotal) +
                                                            parseFloat(sh_fees)).toLocaleString('en-US', {
                                                                minimumFractionDigits: 2
                                                            }) }}

                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                                        <p class="mb-1"><strong>Want to pay now?</strong> We're here to help you
                                            complete your order easily.</p>
                                        <p>Just send us a message at <a href="mailto:support@matrix360sourcing.com"
                                                class="alert-link">support@matrix360sourcing.com</a> and we’ll guide you
                                            through it. After verification, we can proceed with completing your order
                                            smoothly.</p>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close"></button>
                                    </div>

                                    <div class="payment-method mt-2 d-none"
                                        style="display: flex; gap: 20px;  align-items: center;">
                                        <input type="hidden" v-model="paymentGetway.price" />

                                        <div class="check-payment"
                                            style="display: inline-flex; align-items: center; gap: 5px;">
                                            <input type="radio" name="payment-method" id="checkout-payment-method-1"
                                                class="sn-radio" value="stripe" v-model="selectedPaymentMethod"
                                                @change="updatePaymentMethod" checked />
                                            <label for="checkout-payment-method-1">Stripe Payment</label>
                                        </div>

                                        <div class="check-payment"
                                            style="display: inline-flex; align-items: center; gap: 5px;">
                                            <input type="radio" name="payment-method" id="checkout-payment-method-2"
                                                class="sn-radio" value="paypal" v-model="selectedPaymentMethod"
                                                @change="updatePaymentMethod" />
                                            <label for="checkout-payment-method-2">Paypal Payment</label>
                                        </div>
                                    </div>



                                    <div class="order_button mt-4">
                                        <button type="submit" class="w-100">Proceed</button>
                                    </div>
                                </div>

                            </div>





                        </div>
                    </div>
                </form>


            </div>
        </div>
        <Footer />

    </div>
</template>

<script>
import bus from '~/plugins/bus.js';
export default {
    head: {
        title: 'Checkout',
    },
    data() {
        return {
            sh_fees: 0,
            loading: false,
            shipfees_amt: 0,
            itemSubtotal: 0,
            totalShippingFees: 0,
            shippingFee: 0,
            showWalletInfo: false,
            apiResponseMessage: '',
            cart: [],
            sproducts: [],
            pre_setting: '',
            itemCount: 0,
            subtotal: 0,
            loading: true,
            showDifferentAddress: false,
            differentAddressField: '', // Initialize different address field if needed
            //selectedPaymentMethod: 'paypal',
            selectedPaymentMethod: 'stripe',
            paymentGetway: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                street_address: '',
                appar_suite_address: '',
                state: '',
                post_code_zip: '',
                paypal: '',
                stripe: '',
                price: '',
                uniqueId: null,
                //ship
                shipper_first_name: '',
                shipper_last_name: '',
                shipper_email: '',
                shipper_phone_number: '',
                shipper_address: '',
                shipper_apprt_suite_addr: '',
                shipper_state: '',
                shipper_zip: '',
            },
            showPassword: false,
            invaliderror: '',
            notifmsg: '',
            errors: {},
        }
    },
    mounted() {
        //console.log("itemSubtotal:", this.subtotal);
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
        updatePaymentMethod() {
            if (this.selectedPaymentMethod === 'paypal') {
                this.paymentGetway.paypal = 'Paypal'; // Set paypal value
                this.paymentGetway.stripe = ''; // Clear zelle value
            } else if (this.selectedPaymentMethod === 'stripe') {
                this.paymentGetway.stripe = 'Stripe'; // Set zelle value
                this.paymentGetway.paypal = ''; // Clear paypal value
            }
        },
        copybillingAddress() {

            this.paymentGetway.shipper_first_name = this.paymentGetway.first_name;
            this.paymentGetway.shipper_last_name = this.paymentGetway.last_name;
            this.paymentGetway.shipper_email = this.paymentGetway.email;
            this.paymentGetway.shipper_phone_number = this.paymentGetway.phone;
            this.paymentGetway.shipper_address = this.paymentGetway.street_address;
            this.paymentGetway.shipper_apprt_suite_addr = this.paymentGetway.appar_suite_address;
            this.paymentGetway.shipper_state = this.paymentGetway.state;
            this.paymentGetway.shipper_zip = this.paymentGetway.post_code_zip;

        },
        checkoutProcess() {
            const uniqueid = '_' + Math.random().toString(36).substr(2, 9);
            this.uniqueId = uniqueid;
            const formData = new FormData();
            formData.append('cart', JSON.stringify(this.cart));
            formData.append('first_name', this.paymentGetway.first_name);
            formData.append('last_name', this.paymentGetway.last_name);
            formData.append('email', this.paymentGetway.email);
            formData.append('phone', this.paymentGetway.phone);
            formData.append('street_address', this.paymentGetway.street_address);
            formData.append('appar_suite_address', this.paymentGetway.appar_suite_address);
            formData.append('state', this.paymentGetway.state);
            formData.append('post_code_zip', this.paymentGetway.post_code_zip);
            //Shipper 
            formData.append('shipper_first_name', this.paymentGetway.shipper_first_name);
            formData.append('shipper_last_name', this.paymentGetway.shipper_last_name);
            formData.append('shipper_email', this.paymentGetway.shipper_email);
            formData.append('shipper_phone_number', this.paymentGetway.shipper_phone_number);
            formData.append('shipper_address', this.paymentGetway.shipper_address);
            formData.append('shipper_apprt_suite_addr', this.paymentGetway.shipper_apprt_suite_addr);
            formData.append('shipper_state', this.paymentGetway.shipper_state);
            formData.append('shipper_zip', this.paymentGetway.shipper_zip);

            formData.append('uniqueId', uniqueid);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };

            const select_method = this.selectedPaymentMethod;

            if (select_method == 'paypal') {
                this.$axios.post('/payment/storeCartData',
                    formData, {
                    headers
                }).then(response => {
                    console.log("console.log" + response.message);
                }).catch(error => {
                    if (error.response.status === 422) {
                        //  console.log("---" + error.response.data.errors);
                        this.errors = error.response.data.errors;
                    }
                });
            } else {

                this.$axios.post('/stripe/storeCartData',
                    formData, {
                    headers
                }).then(response => {
                    console.log("console.log" + response.message);
                }).catch(error => {
                    if (error.response.status === 422) {
                        //  console.log("---" + error.response.data.errors);
                        this.errors = error.response.data.errors;
                    }
                });

            }

            if (select_method == 'paypal') {
                this.loading = true;
                const formData = new FormData();
                formData.append('selectePaymentMethod', this.selectedPaymentMethod);
                formData.append('uniqueId', JSON.stringify(this.uniqueId));
                formData.append('price', this.paymentGetway.price);
                formData.append('first_name', this.paymentGetway.first_name);
                formData.append('last_name', this.paymentGetway.last_name);
                formData.append('email', this.paymentGetway.email);
                formData.append('phone', this.paymentGetway.phone);
                formData.append('street_address', this.paymentGetway.street_address);
                formData.append('appar_suite_address', this.paymentGetway.appar_suite_address);
                formData.append('state', this.paymentGetway.state);
                formData.append('post_code_zip', this.paymentGetway.post_code_zip);
                //Shipper 
                formData.append('shipper_first_name', this.paymentGetway.shipper_first_name);
                formData.append('shipper_last_name', this.paymentGetway.shipper_last_name);
                formData.append('shipper_email', this.paymentGetway.shipper_email);
                formData.append('shipper_phone_number', this.paymentGetway.shipper_phone_number);
                formData.append('shipper_address', this.paymentGetway.shipper_address);
                formData.append('shipper_apprt_suite_addr', this.paymentGetway.shipper_apprt_suite_addr);
                formData.append('shipper_state', this.paymentGetway.shipper_state);
                formData.append('shipper_zip', this.paymentGetway.shipper_zip);

                const headers = {
                    'Content-Type': 'multipart/form-data'
                };
                this.$axios.post('/payment/paypal',
                    formData, {
                    headers
                }).then(response => {
                    // this.loading = false;
                    this.clearCart();
                    if (response.status === 200 && response.data.redirectUrl) {
                        // Redirect to PayPal payment page
                        window.location.href = response.data.redirectUrl;
                    }
                    if (response.status === 200 && response.data.status === 'success') {
                        console.log('Payment is successful');
                    } else {
                        console.log('---------------Payment failed or cancelled');
                    }

                })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.loading = false;
                            console.log("---" + error.response.data.errors);
                            this.errors = error.response.data.errors;
                        }
                    });
            }

            if (select_method == 'stripe') {
                //alert("stripe under development.....");
                this.loading = true;

                const payload = {
                    selectePaymentMethod: this.selectedPaymentMethod,
                    uniqueId: this.uniqueId,
                    price: this.paymentGetway.price,
                    first_name: this.paymentGetway.first_name,
                    last_name: this.paymentGetway.last_name,
                    email: this.paymentGetway.email,
                    phone: this.paymentGetway.phone,
                    street_address: this.paymentGetway.street_address,
                    appar_suite_address: this.paymentGetway.appar_suite_address,
                    state: this.paymentGetway.state,
                    post_code_zip: this.paymentGetway.post_code_zip,
                    shipper_first_name: this.paymentGetway.shipper_first_name,
                    shipper_last_name: this.paymentGetway.shipper_last_name,
                    shipper_email: this.paymentGetway.shipper_email,
                    shipper_phone_number: this.paymentGetway.shipper_phone_number,
                    shipper_address: this.paymentGetway.shipper_address,
                    shipper_apprt_suite_addr: this.paymentGetway.shipper_apprt_suite_addr,
                    shipper_state: this.paymentGetway.shipper_state,
                    shipper_zip: this.paymentGetway.shipper_zip,
                };

                this.$axios.post('/stripe/checkout', payload)
                    .then(response => {
                        // console.log("response::", response.data.message);

                    })
                    .catch(error => {
                        if (error.response && error.response.status === 422) {
                            this.loading = false;
                            this.errors = error.response.data.errors;
                        }
                    });


                //    for redirect
                const requiredFields = {
                    selectePaymentMethod: this.selectedPaymentMethod,
                    uniqueId: this.uniqueId,
                    price: this.paymentGetway.price,
                    first_name: this.paymentGetway.first_name,
                    last_name: this.paymentGetway.last_name,
                    email: this.paymentGetway.email,
                    phone: this.paymentGetway.phone,
                    street_address: this.paymentGetway.street_address,
                    appar_suite_address: this.paymentGetway.appar_suite_address,
                    state: this.paymentGetway.state,
                    post_code_zip: this.paymentGetway.post_code_zip
                };

                let isValid = true;

                for (const [key, value] of Object.entries(requiredFields)) {
                    if (!value || String(value).trim() === '') {
                        this.errors[key] = `${key.replace(/_/g, ' ')} is required`;
                        isValid = false;
                    }
                }

                if (!isValid) {
                    this.loading = false;
                    return;
                }

                // All fields are valid — redirect to success
                this.clearCart();
                this.$router.push('/success');
                // add orderID pasing sendrandId
                // const response = this.$axios.get('/stripe/randomProductslimit', {
                //     params: {
                //         uniqueId: JSON.stringify(this.uniqueId),
                //     }
                // });
                // console.log(response);

            }

        },

        async loadingsmiliarProduct() {
            try {
                const response = await this.$axios.get('/unauthenticate/randomProductslimit');
                this.sproducts = response.data;
            } catch (error) {
                console.error('Error fetching loadingProduct:', error);
            } finally { }

        },

        showhidePassword() {
            this.showPassword = !this.showPassword;
        },

        async setting() {
            try {
                this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/setting');
                this.pre_setting = response.data;
                this.sh_fees = response.data.shipping_fee;
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

        formatPrice(price) {
            if (typeof price === 'number') {
                return price.toFixed(2);
            }
            return price;
        },
        loadCart() {
            //  this.paymentGetway.price = this.totalPrice;
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
                totalPrice = uniqueCart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
                totalQuantity = uniqueCart.reduce((total, item) => total + (item.quantity || 0), 0);
                //  console.log("Total Item quantity: " + totalQuantity);
                // console.log("Total Shipping Fees:", this.pre_setting.shipping_fe);
                this.itemSubtotal = totalPrice;
                let cal_result = parseFloat(totalPrice) + parseFloat(totalShippingFees);
                console.log('Total Price for Unique Items:', cal_result);
                this.paymentGetway.price = cal_result;
                //END 

            } else {
                console.error('No cart data found in local storage.');
            }
        },

    }
}
</script>
<style scoped>
form p {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.text-danger {
    color: red;
    font-size: 13px;
    margin-top: 4px;
    display: block;
}

.login_submit button {
    padding: 10px;
    font-size: 14px;
}
</style>