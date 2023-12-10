import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminUsers } from "../../redux/actions/admin";
import toast from "react-hot-toast";
const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.getadmin);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    dispatch(getAdminUsers());
  }, [dispatch,error]);
  return (
    <section className="tableclass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.name}</td>
                    <td>
                      <img src={i.photo} alt="User" />
                    </td>
                    <td>{i.role}</td>
                    <td>{i.createdAt.split("T")[0]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};
export default Users;
