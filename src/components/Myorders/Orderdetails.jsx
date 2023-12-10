import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderdetails } from "../../redux/actions/order";
import Loader from "../layout/Loader";
const Orderdetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.getorders);
  useEffect(() => {
    dispatch(getOrderdetails(params.id));
  }, [params.id, dispatch]);

  return (
    <section className="orderdetails">
      {console.log(order, "here")}
      {loading === false && order !== undefined ? (
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              {" "}
              <b>Address</b>{" "}
              {`${order.shippingInfo.city} ${order.shippingInfo.country} ${order.shippingInfo.pincode} `}{" "}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {`${order.user.name}`}
            </p>
            <p>
              <b>Phone</b>
              {`${order.shippingInfo.contactno}`}
            </p>
          </div>
          <div>
            <h1>Status</h1>
            <p>
              {" "}
              <b>Order Status{` ${order.orderStatus}`}</b>
            </p>
            <p>
              <b>Placed at</b>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <b>Delivered at</b>
              {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
            </p>
          </div>
          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment method</b>
              {`${order.paymentMethod}`}
            </p>
            <p>
              <b>Payment Reference</b>
              {order.paymentMethod === "Online"
                ? `#${order.paymentInfo}`
                : "NA"}
            </p>
            <p>
              <b>Paid At</b>
              {order.paymentMethod === "Online"
                ? order.paidAt.split("T")[0]
                : "NA"}
            </p>
          </div>
          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>₹{`${order.ItemsPrice}`}
            </p>
            <p>
              <b>Shipping Charges</b>₹{`${order.shippingCharges}`}
            </p>
            <p>
              <b>Tax</b>₹{`${order.taxPrice}`}
            </p>
            <p>
              <b>Total</b>₹{`${order.totalAmount}`}
            </p>
          </div>
          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>Frappe</h4>
              <div>
                <span>{`${order.orderItems.Frappe.quantity}`}</span>x{" "}
                <span>{`${order.orderItems.Frappe.price}`}</span>
              </div>
            </div>
            <div>
              <h4>Americano</h4>
              <div>
                <span>{`${order.orderItems.Americano.quantity}`}</span>x{" "}
                <span>{`${order.orderItems.Americano.price}`}</span>
              </div>
            </div>
            <div>
              <h4>Latte</h4>
              <div>
                <span>{`${order.orderItems.Latte.quantity}`}</span>x{" "}
                <span>{`${order.orderItems.Latte.price}`}</span>
              </div>
            </div>
            <div>
              <h4>Sub Total</h4>
              <div>₹{`${order.ItemsPrice}`}</div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};
export default Orderdetails;
