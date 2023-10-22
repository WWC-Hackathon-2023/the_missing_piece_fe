import "./updateProfile.css";
import { Link } from 'react-router-dom';
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";


export default function UpdateProfile() {

    return (
        <>
            <div className="app-container">
                <header className="headerProfile">
                    <NavigationBar />
                </header>
                <div className="container-update-profile">
                    <div className="left-side">
                        <div className="form-container">
                            <h2 className='title-update'>Update Profile Information</h2>
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
                        <Link to="/updateProfile">
                            <button className="add-puzzle-button">Update Profile</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="return-dashboard-button">Return to dashboard</button>
                        </Link>
                    </div>
                </div>
                <footer className='foo-ter-update'>
                    <h4>© 2023 The Missing Piece Team</h4>
                </footer>
            </div>
        </>
    );
};    