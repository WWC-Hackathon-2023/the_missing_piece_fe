import "./home.css";
import { Link } from 'react-router-dom';
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";
import logo_title from "../../../assets/logo_title.png";

export default function Home() {

    return (
        <>
            <div className="app-container">
                <header className="header-Home">
                    <SignUpButton />
                    <LogInButton />
                </header>

                <main className="main-home">
                    <div className="left-side-home">
                        <h1 className='title-home'>Welcome To The Puzzle Community!</h1>
                        <p className='p-home'>If you have a collection of puzzles and you're eager to swap
                            them for new challenges, you're in the right spot. Join our community
                            of fellow puzzle enthusiasts and dive into a world of delightful exchanges.
                            Let's share the joy of solving puzzles together!
                        </p>
                        <Link to="/index">
                            <button className="see-all-button">See All Puzzles</button>
                        </Link>
                    </div>

                    <div className="right-side-home">
                        <img src={logo_title} className="logo-home" alt="The Missing Piece" />
                    </div>

                </main>

                <footer className='foo-ter'>
                    <h4>© 2023 The Missing Piece Team</h4>
                </footer>
            </div>
        </>
    )
}



