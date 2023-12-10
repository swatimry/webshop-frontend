import { BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="footerdiv">
        <h2>Brewrey</h2>
        <p>We thrive to serve best coffee,that reaches you!!</p>
        <br />
        <em>We look forward for your feedbacks</em>
        <br />
        <strong>All rights received @Brewreyfarm</strong>
      </div>

      <aside className="social">
        <h4>Follow Us</h4>
        <a src="" href="https://www.instagram.com/s_w.at.i_/">
          <BsInstagram />
        </a>
        <a src="" href="https://github.com/swatimry">
          <BsGithub />
        </a>
        <a src="" href="https://www.instagram.com/s_w.at.i_/">
          <BsFacebook />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
