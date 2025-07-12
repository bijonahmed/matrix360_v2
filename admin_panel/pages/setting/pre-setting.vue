<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Pre Setting</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <!--end row-->
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">

                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Company name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control name" v-model="insertdata.name" id="name" placeholder="Company name">
                                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control email" v-model="insertdata.email" placeholder="Email">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Address</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control address" v-model="insertdata.address" placeholder="Address">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">WhatsApp</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control whatsApp" v-model="insertdata.whatsApp" placeholder="WhatsApp">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Business Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control description" v-model="insertdata.description" placeholder="Business Description"></textarea>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Currency</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control currency" v-model="insertdata.currency" placeholder="Currency">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">FB Link</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control fblink" v-model="insertdata.fblink" placeholder="FBlink">
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Website</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control website" v-model="insertdata.website" placeholder="Website">
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Bkash Number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control bkash_number" v-model="insertdata.bkash_number" placeholder="Bkash Number">
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Bkash Fee</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control bkash_fee" v-model="insertdata.bkash_fee" placeholder="Bkash Fee">
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Nagad Number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nagad_number" v-model="insertdata.nagad_number" placeholder="Nagad Number">
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Nagad Fee</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nagad_fee" v-model="insertdata.nagad_fee" placeholder="Nagad Fee">
                                        </div>
                                    </div>

                                  
                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Rocket Number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control rocket_number" v-model="insertdata.rocket_number" placeholder="Rocket Number">
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Rocket Fee</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control rocket_fee" v-model="insertdata.rocket_fee" placeholder="Rocket Fee">
                                        </div>
                                    </div>

                                 
                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Upay Number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control upay_number" v-model="insertdata.upay_number" placeholder="Upay Number">
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Upay Fee</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control upay_fee" v-model="insertdata.upay_fee" placeholder="Upay Fee">
                                        </div>
                                    </div>
                                 
                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Wallet Blance</label>
                                        <div class="col-sm-9">
                                            <input type="number" class="form-control wallet_balance" @keypress="hanyaAngka" v-model="insertdata.wallet_balance" placeholder="Wallet Blance">
                                            <span class="text-danger" v-if="errors.wallet_balance">{{ errors.wallet_balance[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Shipping Fee</label>
                                        <div class="col-sm-9">
                                            <input type="number" class="form-control hanyaAngka" @keypress="hanyaAngka" v-model="insertdata.shipping_fee" placeholder="Shipping Fee">
                                            <span class="text-danger" v-if="errors.shipping_fee">{{ errors.shipping_fee[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3 d-none">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Vat Percentage (%)</label>
                                        <div class="col-sm-9">
                                            <input type="number" class="form-control hanyaAngka" @keypress="hanyaAngka" v-model="insertdata.vat_percentage" placeholder="Vat Percentage">
                                            <span class="text-danger" v-if="errors.vat_percentage">{{ errors.vat_percentage[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Copyright</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control copyright" v-model="insertdata.copyright" placeholder="Copyright">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
    <!--end page wrapper -->
</div>
</template>

<script>
export default {
    head: {
        title: 'Pre Setting',
    },
    data() {
        return {
            insertdata: {
                name: '',
                email: '',
                address: '',
                whatsApp: '',
                description: '',
                website: '',
                copyright: '',
                currency: '',
                fblink: '',
                bkash_number: '',
                bkash_fee: '',
                nagad_number: '',
                nagad_fee: '',
                rocket_number: '',
                rocket_fee: '',
                upay_number: '',
                upay_fee: '',
                wallet_balance: '',
                shipping_fee: '',
                vat_percentage: 0,
            },
            notifmsg: '',
            errors: {},
        }
    },
    created() {},

    async mounted() {
        await this.fetchData();

    },
    methods: {
        hanyaAngka(event) {
            var angka = event.which ? event.which : event.keyCode;
            if (angka != 46 && angka > 31 && (angka < 48 || angka > 57)) {
                event.preventDefault();
            }
        },

        async fetchData() {
            try {
                const response = await this.$axios.get(`/unauthenticate/setting`);
                this.insertdata.name = response.data.name;
                this.insertdata.email = response.data.email;
                this.insertdata.address = response.data.address;
                this.insertdata.whatsApp = response.data.whatsApp;
                this.insertdata.description = response.data.description;
                this.insertdata.copyright = response.data.copyright;
                this.insertdata.currency = response.data.currency;
                this.insertdata.fblink = response.data.fblink;
                this.insertdata.bkash_number = response.data.bkash_number;
                this.insertdata.bkash_fee = response.data.bkash_fee;
                this.insertdata.nagad_number = response.data.nagad_number;
                this.insertdata.nagad_fee = response.data.nagad_fee;
                this.insertdata.rocket_number = response.data.rocket_number;
                this.insertdata.rocket_fee = response.data.rocket_fee;
                this.insertdata.upay_number = response.data.upay_number;
                this.insertdata.upay_fee = response.data.upay_fee;
                this.insertdata.wallet_balance = response.data.wallet_balance;
                this.insertdata.shipping_fee = response.data.shipping_fee;
                this.insertdata.vat_percentage = response.data.vat_percentage;
                this.insertdata.website = response.data.website;

            } catch (error) {
                console.error(error);
            }
        },
        saveData() {
            const formData = new FormData();
            formData.append('name', this.insertdata.name);
            formData.append('email', this.insertdata.email);
            formData.append('address', this.insertdata.address);
            formData.append('whatsApp', this.insertdata.whatsApp);
            formData.append('description', this.insertdata.description);
            formData.append('copyright', this.insertdata.copyright);
            formData.append('currency', this.insertdata.currency);
            formData.append('fblink', this.insertdata.fblink);
            formData.append('bkash_number', this.insertdata.bkash_number);
            formData.append('bkash_fee', this.insertdata.bkash_fee);
            formData.append('nagad_number', this.insertdata.nagad_number);
            formData.append('nagad_fee', this.insertdata.nagad_fee);
            formData.append('rocket_number', this.insertdata.rocket_number);
            formData.append('rocket_fee', this.insertdata.rocket_fee);
            formData.append('upay_number', this.insertdata.upay_number);
            formData.append('upay_fee', this.insertdata.upay_fee);
            formData.append('wallet_balance', this.insertdata.wallet_balance);
            formData.append('shipping_fee', this.insertdata.shipping_fee);
            formData.append('vat_percentage', 0);
            formData.append('website', this.insertdata.website);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/setting/upateSetting',
                formData, {
                    headers
                }).then((res) => {

                this.success_noti();
                this.fetchData();
                this.$router.push('/setting/pre-setting');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },

    },
}
</script>
