exports.ids = [17,4,5];
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("381b8aec", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3b59027b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3b59027b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3b59027b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3b59027b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_3b59027b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "form p[data-v-3b59027b]{margin-bottom:15px}label[data-v-3b59027b]{display:block;margin-bottom:5px}input[type=email][data-v-3b59027b],input[type=password][data-v-3b59027b],input[type=text][data-v-3b59027b]{border:1px solid #ccc;border-radius:4px;padding:8px 10px;width:100%}.text-danger[data-v-3b59027b]{color:red;display:block;font-size:13px;margin-top:4px}.login_submit button[data-v-3b59027b]{font-size:14px;padding:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=3b59027b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"breadcrumbs_area\" data-v-3b59027b>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-3b59027b>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-3b59027b>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-3b59027b>", "</div>", [_vm._ssrNode("<div class=\"breadcrumb_content\" data-v-3b59027b>", "</div>", [_vm._ssrNode("<ul data-v-3b59027b>", "</ul>", [_vm._ssrNode("<li data-v-3b59027b>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("home")])], 1), _vm._ssrNode(" <li data-v-3b59027b>checkout</li>")], 2)])])])])]), _vm._ssrNode(" <div class=\"checkout-area bg-white section-padding-md\" data-v-3b59027b><div class=\"container\" data-v-3b59027b><form id=\"otp-screen\" class=\"billing-info\" data-v-3b59027b><div class=\"row\" data-v-3b59027b><div class=\"col-lg-6\" data-v-3b59027b><h3 class=\"small-title\" data-v-3b59027b>Billing Details</h3> <p data-v-3b59027b><label data-v-3b59027b>First Name <span data-v-3b59027b>*</span></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.first_name) + " data-v-3b59027b> " + (_vm.errors.first_name ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.first_name[0])) + "</span>" : "<!---->") + "</p> <p data-v-3b59027b><label data-v-3b59027b>Last Name <span data-v-3b59027b>*</span></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.last_name) + " data-v-3b59027b> " + (_vm.errors.last_name ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.last_name[0])) + "</span>" : "<!---->") + "</p> <p data-v-3b59027b><label data-v-3b59027b>Email <span data-v-3b59027b>*</span></label> <input type=\"email\"" + _vm._ssrAttr("value", _vm.paymentGetway.email) + " data-v-3b59027b> " + (_vm.errors.email ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</p> <p data-v-3b59027b><label data-v-3b59027b>Phone <span data-v-3b59027b>*</span></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.phone) + " data-v-3b59027b> " + (_vm.errors.phone ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.phone[0])) + "</span>" : "<!---->") + "</p> <p data-v-3b59027b><label data-v-3b59027b>Street Address <span data-v-3b59027b>*</span></label> <input type=\"text\" placeholder=\"Street Address\"" + _vm._ssrAttr("value", _vm.paymentGetway.street_address) + " data-v-3b59027b> " + (_vm.errors.street_address ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.street_address[0])) + "</span>" : "<!---->") + "</p> <p data-v-3b59027b><label data-v-3b59027b>Apartment, suite, unit etc. (optional)</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.appar_suite_address) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>State <span data-v-3b59027b>*</span></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.state) + " data-v-3b59027b> " + (_vm.errors.state ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.state[0])) + "</span>" : "<!---->") + "</p> <p data-v-3b59027b><label data-v-3b59027b>Postcode / ZIP <span data-v-3b59027b>*</span></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.post_code_zip) + " data-v-3b59027b> " + (_vm.errors.post_code_zip ? "<span class=\"text-danger\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.errors.post_code_zip[0])) + "</span>" : "<!---->") + "</p> <div class=\"different-address-form-trigger\" data-v-3b59027b><input type=\"checkbox\" id=\"direrent-address-toggle\"" + _vm._ssrAttr("checked", Array.isArray(_vm.showDifferentAddress) ? _vm._i(_vm.showDifferentAddress, null) > -1 : _vm.showDifferentAddress) + " class=\"sn-checkbox\" data-v-3b59027b> <label for=\"direrent-address-toggle\" data-v-3b59027b>SHIP TO DIFFERENT ADDRESS</label></div> " + (_vm.showDifferentAddress ? "<div data-v-3b59027b><h4 data-v-3b59027b>Shipping Address</h4> <p data-v-3b59027b><label data-v-3b59027b>First Name</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_first_name) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>Last Name</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_last_name) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>Email</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_email) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>Phone</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_phone_number) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>Address</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_address) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>Apartment, suite, unit etc. (optional)</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_apprt_suite_addr) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>State</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_state) + " data-v-3b59027b></p> <p data-v-3b59027b><label data-v-3b59027b>Postcode / ZIP</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.paymentGetway.shipper_zip) + " data-v-3b59027b></p></div>" : "<!---->") + "</div> <div class=\"col-lg-6\" data-v-3b59027b><div class=\"checkout_form_right\" data-v-3b59027b><h3 data-v-3b59027b>Your order</h3> <div class=\"order-infobox\" data-v-3b59027b><div class=\"checkout-table table-responsive\" data-v-3b59027b><table class=\"table\" data-v-3b59027b><thead data-v-3b59027b><tr data-v-3b59027b><th class=\"text-left\" data-v-3b59027b>PRODUCT</th> <th class=\"text-right\" data-v-3b59027b>PRICE</th> <th class=\"text-right\" data-v-3b59027b>SUBTOTAL</th></tr></thead> <tbody data-v-3b59027b>" + _vm._ssrList(_vm.cart, function (item) {
    return "<tr data-v-3b59027b><td class=\"text-start\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(item.name) + " ") + "<span data-v-3b59027b>" + _vm._ssrEscape("× " + _vm._s(item.quantity)) + "</span></td> <td class=\"text-right\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s(item.price) + "\n                                                ") + "</td> <td class=\"text-right\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s((item.price * item.quantity).toFixed(2))) + "</td></tr>";
  }) + "</tbody> <tfoot data-v-3b59027b><tr data-v-3b59027b><th class=\"text-left\" data-v-3b59027b>CART SUBTOTAL</th> <td class=\"text-right\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s(_vm.itemSubtotal) + "\n                                                ") + "</td></tr> <tr data-v-3b59027b><th class=\"text-left\" data-v-3b59027b>SHIPPING <small data-v-3b59027b>(Flat)</small></th> <td class=\"text-right\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s(_vm.sh_fees)) + "</td></tr> <tr class=\"total-price\" data-v-3b59027b><th class=\"text-left\" data-v-3b59027b>ORDER TOTAL</th> <td class=\"text-right\" data-v-3b59027b>" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + "\n                                                    " + _vm._s((parseFloat(_vm.itemSubtotal) + parseFloat(_vm.sh_fees)).toLocaleString('en-US', {
    minimumFractionDigits: 2
  })) + "\n\n                                                ") + "</td></tr></tfoot></table></div> <div role=\"alert\" class=\"alert alert-info alert-dismissible fade show\" data-v-3b59027b><p class=\"mb-1\" data-v-3b59027b><strong data-v-3b59027b>Want to pay now?</strong> We're here to help you\n                                        complete your order easily.</p> <p data-v-3b59027b>Just send us a message at <a href=\"mailto:support@matrix360sourcing.com\" class=\"alert-link\" data-v-3b59027b>support@matrix360sourcing.com</a> and we’ll guide you\n                                        through it. After verification, we can proceed with completing your order\n                                        smoothly.</p> <button type=\"button\" data-bs-dismiss=\"alert\" aria-label=\"Close\" class=\"btn-close\" data-v-3b59027b></button></div> <div class=\"payment-method mt-2 d-none\" style=\"display: flex; gap: 20px;  align-items: center;\" data-v-3b59027b><input type=\"hidden\"" + _vm._ssrAttr("value", _vm.paymentGetway.price) + " data-v-3b59027b> <div class=\"check-payment\" style=\"display: inline-flex; align-items: center; gap: 5px;\" data-v-3b59027b><input type=\"radio\" name=\"payment-method\" id=\"checkout-payment-method-1\" value=\"stripe\" checked=\"checked\" class=\"sn-radio\" data-v-3b59027b> <label for=\"checkout-payment-method-1\" data-v-3b59027b>Stripe Payment</label></div> <div class=\"check-payment\" style=\"display: inline-flex; align-items: center; gap: 5px;\" data-v-3b59027b><input type=\"radio\" name=\"payment-method\" id=\"checkout-payment-method-2\" value=\"paypal\"" + _vm._ssrAttr("checked", _vm._q(_vm.selectedPaymentMethod, "paypal")) + " class=\"sn-radio\" data-v-3b59027b> <label for=\"checkout-payment-method-2\" data-v-3b59027b>Paypal Payment</label></div></div> <div class=\"order_button mt-4\" data-v-3b59027b><button type=\"submit\" class=\"w-100\" data-v-3b59027b>Proceed</button></div></div></div></div></div></form></div></div> "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=3b59027b&scoped=true&

