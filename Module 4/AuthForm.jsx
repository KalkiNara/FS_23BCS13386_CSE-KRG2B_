import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ type }) {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name);
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-6 shadow-md rounded-lg mt-10"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        {type === "login" ? "Login" : "Create Account"}
      </h2>
      <input
        type="text"
        placeholder="Enter your name"
        className="border w-full p-2 mb-3 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button className="w-full bg-orange-500 text-white py-2 rounded">
        {type === "login" ? "Login" : "Signup"}
      </button>
    </form>
  );
}
