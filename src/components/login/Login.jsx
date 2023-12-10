import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";
const Login = () => {
  const loginuser = () => {
    window.open(`${server}/googlelogin`, "_self");
  };
  return (
    <section className="login">
      <button className="googlelogin" onClick={loginuser}>
        {" "}
        <FcGoogle />
        Login with Google
      </button>
    </section>
  );
};
export default Login;
