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
                                    <router-link to="/hrm/dashboard"><a href="javascript:;"><i
                                                class="bx bx-home-alt"></i></a></router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Inventory History List</li>
                            </ol>
                        </nav>
                    </div>

                </div>
                <!--end breadcrumb-->
                <!-- <span class="loader"></span> -->

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Products</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Add
                            Inventory</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        <!-- Start  -->
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="input-group mb-3">
                                            <select class="w-100 form-control" v-model="filter_product_id">
                                                <option value="">All Products</option>
                                                <option v-for="(product, index) in products" :key="index"
                                                    :value="product.id">
                                                    {{ product.name }}
                                                </option>
                                            </select>

                                        </div>
                                    </div>

                                    <div class="col-md-1">
                                        <div class="input-group mb-3">
                                            <button class="btn btn-primary w-100" type="button" @click="fetchData"><svg
                                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25"
                                                    height="25" viewBox="0 0 24 24">
                                                    <path
                                                        d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z">
                                                    </path>
                                                </svg></button>
                                        </div>
                                    </div>

                                </div>
                                <div style="display: none;" class="customerSpinner">
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover table-sm">
                                        <thead>
                                            <tr>
                                                <th>SL#</th>
                                                <th class="text-left">Product Name</th>
                                                <th class="text-center">Stock Qty</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in products" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td class="text-left">{{ item.name }}</td>
                                                <td class="text-center">{{ item.stock_qty }}</td>
                                                <td class="text-center" @click="preview(item.id)"><button
                                                        type="button">Details</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <!-- END -->

                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <!-- start  -->
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                        enctype="multipart/form-data">
                                        <div class="row mb-3">
                                            <label for="inputEnterYourName"
                                                class="col-sm-3 col-form-label">Products</label>
                                            <div class="col-sm-9">

                                                <select v-model="insertdata.product_id" class="w-100"
                                                    @change="getProducts">
                                                    <option value="">Select a product</option>
                                                    <option v-for="(product, index) in products" :key="index"
                                                        :value="product.id">
                                                        {{ product.name }}
                                                    </option>
                                                </select>
                                                <span class="text-danger" v-if="errors.product_id">{{
                                                errors.product_id[0] }}</span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Quantity</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control stock_qty"
                                                    v-model="insertdata.stock_qty" id="stock_qty" readonly
                                                    placeholder="Quantity">
                                                <span class="text-danger" v-if="errors.stock_qty">{{ errors.stock_qty[0]
                                                    }}</span>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <label class="col-sm-3 col-form-label"></label>
                                            <div class="col-sm-9">
                                                <button type="submit" class="btn btn-success px-5 w-100"><i
                                                        class="bx bx-check-circle mr-1"></i> Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- END -->

                    </div>

                </div>

            </div>
        </div>

        <!--end page wrapper -->
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Inventory List',
    },
    data() {
        return {
            sortOrder: 'asc', // Initial sort order
            sortBy: 'id', // Initial sort column
            tickets: [],
            insertdata: {
                product_id: '',
                name: '',
                status: 1,
            },
            totalTicket: 0,
            notifmsg: '',
            errors: {},
            data: [],
            inv_history: [],
            filter_product_id: '',
            products: [],
            searchQuery: {
                orderId: '',
                ticket_number: '',
                name: '',
                category_id: '',
                status: 1
            },

            insertdata: {
                product_id: '',
                stock_qty: '',
            },
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 150, // Number of items per page
        };
    },
    async mounted() {
        await this.fetchData();
        await this.fetchproducts();
    },
    computed: {

    },
    methods: {
        getProducts() {
            const id = this.insertdata.product_id;
            console.log(id);
            const product = this.products.find(prod => prod.id === id);
            this.insertdata.stock_qty = product ? product.stock_qty : null;

        },
        preview(id) {
            this.$router.push({
                path: '/ecommarce/inventory-details',
                query: {
                    parameter: id
                }
            })
        },
        saveData() {
            const formData = new FormData();
            formData.append('product_id', this.insertdata.product_id);
            formData.append('stock_qty', this.insertdata.stock_qty);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/product/addeditStock',
                formData, {
                headers
            }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();

                this.$router.push('/ecommarce/inventory-list');

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
        async fetchproducts() {

            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get('/product/getProductList'); // Update the endpoint accordingly
                this.products = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }



        },

        async fetchData() {
            $(".customerSpinner").show();
            const pro_id = this.filter_product_id;
            //console.log("filter_product_id:" + pro_id);
            const url = pro_id ? `/product/getinventoryList?pro_id=${pro_id}` : '/product/getinventoryList';
            try {
                const response = await this.$axios.get(url);
                this.inv_history = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        }
    },
};
</script>
<style>
.table-hover thead tr:hover th,
.table-hover tbody tr:hover td {
    background-color: #D1D119;
}
</style>