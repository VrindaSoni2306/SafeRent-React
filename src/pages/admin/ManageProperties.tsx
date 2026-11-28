
import React from "react";
import "./ManageProperties.css";

const ManageProperties = () => {
  const properties = [
    ["Modern 2 BHK", "Rahul Sharma", "Panipat", "Pending"],
    ["Luxury Villa", "Priya Verma", "Delhi", "Approved"],
    ["Studio Apartment", "Amit Kumar", "Karnal", "Pending"],
    ["Family House", "Neha Gupta", "Chandigarh", "Rejected"],
  ];

  return (
    <div className="manage-properties">
      <h1>Manage Properties</h1>
      <p>View and manage all listed properties.</p>

      <div className="property-table">
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
                {p.map((item, j) => (
                  <td key={j}>
                    {j === 3 ? (
                      <span className={`property-status ${item.toLowerCase()}`}>
                        {item}
                      </span>
                    ) : item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
