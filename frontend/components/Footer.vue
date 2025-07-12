<template>
    <div>
        <footer class="footer_widgets">
            <!--shipping area start-->

            <!--shipping area end-->
            <div class="footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="widgets_container">
                                <h3>CONTACT INFO</h3>
                                <div class="footer_contact">
                                    <div class="footer_contact_inner">
                                        <div class="contact_icone">
                                            <img src="/assets/img/icon/icon-phone.png" alt="">
                                        </div>
                                        <div class="contact_text">
                                            <p>Email: <br>
                                                <strong><a
                                                        href="mailto:support@matrix360sourcing.com">support@matrix360sourcing.com</a></strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="footer_col_container">
                                <div class="widgets_container widget_menu">
                                    <h3>Information</h3>
                                    <div class="footer_menu">
                                        <ul>
                                            <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                            <li><nuxt-link to="/terms-and-condition">Delivery Information</nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widgets_container">
                                    <h3>About Matrix360Sourcing</h3>
                                    <p style="color:white">Matrix360Sourcing is your trusted partner for high-quality
                                        aircraft parts and
                                        reliable sourcing solutions, delivering excellence worldwide with fast and
                                        secure service.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-md-12 text-center">
                            <div class="copyright_area">
                                <p>&copy; {{ currentYear }} <nuxt-link to="/"
                                        class="text-uppercase">Matrix360Sourcing</nuxt-link>.
                                    Made with <i class="fa fa-heart"></i> by <nuxt-link target="_blank"
                                        to="/">Matrix360Sourcing</nuxt-link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
        <!--footer area end-->




    </div>
</template>
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>
<style>
.section-padding-sm {
    padding: 20px 0;
}
</style>