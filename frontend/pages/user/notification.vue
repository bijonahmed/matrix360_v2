<template>
<div>
    <Navbar />
    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">
                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Notification </h6>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 desktop_view">
                <LeftsidebarDesktop />
            </div>
            <div class="col-xl-9">
                <div class="profile_right">
                    <h1 class="desktop_view">Notification & Performance </h1>
                    <div class="alert p-0">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="total_amt">
                                    <ul>
                                        <h6>Promotional Notifications</h6>
                                        <p>Includes campaign launch, offers and newsletter.</p>
                                        <li>
                                            <h1>Email</h1>
                                            <div class="checkboxes__item">
                                                <label class="checkbox style-e">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__checkmark"></div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <h1>SMS</h1>
                                            <div class="checkboxes__item">
                                                <label class="checkbox style-e">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__checkmark"></div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <h1>WhatsApp</h1>
                                            <div class="checkboxes__item">
                                                <label class="checkbox style-e">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__checkmark"></div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <h1>Push Notifications</h1>
                                            <div class="checkboxes__item">
                                                <label class="checkbox style-e">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__checkmark"></div>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
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
        title: 'Notification',
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