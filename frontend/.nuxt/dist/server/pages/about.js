exports.ids = [13,4,5];
exports.modules = {

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
  "051571a6"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(39).default})


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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=7cce2b75&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"breadcrumbs_area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"breadcrumb_content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("home")])], 1), _vm._ssrNode(" <li>about us</li>")], 2)])])])])]), _vm._ssrNode(" <div class=\"about_bg_area\"><div class=\"container\"><section class=\"about_section mb-60\"><div class=\"row align-items-center\"><div class=\"col-12\"><figure><div class=\"about_thumb\"><img src=\"/assets/img/about/about-us.png\" alt=\"about us\" style=\"width: 100%;\"></div> <figcaption style=\"padding: 10px;\"><section id=\"about-us\" class=\"about-section\"><p></p><h3> Welcome to <strong>Matrix360 Sourcing</strong> – your trusted global\n                                        partner\n                                        in the supply and distribution of high-quality aircraft parts and aviation\n                                        components.</h3> <p></p> <p>\n                                        At Matrix360 Sourcing, we specialize in providing a comprehensive range of\n                                        certified, traceable, and reliable aircraft parts to meet the demanding\n                                        needs of the aerospace industry. Our mission is to simplify sourcing by\n                                        offering a seamless and efficient procurement process tailored for airlines,\n                                        MROs (Maintenance, Repair &amp; Overhaul providers), OEMs, and aviation\n                                        professionals around the world.\n                                    </p> <p>\n                                        With a strong network of global suppliers, a highly experienced team, and a\n                                        commitment to quality and compliance, we ensure that every product we\n                                        deliver meets stringent industry standards such as FAA, EASA, and ISO\n                                        certifications. Whether you're in need of rotables, expendables, avionics,\n                                        landing gear, engine components, or hard-to-find legacy parts, Matrix360\n                                        Sourcing is equipped to fulfill your requirements with speed, accuracy, and\n                                        transparency.\n                                    </p> <p>\n                                        We take pride in our customer-first approach, offering personalized service,\n                                        24/7 support, and real-time inventory access. Our team of aviation experts\n                                        works diligently to ensure the right part is delivered on time, every\n                                        time—helping you minimize aircraft downtime and maintain operational\n                                        excellence.\n                                    </p> <p>\n                                        At Matrix360 Sourcing, we don’t just sell parts—we deliver trust,\n                                        efficiency, and peace of mind. Whether you're looking for new, overhauled,\n                                        or serviceable components, let us be your strategic partner in navigating\n                                        the complex world of aviation logistics.\n                                    </p></section></figcaption></figure></div></div></section></div></div> "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=7cce2b75&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  head: {
    title: 'About us'
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a06acfb0"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(39).default,Footer: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=about.js.map