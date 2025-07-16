exports.ids = [25,4,5,6];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product-details/_slug.vue?vue&type=template&id=71c73662&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"breadcrumbs_area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"breadcrumb_content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("home")])], 1), _vm._ssrNode(" <li>" + _vm._ssrEscape(_vm._s(_vm.pro_row.name)) + "</li>")], 2)])])])])]), _vm._ssrNode(" "), _vm.loading ? _vm._ssrNode("<span>", "</span>", [_c('Loader')], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product_page_bg\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"product_details\"><div class=\"row\"><div class=\"col-lg-5 col-md-6\"><div class=\"product-details-tab\"><div id=\"img-1\" class=\"zoomWrapper single-zoom\"><a href=\"#\"><img id=\"zoom1\"" + _vm._ssrAttr("src", _vm.pro_row.thumnail) + _vm._ssrAttr("alt", _vm.pro_row.slug) + _vm._ssrAttr("data-zoom-image", _vm.pro_row.thumnail) + " loading=\"lazy\" class=\"img-fluid\"></a></div></div></div> <div class=\"col-lg-7 col-md-6\"><div class=\"product_d_right\"><form action=\"#\"><h3><a href=\"#\">" + _vm._ssrEscape(_vm._s(_vm.pro_row.name)) + "</a></h3> <div class=\"price_box\"><span class=\"current_price\">" + _vm._ssrEscape("$" + _vm._s(_vm.pro_row.price)) + "</span></div> <div class=\"product_desc\"><p class=\"productdetails\"></p></div> <div class=\"product_variant quantity\"><label>quantity</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.updatedQuantity) + "> <button type=\"button\" class=\"button\">add to\n                                        cart</button></div> <div class=\"product_timing\"><div data-countdown=\"2023/05/15\"></div></div></form></div></div></div></div> <div class=\"product_d_info\"><div class=\"row\"><div class=\"col-12\"><div class=\"product_d_inner\"><div class=\"product_info_button\"><ul role=\"tablist\" id=\"nav-tab\" class=\"nav\"><li><a data-bs-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-selected=\"false\" class=\"active\">Description</a></li></ul></div> <div class=\"tab-content\"><div id=\"info\" role=\"tabpanel\" class=\"tab-pane fade show active\"><div class=\"product_info_content\"><p class=\"productdetails\"></p></div></div></div></div></div></div></div> "), _vm._ssrNode("<section class=\"product_area related_products\">", "</section>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"section_title title_style2\"><div class=\"title_content\"><h2><span>Related</span> Products</h2></div></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.sproducts, function (item, index) {
    return _vm._ssrNode("<div class=\"col-lg-3\">", "</div>", [_vm._ssrNode("<article class=\"single_product\">", "</article>", [_vm._ssrNode("<figure>", "</figure>", [_vm._ssrNode("<div class=\"product_thumb\">", "</div>", [_c('nuxt-link', {
      staticClass: "primary_img",
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_c('img', {
      staticStyle: {
        "height": "300px",
        "width": "100%"
      },
      attrs: {
        "src": item.thumnail,
        "alt": "product image",
        "loading": "lazy"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product_content\">", "</div>", [_vm._ssrNode("<div class=\"product_content_inner\">", "</div>", [_vm._ssrNode("<h4 class=\"product_name\">", "</h4>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._ssrNode(" <div class=\"price_box\"><span class=\"current_price\">" + _vm._ssrEscape(_vm._s(item.price)) + "</span></div>")], 2), _vm._ssrNode(" <div class=\"action_links d-none\"><ul><li class=\"add_to_cart\"><a href=\"cart.html\" title=\"Add to cart\">Add to\n                                                    cart</a></li></ul></div>")], 2)], 2)]), _vm._ssrNode(" <br>")], 2);
  }), 0), _vm._ssrNode(" <br><br><br>")], 2)], 2)]), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product-details/_slug.vue?vue&type=template&id=71c73662&

