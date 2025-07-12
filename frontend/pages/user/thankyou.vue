<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row mobile_view">
                <div class="col-md-12">
                    <div class="pay_m_title">
                        <nuxt-link to="/user/profile" class="btn_back" type="button"> <i class="fa-solid fa-arrow-left-long"></i>
                        </nuxt-link>
                        <h6>Your password successfully update.  </h6>
    
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 desktop_view">
                    <LeftsidebarDesktop />
                </div>
                <div class="col-xl-9">
                    <div class="profile_right">
                        <span v-if="loading">
                            <Loader />
                        </span>
                        <h1 class="desktop_view">Your password successfully update. </h1>
                         
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
            title: 'Thankyou',
        },
        data() {
            return {
                loading: false,
            }
        },
        mounted() {
    
        },
        methods: {
           
    
        }
    }
    </script>
    