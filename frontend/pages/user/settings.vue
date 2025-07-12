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
                    <span v-if="loading">
                        <Loader />
                    </span>
                    <h1 class="desktop_view">Chagne Password </h1>
                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-container">
                                    <input placeholder="New Password " class="input-field" type="password" v-model="passdata.password">
                                    <label for="input-field" class="input-label">New Password </label>
                                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-container">
                                    <input placeholder="Confirm Password " class="input-field" type="password" v-model="passdata.password_confirmation">
                                    <label for="input-field" class="input-label">Confirm Password </label>
                                    <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-container">
                                    <input class="btn_submit" value="Update Password" type="submit">
                                </div>
                            </div>
                        </div>
                    </form>
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
        title: 'Setting',
    },
    data() {
        return {
            loading: false,
            passdata: {
                password: '',
                password_confirmation: '',
            },
            notifmsg: '',
            errors: {},
        }
    },
    mounted() {

    },
    methods: {
        saveData() {
            this.loading = true;
            const formData = new FormData();
            formData.append('password', this.passdata.password);
            formData.append('password_confirmation', this.passdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updatePassword',
                formData, {
                    headers
                }).then((res) => {
                this.$router.push('/user/thankyou');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            }).finally(() => {
                this.loading = false; // Hide loader after response
            });
        },
        addtoCart() {
            this.$router.push('/cart');
        },

    }
}
</script>
