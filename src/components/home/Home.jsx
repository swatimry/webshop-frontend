import { motion } from "framer-motion";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="home-container">
      <section className="home">
        <div className="coffehead">
          <motion.h1
            {...options}
            transition={{
              delay: 0.4,
            }}
          >
            Your Daily Escape in Every Cup
          </motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.8,
            }}
          >
            Indulge in the art of coffee with us, where expertly crafted brews
            and delightful blends await, creating a world of caffeinated
            perfection. Experience the coffee like never before!
          </motion.p>
          <div className="menudiv">
            <motion.a
              initial={{
                y: "-100%",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              href="#menu"
              className="menubutton"
            >
              Explore Menu
            </motion.a>
          </div>
        </div>
      </section>
      <Menu />
    </div>
  );
};
export default Home;