// EXTERNAL MODULE: ./plugins/bus.js
var bus = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product-details/_slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  head: {
    title: 'Product Details'
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
        price: 0 // Initial price
      },

      ticketprice: '',
      loading: false,
      description: ''
    };
  },
  mounted() {
    this.loadingsmiliarProduct();
    this.fetchData();
  },
  computed: {},
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
      const stockQty = this.stock_qty; //product.stock_qty;
      console.log("input qty: " + inputQty);
      console.log("input stock qty: " + stockQty);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      if (inputQty == 0) {
        Toast.fire({
          icon: "error",
          title: "Input quantity cannot be zero"
        });
        //this.updatedQuantity = 1;
      } else if (parseInt(inputQty) > parseInt(stockQty)) {
        this.$nextTick(() => {
          this.updatedQuantity = this.stock_qty;
        });
        Toast.fire({
          icon: "error",
          title: "Input quantity must be greater than zero!"
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
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: "Stock out."
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
          quantity: this.updatedQuantity
        });
        const existingData = JSON.parse(localStorage.getItem('cart')) || [];
        const newData = [...existingData, ...this.cart];
        localStorage.setItem('cart', JSON.stringify(newData));
        bus["a" /* default */].$emit("updateCart", newData);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: toast => {
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
      if (false) {}
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
    }
  }
});
// CONCATENATED MODULE: ./pages/product-details/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_details_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/product-details/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_details_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2ae04ce6"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(39).default,Loader: __webpack_require__(43).default,Footer: __webpack_require__(33).default})


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("42ace9c7", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=ab861952&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<footer class=\"footer_widgets\">", "</footer>", [_vm._ssrNode("<div class=\"footer_top\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3\"><div class=\"widgets_container\"><h3>CONTACT INFO</h3> <div class=\"footer_contact\"><div class=\"footer_contact_inner\"><div class=\"contact_icone\"><img src=\"/assets/img/icon/icon-phone.png\" alt></div> <div class=\"contact_text\"><p>Email: <br> <strong><a href=\"mailto:support@matrix360sourcing.com\">support@matrix360sourcing.com</a></strong></p></div></div></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-9\">", "</div>", [_vm._ssrNode("<div class=\"footer_col_container\">", "</div>", [_vm._ssrNode("<div class=\"widgets_container widget_menu\">", "</div>", [_vm._ssrNode("<h3>Information</h3> "), _vm._ssrNode("<div class=\"footer_menu\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/terms-and-condition"
    }
  }, [_vm._v("Delivery Information")])], 1)], 2)])], 2), _vm._ssrNode(" <div class=\"widgets_container\"><h3>About Matrix360Sourcing</h3> <p style=\"color:white\">Matrix360Sourcing is your trusted partner for high-quality\n                                    aircraft parts and\n                                    reliable sourcing solutions, delivering excellence worldwide with fast and\n                                    secure service.</p></div>")], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer_bottom\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12 text-center\">", "</div>", [_vm._ssrNode("<div class=\"copyright_area\">", "</div>", [_vm._ssrNode("<p>", "</p>", [_vm._ssrNode(_vm._ssrEscape("© " + _vm._s(_vm.currentYear) + " ")), _c('nuxt-link', {
    staticClass: "text-uppercase",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Matrix360Sourcing")]), _vm._ssrNode(".\n                                Made with <i class=\"fa fa-heart\"></i> by "), _c('nuxt-link', {
    attrs: {
      "target": "_blank",
      "to": "/"
    }
  }, [_vm._v("Matrix360Sourcing")])], 2)])])])])])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=ab861952&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6e3913d8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(33).default})


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// plugins/bus.js

