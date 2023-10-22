import "./dashboard.css";
import React from 'react';
import { Link } from 'react-router-dom'; 
import zipIcon from "../../../assets/zip_icon.png";
import emailIcon from "../../../assets/email.png";
import phoneIcon from "../../../assets/phone.png";
import iconPerson from "../../../assets/icon_person.png";

export default function ProfileSection() {
  return (
    <section className="profile-btn-section">
      <div className="profile-div">
        <div className="profile-actions">
          <img className="icon-person" src={iconPerson} alt="Profile Icon" />
          <button className="profile-positive-btn btn">
            <Link to="/addNewPuzzle" className="add-puzzle-btn">
              Add Puzzle
            </Link>
          </button>
          <button className="profile-positive-btn btn">
            <Link to="/updateProfile" className="update-profile-btn">
              Update Profile
            </Link>
          </button>
        </div>
        <div className="user-info">
          <h2 className="user-name-profile">Andrea Ramirez</h2>
          <div className="user-data-div">
            <img className="icons-profile" src={zipIcon} alt="Zip Icon" />
            <div className="user-data-text">
              <strong>Zip Code</strong>
              <p>7100000</p>
            </div>
          </div>
          <div className="user-data-div">
            <img className="icons-profile" src={emailIcon} alt="Email Icon" />
            <div className="user-data-text">
              <strong>Email</strong>
              <p>andrea@mail.org</p>
            </div>
          </div>
          <div className="user-data-div">
            <img className="icons-profile" src={phoneIcon} alt="Phone Icon" />
            <div className="user-data-text">
              <strong>Phone</strong>
              <p>+56 (123)4563789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-div">
        <button className="search-puzzles-btn btn">
          <Link to="/index" className="search-puzzles">
            Search for Puzzles
          </Link>
        </button>
      </div>
    </section>
  );
}