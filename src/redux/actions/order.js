import axios from "axios";
import { server } from "../store.js";

export const createOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    ItemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createOrderRequest",
      });
      const response = await axios.post(
        `${server}/createorder`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          ItemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "createOrderSuccess",
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: "createOrderfail",
        payload: error.response.data.message,
      });
    }
  };

export const paymentVerification =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderoptions) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "paymentverRequest",
      });
      const response = await axios.post(
        `${server}/paymentverfication`,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderoptions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);

      dispatch({
        type: "paymentverSuccess",
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: "paymentverfail",
        payload: error.response.data.message,
      });
    }
  };
export const getMyorders = () => async (dispatch) => {
  try {
    dispatch({ type: "getMyordersRequest" });
    const response = await axios.get(`${server}/myorders`, {
      withCredentials: true,
    });
    dispatch({ type: "getMyordersSuccess", payload: response.data.orders });
  } catch (error) {
    dispatch({
      type: "getMyordersFail",
      payload: error.response.data.message,
    });
  }
};

export const getOrderdetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getorderdetailsRequest",
    });
    const response = await axios.get(`${server}/order/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: "getorderdetailsSuccess",
      payload: response.data.order,
    });
    console.log(response.data.order);
  } catch (error) {
    dispatch({
      type: "getorderdetailsFail",
      payload: error.response.data.message,
    });
  }
};
