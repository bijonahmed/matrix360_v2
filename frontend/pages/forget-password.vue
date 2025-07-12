<template>
<div>
    <Navbar />

    <!-- otp section start here  -->
    <section class="otp_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-6 my-3 mx-auto d-flex" bis_skin_checked="1">
                    <div style="background-color: #373737;border-radius: 20px;" class="container my-auto py-5" bis_skin_checked="1">
                        <div class="row g-0" bis_skin_checked="1">
                            <div class="col-11 col-sm-10 col-lg-9 col-xl-8 mx-auto" bis_skin_checked="1">
                                <h3 :class="{ 'text-danger': status === 0 }" class="fw-600 mb-4 text-center" v-if="status === 0">{{ verifymsg }}</h3>
                                <h3 class="fw-600 mb-4">Forget Password</h3>
                                <form @submit.prevent="saveData()" id="otp-screen" class="forms-sample">
                                    <div class="row g-3" bis_skin_checked="1">
                                        <div class="col-12" bis_skin_checked="1">
                                            <input type="text" placeholder="01xxxxxxx" class="form-control text-center text-6 py-2" v-model="insertdata.number" autocomplete="off">
                                            <span style="font-size:10px ;" class="text-danger" v-if="errors.number">{{ errors.number[0] }}</span>
                                        </div>

                                    </div>
                                    <div class="d-grid my-4" bis_skin_checked="1">
                                        <button class="btn" style="background-color: #b5f927;" type="submit">Submit</button>
                                    </div>
                                </form>
                                <!-- <p class="text-center text-light mb-0">I didn't get your code? <a style="color: #b5f927;" href="#">Resend
                                            code</a></p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- otp section end here  -->

    <Footer />
    <MobileMenu />
</div>
</template>

    
<script>
export default {
    head: {
        title: 'Forget Password',
    },
    data() {
        return {
            countries: [],
            invaliderror: '',
            insertdata: {
                number: '',
            },
            verifymsg: '',
            status: '',
            errors: {},
        }
    },
    computed: {
       
    },
    mounted() {
        //  this.countrys();
    },
    methods: {

        saveData() {
            const formData = new FormData();
            formData.append('number', this.insertdata.number);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/unauthenticate/forgetPassword',
                formData, {
                    headers
                }).then((response) => {

                if (response.data.otp_sts == 1) {

                    this.verifymsg = response.data.message;
                    this.status = response.data.otp_sts;
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: response.data.message,
                    });
                    if (process.client) {
                        this.$router.push({
                            path: '/forget-password'
                        });
                        $("#pills-home-tab").click();
                    }
                } else {
                    this.verifymsg = response.data.message;
                    this.status = response.data.otp_sts;
                }
                console.log(response.data.message);

            }).catch(error => {
                if (error.response.status === 422) {
                    console.log("---" + error.response.data.errors);
                    this.errors = error.response.data.errors;
                }
            });
        },

    }
}
</script>
