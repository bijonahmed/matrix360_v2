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
                                <li>{{ pro_row.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--breadcrumbs area end-->
        <span v-if="loading">
            <Loader />
        </span>


        <div class="product_page_bg">
            <div class="container">
                <!--product details start-->
                <div class="product_details">
                    <div class="row">
                        <div class="col-lg-5 col-md-6">
                            <div class="product-details-tab">
                                <div id="img-1" class="zoomWrapper single-zoom">
                                    <a href="#">
                                        <img id="zoom1" class="img-fluid" :src="pro_row.thumnail" :alt="pro_row.slug"
                                            :data-zoom-image="pro_row.thumnail" loading="lazy" />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="product_d_right">
                                <form action="#">
                                    <h3><a href="#">{{ pro_row.name }}</a></h3>
                                    <div class="price_box">
                                        <!-- <span class="old_price">$80.00</span> -->
                                        <span class="current_price">${{ pro_row.price }}</span>
                                    </div>
                                    <div class="product_desc">
                                        <p class="productdetails"></p>
                                    </div>

                                    <div class="product_variant quantity">
                                        <label>quantity</label>
                                        <input v-model="updatedQuantity" type="text" @input="sanitizeInput"
                                            @keyup="checkStock(pro_row)">
                                        <button class="button" type="button" @click="addtoCart(pro_row)">add to
                                            cart</button>
                                    </div>
                                    <div class="product_timing">
                                        <div data-countdown="2023/05/15"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--product details end-->

                <!--product info start-->
                <div class="product_d_info">
                    <div class="row">
                        <div class="col-12">
                            <div class="product_d_inner">
                                <div class="product_info_button">
                                    <ul class="nav" role="tablist" id="nav-tab">
                                        <li>
                                            <a class="active" data-bs-toggle="tab" href="#info" role="tab"
                                                aria-controls="info" aria-selected="false">Description</a>
                                        </li>

                                    </ul>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="info" role="tabpanel">
                                        <div class="product_info_content">
                                            <p class="productdetails"></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--product info end-->
                <!--product area start-->
                <section class="product_area related_products">
                    <div class="row">
                        <div class="col-12">
                            <div class="section_title title_style2">
                                <div class="title_content">
                                    <h2><span>Related</span> Products</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-3" v-for="(item, index) in sproducts" :key="index">
                            <article class="single_product">
                                <figure>
                                    <div class="product_thumb">
                                        <nuxt-link class="primary_img" :to="`/product-details/${item.slug}`">
                                            <img :src="item.thumnail" alt="product image" loading="lazy"
                                                style="height:300px; width: 100%;"> </nuxt-link>
                                    </div>
                                    <div class="product_content">
                                        <div class="product_content_inner">
                                            <h4 class="product_name">
                                                <nuxt-link :to="`/product-details/${item.slug}`">{{ item.name
                                                }}</nuxt-link>

                                            </h4>
                                            <div class="price_box">
                                                <!-- <span class="old_price">$320.00</span> -->
                                                <span class="current_price">{{ item.price }}</span>
                                            </div>
                                        </div>
                                        <div class="action_links d-none">
                                            <ul>
                                                <li class="add_to_cart"><a href="cart.html" title="Add to cart">Add to
                                                        cart</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </figure>
                            </article>
                            <br />
                        </div>
                    </div>
                    <br /><br /><br />
                </section>
                <!--product area end-->


            </div>
        </div>






        <Footer />
    </div>
</template>

<script>
import bus from '~/plugins/bus.js';
export default {
    head: {
        title: 'Product Details',
    },
    data() {
        return {
            cart: [],
            slider_img: [],
            subtotal: 0,
            category_id: '',
            updatedQuantity: 1,
            itemCount: 0,
            pro_row: [],
            sproducts: [],
            attrdata: [],
            stock_qty: '',
            attribue_val: '',
            attribue_val_id: '',
            pro_row: {
                price: 0, // Initial price
            },
            ticketprice: '',
            loading: false,
            description: '',

        }
    },
    mounted() {
        this.loadingsmiliarProduct();
        this.fetchData();
    },
    computed: {

    },
    methods: {


        handleSelectChange() {
            this.attribue_val_id = this.attribue_val;
            const selectedItem = this.attrdata.find(item => item.id === this.attribue_val);
            if (selectedItem) {
                console.log("Selected size:", selectedItem.size_qty);
                this.stock_qty = selectedItem.size_qty;
                // You can perform any action you want with the selected size here
            } else {
                this.stock_qty = '';
            }
            // You can perform any action you want with the selected value here
            // For example, call another method or update some data based on the selection
        },
        sanitizeInput() {
            this.updatedQuantity = this.updatedQuantity.replace(/\D/g, '');
            if (this.updatedQuantity === '') {
                this.updatedQuantity = 1;
            }
        },

        checkStock(product) {
            const inputQty = this.updatedQuantity;
            const stockQty = this.stock_qty//product.stock_qty;
            console.log("input qty: " + inputQty);
            console.log("input stock qty: " + stockQty);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            if (inputQty == 0) {

                Toast.fire({
                    icon: "error",
                    title: "Input quantity cannot be zero",
                });
                //this.updatedQuantity = 1;
            } else if (parseInt(inputQty) > parseInt(stockQty)) {
                this.$nextTick(() => {
                    this.updatedQuantity = this.stock_qty;
                });
                Toast.fire({
                    icon: "error",
                    title: "Input quantity must be greater than zero!",
                });
                //  this.updatedQuantity = 1;

            }
        },

        addtoCart(product) {
            const stock = this.stock_qty;
            if (stock == 0) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "error",
                    title: "Stock out.",
                });


            } else {

                this.loading = true;
                const isItemInCart = this.cart.some(item => item.id === product.id);
                if (isItemInCart) {
                    // If the item is already in the cart, skip adding it
                    this.loading = false; // Set loading to false since no change was made
                    return;
                }
                // If the item is not in the cart, add it with quantity 1
                this.cart.push({
                    ...product,
                    attribue_val_id: this.attribue_val_id,
                    quantity: this.updatedQuantity,
                });
                const existingData = JSON.parse(localStorage.getItem('cart')) || [];
                const newData = [...existingData, ...this.cart];
                localStorage.setItem('cart', JSON.stringify(newData));
                bus.$emit("updateCart", newData);
                setTimeout(() => {
                    this.loading = false;
                }, 1000);

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Add To Cart"
                });
            }
        },

        saveCart() {
            if (process.client) {
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        },

        async loadingsmiliarProduct() {
            try {
                //  this.loading = true; // Show loader
                const response = await this.$axios.get('/unauthenticate/randomProductslimit');
                this.sproducts = response.data;
                //  console.log("====" + response.data);
                // Handle other logic related to products if needed
            } catch (error) {
                console.error('Error fetching loadingProduct:', error);
                // Handle error if needed
            } finally {
                //   this.loading = false; // Hide loader after response or error
            }

        },
        btnSize() {
            $(".size_chart_modal").fadeIn();
        },
        btnSizeClose() {
            $(".size_chart_modal").fadeOut();
        },
        async fetchData() {
            const prosulg = this.$route.params.slug;
            const response = await this.$axios.get(`/unauthenticate/productSlug/${prosulg}`);
            //console.log("----" + response.data.attrData);
            this.attrdata = response.data.attrData;
            this.slider_img = response.data.slider_img;
            this.prodAttr = response.data.prodAttr;
            this.pro_row = response.data.pro_row;
            this.category_id = response.data.category_id;
            this.stock_qty = response.data.pro_row.stock_qty;
            this.addi_pname = response.data.additional.addi_pname;
            this.addi_thumnail = response.data.additional.addi_thumnail;
            this.addi_product_price = response.data.additional.addi_product_price;
            this.add_product_qty = response.data.additional.add_product_qty;
            this.addi_description = response.data.additional.addi_description;
            this.description = response.data.pro_row.description;

            $(".productdetails").html(response.data.pro_row.description);
        },

    }
}
</script>

<style>
.txtformat {
    text-decoration: none;
    width: 100%;
    text-align: center;
}

.section-padding-bottom-md {
    padding-bottom: 10px;
}

.custom-border {
    border-style: solid;
    border-width: 5px;
    border-color: #000;
    border-radius: 5px;
}

.disable-css {
    /* Add your styles here to disable CSS */
    /* For example, to remove underline and change text color */
    text-decoration: none;
    color: inherit;
    /* Inherit text color from parent */
}
</style>
