import { BiCoffeeTogo } from "react-icons/bi";
import { motion } from "framer-motion";
const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: "999999",
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <BiCoffeeTogo />

      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
