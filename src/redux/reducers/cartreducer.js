import { createReducer } from "@reduxjs/toolkit";
const initialstate = {
  cartItems: localStorage.getItem("cartItemslocal")
    ? JSON.parse(localStorage.getItem("cartItemslocal"))
    : {
        Frappe: {
          quantity: 0,
          price: 200,
        },
        Latte: {
          quantity: 0,
          price: 250,
        },
        Americano: {
          quantity: 0,
          price: 300,
        },
      },
  ItemsPrice: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).ItemsPrice
    : 0,
  totalAmount: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).totalAmount
    : 0,
  taxPrice: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).taxPrice
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  shippingInfo: localStorage.getItem("shippinginfolocal")
    ? JSON.parse(localStorage.getItem("shippinginfolocal"))
    : {},
};
export const cartred = createReducer(initialstate, {
  AddFrappe: (state) => {
    state.cartItems.Frappe.quantity += 1;
  },
  AddLatte: (state) => {
    state.cartItems.Latte.quantity += 1;
  },
  AddAmericano: (state) => {
    state.cartItems.Americano.quantity += 1;
  },
  DecFrappe: (state) => {
    if (state.cartItems.Frappe.quantity === 0) {
      return;
    }
    state.cartItems.Frappe.quantity -= 1;
  },
  DecLatte: (state) => {
    if (state.cartItems.Latte.quantity === 0) {
      return;
    }
    state.cartItems.Latte.quantity -= 1;
  },
  DecAmericano: (state) => {
    if (state.cartItems.Americano.quantity === 0) {
      return;
    }
    state.cartItems.Americano.quantity -= 1;
  },
  calcamount: (state) => {
    state.ItemsPrice =
      state.cartItems.Frappe.quantity * state.cartItems.Frappe.price +
      state.cartItems.Latte.quantity * state.cartItems.Latte.price +
      state.cartItems.Americano.quantity * state.cartItems.Americano.price;
    state.shippingCharges = state.ItemsPrice < 500 ? 0 : 200;
    state.taxPrice = state.ItemsPrice * 0.18;
    state.totalAmount =
      state.ItemsPrice + state.taxPrice + state.shippingCharges;
  },
  emptyState: (state) => {
    state.cartItems = {
      Americano: {
        quantity: 0,
        price: 300,
      },
      Latte: {
        quantity: 0,
        price: 250,
      },
      Frappe: {
        quantity: 0,
        price: 200,
      },
    };

    state.ItemsPrice = 0;
    state.shippingCharges = 0;
    state.taxPrice = 0;
    state.totalAmount = 0;
  },
  AddShippinginfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hno,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pincode: action.payload.pin,
      contactno: action.payload.phone,
    };
  },
});
