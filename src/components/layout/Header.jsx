import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";
import { motion } from "framer-motion";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0" }}>
        <BiCoffeeTogo />
        <h1>Brewrey</h1>
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};
export default Header;
