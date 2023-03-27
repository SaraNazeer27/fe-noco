import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Nav";
import "./Dashboard.css";


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-main">
        <div className="header">New Application</div>
        <div className="page-container">
        <div className="template">
          <div className="content">
            <div className="content-card">
            <i class="bi bi-plus-circle"><Link to="/TextBox"> + </Link></i>
                
            </div>
            <div className="content-card">templ</div>
            <div className="content-card">template 1</div>
            <div className="content-card">template 1</div>
            <div className="content-card">template 1</div>
          </div>
        </div>
        <div className="recent">
        <div className="header">My Projects</div>

        <div className="content">
            <div className="content-card"></div>
            <div className="content-card">template 1</div>
            <div className="content-card">template 1</div>
            <div className="content-card">template 1</div>
            <div className="content-card">template 1</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
