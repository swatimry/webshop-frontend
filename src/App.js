import "./styles/app.scss";
import Home from "./components/home/Home.jsx";
import Header from "./components/layout/Header.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/layout/Footer";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping.jsx";
import Orderconfirm from "./components/Cart/Orderconfirm.jsx";
import PaymentSuccess from "./components/Cart/PaymentSuccess.jsx";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import Myorders from "./components/Myorders/Myorders.jsx";
import Orderdetails from "./components/Myorders/Orderdetails.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Users from "./components/admin/Users.jsx";
import Orders from "./components/admin/Orders.jsx";
import About from "./components/about/About.jsx";
import Notfound from "./components/layout/Notfound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user.js";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/menucard.scss";
import "./styles/Footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/orderconfirm.scss";
import "./styles/PaymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/tables.scss";
import "./styles/Orderdetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles/Notfound.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/order/:id" element={<Orderdetails />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orderconfirm" element={<Orderconfirm />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin={"/me"}
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
