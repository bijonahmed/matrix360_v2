// store/cart.js

export const actions = {
  addToCart({ commit, state }, product) {
    const updatedCart = [...state.cart];

    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({
        ...product,
        quantity: 1
      });
    }

    commit('setCart', updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
};
