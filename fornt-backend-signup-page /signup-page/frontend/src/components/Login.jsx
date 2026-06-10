import { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

    <h1 className="text-3xl font-bold text-center mb-6">
      Login
    </h1>

    <form className="space-y-4">

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>

    </form>

    <p className="text-center mt-4">
      Don't have an account?
      <span className="text-blue-600 cursor-pointer ml-1">
        Signup
      </span>
    </p>

  </div>
</div>
  );
}

export default Login;