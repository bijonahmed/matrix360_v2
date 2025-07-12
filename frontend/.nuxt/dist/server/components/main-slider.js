exports.ids = [8];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainSlider.vue?vue&type=template&id=0781afcf&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"main_slider\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"swiper main_slider_box\"><div class=\"swiper-wrapper\">" + (_vm.loading ? "<span><div class=\"d-flex justify-content-center\"><div role=\"status\" class=\"spinner-border\"><span class=\"visually-hidden\">Loading...</span></div></div></span>" : "<!---->") + " " + _vm._ssrList(_vm.products, function (item, index) {
    return "<div class=\"swiper-slide\"><div class=\"slide_box\"><img" + _vm._ssrAttr("src", item.images) + " loading=\"lazy\" alt class=\"img-fulid\"></div></div>";
  }) + "</div> <div class=\"navi_op\"><div class=\"swiper-button-next\"></div> <div class=\"swiper-button-prev\"></div></div></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MainSlider.vue?vue&type=template&id=0781afcf&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainSlider.vue?vue&type=script&lang=js&
/* harmony default export */ var MainSlidervue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      products: []
    };
  },
  mounted() {
    this.mainSlider();
    this.$nextTick(() => {
      this.initCarousel();
    });
  },
  methods: {
    async mainSlider() {
      try {
        this.loading = true; // Show loader
        const response = await this.$axios.get('/unauthenticate/slidersImages');
        this.products = response.data;
        // Handle other logic related to products if needed
      } catch (error) {
        console.error('Error fetching sellingFast:', error);
        // Handle error if needed
      } finally {
        this.loading = false; // Hide loader after response or error
      }
    },

    initCarousel() {
      // Main slider box
      new Swiper(".main_slider_box", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        spaceBetween: 10
      });
    }
  }
});
// CONCATENATED MODULE: ./components/MainSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainSlidervue_type_script_lang_js_ = (MainSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MainSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MainSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2d63b7da"
  
)

/* harmony default export */ var MainSlider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=main-slider.js.map