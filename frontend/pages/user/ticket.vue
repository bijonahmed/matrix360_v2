<template>
<div>
    <Navbar />
    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">
                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Active Ticket </h6>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 desktop_view">
                <LeftsidebarDesktop />
            </div>

            <div class="col-xl-9">
                <div class="profile_right">
                    <h1 class="desktop_view">Active Ticket</h1>
                    <span v-if="loading">
                        <Loader />
                    </span>
                    <div class="cart_list">
                        <ul>

                            <li v-for="(order, index) in orders" :key="index">
                                <div class="cart_item ">
                                    <!-- show list buttons -->
                                    <div class="t_list">
                                        <a href="javascript:" data-bs-toggle="collapse" :data-bs-target="'#collapseExample_' + index" aria-expanded="false" aria-controls="collapseExample">{{ order.ticketsSum }}</a>
                                    </div>
                                    <div class="row" style="width: 100%;">
                                        <div class="col-md-12">
                                            <div class="cart_left">
                                                <div class="c_price" style="position: unset;">
                                                    <img :src="order.thumbnail_img" class="img-fulid" style="width: 100%;" alt="">
                                                </div>
                                                <div class="cart_title">
                                                    <h1>Order ID: {{ order.orderId }}</h1>
                                                    <h1>{{ order.name }}</h1>
                                                    <p>BDT{{ order.price }}</p>
                                                    <span>Issue On:{{ order.placeOn }}</span><br/>
                                                    <span>{{ order.total_selling }} Out Of {{ order.total_tickts }}
                                                        <nuxt-link to="/" class="btn_submit" style="padding: 2px 8px; font-size: 10px; text-decoration: none;">Buy more</nuxt-link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="ticket_list_op">
                                                <div class="collapse" :id="'collapseExample_' + index">
                                                    <div class="card card-body">
                                                         <span>{{ order.implodedtickets }}</span>
                                                    </div>
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
    </div>
    <Footer />
    <MobileMenu/>
</div>
</template>

<script>
export default {
    middleware: "auth",
    head: {
        title: 'Active Ticket',
    },
    data() {
        return {
            loading: false,
            orders: [],
            order_status: [],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.defaultLoading();
    },
    methods: {
        async defaultLoading() {

            await this.$axios.get(`/order/activeTickets`).then(response => {
                    this.orders = response.data.orderdata;

                    return false;
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
.cart_title p {
	font-family: 'Rubik', sans-serif;
	color: #acff00;
	font-size: 19px;
	line-height: 10px;
	letter-spacing: -.63px;
	margin: 0 0 0px;
	font-weight: 500;
	margin-top: 10px;
}
</style>