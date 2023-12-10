import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <section className="notfound">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>
        <p>Page not found,Click below to go to Home page.</p>
        <Link to="/">Go to Home</Link>
      </main>
    </section>
  );
};
export default Notfound;
