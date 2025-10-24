import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyContainer from "../components/MyContainer";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  const { sendPassResetEmailFunc, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  // লগিন পেজ থেকে পাঠানো ইমেইল ধরবে
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    sendPassResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset email sent!");
        // নতুন ট্যাবে Gmail খুলবে
        window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <MyContainer>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">Reset Your Password</h1>
          <p className="text-gray-500 text-center mb-6">
            Enter your registered email to receive a password reset link.
          </p>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default ForgetPassword;