const bus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["a"] = (bus);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_ab861952_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_ab861952_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_ab861952_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_ab861952_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_ab861952_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-padding-sm{padding:20px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("d39a30e0", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("16c09f4c", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=142beeaf&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"off_canvars_overlay\" data-v-142beeaf></div> <div class=\"offcanvas_menu\" data-v-142beeaf><div class=\"container\" data-v-142beeaf><div class=\"row\" data-v-142beeaf><div class=\"col-12\" data-v-142beeaf><div data-bs-toggle=\"collapse\" data-bs-target=\"#mobileMenu\" class=\"canvas_open\" data-v-142beeaf><a data-v-142beeaf><i class=\"ion-navicon\" style=\"color:white\" data-v-142beeaf></i></a></div></div></div></div></div> "), _vm._ssrNode("<header data-v-142beeaf>", "</header>", [_vm._ssrNode("<div class=\"main_header\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"header_top\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"col-lg-4 col-md-5\" data-v-142beeaf><div class=\"header_account\" data-v-142beeaf><ul data-v-142beeaf><li class=\"language\" data-v-142beeaf><a href=\"#\" data-v-142beeaf><img src=\"/assets/img/logo/language.png\" alt data-v-142beeaf>\n                                            english <i class=\"ion-chevron-down\" data-v-142beeaf></i></a> <ul class=\"dropdown_language\" data-v-142beeaf><li data-v-142beeaf><a href=\"#\" data-v-142beeaf>English</a></li></ul></li> <li class=\"currency\" data-v-142beeaf><a href=\"#\" data-v-142beeaf>USD</a></li></ul></div></div> "), _vm._ssrNode("<div class=\"col-lg-8 col-md-7\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"header_top_links text-right\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<ul data-v-142beeaf>", "</ul>", [_vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("Shopping Cart")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("Checkout")])], 1)], 2)])])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header_middle\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"col-lg-2 col-md-4 col-sm-4 col-4\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"logo\" data-v-142beeaf>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticStyle: {
      "background-color": "white",
      "border-radius": "10px"
    },
    attrs: {
      "src": "/assets/img/logo/companyLogo.png",
      "alt": "Images"
    }
  })])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-10 col-md-6 col-sm-6 col-6\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"header_right_box\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"search_container\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<form action=\"#\" data-v-142beeaf>", "</form>", [_vm._ssrNode("<div class=\"hover_category\" data-v-142beeaf>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedCategory,
      expression: "selectedCategory"
    }],
    staticClass: "select_option",
    attrs: {
      "name": "select"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedCategory = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Categories")]), _vm._v(" "), _vm._l(_vm.categoriesData, function (category) {
    return _c('option', {
      key: category.id,
      domProps: {
        "value": category.id
      }
    }, [_vm._v("\n                                                    " + _vm._s(category.name) + "\n                                                ")]);
  })], 2)]), _vm._ssrNode(" <div class=\"search_box\" style=\"position: relative;\" data-v-142beeaf><input id=\"product-search\" placeholder=\"Search product...\" type=\"text\" autocomplete=\"off\" data-v-142beeaf> " + (_vm.autocompleteResults.length ? "<div class=\"autocomplete-box\" data-v-142beeaf>" + _vm._ssrList(_vm.autocompleteResults, function (item) {
    return "<div class=\"autocomplete-item\" data-v-142beeaf>" + _vm._ssrEscape("\n                                                    " + _vm._s(item.name) + "\n                                                ") + "</div>";
  }) + "</div>" : "<!---->") + " <button type=\"button\" data-v-142beeaf>Search</button></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header_configure_area\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"mini_cart_wrapper\" data-v-142beeaf>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_c('i', {
    staticClass: "icon-shopping-bag2"
  }), _vm._v(" "), _c('span', {
    staticClass: "cart_count"
  }, [_vm._v(_vm._s(_vm.itemCounts))])])], 1)])], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header_bottom sticky-header off-canvas\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"main_menu menu_position text-center\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<nav data-v-142beeaf>", "</nav>", [_vm._ssrNode("<ul data-v-142beeaf>", "</ul>", [_vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "active",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_vm._ssrNode("<a href=\"#\" data-v-142beeaf>Company Info<i class=\"fa fa-angle-down\" data-v-142beeaf></i></a> "), _vm._ssrNode("<ul class=\"sub_menu pages\" data-v-142beeaf>", "</ul>", [_vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/terms-and-condition"
    }
  }, [_vm._v("Terms and\n                                                        Condition")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/aircraft"
    }
  }, [_vm._v("Aircraft Parts")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v(" Contact Us")])], 1)], 2)])])])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"mobileMenu\" class=\"collapse d-lg-none off-canvas-mobile\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<div class=\"off-canvas-inner bg-white shadow-sm p-3\" data-v-142beeaf>", "</div>", [_vm._ssrNode("<nav data-v-142beeaf>", "</nav>", [_vm._ssrNode("<ul class=\"list-unstyled\" data-v-142beeaf>", "</ul>", [_vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" href=\"#companyCollapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"companyCollapse\" class=\"nav-link d-flex justify-content-between\" data-v-142beeaf>\n                                    Company Info <i class=\"fa fa-angle-down\" data-v-142beeaf></i></a> "), _vm._ssrNode("<ul id=\"companyCollapse\" class=\"sub_menu collapse ps-3\" data-v-142beeaf>", "</ul>", [_vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/terms-and-condition"
    }
  }, [_vm._v("Terms and\n                                            Condition")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/aircraft"
    }
  }, [_vm._v("Aircraft Parts")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-142beeaf>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)])])])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=142beeaf&scoped=true&

