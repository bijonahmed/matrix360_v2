import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70879350 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _ef23e1ca = () => interopDefault(import('..\\pages\\aircraft.vue' /* webpackChunkName: "pages/aircraft" */))
const _60ece6b6 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _7b8cc56a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _67f656aa = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _a0e8c2f4 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _9dc89798 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6dc47f91 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _14d79cdc = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _aee23b2e = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _05408828 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _48790b3a = () => interopDefault(import('..\\pages\\return-policy.vue' /* webpackChunkName: "pages/return-policy" */))
const _7dfc470e = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _09448f6a = () => interopDefault(import('..\\pages\\terms-and-condition.vue' /* webpackChunkName: "pages/terms-and-condition" */))
const _43fb0532 = () => interopDefault(import('..\\pages\\user\\message.vue' /* webpackChunkName: "pages/user/message" */))
const _43a354bb = () => interopDefault(import('..\\pages\\user\\notification.vue' /* webpackChunkName: "pages/user/notification" */))
const _1a59573c = () => interopDefault(import('..\\pages\\user\\offer.vue' /* webpackChunkName: "pages/user/offer" */))
const _4b581823 = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _87f41c68 = () => interopDefault(import('..\\pages\\user\\orderlist.vue' /* webpackChunkName: "pages/user/orderlist" */))
const _9386d034 = () => interopDefault(import('..\\pages\\user\\payment.vue' /* webpackChunkName: "pages/user/payment" */))
const _698c12f6 = () => interopDefault(import('..\\pages\\user\\personal-details.vue' /* webpackChunkName: "pages/user/personal-details" */))
const _1ca46609 = () => interopDefault(import('..\\pages\\user\\profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _516f47f3 = () => interopDefault(import('..\\pages\\user\\settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _bfaa4076 = () => interopDefault(import('..\\pages\\user\\thankyou.vue' /* webpackChunkName: "pages/user/thankyou" */))
const _b34aaf48 = () => interopDefault(import('..\\pages\\user\\ticket.vue' /* webpackChunkName: "pages/user/ticket" */))
const _86375a6e = () => interopDefault(import('..\\pages\\user\\wallet.vue' /* webpackChunkName: "pages/user/wallet" */))
const _1ff6a095 = () => interopDefault(import('..\\pages\\user\\wishlist.vue' /* webpackChunkName: "pages/user/wishlist" */))
const _3117ddc6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _59f9f039 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _6c58d8fe = () => interopDefault(import('..\\pages\\order\\_slug.vue' /* webpackChunkName: "pages/order/_slug" */))
const _e10e6d2a = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _70879350,
    name: "about"
  }, {
    path: "/aircraft",
    component: _ef23e1ca,
    name: "aircraft"
  }, {
    path: "/cart",
    component: _60ece6b6,
    name: "cart"
  }, {
    path: "/checkout",
    component: _7b8cc56a,
    name: "checkout"
  }, {
    path: "/contact",
    component: _67f656aa,
    name: "contact"
  }, {
    path: "/forget-password",
    component: _a0e8c2f4,
    name: "forget-password"
  }, {
    path: "/login",
    component: _9dc89798,
    name: "login"
  }, {
    path: "/payment",
    component: _6dc47f91,
    name: "payment"
  }, {
    path: "/privacy-policy",
    component: _14d79cdc,
    name: "privacy-policy"
  }, {
    path: "/products",
    component: _aee23b2e,
    name: "products"
  }, {
    path: "/register",
    component: _05408828,
    name: "register"
  }, {
    path: "/return-policy",
    component: _48790b3a,
    name: "return-policy"
  }, {
    path: "/success",
    component: _7dfc470e,
    name: "success"
  }, {
    path: "/terms-and-condition",
    component: _09448f6a,
    name: "terms-and-condition"
  }, {
    path: "/user/message",
    component: _43fb0532,
    name: "user-message"
  }, {
    path: "/user/notification",
    component: _43a354bb,
    name: "user-notification"
  }, {
    path: "/user/offer",
    component: _1a59573c,
    name: "user-offer"
  }, {
    path: "/user/order-details",
    component: _4b581823,
    name: "user-order-details"
  }, {
    path: "/user/orderlist",
    component: _87f41c68,
    name: "user-orderlist"
  }, {
    path: "/user/payment",
    component: _9386d034,
    name: "user-payment"
  }, {
    path: "/user/personal-details",
    component: _698c12f6,
    name: "user-personal-details"
  }, {
    path: "/user/profile",
    component: _1ca46609,
    name: "user-profile"
  }, {
    path: "/user/settings",
    component: _516f47f3,
    name: "user-settings"
  }, {
    path: "/user/thankyou",
    component: _bfaa4076,
    name: "user-thankyou"
  }, {
    path: "/user/ticket",
    component: _b34aaf48,
    name: "user-ticket"
  }, {
    path: "/user/wallet",
    component: _86375a6e,
    name: "user-wallet"
  }, {
    path: "/user/wishlist",
    component: _1ff6a095,
    name: "user-wishlist"
  }, {
    path: "/",
    component: _3117ddc6,
    name: "index"
  }, {
    path: "/categories/:slug?",
    component: _59f9f039,
    name: "categories-slug"
  }, {
    path: "/order/:slug?",
    component: _6c58d8fe,
    name: "order-slug"
  }, {
    path: "/product-details/:slug?",
    component: _e10e6d2a,
    name: "product-details-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
