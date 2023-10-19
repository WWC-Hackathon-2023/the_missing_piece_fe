import "./updateProfile.css";
import { Link } from 'react-router-dom';
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";


export default function UpdateProfile() {

    return (
        <>
            <div className='main-container'>
                <div className="headerHome">
                    <SignUpButton />
                    <LogInButton />
                </div>

                <div className="container-new-puzzle">
                    <div className="left-side">
                        <div className="form-container">
                            <h2 className='title'>Update Profile Information</h2>
                            <label className='subtitles'>Name</label>
                            <input className="input-update" placeholder='Introduce your name' />
                            <label className='subtitles'>ZIP Code</label>
                            <input className="input-update" placeholder='Introduce your ZIP Code' />
                            <label className='subtitles'>Email</label>
                            <input className="input-update" placeholder='Introduce your email' />
                            <label className='subtitles'>Phone Number</label>
                            <input className="input-update" placeholder='Introduce your phone number' />
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
                    <div className='foo-ter'>
                        <h4>© 2023 The Missing Piece Team</h4>
                    </div>

                </div>
            </div>
        </>
    );
};