import React, { useContext } from "react";
import { NavLink } from "react-router";
import HeroSwiper from "./HeroSwiper";
import { AuthContext } from "../ContextAPI/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <HeroSwiper></HeroSwiper>
      </div>
      <div className="flex justify-center mt-5 ">
        <div className="flex gap-5 text-accent">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          {user ? (
            <NavLink
              to="/myProfile"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              My Profile
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Our Services
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
