import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/signup", {
        name,
        email,
        password,
      });
      login(data.user, data.token);
      navigate("/jobs");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Signup
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4 
 border border-gray-700 focus:outline-none focus:border-purple-500"
        />
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg 
 font-semibold hover:bg-purple-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
