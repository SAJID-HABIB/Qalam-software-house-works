import { Link } from "react-router-dom";
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
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pehle frontend validation karlein
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Backend Response:", data);

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Fill in the information below</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="md:col-span-2 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <div className="md:col-span-2">
            <p className="mb-2 text-gray-700 font-medium">Select Role</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  checked={formData.role === "buyer"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-blue-600"
                  required
                />
                <span className="text-gray-700">Buyer</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="seller"
                  checked={formData.role === "seller"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-blue-600"
                  required
                />
                <span className="text-gray-700">Seller</span>
              </label>
            </div>
          </div>

          <label className="md:col-span-2 flex items-center gap-3 text-gray-600 mt-4">
            <input type="checkbox" className="w-4 h-4" required />
            <span>I agree to Terms & Conditions</span>
          </label>

          <button
            type="submit"
            className="md:col-span-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?
            <Link
              to="/"
              className="ml-2 text-green-600 font-semibold hover:text-green-800 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
