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
                                <li class="breadcrumb-item" aria-current="page">
                                    <router-link to="/orders/order-list">Orders</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">{{ orderid }}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!--end breadcrumb-->
                <div align="right"><button @click="printDiv('printMe')">Print</button></div>
                <center><strong>Order Status: {{ orderstatus }}</strong></center>
                <center class="text-white bg-danger">Note:Inventory calculation will happen when you use [Approved &
                    Delivered] status</center>
                <!--end row-->
                <div class="row" id='printMe'>
                    <div class="col-xl-12 mx-auto">
                        <div class="card border-top border-0 border-4 border-info">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <center>ORDER ID: {{ orderid }}</center>
                                    <div class="row">
                                        <div class="col">
                                            <h4>Billing Information </h4>
                                            <table class="w-100">
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">First Name</td>
                                                        <td>{{ orderInfo.billing_first_name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Last Name</td>
                                                        <td>{{ orderInfo.billing_last_name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Email</td>
                                                        <td>{{ orderInfo.billing_email }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Phone</td>
                                                        <td>{{ orderInfo.billing_phone }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Street Address</td>
                                                        <td>{{ orderInfo.billing_street_address }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Suite</td>
                                                        <td>{{ orderInfo.billing_appar_suite_address }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">State</td>
                                                        <td>{{ orderInfo.billing_state }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">Post Code</td>
                                                        <td>{{ orderInfo.billing_post_code_zip }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!-- <div>Customer Name: {{ customername }}, Customer Email: {{ customeremail }}</div> -->


                                        </div>

                                        <div class="col">
                                            <span style="text-align: right;">
                                                <h4>Shipping Information</h4>
                                                <table class="w-100">
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">First Name</td>
                                                            <td>{{ orderInfo.shipper_first_name }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Last Name</td>
                                                            <td>{{ orderInfo.shipper_last_name }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Email</td>
                                                            <td>{{ orderInfo.shipper_email }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Phone</td>
                                                            <td>{{ orderInfo.shipper_phone_number }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Street Address</td>
                                                            <td>{{ orderInfo.shipper_address }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Suite</td>
                                                            <td>{{ orderInfo.shipper_apprt_suite_addr }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">State</td>
                                                            <td>{{ orderInfo.shipper_state }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">Post Code</td>
                                                            <td>{{ orderInfo.shipper_zip }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </span>
                                        </div>

                                    </div>

                                    <table width="100%" border="0" class="table table-bordered hover">
                                        <tr>
                                            <td width="22">#</td>
                                            <td>Images</td>
                                            <td width="916">Item Description </td>
                                            <td width="63">
                                                <div align="center">Size</div>
                                            </td>
                                            <td width="63">
                                                <div align="center">Qty</div>
                                            </td>

                                            <td width="80">
                                                <div align="center">Price</div>
                                            </td>
                                            <td width="80">
                                                <div align="center">Total</div>
                                            </td>
                                        </tr>
                                        <tr v-for="(order, index) in orders" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>
                                                <img :src="order.thumbnail_img" alt="Thumbnail Image"
                                                    style="height:50px;width:50px;" />
                                            </td>
                                            <td>{{ order.product_name }}<br>

                                            </td>
                                            <td>
                                                <div align="center">{{ order.attri_val_name }}</div>
                                            </td>
                                            <td>
                                                <div align="center">{{ order.quantity }}</div>
                                            </td>

                                            <td>
                                                <div align="center">{{ order.price }}</div>
                                            </td>
                                            <td>
                                                <div align="center">{{ order.total }}</div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td colspan="4">
                                                <div align="right">Sub Total </div>
                                            </td>

                                            <td>
                                                <div align="center">${{ subtotal }}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td colspan="4">
                                                <div align="right">Shipping Fee </div>
                                            </td>

                                            <td>
                                                <div align="center">${{ shipping_fee }}</div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td colspan="4">
                                                <div align="right">Total </div>
                                            </td>

                                            <td>
                                                <div align="center">${{ itemstotal }}</div>
                                            </td>
                                        </tr>

                                    </table>


                                    <hr />
                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                        enctype="multipart/form-data">
                                        <div v-if="approv_dev_sts !== 10">
                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Order
                                                    Status</label>
                                                <div class="col-sm-9">
                                                    <select name="status" v-model="insertdata.orderstatus"
                                                        class="form-select orderstatus">
                                                        <option v-for="(option, index) in order_status" :key="index"
                                                            :value="option.id">
                                                            {{ option.name }}
                                                        </option>
                                                    </select>
                                                </div>


                                                <div class="col-sm-12">
                                                    <br />
                                                    <button type="submit" class="btn btn-success px-5 w-100"><i
                                                            class="bx bx-check-circle mr-1"></i> Submit</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-else>
                                            <b>
                                                <center>
                                                    <div class="alert alert-danger">This order is locked because its
                                                        status is already Approved & Delivered</div>
                                                </center>
                                            </b>
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

    data() {
        return {
            total: 0,
            orderstatus: '',
            orderid: '',
            approv_dev_sts: '',
            customername: '',
            customeremail: '',
            itemstotal: 0,
            percentageAmount: 0,
            shipping_fee: 0,
            subtotal: 0,
            copon_amount: 0,
            vat_percentage: '',
            insertdata: {
                orderId: this.$route.query.orderId,
                orderstatus: '',
            },
            orders: [],
            orderInfo: [],
            order_status: [],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.defaultLoading();
    },
    computed: {

        pageTitle() {
            return this.orderid ? 'Order Details ' + this.orderid : 'Order Details';
        },
        totalQuantity() {
            // Calculate total quantity
            return this.orders.reduce((total, order) => total + order.quantity, 0);
        },
        totalAmount() {
            // Calculate total amount
            return this.orders.reduce((total, order) => total + order.total, 0);
        },
    },
    head() {
        return {
            title: this.pageTitle
        };
    },

    methods: {
        printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;

        },
        formatNumber(number) {
            return number.toLocaleString(undefined, {
                minimumFractionDigits: 2
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('orderId', this.insertdata.orderId);
            formData.append('orderstatus', this.insertdata.orderstatus);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/order/update_order_status',
                formData, {
                headers
            }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/orders/order-list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        async defaultLoading() {
            const orderId = this.$route.query.orderId;
            this.orderid = orderId;
            await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
                //console.log("=====" + response.data.orderstatus_id);
                // return false;
                this.orders = response.data.orderdata;
                this.orderInfo = response.data.orderInfo;
                this.orderstatus = response.data.orderrow;
                this.customername = response.data.customername;
                this.customeremail = response.data.customeremail;
                this.order_status = response.data.OrderStatus;
                //calculated
                this.total = response.data.total;
                this.itemstotal = response.data.amount;
                this.shipping_fee = response.data.shipping_fee;
                //   this.shipping_fee = response.data.shipping_fee;
                this.subtotal = response.data.subtotal;

                this.percentageAmount = response.data.percentageAmount;
                this.walletBalance = response.data.walletBalance;
                this.copon_amount = response.data.copon_amount;
                //END 
                this.insertdata.orderstatus = response.data.orderstatus_id;
                this.approv_dev_sts = response.data.orderstatus_id;
                // $(".orderstatus").html(1);
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Has been successfully update order'
            });
        },

    },
}
</script>
