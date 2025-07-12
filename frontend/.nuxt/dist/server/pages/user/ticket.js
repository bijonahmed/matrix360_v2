exports.ids = [41,4,6,9];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/ticket.vue?vue&type=template&id=7f454bad&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"row mobile_view\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"pay_m_title\" data-v-7f454bad>", "</div>", [_c('nuxt-link', {
    staticClass: "btn_back",
    attrs: {
      "to": "/user/profile",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-arrow-left-long"
  })]), _vm._ssrNode(" <h6 data-v-7f454bad>Active Ticket </h6>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"col-xl-3 desktop_view\" data-v-7f454bad>", "</div>", [_c('LeftsidebarDesktop')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-9\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"profile_right\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<h1 class=\"desktop_view\" data-v-7f454bad>Active Ticket</h1> "), _vm.loading ? _vm._ssrNode("<span data-v-7f454bad>", "</span>", [_c('Loader')], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart_list\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<ul data-v-7f454bad>", "</ul>", _vm._l(_vm.orders, function (order, index) {
    return _vm._ssrNode("<li data-v-7f454bad>", "</li>", [_vm._ssrNode("<div class=\"cart_item\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"t_list\" data-v-7f454bad><a href=\"javascript:\" data-bs-toggle=\"collapse\"" + _vm._ssrAttr("data-bs-target", '#collapseExample_' + index) + " aria-expanded=\"false\" aria-controls=\"collapseExample\" data-v-7f454bad>" + _vm._ssrEscape(_vm._s(order.ticketsSum)) + "</a></div> "), _vm._ssrNode("<div class=\"row\" style=\"width: 100%;\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"cart_left\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<div class=\"c_price\" style=\"position: unset;\" data-v-7f454bad><img" + _vm._ssrAttr("src", order.thumbnail_img) + " alt class=\"img-fulid\" style=\"width: 100%;\" data-v-7f454bad></div> "), _vm._ssrNode("<div class=\"cart_title\" data-v-7f454bad>", "</div>", [_vm._ssrNode("<h1 data-v-7f454bad>" + _vm._ssrEscape("Order ID: " + _vm._s(order.orderId)) + "</h1> <h1 data-v-7f454bad>" + _vm._ssrEscape(_vm._s(order.name)) + "</h1> <p data-v-7f454bad>" + _vm._ssrEscape("BDT" + _vm._s(order.price)) + "</p> <span data-v-7f454bad>" + _vm._ssrEscape("Issue On:" + _vm._s(order.placeOn)) + "</span><br data-v-7f454bad> "), _vm._ssrNode("<span data-v-7f454bad>", "</span>", [_vm._ssrNode(_vm._ssrEscape(_vm._s(order.total_selling) + " Out Of " + _vm._s(order.total_tickts) + "\r\n                                                        ")), _c('nuxt-link', {
      staticClass: "btn_submit",
      staticStyle: {
        "padding": "2px 8px",
        "font-size": "10px",
        "text-decoration": "none"
      },
      attrs: {
        "to": "/"
      }
    }, [_vm._v("Buy more")])], 2)], 2)], 2), _vm._ssrNode(" <div class=\"ticket_list_op\" data-v-7f454bad><div" + _vm._ssrAttr("id", 'collapseExample_' + index) + " class=\"collapse\" data-v-7f454bad><div class=\"card card-body\" data-v-7f454bad><span data-v-7f454bad>" + _vm._ssrEscape(_vm._s(order.implodedtickets)) + "</span></div></div></div>")], 2)])], 2)]);
  }), 0)])], 2)])], 2)], 2), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('MobileMenu')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/ticket.vue?vue&type=template&id=7f454bad&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/ticket.vue?vue&type=script&lang=js&
