import React from "react";
import { NavLink } from "react-router";
import HeroSwiper from "./HeroSwiper";

const Navbar = () => {
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
          <NavLink
            to="/myProfile"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            My Profile
          </NavLink>
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
