import React, { useState } from "react";
import { toast } from "react-toastify";

const BookSession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w mx-auto p-5 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookSession;
