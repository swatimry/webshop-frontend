import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder, paymentVerification } from "../../redux/actions/order";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../redux/store";


const API_URL=process.env.RAZORPAY_KEY;
console.log(API_URL);
const Orderconfirm = () => {
  const [paymentMethod, setpaymentmethod] = useState("");
  const [disableBtn, setdisableBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    shippingInfo,
    cartItems,
    ItemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = useSelector((store) => store.cartdata);

  const { message, error } = useSelector((state) => state.orders);

  const submitHandler = async (e) => {
    e.preventDefault();
    setdisableBtn(true);
    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          ItemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount
        )
      );
    } else {
      const {
        data: { order, orderoptions },
      } = await axios.post(
        `${server}/createorderonline`,
        {
          shippingInfo,
          orderItems: cartItems,
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
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: order.totalAmount,
        currency: "INR",
        name: "Brewery coffee",
        description: "Brewery coffee Transaction",

        order_id: order.id,
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          dispatch(
            paymentVerification(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              orderoptions
            )
          );
        },

        theme: {
          color: "#a52a2a",
        },
      };
      var razorpay = window.Razorpay(options);
      razorpay.open();
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setdisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="orderconfirm">
      <main>
        <h1>Confirm order</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Cash on Delivery</label>
            <input
              type="radio"
              name="payment"
              required
              onChange={() => setpaymentmethod("COD")}
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              name="payment"
              required
              onChange={() => setpaymentmethod("Online")}
            />
          </div>
          <button type="submit" disabled={disableBtn}>
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};
export default Orderconfirm;
