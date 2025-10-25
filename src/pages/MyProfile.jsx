// src/pages/MyProfile.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyContainer from "../components/MyContainer";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
const MyProfile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfileFunc(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <MyContainer>
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6">
        {/* Profile Image */}
        <title>Toytopia-MyProfile</title>
        <div className="flex-shrink-0">
          <img
            src={photo || "https://via.placeholder.com/100"}
            alt={name}
            className="w-24 h-24 rounded-full border-2 border-gray-200"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">My Profile</h1>
          <p className="text-gray-500">
            <span className="font-semibold">Full Name:</span> {name}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Email Address:</span> {user?.email}
          </p>

          {/* Update Form */}
          <form onSubmit={handleUpdate} className="mt-4 space-y-3">
           <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Update Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Update Photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1096B5] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
             {loading ? "Saving..." :  "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default MyProfile;
