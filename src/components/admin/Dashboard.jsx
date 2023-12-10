import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminStats } from "../../redux/actions/admin.js";
ChartJS.register(Tooltip, ArcElement, Legend);

const Valbox = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);
const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, usersCount, ordersCount, totalincome } = useSelector(
    (state) => state.getadmin
  );
  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: ordersCount
          ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
          : [0, 0, 0],
        backgroundColor: [
          "rgba(165, 42, 42,0.8)",
          "rgba(159, 129, 112,0.8)",
          "rgba(112, 66, 65,0.8)",
        ],
        borderColor: [
          "rgba(165, 42, 42)",
          "rgba(159, 129, 112)",
          "rgba(112, 66, 65)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article>
            <Valbox title={"Users"} value={usersCount} />
            <Valbox title={"Orders"} value={ordersCount.total} />
            <Valbox title={"Income"} value={totalincome} />
          </article>
          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};
export default Dashboard;
