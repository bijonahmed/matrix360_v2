<template>
<div>
    <Navbar />
    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">
                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Payment </h6>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 desktop_view">
                <LeftsidebarDesktop />
            </div>
            <div class="col-xl-9">
                <div class="profile_right">
                    <h1 class="desktop_view">Payment Option </h1>
                    <div class="cart_list">
                        <ul>
                            <li>
                                <div class="method_box">
                                    <h5>Want to add a new card?</h5>
                                    <p>Please make a new purchase and select add new card before checkout.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="card_list">
                        <ul>
                            <li>
                                <div class="card_pmt_details">
                                    <img src="/images/Visa.png" class="img-fulid" loading="lazy" alt="">
                                    <div>
                                        <h6>Ending with 5576</h6>
                                        <p>Expiry 12/2028</p>
                                    </div>
                                </div>
                                <button type="button">Remove <i class="fa-solid fa-trash-can"></i></button>
                            </li>
                            <li>
                                <div class="card_pmt_details">
                                    <img src="/images/Visa.png" class="img-fulid" loading="lazy" alt="">
                                    <div>
                                        <h6>Ending with 5576</h6>
                                        <p>Expiry 12/2028</p>
                                    </div>
                                </div>
                                <button type="button">Remove <i class="fa-solid fa-trash-can"></i></button>
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
        title: 'Payment',
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
