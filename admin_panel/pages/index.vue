<template>
<div class="page-wrapper" v-if="$auth.loggedIn">
    <div class="page-content">
        <span v-if="userData.role_id == 1">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5">

                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="#">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Total Customers:</p>
                                        <b>{{ countCust }}</b>
                                    </div>

                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col d-none">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/hrm/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">HRM</p>
                                    </div>

                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/ecommarce/product-list">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Products:</p>
                                        <b>{{ countProduct }}</b>
                                    </div>

                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/orders/order-list">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Today Orders:</p>
                                        <b>{{ countOrder }}</b>
                                    </div>

                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col d-none">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/ecommarce/ticket-list">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-center text-white" style="text-align: center;">
                                        <p class="mb-0 text-center"> All Ticket History</p>

                                    </div>

                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

            </div>

            <!-- start cart -->

            <div class="card text-center d-none">
                <div class="card-header">
                    SMS API
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ balance }} Tk.</h5>
                    <div style="display: none;" class="customerSpinner">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary" @click="defaultLoadingData">Refresh</a>
                </div>
                <div class="card-footer text-muted">
                    Login url : <a href="http://139.99.39.237/login" target="_blank">139.99.39.237</a>, &nbsp;Login id: bijonbd,&nbsp;Passwd: EUCS6ZGY
                </div>
            </div>
            <!-- end cart -->
        </span>

        <span v-else-if="userData.role_id==2">

            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5">

                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/profile">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">View Profile</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-envelope fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/employee/leave-approval-list">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Leave Approval</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-envelope fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

            </div>
        </span>

        <!--end row-->
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
    </div>
</div>
</template>

<script>
export default {
    head: {
        title: 'Dashboard',
    },

    data() {
        return {
            userData: {
                role_id: '',
                countProduct: 0,
                countOrder: 0,
                countCust: 0,
            },

            balance: 0,
        }
    },
    mounted() {
        this.defaultLoadingData();
    },
    computed: {

        loggedIn() {
            return this.$store.state.auth.loggedIn;
        },
        user() {
            return this.$store.state.auth.user
        }
    },
    methods: {

        async defaultLoadingData() {

            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/auth/showProfileData`);
                console.log(response.data.sms_balance)
                this.userData.role_id = response.data.data.role_id;
                this.balance = response.data.sms_balance;
                this.countProduct = response.data.countProduct;
                this.countOrder = response.data.countOrder;
                this.countCust = response.data.countCust;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }

        },
    },

}
</script>

<style>
</style>
