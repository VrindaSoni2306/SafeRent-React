
import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const stats = [
    ["👥", "Total Users", "1250"],
    ["🏠", "Total Owners", "320"],
    ["🏢", "Total Properties", "485"],
    ["⏳", "Pending Approvals", "18"],
  ];

  const properties = [
    ["Modern 2 BHK", "Rahul", "Panipat", "Pending"],
    ["Luxury Villa", "Priya", "Delhi", "Approved"],
    ["Studio Flat", "Amit", "Karnal", "Pending"],
  ];

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>SafeRent</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/properties">Manage Properties</Link>
        <Link to="/admin/users">Manage Users</Link>
        <Link to="/">Back to Website</Link>
      </aside>

      <main className="admin-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome to SafeRent Admin Panel!</p>

        <div className="stats">
          {stats.map((item) => (
            <div className="stat-card" key={item[1]}>
              <span>{item[0]}</span>
              <div>
                <p>{item[1]}</p>
                <h2>{item[2]}</h2>
              </div>
            </div>
          ))}
        </div>

        <section className="property-section">
          <h2>Recent Properties</h2>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Owner</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((p, i) => (
                  <tr key={i}>
                    {p.map((value, j) => (
                      <td key={j}>
                        {j === 3 ? (
                          <span className={`status ${value.toLowerCase()}`}>
                            {value}
                          </span>
                        ) : value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
