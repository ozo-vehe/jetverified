import React from "react";
import { useState } from "react";
import details from "../assets/view.png";
import enter from "../assets/enter.png";
import "../App.css";

function OrganizationDashboard() {
  const [user, setUser] = useState([
    {
      id: 1,
      uid: "lsd456fgh",
      name: "John Doe",
    },
    {
      id: 2,
      uid: "lsd456fgh",
      name: "John Doe",
    },
    {
      id: 3,
      uid: "lsd456fgh",
      name: "John Doe",
    },
    {
      id: 4,
      uid: "lsd456fgh",
      name: "John Doe",
    },
  ]);
  return (
    <div class="organization-dashboard">
      <div class="organization-board-header">
        <h1>Organization Dashboard</h1>
      </div>

      <div class="organization-dashboard-body">
        <h3 className="body-title">Verified Users</h3>
        <input
          type="search"
          name="verified-users"
          id="verified-users"
          placeholder="Search UID Number"
        />
        <img src={enter} alt="view details" className="enter" />
      </div>

      <div className="list-verified-users">
        {user.map((item) => {
          return (
            <div className="verified-user" key={item.id}>
              <div className="verified-user-details">
                <p className="verified-user-id">{item.id}</p>
                <p className="verified-user-uid">{item.uid}</p>
                <p className="verified-user-name">{item.name}</p>
                
                <div className="view-details">
                    <p className="view-details-child">view details</p>
                    <img src={details} alt="view details" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="btn-parent">
          <button className="view-btn">View more</button>
        </div>
      </div>
    </div>
  );
}

export default OrganizationDashboard;
