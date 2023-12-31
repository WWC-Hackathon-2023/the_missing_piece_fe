import "./addNewPuzzle.css";
import { Link } from 'react-router-dom';
import upload_image from "../../../assets/upload_image.png";
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";
import { postPuzzle } from '../../../Services/UserServices';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function AddNewPuzzle() {
    const [image, setImage] = useState(null);
    const titleRef = React.createRef();
    const descriptionRef = React.createRef();
    const piecesRef = React.createRef();
    const notesRef = React.createRef();
    const navigate = useNavigate();

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
        e.preventDefault();
        e.stopPropagation();
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


    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene que el formulario actualice la página

        if (!validateInputs()) {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Fields',
                text: 'Please fill in all the required fields.',
            });
        } else {
            try {
                const response = await postPuzzle(
                    titleRef.current.value,
                    descriptionRef.current.value,
                    piecesRef.current.value,
                    notesRef.current.value,
                    image
                );
                navigate("/dashboard");
                console.log("Puzzle added successfully:", response);
            } catch (error) {
                console.error("Error adding the puzzle:", error);
            }
        }
    };

    const validateInputs = () => {
        // Aquí se agregan todos los campos obligatorios
        const inputs = [titleRef, descriptionRef, piecesRef, image];

        for (const input of inputs) {
            if (input.current) {
                if (!input.current.value.trim()) {
                    return false;
                }
            } else if (!input) {
                return false;
            }
        }
        return true;
    };

    return (
        <>
            <div className='app-container'>
                <div className="headerProfile">
                    <NavigationBar />
                </div>

                <div className="container-new-puzzle">
                    <div className="left-side">
                        <div>

                            <form className="form-container" onSubmit={(e) => e.preventDefault()}>

                                <h2 className='title-new-puzzle'>Add a new puzzle</h2>
                                <input ref={titleRef} className='input' placeholder='Add a title for your puzzle' />
                                <textarea ref={descriptionRef} className='text-area' placeholder='Add a description' />
                                <input
                                    ref={piecesRef}
                                    type="text"
                                    className='input'
                                    placeholder='Total pieces'
                                    onKeyDown={(e) => {
                                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                                            e.preventDefault();
                                        }
                                    }}

                                />
                                <textarea ref={notesRef} className='text-area' placeholder='Add any notes ...' />

                                {/*<label className='subtitles'>Title</label>
                                <input className='input' placeholder='Add a title for your puzzle' />

                                <label className='subtitles'>Description</label>
                                <textarea className='text-area' placeholder='Add a description' />

                                <label className='subtitles'>Pieces Total Count</label>
                                <input className='input' placeholder='Total pieces' />

                                <label className='subtitles'>Notes</label>
                                <textarea className='text-area' placeholder='Add any notes you want, for example, if the puzzle is in good condition or not, etc.' /> 
    */}
                            </form>
                        </div>
                    </div>
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

                        <button type="button" className="add-puzzle-button" onClick={handleSubmit}>Add New Puzzle</button>

                        <Link to="/dashboard">
                            <button className="return-dashboard-button">Return to dashboard</button>
                        </Link>
                    </div>
                </div>
                <div className='foo-ter'>
                    <h4>© 2023 The Missing Piece Team</h4>
                </div>
            </div >
        </>
    );
};
