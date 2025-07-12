<template>
<div>
    <Navbar />
    <div class="container">
        <div class="row mobile_view">
            <div class="col-md-12">
                <div class="pay_m_title">
                    <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                    </nuxt-link>
                    <h6>Message </h6>

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
                <div class="profile_right">
                    <h1 class="desktop_view">Message</h1>
                    <div class="alert p-0">

                        <div class="notification_list">
                            <ul>
                                <li>
                                    <h6>From Admin</h6>
                                    <p>
                                        E-commerce platform known as "winup360.com." If it's a new platform, consider checking recent reviews, testimonials, and documentation to assess its features and reliability. Established platforms with good reputations may be safer choices, but your decision should align with your specific business needs and preferences. Ensure the platform meets security standards and offers the features required for your online business.</p>
                                </li>

                            </ul>
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
        title: 'Message',
    },
    data() {
        return {
            loading: true,
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },

    methods: {

        addtoCart() {
            this.$router.push('/cart');
        },

    }
}
</script>
