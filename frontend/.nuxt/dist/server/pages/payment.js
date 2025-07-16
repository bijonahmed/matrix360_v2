exports.ids = [23,4,6,9];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment.vue?vue&type=template&id=0b6b1d77&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"about_\" data-v-0b6b1d77>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-0b6b1d77>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-0b6b1d77>", "</div>", [_vm._ssrNode("<section class=\"payment_opsection\" data-v-0b6b1d77>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-0b6b1d77>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-0b6b1d77>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-0b6b1d77>", "</div>", [_vm._ssrNode("<div class=\"pay_options\" data-v-0b6b1d77>", "</div>", [_vm.loading ? _vm._ssrNode("<span data-v-0b6b1d77>", "</span>", [_c('Loader')], 1) : _vm._e(), _vm._ssrNode(" <div class=\"pay_option\" data-v-0b6b1d77><a href=\"javascript:\" data-v-0b6b1d77><h6 data-v-0b6b1d77>Credit/Debit Cards</h6> <img src=\"/images/cards.png\" loading=\"lazy\" alt class=\"cards_pic img-fulid\" data-v-0b6b1d77></a></div> <div class=\"pay_method_img\" data-v-0b6b1d77><a href=\"javascript:\" class=\"bkash_op\" data-v-0b6b1d77><img src=\"/images/Bkash.png\" loading=\"lazy\" alt class=\"cards_pic img-fulid\" data-v-0b6b1d77></a></div> <div class=\"pay_method_img\" data-v-0b6b1d77><a href=\"javascript:\" class=\"nogot_pop\" data-v-0b6b1d77><img src=\"/images/nogot.png\" loading=\"lazy\" alt class=\"cards_pic img-fulid\" data-v-0b6b1d77></a></div> <div class=\"pay_method_img d-none\" data-v-0b6b1d77><a href=\"javascript:\" class=\"roket_pop\" data-v-0b6b1d77><img src=\"/images/Roket.png\" loading=\"lazy\" alt class=\"cards_pic img-fulid\" data-v-0b6b1d77></a></div> <div class=\"pay_method_img\" data-v-0b6b1d77><a href=\"javascript:\" class=\"upay_pop\" data-v-0b6b1d77><img src=\"/images/Upay.png\" loading=\"lazy\" alt class=\"cards_pic img-fulid\" data-v-0b6b1d77></a></div>")], 2)])])])])])]), _vm._ssrNode(" <div class=\"pop_cards pay_pop\" data-v-0b6b1d77><div class=\"content_section\" data-v-0b6b1d77><div class=\"pop_head\" data-v-0b6b1d77><button class=\"btn-close px-3 ms-auto\" data-v-0b6b1d77></button></div> <div data-v-0b6b1d77><h1 class=\"text-center\" style=\"color:black\" data-v-0b6b1d77>Upcoming.....</h1></div> <div class=\"pop_footer\" data-v-0b6b1d77><img src=\"images/logo.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div></div></div> <div class=\"pop_bkash pay_pop\" data-v-0b6b1d77><div class=\"content_section\" data-v-0b6b1d77><div class=\"text-end\" style=\"background-color: #ecf9ff;\" data-v-0b6b1d77></div> <div class=\"pop_head\" data-v-0b6b1d77><img src=\"images/Bkash.png\" loading=\"lazy\" alt class=\"img-fluid logo_img\" data-v-0b6b1d77> <button class=\"btn-close px-3 ms-auto\" data-v-0b6b1d77></button></div> <div class=\"a_details\" data-v-0b6b1d77><form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-0b6b1d77><ul data-v-0b6b1d77><li data-v-0b6b1d77><h6 data-v-0b6b1d77>Account Number:</h6> <div class=\"ac_n\" data-v-0b6b1d77><div class=\"position-relative\" data-v-0b6b1d77><p id=\"copyText1\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.bkash_number)) + "</p> <p class=\"c_txt position-absolute\" data-v-0b6b1d77>Copy</p></div> <button type=\"button\" class=\"btn_copy\" data-v-0b6b1d77><i class=\"fa-regular fa-copy\" data-v-0b6b1d77></i></button></div></li> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Total Payable Amount: </h6> <h1 data-v-0b6b1d77><strong style=\"color: #aded28;\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.payableamount)) + "</strong>TK </h1></li> <div class=\"trx_img\" data-v-0b6b1d77><p data-v-0b6b1d77>How to get Trx Id?</p> <img src=\"/images/transection_image.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Trx ID: </h6> <div data-v-0b6b1d77><p style=\"color: #aded28; font-size: 12px;\" data-v-0b6b1d77>Trx Id Is Required</p> <div class=\"d-flex align-items-center\" data-v-0b6b1d77><input type=\"text\" id=\"txtid\" placeholder=\"Enter Transection Id\"" + _vm._ssrAttr("value", _vm.orderData.txtid) + " data-v-0b6b1d77></div> " + (_vm.errors.txtid ? "<span class=\"text-black\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.errors.txtid[0])) + "</span>" : "<!---->") + "</div></li> <div class=\"text-center\" data-v-0b6b1d77><button type=\"submit\" class=\"btn_submit\" data-v-0b6b1d77>Confirm Order</button></div></ul></form></div> <div class=\"pop_footer\" data-v-0b6b1d77><img src=\"images/logo.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div></div></div> <div class=\"pop_nogot pay_pop\" data-v-0b6b1d77><div class=\"content_section\" data-v-0b6b1d77><div class=\"text-end\" style=\"background-color: #ecf9ff;\" data-v-0b6b1d77></div> <div class=\"pop_head\" data-v-0b6b1d77><img src=\"images/nogot.png\" loading=\"lazy\" alt class=\"img-fluid logo_img\" data-v-0b6b1d77> <button class=\"btn-close px-3 ms-auto\" data-v-0b6b1d77></button></div> <div class=\"a_details\" data-v-0b6b1d77><form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-0b6b1d77><ul data-v-0b6b1d77><li data-v-0b6b1d77><h6 data-v-0b6b1d77>Account Number:</h6> <div class=\"ac_n\" data-v-0b6b1d77><div class=\"position-relative\" data-v-0b6b1d77><p id=\"copyText2\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.nagad_number)) + "</p> <p class=\"c_txt position-absolute\" data-v-0b6b1d77>Copy</p></div> <button type=\"button\" class=\"btn_copy\" data-v-0b6b1d77><i class=\"fa-regular fa-copy\" data-v-0b6b1d77></i></button></div></li> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Total Payable Ammount: </h6> <h1 data-v-0b6b1d77><strong style=\"color: #aded28;\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.payableamount)) + "</strong>TK </h1></li> <div class=\"trx_img\" data-v-0b6b1d77>\r\n                                How to get Trx Id?\r\n                                <img src=\"images/transection_image.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Trx ID: </h6> <div data-v-0b6b1d77><p style=\"color: #aded28; font-size: 12px;\" data-v-0b6b1d77>Trx Id Is Required</p> <div class=\"d-flex align-items-center\" data-v-0b6b1d77><input type=\"text\" id=\"txtid\" placeholder=\"Enter Transection Id\"" + _vm._ssrAttr("value", _vm.orderData.txtid) + " data-v-0b6b1d77></div> " + (_vm.errors.txtid ? "<span class=\"text-black\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.errors.txtid[0])) + "</span>" : "<!---->") + "</div></li> <div class=\"text-center\" data-v-0b6b1d77><button type=\"submit\" class=\"btn_submit\" data-v-0b6b1d77>Confirm Order</button></div></ul></form></div> <div class=\"pop_footer\" data-v-0b6b1d77><img src=\"images/logo.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div></div></div> <div class=\"pop_roket pay_pop\" data-v-0b6b1d77><div class=\"content_section\" data-v-0b6b1d77><div class=\"text-end\" style=\"background-color: #ecf9ff;\" data-v-0b6b1d77></div> <div class=\"pop_head\" data-v-0b6b1d77><img src=\"images/Roket.png\" loading=\"lazy\" alt class=\"img-fluid logo_img\" data-v-0b6b1d77> <button class=\"btn-close px-3 ms-auto\" data-v-0b6b1d77></button></div> <div class=\"a_details\" data-v-0b6b1d77><form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-0b6b1d77><ul data-v-0b6b1d77><li data-v-0b6b1d77><h6 data-v-0b6b1d77>Account Number:</h6> <div class=\"ac_n\" data-v-0b6b1d77><div class=\"position-relative\" data-v-0b6b1d77><p id=\"copyText3\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.rocket_number)) + "</p> <p class=\"c_txt position-absolute\" data-v-0b6b1d77>Copy</p></div> <button type=\"button\" class=\"btn_copy\" data-v-0b6b1d77><i class=\"fa-regular fa-copy\" data-v-0b6b1d77></i></button></div></li> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Total Payable Ammount: </h6> <h1 data-v-0b6b1d77><strong style=\"color: #aded28;\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.payableamount)) + "</strong>TK </h1></li> <div class=\"trx_img\" data-v-0b6b1d77><img src=\"images/transection_image.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Trx ID: </h6> <div data-v-0b6b1d77><p style=\"color: #aded28; font-size: 12px;\" data-v-0b6b1d77>Trx Id Is Required</p> <div class=\"d-flex align-items-center\" data-v-0b6b1d77><input type=\"text\" id=\"txtid\" placeholder=\"Enter Transection Id\"" + _vm._ssrAttr("value", _vm.orderData.txtid) + " data-v-0b6b1d77></div> " + (_vm.errors.txtid ? "<span class=\"text-black\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.errors.txtid[0])) + "</span>" : "<!---->") + "</div></li> <div class=\"text-center\" data-v-0b6b1d77><button type=\"submit\" class=\"btn_submit\" data-v-0b6b1d77>Confirm Order</button></div></ul></form></div> <div class=\"pop_footer\" data-v-0b6b1d77><img src=\"images/logo.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div></div></div> <div class=\"pop_upay pay_pop\" data-v-0b6b1d77><div class=\"content_section\" data-v-0b6b1d77><div class=\"text-end\" style=\"background-color: #ecf9ff;\" data-v-0b6b1d77></div> <div class=\"pop_head\" data-v-0b6b1d77><img src=\"images/Upay.png\" loading=\"lazy\" alt class=\"img-fluid logo_img\" data-v-0b6b1d77> <button class=\"btn-close px-3 ms-auto\" data-v-0b6b1d77></button></div> <div class=\"a_details\" data-v-0b6b1d77><form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-0b6b1d77><ul data-v-0b6b1d77><li data-v-0b6b1d77><h6 data-v-0b6b1d77>Account Number:</h6> <div class=\"ac_n\" data-v-0b6b1d77><div class=\"position-relative\" data-v-0b6b1d77><p id=\"copyText4\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.upay_number)) + "</p> <p class=\"c_txt position-absolute\" data-v-0b6b1d77>Copy</p></div> <button type=\"button\" class=\"btn_copy\" data-v-0b6b1d77><i class=\"fa-regular fa-copy\" data-v-0b6b1d77></i></button></div></li> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Total Payable Ammount: </h6> <h1 data-v-0b6b1d77><strong style=\"color: #aded28;\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.payableamount)) + "</strong>TK </h1></li> <div class=\"trx_img\" data-v-0b6b1d77><a data-bs-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\" data-v-0b6b1d77>How to get Trx Id?</a> <img src=\"/images/transection_image.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div> <li data-v-0b6b1d77><h6 data-v-0b6b1d77>Trx ID: </h6> <div data-v-0b6b1d77><p style=\"color: #aded28; font-size: 12px;\" data-v-0b6b1d77>Trx Id Is Required</p> <div class=\"d-flex align-items-center\" data-v-0b6b1d77><input type=\"text\" id=\"txtid\" placeholder=\"Enter Transection Id\"" + _vm._ssrAttr("value", _vm.orderData.txtid) + " data-v-0b6b1d77></div> " + (_vm.errors.txtid ? "<span class=\"text-black\" data-v-0b6b1d77>" + _vm._ssrEscape(_vm._s(_vm.errors.txtid[0])) + "</span>" : "<!---->") + "</div></li> <div class=\"text-center\" data-v-0b6b1d77><button type=\"submit\" class=\"btn_submit\" data-v-0b6b1d77>Confirm Order</button></div></ul></form></div> <div class=\"pop_footer\" data-v-0b6b1d77><img src=\"images/logo.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-0b6b1d77></div></div></div>")], 2), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('MobileMenu')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/payment.vue?vue&type=template&id=0b6b1d77&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentvue_type_script_lang_js_ = ({
  middleware: "auth",
  head: {
    title: 'Payment'
  },
  data() {
    return {
      orderData: {
        txtid: ''
      },
      cart: [],
      payableamount: 0,
      subtotal: 0,
      nagad_number: '',
      nagad_fee: 0,
      bkash_number: '',
      bkas_fee: 0,
      rocket_number: '',
      rocket_fee: 0,
      upay_number: '',
      upay_fee: 0,
      select_pay_type: '',
      loading: true,
      errors: {}
    };
  },
  mounted() {
    this.getCartTotal();
    this.setting();
    // Use setTimeout to delay hiding the loader after 5 seconds
    setTimeout(() => {
      this.loading = false;
    }, 1000); // 5000 milliseconds = 5 seconds
  },

  methods: {
    async submitOrder() {
      const payment_getway = this.select_pay_type;
      //console.log("submit order : " + this.orderData.txtid);
      this.loading = true;
      const headers = {
        'Content-Type': 'application/json'
      };
      const savedCart = localStorage.getItem('cart');
      const osummary = localStorage.getItem('orderSummary');
      const summarydata = JSON.parse(osummary);
      // console.log("subtotal: " + summarydata.subtotal);
      let cartData = JSON.parse(savedCart);
      const requestData = {
        cart: cartData,
        payment_getway: payment_getway,
        itemsubtotal: summarydata.itemsubtotal,
        totalShippingFees: summarydata.totalShippingFees,
        subtotal_amt: summarydata.subtotal,
        percentageAmount: summarydata.percentageAmount,
        walletBalance: summarydata.walletBalance,
        copon_amount: summarydata.copon_amount,
        txtid: this.orderData.txtid
      };
      console.log(requestData);
      //return false; 
      await this.$axios.post('/order/submitOrder', requestData, {
        headers
      }).then(res => {
        this.clearCart();
        const OrderID = res.data.orderid;
        this.$router.push(`/order/${OrderID}`);
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    errorHandler(error) {
      // Check for specific error messages
      if (error.response && error.response.data.errors && error.response.data.errors.account) {
        // Display the specific error message to the user
        console.log("error : " + error.response.data.errors.account[0]);
        this.invaliderror = error.response.data.errors.account[0];
        //this.$toast.error(error.response.data.errors.account[0]);
      } else {
        console.log("An error occurred. Please try again later.");
        // Display a generic error message for other types of errors
        //  this.$toast.error('An error occurred. Please try again later.');
      }
    },

    clearCart() {
      this.loading = true;
      localStorage.removeItem('cart');
      localStorage.removeItem('subtotal');
      this.cart = [];
      this.subtotal = 0;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    getCartTotal() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cartData = JSON.parse(savedCart);
        const uniqueCart = cartData.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
        const osummary = localStorage.getItem('orderSummary');
        if (osummary !== null) {
          const summarydata = JSON.parse(osummary);
          console.log("subtotal: " + summarydata.subtotal);
          //console.log("percentageAmount: " + summarydata.percentageAmount);
          //console.log("walletBalance: " + summarydata.walletBalance);
          //console.log("copon_amount: " + summarydata.copon_amount);
          let subtotal_amt = summarydata.subtotal;
          this.subtotal = subtotal_amt; //totalPrice;
          console.log('Total Price for Unique Items:', subtotal_amt);
        } else {
          console.log("No order summary found in localStorage");
        }
        //return false;
      } else {
        console.error('No cart data found in local storage.');
      }
    },
    copyNumber(number) {
      const el = document.createElement('textarea');
      let msg = "";
      if (number === 1) {
        el.value = this.bkash_number;
        msg = "Bkash";
      } else if (number === 2) {
        el.value = this.nagad_number;
        msg = "Nagad";
      } else if (number === 3) {
        el.value = this.rocket_number;
        msg = "Rocket";
      } else if (number === 4) {
        el.value = this.upay_number;
        msg = "Upay";
      }
      this.commonCopy(el);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: `${msg} number copied!`
      });
    },
    commonCopy(el) {
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    async setting() {
      const response = await this.$axios.get('/unauthenticate/setting');
      this.nagad_number = response.data.nagad_number;
      this.bkash_number = response.data.bkash_number;
      this.rocket_number = response.data.rocket_number;
      this.upay_number = response.data.upay_number;
      //fee
      this.nagad_fee = response.data.nagad_fee;
      this.bkas_fee = response.data.bkash_fee;
      this.rocket_fee = response.data.rocket_fee;
      this.upay_fee = response.data.upay_fee;
      console.log("setting: bkash fee" + response.data.bkash_fee);
    },
    loadingPopup(number) {
      if (number === 1) {
        $(".pop_cards").fadeIn();
      } else if (number === 2) {
        console.log("bkash fee: :" + this.bkas_fee);
        const totalamount = parseFloat(this.subtotal);
        const fee = parseFloat(this.bkas_fee);
        const result = totalamount * fee / 100;
        const subtotal = (totalamount + result).toFixed(2);
        this.payableamount = subtotal;
        console.log("total payable amount: " + subtotal);
        $(".pop_bkash").fadeIn();
      } else if (number === 3) {
        console.log("nagod fee: :" + this.nagad_fee);
        const totalamount = parseFloat(this.subtotal);
        const fee = parseFloat(this.nagad_fee);
        const result = totalamount * fee / 100;
        const subtotal = (totalamount + result).toFixed(2);
        this.payableamount = subtotal;
        console.log("total payable amount: " + subtotal);
        $(".pop_nogot").fadeIn();
      } else if (number === 4) {
        console.log("roket fee: :" + this.rocket_fee);
        const totalamount = parseFloat(this.subtotal);
        const fee = parseFloat(this.rocket_fee);
        const result = totalamount * fee / 100;
        const subtotal = (totalamount + result).toFixed(2);
        this.payableamount = subtotal;
        console.log("total payable amount: " + subtotal);
        $(".pop_roket").fadeIn();
      } else if (number === 5) {
        console.log("upay fee: :" + this.upay_fee);
        const totalamount = parseFloat(this.subtotal);
        const fee = parseFloat(this.upay_fee);
        const result = totalamount * fee / 100;
        const subtotal = (totalamount + result).toFixed(2);
        this.payableamount = subtotal;
        console.log("total payable amount: " + subtotal);
        $(".pop_upay").fadeIn();
      }
      this.select_pay_type = number;
    },
    loadingclosePopup(number) {
      if (number === 1) {
        $(".pop_cards").fadeOut();
      } else if (number === 2) {
        $(".pop_bkash").fadeOut();
      } else if (number === 3) {
        $(".pop_nogot").fadeOut();
      } else if (number === 4) {
        $(".pop_roket").fadeOut();
      } else if (number === 5) {
        $(".pop_upay").fadeOut();
      }
    },
    ordersummary() {
      this.$router.push('/ordersummary');
    }
  }
});
// CONCATENATED MODULE: ./pages/payment.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_paymentvue_type_script_lang_js_ = (paymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/payment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_paymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b6b1d77",
  "670545c1"
  
)

/* harmony default export */ var payment = __webpack_exports__["default"] = (component.exports);

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
  "67959a09"
  
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
  "f43016e8"
  
)

/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("570b4447", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_0b6b1d77_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_0b6b1d77_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_0b6b1d77_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_0b6b1d77_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_0b6b1d77_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content_section ul[data-v-0b6b1d77]{margin-bottom:0!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=payment.js.map