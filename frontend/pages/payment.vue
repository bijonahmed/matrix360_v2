<template>
<div>
    <Navbar />
    <section class="about_">
        <div class="container">
            <div class="row">
                <section class="payment_opsection">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="pay_options">
                                    <span v-if="loading">
                                        <Loader />
                                    </span>
                                    <div class="pay_option">
                                        <a href="javascript:" @click="loadingPopup(1)">
                                            <h6>Credit/Debit Cards</h6>
                                            <img src="/images/cards.png" class="cards_pic img-fulid" loading="lazy" alt="">
                                        </a>
                                    </div>
                                    <div class="pay_method_img">
                                        <a href="javascript:" class="bkash_op" @click="loadingPopup(2)">
                                            <img src="/images/Bkash.png" class="cards_pic img-fulid" loading="lazy" alt="">
                                        </a>
                                    </div>
                                    <div class="pay_method_img">
                                        <a href="javascript:" class="nogot_pop" @click="loadingPopup(3)">
                                            <img src="/images/nogot.png" class="cards_pic img-fulid" loading="lazy" alt="">
                                        </a>
                                    </div>
                                    <div class="pay_method_img d-none">
                                        <a href="javascript:" class="roket_pop" @click="loadingPopup(4)">
                                            <img src="/images/Roket.png" class="cards_pic img-fulid" loading="lazy" alt="">
                                        </a>
                                    </div>
                                    <div class="pay_method_img">
                                        <a href="javascript:" class="upay_pop" @click="loadingPopup(5)">
                                            <img src="/images/Upay.png" class="cards_pic img-fulid" loading="lazy" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- pop_cards -->
        <div class="pop_cards pay_pop">
            <div class="content_section">
                <div class="pop_head">
                    <button class="btn-close px-3 ms-auto" @click="loadingclosePopup(1)"></button>
                </div>
                <div class="">
                    <h1 class="text-center" style="color:black">Upcoming.....</h1>
                </div>

                <div class="pop_footer">
                    <img src="images/logo.png" class="img-fluid" loading="lazy" alt="">
                </div>
            </div>
        </div>

        <!-- 1/bkash popup -->
        <div class="pop_bkash pay_pop">
            <div class="content_section">
                <div class="text-end" style="background-color: #ecf9ff;">

                </div>
                <div class="pop_head">
                    <img src="images/Bkash.png" class="img-fluid logo_img" loading="lazy" alt="">
                    <button class="btn-close px-3 ms-auto" @click="loadingclosePopup(2)"></button>
                </div>
                <div class="a_details">
                    <form @submit.prevent="submitOrder()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                        <ul>
                            <li>
                                <h6>Account Number:</h6>
                                <div class="ac_n">
                                    <div class="position-relative">
                                        <p class="" id="copyText1">{{ bkash_number }}</p>
                                        <p class="c_txt position-absolute">Copy</p>
                                    </div>
                                    <button type="button" @click="copyNumber(1)" class="btn_copy"> <i class="fa-regular fa-copy"></i></button>
                                </div>
                            </li>
                            <li>
                                <h6>Total Payable Amount: </h6>
                                <h1><strong style="color: #aded28;">{{ payableamount }}</strong>TK </h1>
                            </li>
                            <div class="trx_img">
                                <p>How to get Trx Id?</p>
                                <img src="/images/transection_image.png" class="img-fluid" loading="lazy" alt="">
                            </div>
                            <li>
                                <h6>Trx ID: </h6>
                                <div>
                                    <p style="color: #aded28; font-size: 12px;">Trx Id Is Required</p>
                                    <div class="d-flex align-items-center">
                                        <input type="text" v-model="orderData.txtid" id="txtid" placeholder="Enter Transection Id">
                                        <!-- <button class="btn_submit" id="pasteBtn" type="button">paste</button> -->
                                    </div>
                                    <span class="text-black" v-if="errors.txtid">{{ errors.txtid[0] }}</span>
                                </div>
                            </li>
                            <div class="text-center">
                                <button class="btn_submit" type="submit">Confirm Order</button>
                            </div>
                        </ul>
                    </form>
                </div>
                <div class="pop_footer">
                    <img src="images/logo.png" class="img-fluid" loading="lazy" alt="">
                </div>
            </div>
        </div>
        <!-- 2.Nogot popup -->
        <div class="pop_nogot pay_pop">
            <div class="content_section">
                <div class="text-end" style="background-color: #ecf9ff;">

                </div>
                <div class="pop_head">
                    <img src="images/nogot.png" class="img-fluid logo_img" loading="lazy" alt="">
                    <button class="btn-close px-3 ms-auto" @click="loadingclosePopup(3)"></button>
                </div>
                <div class="a_details">
                    <form @submit.prevent="submitOrder()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                        <ul>
                            <li>
                                <h6>Account Number:</h6>
                                <div class="ac_n">
                                    <div class="position-relative">
                                        <p class="" id="copyText2">{{ nagad_number }}</p>
                                        <p class="c_txt position-absolute">Copy</p>
                                    </div>
                                    <button type="button" @click="copyNumber(2)" class="btn_copy"> <i class="fa-regular fa-copy"></i></button>
                                </div>
                            </li>
                            <li>
                                <h6>Total Payable Ammount: </h6>
                                <h1><strong style="color: #aded28;">{{ payableamount }}</strong>TK </h1>
                            </li>
                            <div class="trx_img">
                                How to get Trx Id?
                                <img src="images/transection_image.png" class="img-fluid" loading="lazy" alt="">
                            </div>
                            <li>
                                <h6>Trx ID: </h6>
                                <div>
                                    <p style="color: #aded28; font-size: 12px;">Trx Id Is Required</p>
                                    <div class="d-flex align-items-center">
                                        <input type="text" v-model="orderData.txtid" id="txtid" placeholder="Enter Transection Id">
                                        <!-- <button class="btn_submit" id="pasteBtn" type="button">paste</button> -->
                                    </div>
                                    <span class="text-black" v-if="errors.txtid">{{ errors.txtid[0] }}</span>
                                </div>
                            </li>
                            <div class="text-center">
                                <button class="btn_submit" type="submit">Confirm Order</button>
                            </div>
                        </ul>
                    </form>
                </div>
                <div class="pop_footer">
                    <img src="images/logo.png" class="img-fluid" loading="lazy" alt="">
                </div>
            </div>
        </div>
        <!-- 3.Roket popup -->
        <div class="pop_roket pay_pop">
            <div class="content_section">
                <div class="text-end" style="background-color: #ecf9ff;">

                </div>
                <div class="pop_head">
                    <img src="images/Roket.png" class="img-fluid logo_img" loading="lazy" alt="">
                    <button class="btn-close px-3 ms-auto" @click="loadingclosePopup(4)"></button>
                </div>
                <div class="a_details">
                    <form @submit.prevent="submitOrder()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                        <ul>
                            <li>
                                <h6>Account Number:</h6>
                                <div class="ac_n">
                                    <div class="position-relative">
                                        <p class="" id="copyText3">{{ rocket_number }}</p>
                                        <p class="c_txt position-absolute">Copy</p>
                                    </div>
                                    <button type="button" @click="copyNumber(3)" class="btn_copy"> <i class="fa-regular fa-copy"></i></button>
                                </div>
                            </li>
                            <li>
                                <h6>Total Payable Ammount: </h6>
                                <h1><strong style="color: #aded28;">{{ payableamount }}</strong>TK </h1>
                            </li>
                            <div class="trx_img">
                                <img src="images/transection_image.png" class="img-fluid" loading="lazy" alt="">
                            </div>
                            <li>
                                <h6>Trx ID: </h6>
                                <div>
                                    <p style="color: #aded28; font-size: 12px;">Trx Id Is Required</p>
                                    <div class="d-flex align-items-center">
                                        <input type="text" v-model="orderData.txtid" id="txtid" placeholder="Enter Transection Id">
                                        <!-- <button class="btn_submit" id="pasteBtn" type="button">paste</button> -->
                                    </div>
                                    <span class="text-black" v-if="errors.txtid">{{ errors.txtid[0] }}</span>
                                </div>
                            </li>
                            <div class="text-center">
                                <button class="btn_submit" type="submit">Confirm Order</button>
                            </div>
                        </ul>
                    </form>
                </div>
                <div class="pop_footer">
                    <img src="images/logo.png" class="img-fluid" loading="lazy" alt="">
                </div>
            </div>
        </div>
        <!-- 4.Upay popup -->
        <div class="pop_upay pay_pop">
            <div class="content_section">
                <div class="text-end" style="background-color: #ecf9ff;">

                </div>
                <div class="pop_head">
                    <img src="images/Upay.png" class="img-fluid logo_img" loading="lazy" alt="">
                    <button class="btn-close px-3 ms-auto" @click="loadingclosePopup(5)"></button>
                </div>
                <div class="a_details">
                    <form @submit.prevent="submitOrder()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                        <ul>
                            <li>
                                <h6>Account Number:</h6>
                                <div class="ac_n">
                                    <div class="position-relative">
                                        <p class="" id="copyText4">{{ upay_number }}</p>
                                        <p class="c_txt position-absolute">Copy</p>
                                    </div>
                                    <button type="button" @click="copyNumber(4)" class="btn_copy"> <i class="fa-regular fa-copy"></i></button>
                                </div>
                            </li>
                            <li>
                                <h6>Total Payable Ammount: </h6>
                                <h1><strong style="color: #aded28;">{{ payableamount }}</strong>TK </h1>
                            </li>
                            <div class="trx_img">
                                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">How to get Trx Id?</a>
                                <img src="/images/transection_image.png" class="img-fluid" loading="lazy" alt="">
                            </div>
                            <li>
                                <h6>Trx ID: </h6>
                                <div>
                                    <p style="color: #aded28; font-size: 12px;">Trx Id Is Required</p>
                                    <div class="d-flex align-items-center">
                                        <input type="text" v-model="orderData.txtid" id="txtid" placeholder="Enter Transection Id">
                                        <!-- <button class="btn_submit" id="pasteBtn" type="button">paste</button> -->
                                    </div>
                                    <span class="text-black" v-if="errors.txtid">{{ errors.txtid[0] }}</span>
                                </div>
                            </li>
                            <div class="text-center">
                                <button class="btn_submit" type="submit">Confirm Order</button>
                            </div>
                        </ul>
                    </form>
                </div>
                <div class="pop_footer">
                    <img src="images/logo.png" class="img-fluid" loading="lazy" alt="">
                </div>
            </div>
        </div>

    </section>
    <Footer />
    <MobileMenu />
