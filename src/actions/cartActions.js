import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../contants/cartConstants";
import api from "../Services/api";

export const addToCart = (id, qty) => async (dispacth, getState) => {
  const { data } = await api.get(`products/${id}`);

  dispacth({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}