// EXTERNAL MODULE: ./plugins/bus.js
var bus = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js&

/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  head: {
    title: 'Checkout'
  },
  data() {
    return {
      sh_fees: 0,
      loading: false,
      shipfees_amt: 0,
      itemSubtotal: 0,
      totalShippingFees: 0,
      shippingFee: 0,
      showWalletInfo: false,
      apiResponseMessage: '',
      cart: [],
      sproducts: [],
      pre_setting: '',
      itemCount: 0,
      subtotal: 0,
      loading: true,
      showDifferentAddress: false,
      differentAddressField: '',
      // Initialize different address field if needed
      //selectedPaymentMethod: 'paypal',
      selectedPaymentMethod: 'stripe',
      paymentGetway: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        street_address: '',
        appar_suite_address: '',
        state: '',
        post_code_zip: '',
        paypal: '',
        stripe: '',
        price: '',
        uniqueId: null,
        //ship
        shipper_first_name: '',
        shipper_last_name: '',
        shipper_email: '',
        shipper_phone_number: '',
        shipper_address: '',
        shipper_apprt_suite_addr: '',
        shipper_state: '',
        shipper_zip: ''
      },
      showPassword: false,
      invaliderror: '',
      notifmsg: '',
      errors: {}
    };
  },
  mounted() {
    //console.log("itemSubtotal:", this.subtotal);
    this.setting();
    this.loadingCart();
    this.loadCart();
    this.calculateTotalQuantity();
    this.loadingsmiliarProduct();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    updatePaymentMethod() {
      if (this.selectedPaymentMethod === 'paypal') {
        this.paymentGetway.paypal = 'Paypal'; // Set paypal value
        this.paymentGetway.stripe = ''; // Clear zelle value
      } else if (this.selectedPaymentMethod === 'stripe') {
        this.paymentGetway.stripe = 'Stripe'; // Set zelle value
        this.paymentGetway.paypal = ''; // Clear paypal value
      }
    },

    copybillingAddress() {
      this.paymentGetway.shipper_first_name = this.paymentGetway.first_name;
      this.paymentGetway.shipper_last_name = this.paymentGetway.last_name;
      this.paymentGetway.shipper_email = this.paymentGetway.email;
      this.paymentGetway.shipper_phone_number = this.paymentGetway.phone;
      this.paymentGetway.shipper_address = this.paymentGetway.street_address;
      this.paymentGetway.shipper_apprt_suite_addr = this.paymentGetway.appar_suite_address;
      this.paymentGetway.shipper_state = this.paymentGetway.state;
      this.paymentGetway.shipper_zip = this.paymentGetway.post_code_zip;
    },
    checkoutProcess() {
      const uniqueid = '_' + Math.random().toString(36).substr(2, 9);
      this.uniqueId = uniqueid;
      const formData = new FormData();
      formData.append('cart', JSON.stringify(this.cart));
      formData.append('first_name', this.paymentGetway.first_name);
      formData.append('last_name', this.paymentGetway.last_name);
      formData.append('email', this.paymentGetway.email);
      formData.append('phone', this.paymentGetway.phone);
      formData.append('street_address', this.paymentGetway.street_address);
      formData.append('appar_suite_address', this.paymentGetway.appar_suite_address);
      formData.append('state', this.paymentGetway.state);
      formData.append('post_code_zip', this.paymentGetway.post_code_zip);
      //Shipper 
      formData.append('shipper_first_name', this.paymentGetway.shipper_first_name);
      formData.append('shipper_last_name', this.paymentGetway.shipper_last_name);
      formData.append('shipper_email', this.paymentGetway.shipper_email);
      formData.append('shipper_phone_number', this.paymentGetway.shipper_phone_number);
      formData.append('shipper_address', this.paymentGetway.shipper_address);
      formData.append('shipper_apprt_suite_addr', this.paymentGetway.shipper_apprt_suite_addr);
      formData.append('shipper_state', this.paymentGetway.shipper_state);
      formData.append('shipper_zip', this.paymentGetway.shipper_zip);
      formData.append('uniqueId', uniqueid);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      const select_method = this.selectedPaymentMethod;
      if (select_method == 'paypal') {
        this.$axios.post('/payment/storeCartData', formData, {
          headers
        }).then(response => {
          console.log("console.log" + response.message);
        }).catch(error => {
          if (error.response.status === 422) {
            //  console.log("---" + error.response.data.errors);
            this.errors = error.response.data.errors;
          }
        });
      } else {
        this.$axios.post('/stripe/storeCartData', formData, {
          headers
        }).then(response => {
          console.log("console.log" + response.message);
        }).catch(error => {
          if (error.response.status === 422) {
            //  console.log("---" + error.response.data.errors);
            this.errors = error.response.data.errors;
          }
        });
      }
      if (select_method == 'paypal') {
        this.loading = true;
        const formData = new FormData();
        formData.append('selectePaymentMethod', this.selectedPaymentMethod);
        formData.append('uniqueId', JSON.stringify(this.uniqueId));
        formData.append('price', this.paymentGetway.price);
        formData.append('first_name', this.paymentGetway.first_name);
        formData.append('last_name', this.paymentGetway.last_name);
        formData.append('email', this.paymentGetway.email);
        formData.append('phone', this.paymentGetway.phone);
        formData.append('street_address', this.paymentGetway.street_address);
        formData.append('appar_suite_address', this.paymentGetway.appar_suite_address);
        formData.append('state', this.paymentGetway.state);
        formData.append('post_code_zip', this.paymentGetway.post_code_zip);
        //Shipper 
        formData.append('shipper_first_name', this.paymentGetway.shipper_first_name);
        formData.append('shipper_last_name', this.paymentGetway.shipper_last_name);
        formData.append('shipper_email', this.paymentGetway.shipper_email);
        formData.append('shipper_phone_number', this.paymentGetway.shipper_phone_number);
        formData.append('shipper_address', this.paymentGetway.shipper_address);
        formData.append('shipper_apprt_suite_addr', this.paymentGetway.shipper_apprt_suite_addr);
        formData.append('shipper_state', this.paymentGetway.shipper_state);
        formData.append('shipper_zip', this.paymentGetway.shipper_zip);
        const headers = {
          'Content-Type': 'multipart/form-data'
        };
        this.$axios.post('/payment/paypal', formData, {
          headers
        }).then(response => {
          // this.loading = false;
          this.clearCart();
          if (response.status === 200 && response.data.redirectUrl) {
            // Redirect to PayPal payment page
            window.location.href = response.data.redirectUrl;
          }
          if (response.status === 200 && response.data.status === 'success') {
            console.log('Payment is successful');
          } else {
            console.log('---------------Payment failed or cancelled');
          }
        }).catch(error => {
          if (error.response.status === 422) {
            this.loading = false;
            console.log("---" + error.response.data.errors);
            this.errors = error.response.data.errors;
          }
        });
      }
      if (select_method == 'stripe') {
        //alert("stripe under development.....");
        this.loading = true;
        const payload = {
          selectePaymentMethod: this.selectedPaymentMethod,
          uniqueId: this.uniqueId,
          price: this.paymentGetway.price,
          first_name: this.paymentGetway.first_name,
          last_name: this.paymentGetway.last_name,
          email: this.paymentGetway.email,
          phone: this.paymentGetway.phone,
          street_address: this.paymentGetway.street_address,
          appar_suite_address: this.paymentGetway.appar_suite_address,
          state: this.paymentGetway.state,
          post_code_zip: this.paymentGetway.post_code_zip,
          shipper_first_name: this.paymentGetway.shipper_first_name,
          shipper_last_name: this.paymentGetway.shipper_last_name,
          shipper_email: this.paymentGetway.shipper_email,
          shipper_phone_number: this.paymentGetway.shipper_phone_number,
          shipper_address: this.paymentGetway.shipper_address,
          shipper_apprt_suite_addr: this.paymentGetway.shipper_apprt_suite_addr,
          shipper_state: this.paymentGetway.shipper_state,
          shipper_zip: this.paymentGetway.shipper_zip
        };
        this.$axios.post('/stripe/checkout', payload).then(response => {
          // console.log("response::", response.data.message);
        }).catch(error => {
          if (error.response && error.response.status === 422) {
            this.loading = false;
            this.errors = error.response.data.errors;
          }
        });

        //    for redirect
        const requiredFields = {
          selectePaymentMethod: this.selectedPaymentMethod,
          uniqueId: this.uniqueId,
          price: this.paymentGetway.price,
          first_name: this.paymentGetway.first_name,
          last_name: this.paymentGetway.last_name,
          email: this.paymentGetway.email,
          phone: this.paymentGetway.phone,
          street_address: this.paymentGetway.street_address,
          appar_suite_address: this.paymentGetway.appar_suite_address,
          state: this.paymentGetway.state,
          post_code_zip: this.paymentGetway.post_code_zip
        };
        let isValid = true;
        for (const [key, value] of Object.entries(requiredFields)) {
          if (!value || String(value).trim() === '') {
            this.errors[key] = `${key.replace(/_/g, ' ')} is required`;
            isValid = false;
          }
        }
        if (!isValid) {
          this.loading = false;
          return;
        }

        // All fields are valid — redirect to success
        this.clearCart();
        this.$router.push('/success');
        // add orderID pasing sendrandId
        // const response = this.$axios.get('/stripe/randomProductslimit', {
        //     params: {
        //         uniqueId: JSON.stringify(this.uniqueId),
        //     }
        // });
        // console.log(response);
      }
    },

    async loadingsmiliarProduct() {
      try {
        const response = await this.$axios.get('/unauthenticate/randomProductslimit');
        this.sproducts = response.data;
      } catch (error) {
        console.error('Error fetching loadingProduct:', error);
      } finally {}
    },
    showhidePassword() {
      this.showPassword = !this.showPassword;
    },
    async setting() {
      try {
        this.loading = true; // Show loader
        const response = await this.$axios.get('/unauthenticate/setting');
        this.pre_setting = response.data;
        this.sh_fees = response.data.shipping_fee;
        this.getCartTotal();
      } catch (error) {
        console.error('Error fetching sellingFast:', error);
      } finally {
        this.loading = false; // Hide loader after response or error
      }
    },

    loadingCart() {
      setTimeout(() => {
        this.loading = false;
      }, 1000); // 5000 milliseconds = 5 seconds
    },

    async userLogin() {
      try {
        const postData = {
          email: this.login.email,
          password: this.login.password
          // Add other parameters as needed
        };

        let {
          data
        } = await this.$axios.post('/auth/login', postData);
        await this.$auth.setUserToken(data.access_token);
        this.closePopup();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        this.$router.push('/payment');
      } catch (err) {
        if (err.response.status === 422) {
          this.errors = err.response.data.errors;
          this.errorHandler(err);
        }
        console.log(err);
      }
    },
    errorHandler(error) {
      if (error.response && error.response.data.errors && error.response.data.errors.account) {
        console.log("error : " + error.response.data.errors.account[0]);
        this.invaliderror = error.response.data.errors.account[0];
      } else {
        console.log("An error occurred. Please try again later.");
      }
    },
    orderConfirm() {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to submit an order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.isConfirmed) {
          const response = this.$axios.post('/order/submitOrder', {
            cart: this.cart
          });
          this.clearCart();
          console.log(response.data); // Log the API response

          const savedCart = localStorage.getItem('cart');
          let cartData = JSON.parse(savedCart);
          bus["a" /* default */].$emit("updateCart", cartData);
          Swal.fire({
            title: "Success!",
            text: "Your order has been submited.",
            icon: "success"
          });
        }
      });
    },
    clearCart() {
      this.loading = true;
      localStorage.removeItem('cart');
      this.cart = [];
      this.calculateTotalQuantity();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    calculateTotalQuantity() {
      // Get the cart data from local storage
      const cartData = localStorage.getItem('cart');
      const cart = JSON.parse(cartData) || [];
      const totalQuantity = cart.reduce((total, item) => total + parseInt(item.quantity, 10), 0);
      //  console.log("Total Quantity in Cart:", totalQuantity);
      this.itemCount = totalQuantity;
    },
    calculateTotalPrice(item) {
      // Check if necessary properties are truthy before performing the calculation
      if (item && item.quantity !== undefined && item.price !== undefined) {
        const total = item.quantity * item.price;
        return `${this.formatPrice(total)}`; // Assuming you have a formatPrice method
      } else {
        return "Invalid item data";
      }
    },
    formatPrice(price) {
      return price.toFixed(2);
    },
    formatPrice(price) {
      if (typeof price === 'number') {
        return price.toFixed(2);
      }
      return price;
    },
    loadCart() {
      //  this.paymentGetway.price = this.totalPrice;
      this.calculateTotalQuantity();
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cartdata = JSON.parse(savedCart);
        this.cart = this.getUniqueItems(cartdata);
      }
    },
    getUniqueItems(cart) {
      return cart.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
    },
    getCartTotal() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cartData = JSON.parse(savedCart);
        const uniqueCart = cartData.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
        let totalPrice = 0; // Declare totalPrice outside the if-else blocks
        let totalQuantity = 0; // Declare totalQuantity variable
        let uniqueProductIds = []; // Track unique product IDs to ensure shipping fee is added only once
        let totalShippingFees = this.pre_setting.shipping_fee;
        totalPrice = uniqueCart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
        totalQuantity = uniqueCart.reduce((total, item) => total + (item.quantity || 0), 0);
        totalPrice = uniqueCart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
        totalQuantity = uniqueCart.reduce((total, item) => total + (item.quantity || 0), 0);
        //  console.log("Total Item quantity: " + totalQuantity);
        // console.log("Total Shipping Fees:", this.pre_setting.shipping_fe);
        this.itemSubtotal = totalPrice;
        let cal_result = parseFloat(totalPrice) + parseFloat(totalShippingFees);
        console.log('Total Price for Unique Items:', cal_result);
        this.paymentGetway.price = cal_result;
        //END 
      } else {
        console.error('No cart data found in local storage.');
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b59027b",
  "63e2297b"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(39).default,Footer: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=checkout.js.map