import "./borrowerInfo.css";
import { Link } from 'react-router-dom';
import zipIcon from "../../../assets/zip_icon.png";
import emailIcon from "../../../assets/email.png";
import phoneIcon from "../../../assets/phone.png";
import iconPerson from "../../../assets/icon_person.png";
import React from 'react';
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";

export default function BorrowerInfo() {
    return (
        <>
            <header className="headerProfile">
                <NavigationBar />
            </header>

            <div className='main-container'>
                <div className="headerHome"></div>

                <main className="main-profile">
                    <section className="profile-btn-section">
                        <div className="profile-div">
                            <div className="profile-actions">
                                <img className="icon-person" src={iconPerson} alt="Profile Icon" />
                            </div>

                            <div className="middle-side">
                                <div className="user-info">
                                    <h2>Andrea Ramirez</h2> {/* Use interpolation here, e.g., {user.name} */}

                                    <UserData icon={zipIcon} label="Zip Code" data="7100000" />
                                    <UserData icon={emailIcon} label="Email" data="andrea@mail.org" />
                                    <UserData icon={phoneIcon} label="Phone" data="+56 (123)4563789" />
                                </div>
                                <Link to="/index">
                                    <button className="return-dashboard-button">Return to dashboard</button>
                                </Link>
                                <div className='right-side'>
                                    <h3>Now you can contact Bisrat by email or phone, whichever suits you best!</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className='foo-ter'>
                        <h4>© 2023 The Missing Piece Team</h4>
                    </footer>
                </main>
            </div>
        </>
    );
};

function UserData({ icon, label, data }) {
    return (
        <div className="user-data-div">
            <img className="icons-profile" src={icon} alt={`${label} Icon`} />
            <div className="user-data-text">
                <strong>{label}</strong>
                <p>{data}</p>
            </div>
        </div>
    );
}
