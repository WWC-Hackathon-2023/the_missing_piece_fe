import "./addNewPuzzle.css";
import { Link } from 'react-router-dom';
import upload_image from "../../../assets/upload_image.png";
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";

export default function AddNewPuzzle() {
    const [image, setImage] = useState(null);

    const handleImageUploadToCloudinary = (imageData) => {
        const formData = new FormData();
        formData.append('file', imageData); // Use 'file' as the key
        formData.append('upload_preset', 'xk6d3n0j'); // Replace with your Cloudinary upload preset

        fetch(`https://api.cloudinary.com/v1_1/dwcorjdyo/image/upload`, {
            method: "POST", // Specify the method here
            body: formData,
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .catch((error) => {
                console.error('Error uploading to Cloudinary:', error);
            });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                handleImageUploadToCloudinary(reader.result);
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
            <div className="headerProfile">
                <NavigationBar />
            </div>

            <div className="container-new-puzzle">
                <div className="left-side">
                    <div className="form-container">
                        <form className="add-pluzzle-form">
                            <h2 className='title'>Add a new puzzle</h2>

                            <label className='subtitles'>Title</label>
                            <input className='input' placeholder='Add a title for your puzzle' />

                            <label className='subtitles'>Description</label>
                            <textarea className='text-area' placeholder='Add a description' />

                            <label className='subtitles'>Pieces Total Count</label>
                            <input className='input' placeholder='Total pieces' />

                            <label className='subtitles'>Notes</label>
                            <textarea className='text-area' placeholder='Add any notes you want, for example, if the puzzle is in good condition or not, etc.' />

                            <div className="right-side">
                                <div className="upload-image">
                                    <img className='image' src={image || upload_image} alt="Upload" />

                                    {image && (
                                        <div className="icon-close" onClick={handleImageRemove}>
                                            <FaTimes size={20} />
                                        </div>
                                    )}

                                    <input type="file" onChange={handleImageUpload} style={{ display: 'none' }} id="image-upload" />
                                    <button type="button" onClick={() => document.getElementById('image-upload').click()} className="yellow-button">
                                        Upload Image
                                    </button>
                                </div>

                                <Link to="/index">
                                    <button type="submit" className="add-puzzle-button">Add New Puzzle</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <Link to="/index">
                    <button className="return-dashboard-button">Return to dashboard</button>
                </Link>
            </div>
            <div className='foo-ter'>
                <h4>© 2023 The Missing Piece Team</h4>
            </div>
        </>
    );
};