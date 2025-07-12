<template>
<div>

    <Navbar />

    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">

                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Order Details </h6>

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

                <div class="order_details">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="or_des" id="mobileScreen" style="background-color: #373737;">
                                <div class="des_title">
                                    <img src="/images/logo.png" class="img-fluid" loading="lazy" alt="">
                                </div>
                                <div class="des_body">
                                    <div class="body_title">
                                        <h1>Thank You For Your Order.</h1>
                                        <div class="user_details">
                                            <p><strong>Order Status:</strong>{{ orderstatus }}</p>
                                            <p><strong>Order Id:</strong>#{{ orderId }}</p>
                                            <p><strong>Payment With:</strong>{{ pay_msg }}</p>
                                            <p><strong>Trx Id:</strong>{{ txtid }}</p>
                                            <p><strong>Order date:</strong>{{ odate }}</p>
                                        </div>

                                    </div>
                                    <ul>
                                        <li v-for="(order, index) in orders" :key="index">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="d_p_image">
                                                        <img :src="order.thumbnail_img" class="img-fluid" loading="lazy" alt="">
                                                    </div>
                                                </div>
                                                <div class="col-md-9">
                                                    <div class="des_part">
                                                        <div>
                                                            <h1>{{ order.product_name }}</h1>
                                                            <p><strong>Quantity: </strong>{{ order.quantity }}</p>
                                                        </div>
                                                        <div>
                                                            <h6>{{ order.price }} TK.</h6>
                                                        </div>
                                                    </div>
                                                    <div class="des_ticket">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h3>
                                                                    <span v-if="order.ticketName !==''">
                                                                        <b><u style="color:rgb(178, 249, 37);">{{ order.ticketName }}</u></b>
                                                                    </span></h3>
                                                                <p><span>{{ order.ticketsNumber }}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <div class="text-end mt-2">
                                            <p>Item Subtotal : {{ itemstotal }} Tk</p>
                                            <p>Shipping Fee : {{ shipping_fee }} Tk</p>
                                            <!-- <p>VAT ({{ vat_percentage }} %): {{ percentageAmount }} Tk</p> -->
                                            <p>Wallet Balance: -{{ walletBalance }} Tk</p>
                                            <p>Promo DCF : -{{ copon_amount }} Tk</p>
                                            <p>Total Ammount: {{ total }} Tk</p>

                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="text-center">
                    <button id="capture_btn" class="btn_submit m-auto mb-2" @click="captureBtn">Take screenshort</button>
                </div>

            </div>
        </div>
    </div>

    <Footer />
    <MobileMenu/>
</div>
</template>

<script>
export default {
    middleware: "auth",
    head: {
        title: 'Order Details',
    },
    data() {
        return {
            loading: false,
            total: '',
            txtid: '',
            odate: '',
            pay_msg: '',
            itemstotal: 0,
            percentageAmount: 0,
            shipping_fee: 0,
            walletBalance: 0,
            copon_amount: 0,
            vat_percentage: '',
            orderstatus: '',
            orderId: '',
            customername: '',
            customeremail: '',
            orders: [],
            errors: {},
        }
    },
    mounted() {
        const orderId = this.$route.query.orderId;
        console.log("order I D: " + orderId);
        this.loadingOrders();
    },
    computed: {

        totalQuantity() {
            // Calculate total quantity
            return this.orders.reduce((total, order) => total + order.quantity, 0);
        },
        totalAmount() {
            // Calculate total amount
            return this.orders.reduce((total, order) => total + order.total, 0);
        },
    },
    methods: {

        captureBtn() {
            html2canvas($("#mobileScreen")[0], {
                scale: 3, // Resolution scale (2 for 2x, 3 for 3x, and so on)
            }).then(function (canvas) {
                var imgData = canvas.toDataURL();
                var downloadLink = document.createElement("a");
                downloadLink.href = imgData;
                downloadLink.download = "Order Details(winUp360.com).png";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });

        },
        async loadingOrders() {
            this.loading = true;
            const orderId = this.$route.query.orderId;
            await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
                    // this.orders = response.data.orderdata;
                    // this.orderstatus = response.data.orderrow;
                    this.orders = response.data.orderdata;
                    this.orderstatus = response.data.orderrow;
                    this.txtid = response.data.txtid;
                    this.odate = response.data.odate;
                    this.orderId = response.data.orderId;
                    this.pay_msg = response.data.pay_msg;
                    this.customername = response.data.customername;
                    this.customeremail = response.data.customeremail;
                    this.order_status = response.data.OrderStatus;
                    this.total = response.data.total;
                    this.itemstotal = response.data.itemstotal;
                    this.shipping_fee = response.data.shipping_fee;

                    this.shipping_fee = response.data.shipping_fee;
                    this.vat_percentage = response.data.vat_percentage;

                    this.percentageAmount = response.data.percentageAmount;
                    this.walletBalance = response.data.walletBalance;
                    this.copon_amount = response.data.copon_amount;

                    this.insertdata.orderstatus = response.data.orderstatus_id;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },
        addtoCart() {
            this.$router.push('/cart');
        },

    }
}
</script>

<style scoped>
table {
    background-color: #f2f2f2;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
}

th,
td {
    text-align: left;
    padding: 8px;
}
</style>
