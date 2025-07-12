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
                                    <router-link to="/ecommarce/inventory-list">Inventory List</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Inventory History</li>
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
                                    <div class="card">
                                        <div class="row">
                                            <table class="table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Category</th>
                                                        <th class="text-center">Size</th>
                                                        <th class="text-center">Size Quantity</th>
                                                        <th class="text-center">Selling Qty</th>
                                                        <th class="text-center">Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in arr_val" :key="item.id">
                                                        <td>{{ item.name }}</td>
                                                        <td class="text-center">{{ item.attribue_val_name }}</td>
                                                        <td class="text-center">{{ item.total_size_qty }}</td>
                                                        <td class="text-center">{{ item.stock_qty_out }}</td>
                                                        <td class="text-center">{{ item.balance }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                            <hr />

                                            <table class="table-hover">
                                                <thead>
                                                <tr>
                                                    <td width="21%">Product Name</td>
                                                    <td width="1%"><strong>:</strong></td>
                                                    <td width="78%">{{ productData.name }}</td>
                                                </tr>
                                            </thead>

                                                <tr>
                                                    <td>SKU</td>
                                                    <td><strong>:</strong></td>
                                                    <td>{{ productData.sku }}</td>
                                                </tr>

                                                <tr>
                                                    <td>Price</td>
                                                    <td><strong>:</strong></td>
                                                    <td>{{ productData.price }}</td>
                                                </tr>

                                                <tr>
                                                    <td>Total Quantity</td>
                                                    <td><strong>:</strong></td>
                                                    <td>{{ productData.stock_qty }}</td>
                                                </tr>

                                                <tr>
                                                    <td>Categories</td>
                                                    <td><strong>:&nbsp;</strong></td>
                                                    <td>
                                                        <div class="output-container">
                                                            <span class="show_categorys"></span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Status</td>
                                                    <td><strong>:&nbsp;</strong></td>
                                                    <td>
                                                        <div v-if="productData.status === 0" class="marleft">Draft
                                                        </div>
                                                        <div v-if="productData.status === 1" class="marleft">Publish
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>



                                        </div>
                                    </div>

                                    <div class="row">

                                        <div class="col-md-3">
                                            <div class="alert alert-primary" role="alert">
                                                <center><small>Thumbnail Images</small></center>
                                                <hr />
                                                <img :src="productImg" alt="N/A"
                                                    class="img-fluid max-width-100 img-thumbnail" />
                                            </div>
                                        </div>

                                        <div class="col-md-9 d-none">
                                            <div class="alert alert-primary" role="alert">
                                                Additional Images
                                                <hr />
                                                <!-- productAddImgs -->
                                                <div class="row">
                                                    <div class="col-md-2" v-for="(data, index) in productAddImgs"
                                                        :key="index">
                                                        <img :src="data.images" alt="N/A"
                                                            class="img-fluid max-width-100 img-thumbnail" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <!-- END -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Product Preview',
    },
    data() {
        return {

            insertAttributedata: {
                name: [],
                size_qty: [],

            },
            productData: {
                id: '',
                name: '',
                description: '',
                meta_title: '',
                category_id: '',
                meta_description: '',
                meta_keyword: '',
                description: '',
                parent_id: 0,
                mobile_view_class: '',
                product_tag: '',
                discount: '',
                sku: '',
                category_id: '',
                brand_name: '',
                external_link: '',
                price: '',
                unit: '',
                stock_qty: '',
                stock_mini_qty: '',
                stock_status: '',
                free_shopping: '',
                flat_rate_status: '',
                shipping_days: '',
                vat: '',
                vat_status: '',
                tax: '',
                tax_status: '',
                status: '',
                manufacturer: '',
                download_link: '',

            },
            ticketHistory: [],
            product_cat: [],
            arr_his_val: [],
            selectedItem: [],
            historVarient: [{
                varient_id: '',
                sku: '',
                qty: '',
                price: '',
                file: ''
            }],
            arr_val: [],
            attributeslist: [],
            attrValList: [],
            pro_arr_val_history: [],
            productImg: "",
            productAddImgs: [],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.productDetails();
        this.varientHistory();
        // await this.fetchAttributeList();
    },
    computed: {
        filteredHistorVariant() {
            // Filter the historVariant array based on category_id and check if the array is not empty
            return this.historVarient.filter(item => item.category_id === 1 && this.historVarient.length > 0);
        }
    },
    methods: {
        validateNumericInput(attributesValId) {
            // Retrieve the input value for the given attributesValId
            let inputValue = this.insertAttributedata.size_qty[attributesValId];
            // Remove any non-numeric characters
            this.insertAttributedata.size_qty[attributesValId] = inputValue.replace(/\D/g, '');
        },
        varientHistory() {
            let product_id = this.$route.query.parameter;
            this.$axios.get(`/product/getVarientHistory`, {
                params: {
                    product_id: product_id
                }
            }).then(response => {
                this.historVarient = response.data;
            });
        },
        
        productDetails() {
            let product_id = this.$route.query.parameter;
            this.$axios.get(`/product/productrow/${product_id}`).then(response => {
                //console.log("product row:" + response.data.pvdata);
                this.arr_val = response.data.pvdata;
                this.productData.name = response.data.product.name;
                this.productData.category_id = response.data.category_id;
                this.productData.description = response.data.product.description;
                this.productData.meta_title = response.data.product.meta_title;
                this.productData.meta_description = response.data.product.meta_description;
                this.productData.meta_keyword = response.data.product.meta_keyword;
                this.productData.product_tag = response.data.product.product_tag;
                this.productData.keyword = response.data.product.keyword;
                this.productData.brand_name = response.data.product.brand_name;
                this.productData.sku = response.data.product.sku;
                this.productData.external_link = response.data.product.external_link;
                $(".pro_description").html(response.data.product.description);
                $(".implproaddr").html(response.data.implproaddr);
                this.productData.price = response.data.product.price;
                this.productData.unit = response.data.product.unit;
                this.productData.stock_qty = response.data.product.stock_qty;
                this.productData.stock_mini_qty = response.data.product.stock_mini_qty;
                this.productData.discount = response.data.product.discount;
                this.productData.stock_status = response.data.product.stock_status;
                this.productData.free_shopping = response.data.product.free_shopping;
                this.productData.flat_rate_status = response.data.product.flat_rate_status;
                this.productData.shipping_days = response.data.product.shipping_days;
                this.productData.vat = response.data.product.vat;
                this.productData.vat_status = response.data.product.vat_status;
                this.productData.tax = response.data.product.tax;
                this.productData.tax_status = response.data.product.tax_status;
                this.productData.status = response.data.product.status;
                this.productData.manufacturer = response.data.product.manufac_name;
                this.productData.download_link = response.data.product.download_link;
                this.productImg = response.data.productImg;
                this.productAddImgs = response.data.product_imgs;
                this.ticketHistory = response.data.ticketHistory;

                $(".show_categorys").html(response.data.product_cat)
                // = response.data.product_cat;
                //console.log(`Product category ${response.data.product_cat}`);

            });
        },

    },
}
</script>

<style scoped>
.scrollable-container {
    max-height: 400px;
    /* Adjust the maximum height as needed */
    overflow-y: auto;
    border: 1px solid #dddddd;
    /* Optional: Add a border for styling */
    padding: 8px;
    /* Optional: Add padding for better appearance */
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1px;
}

th {
    background-color: #f2f2f2;
}

.marleft {
    margin-left: -7px;
}

.output-container {
    white-space: pre-line;
    margin-left: -7px;
}

.table-hover thead tr:hover th,
.table-hover tbody tr:hover td {
    background-color: #D1D119;
}
</style>