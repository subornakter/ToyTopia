import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Logout successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="bg-[#bdeef8] py-2 px-5 border-b border-b-slate-300 sticky top-0 z-50">
      <MyContainer className="flex items-center justify-between">
        {/* Logo */}
        <figure>
          <img
            className="w-[150px] h-[50px]"
            src="https://i.ibb.co/Hfk12RhR/Toytopia.webp"
            alt="logo"
          />
        </figure>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4">
          <li><MyLink to="/">Home</MyLink></li>
          <li><MyLink to="/shop">Shop</MyLink></li>
          <li><MyLink to="/profile">Profile</MyLink></li>
        </ul>

        {/* Right Section */}
        {loading ? (
          <ClockLoader color="#e74c3c" size={30} />
        ) : user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="User Avatar"
              className="h-[40px] w-[40px] rounded-full border-2 border-[#1096B5]"
              title={user.displayName} // hover shows name
            />
           
            <button
              onClick={handleSignout}
              className="bg-[#1096B5] text-white px-3 py-2 rounded-md font-semibold hover:bg-[#0d809a]"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-[#1096B5] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0d809a]"
          >
            Sign In
          </Link>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
