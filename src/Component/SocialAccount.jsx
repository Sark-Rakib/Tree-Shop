import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialAccount = () => {
  return (
    <div>
      <div className="join join-vertical w-full mt-10">
        <button className="btn join-item justify-start">
          <FaFacebook className="mr-2" /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="mr-2" /> Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaLinkedin className="mr-2" /> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default SocialAccount;
