import "./updateProfile.css";
import { Link } from 'react-router-dom';
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";

export default function UpdateProfile() {

    return (
        <>
            <header className="header-home">
                <SignUpButton />
                <LogInButton />
            </header>

            <div className="content-container">
                <div className="left-side">
                    <div className="form-container">
                        <h2>Update Profile Information</h2>
                        <label>Name</label>
                        <input placeholder='Introduce your name' />
                        <label>ZIP Code</label>
                        <input placeholder='Introduce your ZIP Code' />
                        <label>Email</label>
                        <input placeholder='Introduce your email' />
                        <label className='notes'>Phone Number</label>
                        <input placeholder='Introduce your phone number' />
                    </div>
                </div>
                <div className="right-side">
                    <Link to="/index">
                        <button className="add-puzzle-button">Update Profile</button>
                    </Link>
                    <Link to="/index">
                        <button className="return-dashboard-button">Return to dashboard</button>
                    </Link>
                </div>
            </div>
            <footer>
                <h4>© 2023 The Missing Piece Team</h4>
            </footer>
        </>
    );
};