/* harmony default export */ var ticketvue_type_script_lang_js_ = ({
  middleware: "auth",
  head: {
    title: 'Active Ticket'
  },
  data() {
    return {
      loading: false,
      orders: [],
      order_status: [],
      notifmsg: '',
      errors: {}
    };
  },
  async mounted() {
    this.defaultLoading();
  },
  methods: {
    async defaultLoading() {
      await this.$axios.get(`/order/activeTickets`).then(response => {
        this.orders = response.data.orderdata;
        return false;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    addtoCart() {
      this.$router.push('/cart');
    }
  }
});
// CONCATENATED MODULE: ./pages/user/ticket.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_ticketvue_type_script_lang_js_ = (ticketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/ticket.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_ticketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f454bad",
  "94aa22d0"
  
)

/* harmony default export */ var ticket = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(42).default,Loader: __webpack_require__(43).default,Footer: __webpack_require__(33).default})


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
  "3839e498"
  
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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=91778386&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_nav app_hide\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<nav class=\"navbar navbar-expand-lg\">", "</nav>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "logo_"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/logo.png",
      "loading": "lazy",
      "alt": ""
    }
  })])]), _vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"><i class=\"fa-solid fa-bars\"></i></button> "), _vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\">", "</div>", [_vm._ssrNode("<ul class=\"navbar-nav ms-auto mb-2 mb-lg-0\">", "</ul>", [_vm._ssrNode("<li class=\"nav-item\"><a aria-current=\"page\" href=\"https://wa.me/8801827720375\" target=\"_blank\" class=\"nav-link active\">Need Help? Contact\r\n                                            us\r\n                                        </a></li> "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link active",
    attrs: {
      "aria-current": "page",
      "to": "/products"
    }
  }, [_c('div', {
    staticClass: "creadit_ticket"
  }, [_c('p', [_vm._v("Win Exclusive Price")]), _vm._v(" "), _c('h1', [_vm._v("PRODUCT")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link active",
    attrs: {
      "to": "/winners",
      "aria-current": "page"
    }
  }, [_c('div', {
    staticClass: "creadit_ticket"
  }, [_c('p', [_vm._v("Win Exclusive Price")]), _vm._v(" "), _c('h1', [_vm._v("WINNERS")])])])], 1), _vm._ssrNode(" <li class=\"nav-item d-none\"><select name id><option value><img src=\"/images/flags/united-states-emoji-96.png\" loading=\"lazy\" alt class=\"img-fulid\">USDT</option> <option value>BDT</option></select></li> <li class=\"nav-item d-none\"><select name id><option value>English</option> <option value>Bengali</option></select></li> "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link mobile_ position-relative",
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("\r\n                                            Cart\r\n                                            "), _c('span', {
    staticClass: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  }, [_vm._v("\r\n                                                " + _vm._s(_vm.itemCounts) + "\r\n                                            ")])])], 1), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/user/profile"
    }
  }, [_vm._v("My Dashboard")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"nav-link\">Logout</a>")], 2) : _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Register/Login")])], 1)], 2)])], 2)])])])])]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"mobile_header app_show\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"header_button\">", "</div>", [_c('nuxt-link', {
    class: {
      'active': _vm.$route.path === '/'
    },
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    staticStyle: {
      "padding": "2px"
    },
    attrs: {
      "src": "/images/logoudpate.png",
      "loading": "lazy",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    class: {
      'active': _vm.$route.path === '/products'
    },
    attrs: {
      "to": "/products"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/product_icon.png",
      "loading": "lazy",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    class: {
      'active': _vm.$route.path === '/winners'
    },
    attrs: {
      "to": "/winners"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/winners_icon.png",
      "loading": "lazy",
      "alt": ""
    }
  })])], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=91778386&

// EXTERNAL MODULE: ./plugins/bus.js
var bus = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      cart: [],
      _itemCount: 0,
      itemCounts: 0
    };
  },
  mounted() {
    this.loadCart();
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
    redirectHomePages() {
      this.$router.push('/');
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += parseInt(item.quantity);
      });
      //console.log("Finally get total Cart" + itemCount);
      this.itemCounts = itemCount;
    },
    async logout() {
      await this.$auth.logout();
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fad59cae"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

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
  "be30e7a8"
  
)

/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6e223d86", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticket_vue_vue_type_style_index_0_id_7f454bad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticket_vue_vue_type_style_index_0_id_7f454bad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticket_vue_vue_type_style_index_0_id_7f454bad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticket_vue_vue_type_style_index_0_id_7f454bad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticket_vue_vue_type_style_index_0_id_7f454bad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart_title p[data-v-7f454bad]{color:#acff00;font-family:\"Rubik\",sans-serif;font-size:19px;font-weight:500;letter-spacing:-.63px;line-height:10px;margin:10px 0 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=ticket.js.map