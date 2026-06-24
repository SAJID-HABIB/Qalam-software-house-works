import React from "react";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const stats = {
    products: 12,
    orders: 34,
    revenue: 45000,
    pendingOrders: 5,
  };

  const recentProducts = [
    {
      id: 1,
      name: "Laptop",
      price: 80000,
      stock: 10,
    },
    {
      id: 2,
      name: "Mobile",
      price: 35000,
      stock: 15,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD001",
      customer: "Ali",
      amount: 5000,
      status: "Delivered",
    },
    {
      id: "#ORD002",
      customer: "Ahmed",
      amount: 2500,
      status: "Pending",
    },
  ];

  return (
    <div className="seller-dashboard">

      <div className="dashboard-header">
        <h1>Seller Dashboard</h1>
        <p>Manage your products and orders</p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Products</h3>
          <h2>{stats.products}</h2>
        </div>

        <div className="stat-card">
          <h3>Total Orders</h3>
          <h2>{stats.orders}</h2>
        </div>

        <div className="stat-card">
          <h3>Total Revenue</h3>
          <h2>Rs. {stats.revenue}</h2>
        </div>

        <div className="stat-card">
          <h3>Pending Orders</h3>
          <h2>{stats.pendingOrders}</h2>
        </div>

      </div>

      <div className="quick-actions">

        <button>Add Product</button>

        <button>Manage Products</button>

        <button>View Orders</button>

        <button>Profile</button>

      </div>

      <div className="dashboard-section">

        <h2>Recent Products</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {recentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>Rs. {product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div className="dashboard-section">

        <h2>Recent Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>Rs. {order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default SellerDashboard;