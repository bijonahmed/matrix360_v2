import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _22f2db90 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _c1b0b18a = () => interopDefault(import('..\\pages\\aircraft.vue' /* webpackChunkName: "pages/aircraft" */))
const _0bd79676 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _4e19952a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _69a7b88b = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1506bb34 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _5033dfd8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0b676371 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _6672c608 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _816f0aee = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _1bfa2048 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _1499871a = () => interopDefault(import('..\\pages\\return-policy.vue' /* webpackChunkName: "pages/return-policy" */))
const _1b9f2aee = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _2550a34a = () => interopDefault(import('..\\pages\\terms-and-condition.vue' /* webpackChunkName: "pages/terms-and-condition" */))
const _abba0d72 = () => interopDefault(import('..\\pages\\user\\message.vue' /* webpackChunkName: "pages/user/message" */))
const _6dd544db = () => interopDefault(import('..\\pages\\user\\notification.vue' /* webpackChunkName: "pages/user/notification" */))
const _bbb169c8 = () => interopDefault(import('..\\pages\\user\\offer.vue' /* webpackChunkName: "pages/user/offer" */))
const _67642c03 = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _01f6f5ac = () => interopDefault(import('..\\pages\\user\\orderlist.vue' /* webpackChunkName: "pages/user/orderlist" */))
const _fb45d874 = () => interopDefault(import('..\\pages\\user\\payment.vue' /* webpackChunkName: "pages/user/payment" */))
const _a69252b6 = () => interopDefault(import('..\\pages\\user\\personal-details.vue' /* webpackChunkName: "pages/user/personal-details" */))
const _2e763c2e = () => interopDefault(import('..\\pages\\user\\profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _095e4813 = () => interopDefault(import('..\\pages\\user\\settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _5819dfe5 = () => interopDefault(import('..\\pages\\user\\thankyou.vue' /* webpackChunkName: "pages/user/thankyou" */))
const _184b307c = () => interopDefault(import('..\\pages\\user\\ticket.vue' /* webpackChunkName: "pages/user/ticket" */))
const _2ed4dae9 = () => interopDefault(import('..\\pages\\user\\wallet.vue' /* webpackChunkName: "pages/user/wallet" */))
const _5034be96 = () => interopDefault(import('..\\pages\\user\\wishlist.vue' /* webpackChunkName: "pages/user/wishlist" */))
const _0e3e6cfd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _308d07ce = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _3bc41ba1 = () => interopDefault(import('..\\pages\\order\\_slug.vue' /* webpackChunkName: "pages/order/_slug" */))
const _70f5a98b = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))

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
    component: _22f2db90,
    name: "about"
  }, {
    path: "/aircraft",
    component: _c1b0b18a,
    name: "aircraft"
  }, {
    path: "/cart",
    component: _0bd79676,
    name: "cart"
  }, {
    path: "/checkout",
    component: _4e19952a,
    name: "checkout"
  }, {
    path: "/contact",
    component: _69a7b88b,
    name: "contact"
  }, {
    path: "/forget-password",
    component: _1506bb34,
    name: "forget-password"
  }, {
    path: "/login",
    component: _5033dfd8,
    name: "login"
  }, {
    path: "/payment",
    component: _0b676371,
    name: "payment"
  }, {
    path: "/privacy-policy",
    component: _6672c608,
    name: "privacy-policy"
  }, {
    path: "/products",
    component: _816f0aee,
    name: "products"
  }, {
    path: "/register",
    component: _1bfa2048,
    name: "register"
  }, {
    path: "/return-policy",
    component: _1499871a,
    name: "return-policy"
  }, {
    path: "/success",
    component: _1b9f2aee,
    name: "success"
  }, {
    path: "/terms-and-condition",
    component: _2550a34a,
    name: "terms-and-condition"
  }, {
    path: "/user/message",
    component: _abba0d72,
    name: "user-message"
  }, {
    path: "/user/notification",
    component: _6dd544db,
    name: "user-notification"
  }, {
    path: "/user/offer",
    component: _bbb169c8,
    name: "user-offer"
  }, {
    path: "/user/order-details",
    component: _67642c03,
    name: "user-order-details"
  }, {
    path: "/user/orderlist",
    component: _01f6f5ac,
    name: "user-orderlist"
  }, {
    path: "/user/payment",
    component: _fb45d874,
    name: "user-payment"
  }, {
    path: "/user/personal-details",
    component: _a69252b6,
    name: "user-personal-details"
  }, {
    path: "/user/profile",
    component: _2e763c2e,
    name: "user-profile"
  }, {
    path: "/user/settings",
    component: _095e4813,
    name: "user-settings"
  }, {
    path: "/user/thankyou",
    component: _5819dfe5,
    name: "user-thankyou"
  }, {
    path: "/user/ticket",
    component: _184b307c,
    name: "user-ticket"
  }, {
    path: "/user/wallet",
    component: _2ed4dae9,
    name: "user-wallet"
  }, {
    path: "/user/wishlist",
    component: _5034be96,
    name: "user-wishlist"
  }, {
    path: "/",
    component: _0e3e6cfd,
    name: "index"
  }, {
    path: "/categories/:slug?",
    component: _308d07ce,
    name: "categories-slug"
  }, {
    path: "/order/:slug?",
    component: _3bc41ba1,
    name: "order-slug"
  }, {
    path: "/product-details/:slug?",
    component: _70f5a98b,
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
