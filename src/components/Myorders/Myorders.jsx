import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getMyorders } from "../../redux/actions/order";
import {  useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../layout/Loader";
const Myorders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.getorders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    dispatch(getMyorders());
  }, [dispatch, error]);

  return (
    <section className="tableclass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderItems.Frappe.quantity +
                        i.orderItems.Americano.quantity +
                        i.orderItems.Latte.quantity}
                    </td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};
export default Myorders;
