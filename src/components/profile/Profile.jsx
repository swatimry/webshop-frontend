import { Link } from "react-router-dom";
import { BiSolidDashboard, BiSolidPurchaseTag } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { logout } from "../../redux/actions/user.js";
import Loader from "../layout/Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const dispath = useDispatch();

  const { loading, user } = useSelector((state) => state.auth);

  const logoutuser = () => {
    dispath(logout());
  };
  return (
    <section className="profile">
      {loading === false ? (
        <main>
          <img src={user && user.photo} alt="profileimg" />
          <h1>{user && user.name}</h1>
          {user && user.role === "admin" && (
            <div>
              <Link to="/admin/dashboard">
                <BiSolidDashboard />
                Dashboard
              </Link>
            </div>
          )}

          <div>
            <Link to="/myorders">
              <BiSolidPurchaseTag />
              My Orders
            </Link>
          </div>
          <button>
            <Link to="/logout" onClick={logoutuser}>
              <TbLogout2 />
              Logout
            </Link>
          </button>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};
export default Profile;
