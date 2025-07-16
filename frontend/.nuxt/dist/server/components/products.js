exports.ids = [10];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// plugins/bus.js

const bus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["a"] = (bus);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=template&id=07093a6c&
var render = function render() {
  var _vm$selectedProduct, _vm$selectedProduct2, _vm$selectedProduct3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"home_section_bg\">", "</div>", [_vm._ssrNode("<div class=\"product_area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"section_title\"><h2><span>our</span> Products</h2></div></div></div> "), _vm._ssrNode("<div class=\"tab-content mt-4\">", "</div>", [_vm.conditions && _vm.products.length > 0 ? _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.products, function (item, index) {
    return _vm._ssrNode("<div class=\"col-lg-3\">", "</div>", [_vm._ssrNode("<div class=\"product_items mt-2\">", "</div>", [_vm._ssrNode("<article class=\"single_product\">", "</article>", [_vm._ssrNode("<figure>", "</figure>", [_vm._ssrNode("<div class=\"product_thumb\">", "</div>", [_c('nuxt-link', {
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
        "alt": item.slug
      }
    })]), _vm._ssrNode(" <div class=\"quick_button\"><a href=\"javascript:void(0)\" data-bs-toggle=\"modal\" data-bs-target=\"#modal_box\" title=\"quick view\"><i class=\"icon-eye\"></i></a></div>")], 2), _vm._ssrNode(" <div class=\"product_content\"><div class=\"product_content_inner\"><h4 class=\"product_name\"><a href=\"product-details.html\">" + _vm._ssrEscape(_vm._s(item.name)) + "</a></h4> <div class=\"price_box\"><span class=\"current_price text-white\">" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</span></div></div> <div class=\"action_links\"><ul><li class=\"add_to_cart\"><a href=\"javascript:void(0)\" title=\"Add to cart\">Add to\n                                                            cart</a></li></ul></div></div>")], 2)])])]);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (!_vm.conditions || _vm.conditions.length === 0 ? "<div class=\"col-12 text-center\"><br> <p>No products available.</p></div>" : "<!---->") + " " + (_vm.conditions && _vm.conditions.length > 0 ? "<div class=\"text-center mt-3\"><button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn\" style=\"background-color: #640002;color: #fff;\">Load More</button></div>" : "<!---->") + " " + (_vm.loading ? "<div class=\"text-center mt-3\"><p>Loading...</p></div>" : "<!---->"))], 2), _vm._ssrNode(" <br>")], 2)]), _vm._ssrNode(" <div class=\"banner_area\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 col-md-6\"><figure class=\"single_banner\"><div class=\"banner_thumb\"><a href=\"#\"><img src=\"/assets/img/bg/banner4.jpg\" alt></a></div></figure></div> <div class=\"col-lg-6 col-md-6\"><figure class=\"single_banner\"><div class=\"banner_thumb\"><a href=\"#\"><img src=\"/assets/img/bg/banner5.jpg\" alt></a></div></figure></div></div></div></div>")], 2), _vm._ssrNode(" <div id=\"modal_box\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" class=\"modal fade\"><div role=\"document\" class=\"modal-dialog modal-dialog-centered\"><div class=\"modal-content\"><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"close\"><span aria-hidden=\"true\">×</span></button> <div class=\"modal_body\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-5 col-md-5 col-sm-12\">" + (_vm.selectedProduct ? "<div><img" + _vm._ssrAttr("src", _vm.selectedProduct.thumnail) + _vm._ssrAttr("alt", _vm.selectedProduct.slug) + " style=\"max-width: 100%; height: auto;\"></div>" : "<!---->") + "</div> <div class=\"col-lg-7 col-md-7 col-sm-12\"><div class=\"modal_right\"><div class=\"modal_title mb-10\"><h2>" + _vm._ssrEscape(_vm._s((_vm$selectedProduct = _vm.selectedProduct) === null || _vm$selectedProduct === void 0 ? void 0 : _vm$selectedProduct.name)) + "</h2></div> <div class=\"modal_price mb-10\"><span class=\"new_price\">" + _vm._ssrEscape("$" + _vm._s((_vm$selectedProduct2 = _vm.selectedProduct) === null || _vm$selectedProduct2 === void 0 ? void 0 : _vm$selectedProduct2.price)) + "</span></div> <div class=\"modal_description mb-15\"><p>" + _vm._ssrEscape(_vm._s((_vm$selectedProduct3 = _vm.selectedProduct) === null || _vm$selectedProduct3 === void 0 ? void 0 : _vm$selectedProduct3.description.replace(/<[^>]*>/g, ''))) + "</p></div> <div class=\"variants_selects\"><div class=\"modal_add_to_cart\"><form action=\"#\"><input min=\"1\" max=\"100\" step=\"1\" value=\"1\" inputmode=\"numeric\" pattern=\"\\d*\" type=\"number\"> <button type=\"submit\">add to\n                                                    cart</button></form></div></div></div></div></div></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Products.vue?vue&type=template&id=07093a6c&

// EXTERNAL MODULE: ./plugins/bus.js
var bus = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=script&lang=js&

/* harmony default export */ var Productsvue_type_script_lang_js_ = ({
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      imgloading: true,
      loading: false,
      cart: [],
      products: [],
      rproducts: [],
      selectedProduct: null,
      conditions: [],
      itemCount: 0,
      quantity: 1,
      updatedQuantity: 0,
      login: {
        email: '',
        password: ''
      },
      showPassword: false,
      errors: {},
      invaliderror: '',
      notifmsg: ''
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500); //
    this.loadingProduct();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    onlyInteger(e) {
      // Remove non-digit characters
      let val = e.target.value.replace(/[^\d]/g, '');

      // Convert to integer and enforce limits (optional)
      let intVal = parseInt(val, 10);
      if (isNaN(intVal) || intVal < 1) intVal = 1;
      if (intVal > 100) intVal = 100;
      this.quantity = intVal.toString(); // keep synced with input
    },

    stripHTML(html) {
      const div = document.createElement("div");
      div.innerHTML = html;
      return div.textContent || div.innerText || "";
    },
    openQuickView(product) {
      this.selectedProduct = product;
    },
    async loadMore() {
      this.loading = true;
      try {
        const response = await this.$axios.get(`/unauthenticate/randomProducts?page=${this.currentPage + 1}`);
        this.products = this.products.concat(response.data.data);
        this.conditions = response.data.data;
        this.currentPage = response.data.pagination.current_page;
        this.totalPages = response.data.pagination.last_page;
      } catch (error) {
        console.error('Error fetching loadingProduct:', error);
        // Handle error if needed
      } finally {
        this.loading = false;
      }
    },
    async loadingProduct() {
      try {
        //  this.loading = true; // Show loader
        const response = await this.$axios.get('/unauthenticate/randomProducts');
        this.products = response.data.data;
        this.conditions = response.data.data;
        // Handle other logic related to products if needed
      } catch (error) {
        console.error('Error fetching loadingProduct:', error);
        // Handle error if needed
      } finally {
        //   this.loading = false; // Hide loader after response or error
      }
    },
    addtoCartModal(product) {
      //alert(this.quantity);
      //return false;
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
        quantity: this.quantity
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
      const modalElement = document.getElementById('modal_box');
      let modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(modalElement);
      }
      modalInstance.hide();
    },
    addtoCart(product) {
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
        quantity: 1
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
    },
    showhidePassword() {
      this.showPassword = !this.showPassword;
    },
    loginPopup() {
      $(".login_modal").fadeIn();
    },
    closePopup() {
      $(".login_modal").fadeOut();
    }
  }
});
// CONCATENATED MODULE: ./components/Products.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Productsvue_type_script_lang_js_ = (Productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Products.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e179dc6"
  
)

/* harmony default export */ var Products = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=products.js.map