</div>
</template>

<script>
export default {
    middleware: "auth",
    head: {
        title: 'Payment',
    },
    data() {
        return {

            orderData: {
                txtid: '',
            },
            cart: [],
            payableamount: 0,
            subtotal: 0,
            nagad_number: '',
            nagad_fee: 0,
            bkash_number: '',
            bkas_fee: 0,
            rocket_number: '',
            rocket_fee: 0,
            upay_number: '',
            upay_fee: 0,
            select_pay_type: '',
            loading: true,
            errors: {},
        }
    },
    mounted() {
        this.getCartTotal();
        this.setting();
        // Use setTimeout to delay hiding the loader after 5 seconds
        setTimeout(() => {
            this.loading = false;
        }, 1000); // 5000 milliseconds = 5 seconds
    },
    methods: {

        async submitOrder() {
            const payment_getway = this.select_pay_type;
            //console.log("submit order : " + this.orderData.txtid);
            this.loading = true;
            const headers = {
                'Content-Type': 'application/json'
            };

            const savedCart = localStorage.getItem('cart');
            const osummary = localStorage.getItem('orderSummary');
            const summarydata = JSON.parse(osummary);
            // console.log("subtotal: " + summarydata.subtotal);
            let cartData = JSON.parse(savedCart);

            const requestData = {
                cart: cartData,
                payment_getway: payment_getway,
                itemsubtotal: summarydata.itemsubtotal,
                totalShippingFees: summarydata.totalShippingFees,
                subtotal_amt: summarydata.subtotal,
                percentageAmount: summarydata.percentageAmount,
                walletBalance: summarydata.walletBalance,
                copon_amount: summarydata.copon_amount,
                txtid: this.orderData.txtid
            };
            console.log(requestData);
            //return false; 
            await this.$axios.post('/order/submitOrder', requestData, {
                    headers
                })
                .then((res) => {
                    this.clearCart();
                    const OrderID = res.data.orderid;
                    this.$router.push(`/order/${OrderID}`);
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },

        errorHandler(error) {
            // Check for specific error messages
            if (error.response && error.response.data.errors && error.response.data.errors.account) {
                // Display the specific error message to the user
                console.log("error : " + error.response.data.errors.account[0]);
                this.invaliderror = error.response.data.errors.account[0];
                //this.$toast.error(error.response.data.errors.account[0]);
            } else {
                console.log("An error occurred. Please try again later.");
                // Display a generic error message for other types of errors
                //  this.$toast.error('An error occurred. Please try again later.');
            }
        },

        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            localStorage.removeItem('subtotal');
            this.cart = [];
            this.subtotal = 0;
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
        getCartTotal() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const cartData = JSON.parse(savedCart);
                const uniqueCart = cartData.filter((item, index, self) =>
                    index === self.findIndex((t) => t.id === item.id)
                );

                const osummary = localStorage.getItem('orderSummary');
                if (osummary !== null) {
                    const summarydata = JSON.parse(osummary);
                    console.log("subtotal: " + summarydata.subtotal);
                    //console.log("percentageAmount: " + summarydata.percentageAmount);
                    //console.log("walletBalance: " + summarydata.walletBalance);
                    //console.log("copon_amount: " + summarydata.copon_amount);
                    let subtotal_amt = summarydata.subtotal;
                    this.subtotal = subtotal_amt; //totalPrice;
                    console.log('Total Price for Unique Items:', subtotal_amt);
                } else {
                    console.log("No order summary found in localStorage");
                }
                //return false;

            } else {
                console.error('No cart data found in local storage.');
            }
        },
        copyNumber(number) {
            const el = document.createElement('textarea');
            let msg = "";
            if (number === 1) {
                el.value = this.bkash_number;
                msg = "Bkash";
            } else if (number === 2) {
                el.value = this.nagad_number;
                msg = "Nagad";
            } else if (number === 3) {
                el.value = this.rocket_number;
                msg = "Rocket";
            } else if (number === 4) {
                el.value = this.upay_number;
                msg = "Upay";
            }
            this.commonCopy(el);
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
                title: `${msg} number copied!`
            });

        },

        commonCopy(el) {
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        },

        async setting() {
            const response = await this.$axios.get('/unauthenticate/setting');
            this.nagad_number = response.data.nagad_number;
            this.bkash_number = response.data.bkash_number;
            this.rocket_number = response.data.rocket_number;
            this.upay_number = response.data.upay_number;
            //fee
            this.nagad_fee = response.data.nagad_fee;
            this.bkas_fee = response.data.bkash_fee;
            this.rocket_fee = response.data.rocket_fee;
            this.upay_fee = response.data.upay_fee;
            console.log("setting: bkash fee" + response.data.bkash_fee);

        },

        loadingPopup(number) {
            if (number === 1) {
                $(".pop_cards").fadeIn();
            } else if (number === 2) {
                console.log("bkash fee: :" + this.bkas_fee);
                const totalamount = parseFloat(this.subtotal);
                const fee = parseFloat(this.bkas_fee);
                const result = (totalamount * fee) / 100;
                const subtotal = (totalamount + result).toFixed(2);
                this.payableamount = subtotal;
                console.log("total payable amount: " + subtotal);
                $(".pop_bkash").fadeIn();
            } else if (number === 3) {
                console.log("nagod fee: :" + this.nagad_fee);
                const totalamount = parseFloat(this.subtotal);
                const fee = parseFloat(this.nagad_fee);
                const result = (totalamount * fee) / 100;
                const subtotal = (totalamount + result).toFixed(2);
                this.payableamount = subtotal;
                console.log("total payable amount: " + subtotal);
                $(".pop_nogot").fadeIn();
            } else if (number === 4) {
                console.log("roket fee: :" + this.rocket_fee);
                const totalamount = parseFloat(this.subtotal);
                const fee = parseFloat(this.rocket_fee);
                const result = (totalamount * fee) / 100;
                const subtotal = (totalamount + result).toFixed(2);
                this.payableamount = subtotal;
                console.log("total payable amount: " + subtotal);
                $(".pop_roket").fadeIn();
            } else if (number === 5) {
                console.log("upay fee: :" + this.upay_fee);
                const totalamount = parseFloat(this.subtotal);
                const fee = parseFloat(this.upay_fee);
                const result = (totalamount * fee) / 100;
                const subtotal = (totalamount + result).toFixed(2);
                this.payableamount = subtotal;
                console.log("total payable amount: " + subtotal);
                $(".pop_upay").fadeIn();
            }
            this.select_pay_type = number;
        },

        loadingclosePopup(number) {
            if (number === 1) {
                $(".pop_cards").fadeOut();
            } else if (number === 2) {
                $(".pop_bkash").fadeOut();
            } else if (number === 3) {
                $(".pop_nogot").fadeOut();
            } else if (number === 4) {
                $(".pop_roket").fadeOut();
            } else if (number === 5) {
                $(".pop_upay").fadeOut();
            }
        },
        ordersummary() {
            this.$router.push('/ordersummary');

        },
    }
}
</script>

<style scoped>
.content_section ul {
    margin-bottom: 0 !important;
}
</style>
