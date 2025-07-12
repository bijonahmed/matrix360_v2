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
                                <h2>
                                    <center>
                                        <p>Thank you for your payment</p>
                                    </center>
                                </h2>
                                <div class="total_amt">
                                    <ul>
                                        <li class="text-center">
                                            <h1>Payment Summary</h1>
                                        </li>
                                        <li>
                                            <p>Status</p>
                                            <p>{{ order_status }}</p>
                                        </li>
                                        <li>
                                            <p>Payment Type</p>
                                            <p>{{ payment_getway }}</p>
                                        </li>
                                        <li>
                                            <p>Order Id</p>
                                            <p>{{ orderId }}</p>
                                        </li>
                                        <li>
                                            <p>Total</p>
                                            <p>{{ total }}</p>
                                        </li>

                                        <li>
                                            <p>Place On</p>
                                            <p>{{ placeOn }}</p>
                                        </li>

                                    </ul>
                                    <div class="row d-none">
                                        <div class="col-md-8">
                                            <p>If you have any questions, please feel free to send us a direct message. <a href="whatsapp://send?phone=1234567890&text=Hello%20from%20your%20website!">Send WhatsApp Message</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
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
        title: 'Order Summary',
    },
    data() {
        return {
            order_status: '',
            payment_getway: '',
            orderId: '',
            total: 0,
            placeOn: ''
        }
    },
    mounted() {
        const orderid = this.$route.params.slug;
        this.orderHistory(orderid);

    },
    methods: {
        async orderHistory(orderid) {
            const response = await this.$axios.get(`/order/getOrderhistory/${orderid}`);
            this.order_status = response.data.order_status;
            this.payment_getway = response.data.payment_getway;
            this.orderId = response.data.orderId;
            this.total = response.data.total;
            this.placeOn = response.data.placeOn;
        },
    }
}
</script>
