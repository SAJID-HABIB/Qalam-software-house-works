import { Link } from "react-router-dom";
import { useState } from "react";
import SellerDashboard from "./pages/auth/sellerDashbord";


function Login() {

  const [email,
  setEmail] = useState("");

  const [password,
  setPassword] =
  useState("");

  const handleLogin =
    async (e) => {

    e.preventDefault();

    const response =
      await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

    const data =
      await response.json();

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">

  <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome Back
      </h1>

      <p className="text-gray-500 mt-2">
        Sign in to continue
      </p>
    </div>

    <form className="space-y-5">

      <div>
        <label className="block text-gray-700 mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <button
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Login
      </button>

    </form>

    <div className="text-center mt-6">

      <p className="text-gray-600">
        Don't have an account?

        <Link
          to="/signup"
          className="ml-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
        >
          Signup
        </Link>
      </p>

    </div>

  </div>

</div>
  );
}

export default Login;