import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
  <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">

    <h1 className="text-3xl font-bold text-center mb-6">
      Create Account
    </h1>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <input
        name="firstName"
        placeholder="First Name"
        className="border p-3 rounded-lg"
      />

      <input
        name="lastName"
        placeholder="Last Name"
        className="border p-3 rounded-lg"
      />

      <input
        name="city"
        placeholder="City"
        className="border p-3 rounded-lg"
      />

      <input
        name="mobileNumber"
        placeholder="Mobile Number"
        className="border p-3 rounded-lg"
      />

      <input
        name="email"
        placeholder="Email"
        className="border p-3 rounded-lg md:col-span-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border p-3 rounded-lg"
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="border p-3 rounded-lg"
      />

      <label className="md:col-span-2 flex items-center gap-2">
        <input type="checkbox" />
        <span>
          I agree to Terms & Conditions
        </span>
      </label>

      <button
        className="md:col-span-2 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
      >
        Create Account
      </button>

    </form>

    <p className="text-center mt-4">
      Already have an account?
      <span className="text-blue-600 cursor-pointer ml-1">
        Login
      </span>
    </p>

  </div>
</div>
  );
}

export default Signup;
