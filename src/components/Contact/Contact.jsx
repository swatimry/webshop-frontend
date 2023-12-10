import { motion } from "framer-motion";
const Contact = () => {
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
    <section className="contact">
      <motion.form
        {...options}
        transition={{ delay: 0.3 }}
        action="https://formspree.io/f/mleyqwvv"
        method="POST"
      >
        <h2>Contact Us</h2>
        <input type="text" name="name" required placeholder="Name" />
        <input type="email" name="email" required id="" placeholder="Email" />
        <textarea
          cols="20"
          rows="10"
          name="message"
          required
          placeholder="Message..."
        ></textarea>
        <button type="submit" className="contactbutton">
          Send
        </button>
      </motion.form>
    </section>
  );
};
export default Contact;
