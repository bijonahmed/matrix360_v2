export const Banner = () => import('../..\\components\\Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const ExploreCampain = () => import('../..\\components\\ExploreCampain.vue' /* webpackChunkName: "components/explore-campain" */).then(c => wrapFunctional(c.default || c))
export const Features = () => import('../..\\components\\Features.vue' /* webpackChunkName: "components/features" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Loader = () => import('../..\\components\\Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const MainContent = () => import('../..\\components\\MainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => wrapFunctional(c.default || c))
export const MainSlider = () => import('../..\\components\\MainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const Products = () => import('../..\\components\\Products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))
export const SellingFastSlider = () => import('../..\\components\\SellingFastSlider.vue' /* webpackChunkName: "components/selling-fast-slider" */).then(c => wrapFunctional(c.default || c))
export const Slider = () => import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
