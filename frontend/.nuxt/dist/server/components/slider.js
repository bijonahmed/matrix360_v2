exports.ids = [12];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1b031d34", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_c289bc88_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_c289bc88_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_c289bc88_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_c289bc88_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_c289bc88_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider_section{position:relative}.single_slider{align-items:center;background-position:50%;background-size:cover;display:flex;height:600px;transition:background-image .5s ease-in-out}.slider_content{color:#fff;max-width:700px;padding:40px 20px}.slider_content h1{font-size:42px;font-weight:700;line-height:1.2;margin-bottom:15px}.slider_content h1 span{color:#ffb400}.slider_content p{font-size:18px;margin-bottom:25px}.slider_btn{background-color:#ffb400;border-radius:50px;color:#fff;font-weight:700;padding:12px 25px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;transition:all .3s ease}.slider_btn:hover{background-color:#e09b00;color:#fff}@media (max-width:992px){.single_slider{height:450px}.slider_content h1{font-size:32px}.slider_content p{font-size:16px}}@media (max-width:768px){.single_slider{height:400px}.slider_content{margin:0 auto;padding:20px;text-align:center}.slider_content h1{font-size:26px}.slider_content p{font-size:15px}.slider_btn{font-size:14px;padding:10px 20px}}@media (max-width:480px){.single_slider{height:350px}.slider_content h1{font-size:22px}.slider_content p{font-size:14px}}.tags_content{align-items:center;display:flex;font-family:Arial,sans-serif;gap:15px}.tags_content>span{font-weight:700;white-space:nowrap}.scrolling-tags{overflow:hidden;white-space:nowrap;width:80%}.scrolling-tags ul{animation:scrollLeft 60s linear infinite;display:inline-flex;list-style:none;margin:0;padding:0}.scrolling-tags li{margin-right:30px}.scrolling-tags a{color:#007bff;font-size:14px}.scrolling-tags a,.scrolling-tags a:hover{-webkit-text-decoration:none;text-decoration:none}@keyframes scrollLeft{0%{transform:translateX(0)}to{transform:translateX(-50%)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=c289bc88&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"top_tags_area\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"tags_content\"><span>Top Tags:</span> <div class=\"scrolling-tags\"><ul><li><a href=\"#\">Engines</a></li> <li><a href=\"#\">Avionics</a></li> <li><a href=\"#\">Landing Gear</a></li> <li><a href=\"#\">Propellers</a></li> <li><a href=\"#\">Cockpit Instruments</a></li> <li><a href=\"#\">Fuselage Parts</a></li> <li><a href=\"#\">Navigation Systems</a></li> <li><a href=\"#\">Flight Controls</a></li> <li><a href=\"#\">Fuel Systems</a></li> <li><a href=\"#\">Hydraulics</a></li> <li><a href=\"#\">Electrical Systems</a></li> <li><a href=\"#\">Cabin Interiors</a></li> <li><a href=\"#\">Wings</a></li> <li><a href=\"#\">Landing Lights</a></li> <li><a href=\"#\">Communication Systems</a></li> <li><a href=\"#\">Emergency Equipment</a></li> <li><a href=\"#\">Oxygen Systems</a></li> <li><a href=\"#\">Braking Systems</a></li> <li><a href=\"#\">Environmental Control Systems</a></li> <li><a href=\"#\">Seat Assemblies</a></li> <li><a href=\"#\">Flight Data Recorders</a></li> <li><a href=\"#\">Anti-icing Systems</a></li> <li><a href=\"#\">Engines</a></li> <li><a href=\"#\">Avionics</a></li> <li><a href=\"#\">Landing Gear</a></li> <li><a href=\"#\">Propellers</a></li></ul></div></div></div></div></div></div> <section class=\"slider_section mb-80\"><div class=\"slider_area slider_carousel owl-carousel\"><div data-bgimg=\"/assets/img/slider/slider1.png\" class=\"single_slider d-flex align-items-center\"><div class=\"container d-none\"><div class=\"slider_content\"><h1>Big sale off <span>Accessories Fidanza</span></h1> <p>Exclusive Offer -30% Off This Week</p> <a href=\"shop.html\" class=\"slider_btn\">Shop Now <i class=\"fa fa-angle-double-right\"></i></a></div></div></div> <div data-bgimg=\"/assets/img/slider/slider2.jpg\" class=\"single_slider d-flex align-items-center\"><div class=\"container d-none\"><div class=\"slider_content\"><h1>Accessories <span>Tractor Trailer</span></h1> <p>Exclusive Offer -30% Off This Week</p> <a href=\"shop.html\" class=\"slider_btn\">Shop Now <i class=\"fa fa-angle-double-right\"></i></a></div></div></div> <div data-bgimg=\"/assets/img/slider/slider3.png\" class=\"single_slider d-flex align-items-center\"><div class=\"container d-none\"><div class=\"slider_content\"><h1>High-end <span>New car interior</span></h1> <p>Exclusive Offer -20% Off This Week</p> <a href=\"shop.html\" class=\"slider_btn\">Shop Now <i class=\"fa fa-angle-double-right\"></i></a></div></div></div> <div data-bgimg=\"/assets/img/slider/slider4.jpg\" class=\"single_slider d-flex align-items-center\"><div class=\"container d-none\"><div class=\"slider_content\"><h1>High-end <span>New car interior</span></h1> <p>Exclusive Offer -20% Off This Week</p> <a href=\"shop.html\" class=\"slider_btn\">Shop Now <i class=\"fa fa-angle-double-right\"></i></a></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=c289bc88&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=script&lang=js&
/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  //components: { slider },
  data() {
    return {
      showCategories: false,
      showMoreCategories: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (typeof window.$ !== "undefined") {
        $(".slider_carousel").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          nav: false,
          dots: true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
        $(".single_slider").each(function () {
          const bg = $(this).attr("data-bgimg");
          $(this).css("background-image", `url(${bg})`);
        });
      }
    });
  },
  computed: {},
  methods: {
    toggleCategories() {
      this.showCategories = !this.showCategories;
    },
    toggleMoreCategories() {
      this.showMoreCategories = !this.showMoreCategories;
    },
    closepopup() {
      $(".modal_share").fadeOut();
    }
  }
});
// CONCATENATED MODULE: ./components/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Slider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5db4840c"
  
)

/* harmony default export */ var Slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=slider.js.map