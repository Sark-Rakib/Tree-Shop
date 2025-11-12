import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);

  const haldleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login Successful");
        setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Login Failed");
      });
  };

  const handleForget = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center">Login Your Account</h2>
        <form onSubmit={haldleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              ref={emailRef}
              placeholder="Email"
              name="email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <button
              className="absolute top-44 left-75"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20}></AiFillEyeInvisible>
              ) : (
                <AiFillEye size={20}></AiFillEye>
              )}
            </button>
            <div>
              <button
                onClick={handleForget}
                className=" text-accent hover:underline"
                type="button"
              >
                Forgot password?
              </button>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            {error && (
              <p className="text-red-400 text-center">
                Invalid Email or Password
              </p>
            )}
            <h2 className="text-center mt-3 text-[14px]">
              Don't Have An Account ?{" "}
              <Link className="text-red-400" to="/auth/register">
                Register
              </Link>
            </h2>
          </fieldset>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
