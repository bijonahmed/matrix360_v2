<template>
<div>

    <Navbar />

    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">

                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Order List </h6>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 desktop_view">
                <LeftsidebarDesktop />
            </div>
            <div class="col-xl-9">
                <h4>Orders </h4>
                <span v-if="loading">
                    <Loader />
                </span>
                <div class="order_list">
                    <ul>
                        <li>
                            <div>
                                <h6>Order ID</h6>
                            </div>
                            <div>
                                <h6>Date</h6>
                            </div>
                            <div>
                                <h6>Ammount</h6>
                            </div>
                            <div>
                                <h6>Status</h6>
                            </div>
                            <div>
                                <h6>Action</h6>
                            </div>
                        </li>
                        <li v-for="order in orders" :key="order.id">
                            <div>
                                <p>{{ order.orderId }}</p>
                            </div>
                            <div>
                                <p>{{ order.placeOn }}</p>
                            </div>
                            <div>
                                <p>{{ order.total }} TK.</p>
                            </div>
                            <div>
                                <p>{{ order.name }}</p>
                            </div>
                            <div>
                                <a href="#" class="btn-submit" @click="orderDetails(order.orderId)"><i class="fa-solid fa-file-invoice"></i></a>
                            </div>
                        </li>
                        
                    </ul>
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
        title: 'Order List',
    },
    data() {
        return {
            loading: false,
            orders: [],
            errors: {},
        }
    },
    mounted() {
        this.loadingOrders();
    },
    methods: {
        orderDetails(orderId) {

            this.$router.push({
                path: '/user/order-details',
                query: {
                    orderId: orderId
                }
            })

        },
        async loadingOrders() {
            this.loading = true;
            await this.$axios.get(`/order/allOrders`).then(response => {
                    this.orders = response.data.orderdata;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
        addtoCart() {
            this.$router.push('/cart');
        },

    }
}
</script>
