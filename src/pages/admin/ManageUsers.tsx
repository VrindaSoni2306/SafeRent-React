
import React, { useState } from "react";
import "./ManageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "User", blocked: false },
    { id: 2, name: "Priya Verma", email: "priya@gmail.com", role: "Owner", blocked: false },
    { id: 3, name: "Amit Kumar", email: "amit@gmail.com", role: "User", blocked: true },
    { id: 4, name: "Neha Gupta", email: "neha@gmail.com", role: "Owner", blocked: false },
  ]);

  const toggleBlock = (id: number) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, blocked: !user.blocked } : user
    ));
  };

  return (
    <div className="manage-users">
      <h1>Manage Users</h1>
      <p>View and manage registered users and owners.</p>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.blocked ? "Blocked" : "Active"}</td>
                <td>
                  <button
                    className={user.blocked ? "unblock-btn" : "block-btn"}
                    onClick={() => toggleBlock(user.id)}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
