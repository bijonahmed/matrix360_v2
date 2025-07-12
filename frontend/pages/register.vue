<template>
    <div>
        <Header />
        <!--breadcrumbs area start-->
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><nuxt-link to="/">home</nuxt-link></li>
                                <li>register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--breadcrumbs area end-->
        <!-- customer login start -->
        <div class="login_page_bg">
            <div class="container">
                <div class="customer_login">
                    <div class="row">
                        <!--register area start-->
                        <div class="col-lg-12 col-md-12">
                            <div class="account_form">
                                <h2>Register</h2>
                                <form @submit.prevent="saveData()" id="formrest">

                                    <p>
                                        <label>Name <span>*</span></label>
                                        <input type="text" v-model="insertdata.name" placeholder="Enter your name" />
                                        <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                    </p>

                                    <p>
                                        <label>Email <span>*</span></label>
                                        <input type="email" v-model="insertdata.email" placeholder="Enter your email" />
                                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                    </p>

                                    <p>
                                        <label>Phone Number <span>*</span></label>
                                        <input type="text" v-model="insertdata.phone_number"
                                            placeholder="01700000000" />
                                        <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0]
                                        }}</span>
                                    </p>

                                    <p>
                                        <label>Password <span>*</span></label>
                                        <input :type="showRegPassword ? 'text' : 'password'"
                                            v-model="insertdata.password" placeholder="Password" />
                                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                    </p>

                                    <p>
                                        <label>Confirm Password <span>*</span></label>
                                        <input :type="showRegConPassword ? 'text' : 'password'"
                                            v-model="insertdata.password_confirmation" placeholder="Confirm Password" />
                                        <span class="text-danger" v-if="errors.password_confirmation">{{
                                            errors.password_confirmation[0] }}</span>
                                    </p>

                                    <div class="login_submit">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <!--register area end-->
                    </div>
                </div>
            </div>
        </div>


        <Footer />

    </div>
</template>


<script>
export default {
    head: {
        title: 'Register',
    },
    data() {
        return {
            countries: [],
            invaliderror: '',
            insertdata: {
                name: '',
                fname: '',
                lname: '',
                email: '',
                phone_number: '',
                date_of_birth: '',
                nationality_id: '',
                gender: '',
                password: '',
                password_confirmation: '',
            },

            login: {
                email: '',
                password: '',
            },
            showRegPassword: false,
            showRegConPassword: false,
            notifmsg: '',
            errors: {},
        }
    },
    mounted() {
        //  this.countrys();
    },
    methods: {

        showhidePasswordreg() {
            this.showRegPassword = !this.showRegPassword;
        },

        showhidePasswordregConfig() {
            this.showRegConPassword = !this.showRegConPassword;
        },
        async countrys() {
            const response = await this.$axios.get('/unauthenticate/countrys');
            this.countries = response.data;
            //console.log("country" + response.data);
        },
        saveData() {
            const formData = new FormData();
            formData.append('name', this.insertdata.name);
            //formData.append('lname', this.insertdata.lname);
            formData.append('email', this.insertdata.email);
            formData.append('date_of_birth', this.insertdata.date_of_birth);
            formData.append('gender', this.insertdata.gender);
            formData.append('nationality_id', this.insertdata.nationality_id);
            formData.append('phone_number', this.insertdata.phone_number);
            formData.append('password', this.insertdata.password);
            formData.append('password_confirmation', this.insertdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/register',
                formData, {
                headers
            }).then((response) => {

                if (process.client) {
                    $("#register_msg").html("Congratulations! 🎉 You've successfully registered!");
                    this.$router.push({
                        path: '/login'
                    });
                    $("#pills-home-tab").click();
                }

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

        async userLogin() {
            try {

                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                    // Add other parameters as needed
                };
                let {
                    data
                } = await this.$axios.post('/auth/login', postData); //await this.login.post('/auth/login');
                await this.$auth.setUserToken(data.access_token);
                this.$router.push('/user/profile');

            } catch (err) {

                if (err.response.status === 422) {
                    this.errors = err.response.data.errors;
                    this.errorHandler(err);
                }

                console.log(err)
            }
        },

        errorHandler(error) {
            // Check for specific error messages
            if (error.response && error.response.data.errors && error.response.data.errors.account) {
                // Display the specific error message to the user
                console.log("error : " + error.response.data.errors.account[0]);
                this.invaliderror = error.response.data.errors.account[0];
                //this.$toast.error(error.response.data.errors.account[0]);
            } else {
                console.log("An error occurred. Please try again later.");
                // Display a generic error message for other types of errors
                //  this.$toast.error('An error occurred. Please try again later.');
            }
        },

    }
}
</script>
