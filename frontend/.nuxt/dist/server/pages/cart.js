exports.ids = [15,4,5,6];
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
  "051571a6"
  
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
  "be30e7a8"
  
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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("2e4b047e", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_1c6dbf86_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_1c6dbf86_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_1c6dbf86_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_1c6dbf86_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_1c6dbf86_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txtformat{text-align:center;-webkit-text-decoration:none;text-decoration:none;width:100%}.section-padding-md{padding:40px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=1c6dbf86&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"breadcrumbs_area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"breadcrumb_content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("home")])], 1), _vm._ssrNode(" <li>SHOPPING CART</li>")], 2)])])])])]), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"page-content\">", "</main>", [_vm.loading ? _vm._ssrNode("<span>", "</span>", [_c('Loader')], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-page-area bg-white\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('center', [_c('p', [_vm._v(_vm._s(_vm.qtymsg))])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-table table-responsive\">", "</div>", [_vm._ssrNode("<table class=\"table table-bordered table-hover\">", "</table>", [_vm._ssrNode("<thead><tr><th scope=\"col\" class=\"cart-column-image\">IMAGE</th> <th scope=\"col\" class=\"cart-column-productname\">PRODUCT</th> <th scope=\"col\" class=\"cart-column-price\">PRICE</th> <th scope=\"col\" class=\"cart-column-quantity\">QUANTITY</th> <th scope=\"col\" class=\"cart-column-total\">TOTAL</th> <th scope=\"col\" class=\"cart-column-remove\">REMOVE</th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.cart, function (item) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td>", "</td>", [_c('nuxt-link', {
      staticClass: "product-image",
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_c('img', {
      staticStyle: {
        "height": "100px",
        "width": "100px"
      },
      attrs: {
        "src": item.thumnail,
        "alt": "product image"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<td style=\"text-align: left;\">", "</td>", [_c('nuxt-link', {
      staticClass: "product-title",
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._ssrNode(" <td>" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s(item.price)) + "</td> <td><div class=\"quantity-select text-center\"><input type=\"text\"" + _vm._ssrAttr("value", item.quantity) + " class=\"val_input qty\" style=\"text-align: center; display: block; margin: 0 auto;\"></div></td> <td><span class=\"total-price\">" + _vm._ssrEscape(_vm._s(_vm.calculateTotalPrice(item))) + "</span></td> <td><button class=\"remove-product\"><i class=\"fa fa-trash-o\"></i></button></td>")], 2);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-content\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-12\">", "</div>", [_c('nuxt-link', {
    staticClass: "sn-button sn-button-dark",
    attrs: {
      "to": "/products"
    }
  }, [_c('span', [_vm._v("CONTINUE SHOPPING")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"coupon_code right\">", "</div>", [_vm._ssrNode("<h3>Cart Totals</h3> "), _vm._ssrNode("<div class=\"coupon_inner\">", "</div>", [_vm._ssrNode("<div class=\"cart_subtotal\"><p>Subtotal</p> <p class=\"cart_amount\">" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s(_vm.itemSubtotal)) + "</p></div> <div class=\"cart_subtotal\"><p>Shipping</p> <p class=\"cart_amount\"><span>Flat Rate:</span>" + _vm._ssrEscape(" " + _vm._s(_vm.pre_setting.currency) + _vm._s(_vm.shipfees_amt)) + "</p></div> <a href=\"#\">Calculate shipping</a> <div class=\"cart_subtotal\"><p>Total</p> <p class=\"cart_amount\">" + _vm._ssrEscape(_vm._s(_vm.pre_setting.currency) + _vm._s(parseFloat(_vm.itemSubtotal) + parseFloat(_vm.shipfees_amt))) + "</p></div> "), _vm._ssrNode("<div class=\"checkout_btn\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("Proceed to Checkout")])], 1)], 2)], 2)])], 2)]), _vm._ssrNode(" <br><br> "), _vm._ssrNode("<section class=\"product_area related_products\">", "</section>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"section_title title_style2\"><div class=\"title_content\"><h2><span>Related</span> Products</h2></div></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.sproducts, function (item, index) {
    return _vm._ssrNode("<div class=\"col-lg-3\">", "</div>", [_vm._ssrNode("<article class=\"single_product mt-3\">", "</article>", [_vm._ssrNode("<figure>", "</figure>", [_vm._ssrNode("<div class=\"product_thumb\">", "</div>", [_c('nuxt-link', {
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
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._ssrNode(" <div class=\"price_box\"><span class=\"current_price\">" + _vm._ssrEscape(_vm._s(item.price)) + "</span></div>")], 2), _vm._ssrNode(" <div class=\"action_links d-none\"><ul><li class=\"add_to_cart\"><a href=\"cart.html\" title=\"Add to cart\">Add\n                                                        to\n                                                        cart</a></li></ul></div>")], 2)], 2)]), _vm._ssrNode(" <br>")], 2);
  }), 0), _vm._ssrNode(" <br><br><br>")], 2)], 2)])], 2), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=1c6dbf86&

// EXTERNAL MODULE: ./plugins/bus.js
var bus = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js&

/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  head: {
    title: 'Cart'
  },
  data() {
    return {
      wallet_balance: 0,
      walletBalance: 0,
      shipfees_amt: 0,
      itemSubtotal: 0,
      categoryId: 27,
      totalShippingFees: 0,
      shippingFee: 0,
      copon_amount: 0,
      isChecked: false,
      showWalletInfo: false,
      couponCode: '',
      couponamt: '',
      apiResponseMessage: '',
      cart: [],
      sproducts: [],
      pre_setting: '',
      itemCount: 0,
      subtotal: 0,
      qtymsg: '',
      loading: true,
      percentageAmount: 0,
      login: {
        email: '',
        password: ''
      },
      showPassword: false,
      invaliderror: '',
      notifmsg: '',
      errors: {}
    };
  },
  mounted() {
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
    async loadingsmiliarProduct() {
      try {
        //  this.loading = true; // Show loader
        const response = await this.$axios.get('/unauthenticate/randomProductslimit');
        this.sproducts = response.data;
        console.log("====" + response.data);
        // Handle other logic related to products if needed
      } catch (error) {
        console.error('Error fetching loadingProduct:', error);
        // Handle error if needed
      } finally {
        //   this.loading = false; // Hide loader after response or error
      }
    },
    showhidePassword() {
      this.showPassword = !this.showPassword;
    },
    loadTotalAmut() {
      // console.log("loadTotalAmut" + this.subtotal);
      const itemsubtotal = this.itemSubtotal;
      const totalShippingFees = this.totalShippingFees;
      const subtotal = this.subtotal;
      const percentageAmount = this.percentageAmount;
      const walletBalance = this.walletBalance;
      const copon_amount = this.copon_amount;
      // Create an object with dynamic key-value pairs
      const dataObject = {
        itemsubtotal: itemsubtotal,
        subtotal: subtotal,
        percentageAmount: percentageAmount,
        totalShippingFees: totalShippingFees,
        walletBalance: walletBalance,
        copon_amount: copon_amount
      };
      // Save the object back to local storage
      localStorage.setItem('orderSummary', JSON.stringify(dataObject));
    },
    toggleWalletInfo() {
      this.showWalletInfo = !this.showWalletInfo;
      if (this.showWalletInfo) {
        this.getCartTotal();
      }
    },
    async checkCoupon() {
      try {
        this.loading = true; // Show loader
        const response = await this.$axios.post('/unauthenticate/check-coupon', {
          couponCode: this.couponCode
        });
        this.couponamt = response.data.wallet_amount;
        this.couponResult = response.data.message;
        this.apiResponseMessage = "";
        this.getCartTotal();
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
          title: response.data.message
        });
      } catch (error) {
        // Check if error.response exists before accessing its properties
        if (error.response && error.response.data && error.response.data.message) {
          this.apiResponseMessage = error.response.data.message;
        } else {
          // If response data is not available, set a generic error message
          this.apiResponseMessage = 'An error occurred while processing your request.';
        }
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
          icon: "warning",
          title: error.response.data.message
        });
      } finally {
        this.loading = false; // Hide loader after response or error
      }
    },

    async setting() {
      try {
        this.loading = true; // Show loader
        const response = await this.$axios.get('/unauthenticate/setting');
        this.pre_setting = response.data;
        this.wallet_balance = response.data.wallet_balance;
        this.shippingFee = response.data.shipping_fee;
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
    increaseQuantity(productId) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        let cartData = JSON.parse(savedCart);
        const index = cartData.findIndex(cartItem => cartItem.id === productId);
        if (index !== -1) {
          cartData[index].quantity = (parseInt(cartData[index].quantity, 10) + 1).toString();
          const totalQuantity = this.cart.reduce((total, item) => total + parseInt(item.quantity, 10), 0);
          console.log("cart qty:" + totalQuantity);
          console.log("cart qty:" + cartData[index].quantity);
          //return false;
          localStorage.setItem('cart', JSON.stringify(cartData));
          this.loadCart();
          bus["a" /* default */].$emit("updateCart", cartData);
          // Call the updateQuantity method as well
          this.updateQuantity(cartData[index]);
          this.getCartTotal();
        }
      }
    },
    updateQuantity(item) {
      this.qtymsg = 'Quantity updated';
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        let cartData = JSON.parse(savedCart);
        const index = cartData.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
          cartData[index].quantity = parseInt(item.quantity);
          localStorage.setItem('cart', JSON.stringify(cartData));
          this.loadCart();
          this.getCartTotal();
        }
      }
    },
    removefromCart(productId) {
      this.loading = true;
      // Load the cart from local storage
      const savedCart = localStorage.getItem('cart');
      // this.$store.commit('cart/setCart', savedCart);

      if (savedCart) {
        const cartData = JSON.parse(savedCart);
        const updatedCart = cartData.filter(item => item.id !== productId);
        // Update the cart and save it back to local storage
        this.cart = this.getUniqueItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        bus["a" /* default */].$emit('updateCart', this.cart);
        this.loadCart();
        setTimeout(() => {
          this.loading = false;
          this.getCartTotal();
        }, 1000);
      }
    },
    formatPrice(price) {
      if (typeof price === 'number') {
        return price.toFixed(2);
      }
      return price;
    },
    loadCart() {
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
        console.log("Total Item quantity :---" + totalQuantity);
        //let shipfees = this.pre_setting.shipping_fee * totalQuantity;
        //start
        totalPrice = uniqueCart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
        totalQuantity = uniqueCart.reduce((total, item) => total + (item.quantity || 0), 0);
        console.log("Total Item quantity: " + totalQuantity);
        uniqueCart.forEach(item => {
          const productId = item.id;
          const categoryId = item.category_id;
          // Exclude products with category_id 27
          if (categoryId !== 27 && !uniqueProductIds.includes(productId)) {
            const shipFeesForItem = this.pre_setting.shipping_fee;
            totalShippingFees += parseFloat(shipFeesForItem);
            uniqueProductIds.push(productId);
          }
        });
        console.log("Total Shipping Fees:", totalShippingFees);
        this.itemSubtotal = totalPrice;
        this.shipfees_amt = this.pre_setting.shipping_fee;
        let shipfees = totalShippingFees;
        console.log("shipfees :---" + totalShippingFees);
        this.totalShippingFees = totalShippingFees;
        //let walletbalance = this.wallet_balance;
        let wallet_balance;
        if (this.showWalletInfo) {
          wallet_balance = this.wallet_balance;
        } else {
          wallet_balance = 0;
        }
        let copon_result;
        if (this.couponamt !== '') {
          copon_result = parseFloat(this.couponamt);
        } else {
          copon_result = 0;
        }
        const percetage = this.pre_setting.vat_percentage;
        let percentageAmount;
        percentageAmount = parseFloat(totalPrice) * percetage / 100;
        this.percentageAmount = percentageAmount;
        this.walletBalance = wallet_balance;
        this.copon_amount = copon_result;
        console.log(`Formula totalprice: + ${totalPrice}, percentage amount: + ${percentageAmount}, shipping fee: ${shipfees}, walletbalance: - ${wallet_balance} - coupon amount ${copon_result}`);
        const total = parseFloat(totalPrice) + parseFloat(percentageAmount) + parseFloat(shipfees) - parseFloat(wallet_balance) - copon_result;
        console.log("total result : " + total);
        this.subtotal = `${total}`;
        // this.itemsubtotal
        console.log('Total Price for Unique Items:', totalPrice);
        this.loadTotalAmut();

        //Update cart:

        //END 
      } else {
        console.error('No cart data found in local storage.');
      }
    },
    loginpopup() {
      $(".login_modal").fadeIn();
    },
    closePopup() {
      $(".login_modal").fadeOut();
    }
  }
});
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/cart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "83809e56"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(39).default,Loader: __webpack_require__(43).default,Footer: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=cart.js.map