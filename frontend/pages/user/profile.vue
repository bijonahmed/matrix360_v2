<template>
<div>
    <!-- desktop view profile section start here  -->
    <Navbar />
    <div class="container desktop_view">
        <div class="row">
            <div class="col-xl-3">
                <LeftsidebarDesktop />
            </div>

            <div class="col-xl-9">
                <div class="profile_right">
                    <h1>Personal details</h1>
                    <span v-if="loading">
                        <Loader />
                    </span>

                    <form @submit.prevent="updateprofile()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-container">
                                    <input type="hidden" v-model="insertdata.id">
                                    <input placeholder="Name " class="input-field" type="text" v-model="insertdata.name">
                                    <label for="input-field" class="input-label"> Name </label>
                                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6 d-none">
                                <div class="input-container">
                                    <input placeholder="Last Name " class="input-field" type="text" v-model="insertdata.lname">
                                    <label for="input-field" class="input-label">Last Name </label>
                                    <span class="text-danger" v-if="errors.lname">{{ errors.lname[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-container">
                                    <input placeholder="Email" class="input-field" type="text" v-model="insertdata.email">
                                    <label for="input-field" class="input-label">Email </label>
                                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-container">
                                    <input placeholder="Date Of Birth" onfocus="type='date'" class="input-field" type="text" v-model="insertdata.date_of_birth">
                                    <label for="input-field" class="input-label">Date Of Birth</label>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input_group input-container">
                                    <label for="nationality" class="s_label">Phone</label>
                                    <input placeholder="1700000000" id="mobile_code" class="input-field" type="text" v-model="insertdata.phone_number">
                                    <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input_group input-container">
                                    <label for="gender" class="s_label">Gender</label>
                                    <select name="" id="gender" class="form-control input-field" v-model="insertdata.gender">
                                        <option value="" selected disabled>Select One </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input_group input-container">
                                    <label for="nationality" class="s_label">Nationality</label>
                                    <select v-model="insertdata.nationality_id" class="form-control input-field" id="nationality" @change="onNationalityChange">
                                        <option value="">Select Nationality</option>
                                        <option v-for="country in countries" :value="country.id" :key="country.id" :selected="insertdata.nationality_id === 18">{{ country.name }}</option>
                                    </select>

                                    <span class="text-danger" v-if="errors.nationality_id">{{ errors.nationality_id[0] }}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input_group input-container">
                                    <label for="residence" class="s_label">City</label>
                                    <select v-model="insertdata.state_id" class="form-control input-field" id="state">
                                        <option value="" disabled>Select State</option>
                                        <option v-for="state in states" :value="state.id" :key="state.id">{{ state.name }}</option>
                                    </select>
                                    <span class="text-danger" v-if="errors.state_id">{{ errors.state_id[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input_group input-container">
                                    <label for="residence" class="s_label">Address 1</label>
                                    <input placeholder="Address 1" id="mobile_code" class="input-field" type="text" v-model="insertdata.address_1">
                                    <span class="text-danger" v-if="errors.address_1">{{ errors.address_1[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input_group input-container">
                                    <label for="residence" class="s_label">Address 2</label>
                                    <input placeholder="Address 2" id="mobile_code" class="input-field" type="text" v-model="insertdata.address_2">
                                    <span class="text-danger" v-if="errors.address_2">{{ errors.address_2[0] }}</span>
                                    <span class="input-highlight"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-container">
                                    <input type="submit" class="btn_submit" value="Update">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--desktop view profile section end here  -->
    <LeftsidebarMobile />
    <Footer />
    <MobileMenu/>
</div>
</template>

<script>
export default {
    middleware: "auth",
    head: {
        title: 'Profile',
    },
    data() {
        return {
            loading: false,
            countries: [],
            states: [],
            insertdata: {
                id: '',
                fname: '',
                lname: '',
                name: '',
                nationality_id: 18,
                state_id: '',
                date_of_birth: '',
                address_1: '',
                address_2: '',
                email: '',
                phone_number: '',
                country_residence: '',
                gender: '',

            },
            errors: {},
        }
    },
    mounted() {
        this.onNationalityChange();
        this.countrys();
        //$("#nationality").val(23);
        this.defaultLoadingData();
    },
    methods: {

        async onNationalityChange() {
            let nationalityId = this.insertdata.nationality_id;
            let url = `/user/checkState/${nationalityId}`;
            await this.$axios.get(url)
                .then(response => {
                    this.states = response.data.data;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                })

        },
        async updateprofile() {
            this.loading = true;
            const formData = new FormData();
            // formData.append('file', this.file);
            formData.append('name', this.insertdata.name);
            formData.append('lname', this.insertdata.lname);
            formData.append('email', this.insertdata.email);
            formData.append('phone_number', this.insertdata.phone_number);
            formData.append('nationality_id', this.insertdata.nationality_id);
            formData.append('state_id', this.insertdata.state_id);
            formData.append('address_1', this.insertdata.address_1);
            formData.append('address_2', this.insertdata.address_2);
            formData.append('date_of_birth', this.insertdata.date_of_birth);
            formData.append('country_residence', this.insertdata.country_residence);
            formData.append('gender', this.insertdata.gender);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            await this.$axios.post('/auth/updateprofile',
                formData, {
                    headers
                }).then((res) => {

                this.$router.push('/user/profile');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            }).finally(() => {
                this.loading = false; // Hide loader after response
            });
        },
        async countrys() {
            const response = await this.$axios.get('/unauthenticate/countrys');
            this.countries = response.data;
        },

        defaultLoadingData() {
            this.$axios.get('/auth/showProfileData').then(response => {
                console.log(response.data.data.fname)
                this.insertdata.id = response.data.data.id;
                this.insertdata.fname = response.data.data.fname;
                this.insertdata.lname = response.data.data.lname;
                this.insertdata.date_of_birth = response.data.data.date_of_birth;
                this.insertdata.name = response.data.data.name;
                this.insertdata.email = response.data.data.email;
                this.insertdata.phone_number = response.data.data.phone_number;
                // this.insertdata.nationality_id = response.data.data.nationality_id;
                this.insertdata.country_residence = response.data.data.country_residence;
                this.insertdata.gender = response.data.data.gender;
                this.insertdata.address_1 = response.data.data.address_1;
                this.insertdata.address_2 = response.data.data.address_2;
                  this.insertdata.state_id = response.data.data.state_id;
                this.insertdata.website = response.data.data.website;
                this.insertdata.github = response.data.data.github;
                this.insertdata.twitter = response.data.data.twitter;
                this.insertdata.instagram = response.data.data.instagram;
                this.insertdata.facebook = response.data.data.facebook;
                // $('#dataimages').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + response.data.dataImg + '" />');
            });
        },

        addtoCart() {
            this.$router.push('/cart');
        },

    }
}
</script>
