import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders, processOrder } from "../../redux/actions/admin";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../layout/Loader";
const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, message, error } = useSelector(
    (state) => state.getadmin
  );
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    dispatch(getAdminOrders());
  }, [dispatch, error, message]);
  const Handler = (id) => {
    dispatch(processOrder(id));
  };
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
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((i) => (
                <tr key={i}>
                  <td>#{i._id}</td>
                  <td>{i.orderStatus}</td>
                  <td>
                    {i.orderItems.Frappe.quantity +
                      i.orderItems.Americano.quantity +
                      i.orderItems.Latte.quantity}
                  </td>
                  <td>₹{i.totalAmount}</td>
                  <td>{i.paymentMethod}</td>
                  <td>{i.user.name}</td>
                  <td>
                    <Link to={`/order/${i._id}`}>
                      <AiOutlineEye />
                    </Link>
                    <button onClick={() => Handler(i._id)}>
                      <GiArmoredBoomerang />
                    </button>
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
export default Orders;
