// plugins/cart.js

export default ({ store }) => {
  // Check if the store is available (running on the client side)
  if (process.client && store) {
    const cart = localStorage.getItem('cart');
    if (cart) {
      store.commit('cart/setCart', JSON.parse(cart));
    }
  }
};
