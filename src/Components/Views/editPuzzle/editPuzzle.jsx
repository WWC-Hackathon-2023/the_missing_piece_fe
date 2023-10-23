import "./editPuzzle.css";
import { Link } from 'react-router-dom';
import Puzzle_1 from "../../../assets/puzzle_1.jpg";
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";

export default function EditPuzzle() {
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState('Available'); // Added for the status dropdown

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        document.getElementById('image-upload').value = '';  // Reset the input value
    };


    return (
        <>
            <div className='app-container'>
                <div className="headerProfile">
                    <NavigationBar />
                </div>

                <div className="container-new-puzzle">
                    <div className="left-side">
                        <div className="form-container">
                            <h2 className='title'>Edit Puzzle Information</h2>
                            <label className='subtitles'>Title</label>
                            <input className='input' placeholder='Add a title for your puzzle' />
                            <label className='subtitles'>Description</label>
                            <textarea className='text-area' placeholder='Add a description' />
                            <label className='subtitles'>Pieces Total Count</label>
                            <input className='input' placeholder='Total pieces' />
                            <label className='subtitles'>Status</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className='input'>
                                <option value="Available">Available</option>
                                <option value="Not available">Not available</option>
                            </select>
                            <label className='subtitles'>Notes</label>
                            <textarea className='text-area' placeholder='Add any notes you want, for example, if the puzzle is in good condition or not, etc.' />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="upload-image">
                            <img className='image' src={image || Puzzle_1} alt="Upload" />
                            {image && (
                                <div className="icon-close" onClick={handleImageRemove}>
                                    <FaTimes size={20} />
                                </div>
                            )}
                            <input type="file" onChange={handleImageUpload} style={{ display: 'none' }} id="image-upload" />
                            <button onClick={() => document.getElementById('image-upload').click()} className="yellow-button">
                                Update Image
                            </button>
                        </div>

                        <Link to="/index">
                            <button className="add-puzzle-button">Update Puzzle</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="return-dashboard-button">Return to dashboard</button>
                        </Link><br></br>
                        <div className='warning-zone'>
                            <label className='warning-text'>Warning Zone!</label><br></br>
                            <label to='/index'><br></br>
                                <Link to='/index' className='delete-message'>Delete this Puzzle</Link>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='foo-ter'>
                    <h4>© 2023 The Missing Piece Team</h4>
                </div>
            </div>
        </>
    );
};