import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer(
  {},
  {
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createOrderfail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    paymentverRequest: (state) => {
      state.loading = true;
    },
    paymentverSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    paymentverfail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  }
);
export const getordersReducer = createReducer(
  {
    orders: [],
  },
  {
    getMyordersRequest: (state) => {
      state.loading = true;
    },
    getMyordersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getMyordersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getorderdetailsRequest: (state) => {
      state.loading = true;
    },
    getorderdetailsSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    getorderdetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  }
);