// EXTERNAL MODULE: ./plugins/bus.js
var bus = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  data() {
    return {
      navbarVisible: true,
      cart: [],
      categoriesData: [],
      selectedCategory: '',
      autocompleteResults: [],
      _itemCount: 0,
      itemCounts: 0
    };
  },
  mounted() {
    this.loadCart();
    this.getCategory();
    bus["a" /* default */].$on('updateCart', updatedCart => {
      this.loadCart();
    });
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    itemCount: {
      get() {
        return this._itemCount;
      },
      set(value) {
        this._itemCount = value;
      }
    }
  },
  methods: {
    autocompleteSearch(event) {
      const query = event.target.value.trim();
      if (query.length > 1) {
        this.$axios.get('/unauthenticate/search-products', {
          params: {
            query: query
          }
        }).then(response => {
          this.autocompleteResults = response.data;
        }).catch(error => {
          console.error('Autocomplete search error:', error);
          this.autocompleteResults = [];
        });
      } else {
        this.autocompleteResults = [];
      }
    },
    selectAutocomplete(slug) {
      this.autocompleteResults = [];
      this.$router.push(`/product-details/${slug}`);
    },
    searchProduct() {
      const searchInput = document.getElementById('product-search');
      const searchValue = searchInput.value.trim();
      if (searchValue) {
        this.$router.push({
          path: '/search',
          query: {
            q: searchValue,
            category: this.selectedCategory
          }
        });
      } else {
        this.$router.push('/');
      }
    },
    async getCategory() {
      try {
        //  this.loading = true; // Show loader
        const response = await this.$axios.get('/unauthenticate/filterCategorys');
        this.categoriesData = response.data;
        // Handle other logic related to products if needed
      } catch (error) {
        console.error('Error fetching loadingProduct:', error);
        // Handle error if needed
      } finally {
        //   this.loading = false; // Hide loader after response or error
      }
    },
    toggleNavbar() {
      this.navbarVisible = !this.navbarVisible;
    },
    redirectHomePages() {
      this.$router.push('/');
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        // Parse the saved cart
        this.cart = JSON.parse(savedCart);

        // Remove duplicates based on id
        this.cart = this.cart.reduce((unique, item) => {
          return unique.some(u => u.id === item.id) ? unique : [...unique, item];
        }, []);
      }
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += parseInt(item.quantity);
      });

      // Update the itemCount
      this.itemCounts = itemCount;
    },
    async logout() {
      await this.$auth.logout();
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "142beeaf",
  "2bd44bf4"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(39).default})


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_7dbb8f16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_7dbb8f16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_7dbb8f16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_7dbb8f16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_7dbb8f16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-7dbb8f16]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-7dbb8f16],.loading-indicator[data-v-7dbb8f16]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-7dbb8f16]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-7dbb8f16]{margin:0}.loader-top[data-v-7dbb8f16]{top:0}.loader-bottom[data-v-7dbb8f16]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=template&id=7dbb8f16&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"loading-indicator\" data-v-7dbb8f16>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-7dbb8f16>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-7dbb8f16>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Loader.vue?vue&type=template&id=7dbb8f16&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Loader.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dbb8f16",
  "f43016e8"
  
)

/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_142beeaf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_142beeaf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_142beeaf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_142beeaf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_142beeaf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".autocomplete-box[data-v-142beeaf]{background:#fff;border:1px solid #ccc;max-height:200px;overflow-y:auto;position:absolute;width:100%;z-index:1000}.autocomplete-item[data-v-142beeaf]{cursor:pointer;padding:8px}.autocomplete-item[data-v-142beeaf]:hover{background-color:#f0f0f0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("205ac24e", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_71c73662_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_71c73662_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_71c73662_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_71c73662_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_71c73662_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txtformat{text-align:center;-webkit-text-decoration:none;text-decoration:none;width:100%}.section-padding-bottom-md{padding-bottom:10px}.custom-border{border:5px solid #000;border-radius:5px}.disable-css{color:inherit;-webkit-text-decoration:none;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_slug.js.map