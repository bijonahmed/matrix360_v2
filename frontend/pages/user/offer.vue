<template>
<div>
    <Navbar />
    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">
                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Offers </h6>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 desktop_view">
                <LeftsidebarDesktop />
            </div>
            <div class="col-xl-9">
                <div class="profile_right">
                    <h1 class="desktop_view">Offers</h1>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="bonus_section">
                                <div class="">
                                    <h5>Get 10% Extra <br>on Binance top-up</h5>
                                    <a href="#">Topup</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="bonus_section">
                                <div class="">
                                    <h5>Get 10% Extra <br>on Binance top-up</h5>
                                    <a href="#">Topup</a>
                                </div>
                            </div>
                        </div>
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
        title: 'Offer',
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

        addtoCart() {
            this.$router.push('/cart');
        },

    }
}
</script>
