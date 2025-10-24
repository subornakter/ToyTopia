import React, { useContext, useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import MyContainer from "../components/MyContainer";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    sendPassResetEmailFunc,
    setLoading,
    setUser,
    user,
  } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const emailRef = useRef(null);

 
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);

        if (!res.user?.emailVerified) {
          toast.error("Your email is not verified.");
          return;
        }

        setUser({
          ...res.user,
          photoURL: res.user.photoURL || "https://via.placeholder.com/40",
        });

        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        setLoading(false);
        setUser({
          ...res.user,
          photoURL: res.user.photoURL || "https://via.placeholder.com/40",
        });
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center relative overflow-hidden">
      <title>Toytopia - Signin</title>
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 ">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-gray/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSignin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-black">
                Sign In
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20  placeholder-gray/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20  placeholder-gray/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* <button
                className="hover:underline cursor-pointer"
                onClick={handleForgetPassword}
                type="button"
              >
                Forget password?
              </button> */}
                {/* <Link
              to={`/forget-password?email=${emailRef.current?.value || ""}`}
              className="text-[#1096B5] text-sm hover:underline"
            >
              Forgot Password?
            </Link> */}
            <button
  className="hover:underline cursor-pointer"
  type="button"
  onClick={() => {
    const email = emailRef.current?.value || "";
    if (!email) {
      toast.info("Enter your email first before resetting password!");
      return;
    }
    navigate("/forget-password", { state: { email } });
  }}
>
  Forget password?
</button>


              <button type="submit" className="my-btn">
                Login
              </button>

              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-gray-600"></div>
                <span className="text-sm ">or</span>
                <div className="h-px w-16 bg-gray-600"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-pink-400 hover:text-blue-500 underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signin;
