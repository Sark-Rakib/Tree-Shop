import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //  Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        //  Update profile
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Register Successful! Profile updated.");
            e.target.reset();
            setTimeout(() => {
              navigate("/auth/login");
            }, 2000);
          })
          .catch((err) => {
            toast.error("Profile update failed: " + err.message);
          });
      })
      .catch((err) => {
        toast.error("Registration failed: " + err.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50">
      <div className="card bg-white w-full max-w-sm shadow-2xl py-6 px-5 rounded-2xl">
        <h2 className="font-semibold text-center text-2xl mb-2">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Enter your name"
            required
          />

          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input input-bordered"
            placeholder="Enter photo URL"
            required
          />

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Enter your email"
            required
          />

          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered pr-10 w-full"
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>

          <button type="submit" className="btn btn-neutral mt-5 text-white">
            Register
          </button>

          {error && <p className="text-red-400 text-center mt-2">{error}</p>}

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link className="text-red-400 underline" to="/auth/login">
              Log In
            </Link>
          </p>
        </form>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Register;
