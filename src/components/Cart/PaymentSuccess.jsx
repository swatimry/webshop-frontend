import { Link } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
const PaymentSuccess = () => {
  return (
    <section className="paymentsuccess">
      <main>
        <GiConfirmed />
        <h1>Payment Successful</h1>
        <p>Your order is placed, you can check order status from link below</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
};
export default PaymentSuccess;
