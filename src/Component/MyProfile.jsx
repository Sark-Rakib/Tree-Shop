import React, { useContext, useState } from "react";
import { AuthContext } from "../ContextAPI/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setEditing(false);
      })
      .catch((err) => {
        toast.error("Update failed: " + err.message);
      });
  };

  return (
    <div className="flex items-center justify-center mt-20 gap-5 bg-base-200 py-10 rounded">
      <img className="w-20 h-20  rounded-full" src={user?.photoURL} alt="" />

      {editing ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            placeholder="Name"
          />
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered"
            placeholder="Photo URL"
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      ) : (
        <div className="space-y-2 text-center">
          <h2 className="font-bold text-2xl">Name: {user?.displayName}</h2>
          <p className="font-semibold text-xl">Email: {user?.email}</p>
          <button className="btn btn-accent" onClick={() => setEditing(true)}>
            Update Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
