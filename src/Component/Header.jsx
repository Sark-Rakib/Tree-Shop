import treeLogo from "../assets/plant-png.png";
import userIcon from "../assets/icons-login-user-png.png";
import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "../ContextAPI/AuthContext";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const { user } = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User logged out successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-11/12 mx-auto my-5 rounded-full flex justify-between items-center sticky z-10 bg-base-200 py-3 px-3 md:px-15 md:sticky top-5">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className="h-10 w-10" src={treeLogo} alt="Tree Logo" />
          </Link>
          <h2 className="text-xl font-bold">Tree Shop</h2>
        </div>

        <div className="flex items-center gap-3 relative group">
          <img
            src={user && user.photoURL ? user.photoURL : userIcon}
            alt="User Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />

          {/* Hover name tooltip */}
          {user && user.displayName && (
            <span className="absolute -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {user.displayName}
            </span>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-black text-amber-50 font-semibold px-3 py-2 rounded"
            >
              Log Out
            </button>
          ) : (
            <Link to="/auth/login">
              <button className="bg-black text-amber-50 font-semibold px-3 py-2 rounded">
                Login
              </button>
            </Link>
          )}
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </>
  );
};

export default Header;
