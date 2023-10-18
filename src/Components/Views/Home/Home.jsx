import "./home.css";
import { Link } from 'react-router-dom';
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";
import logo_title from "../../../assets/logo_title.png";

export default function Home() {


    return (
        <>
            <header className="headerHome">
                <SignUpButton />
                <LogInButton />
            </header>
            <div className="mainHome">
                
                <div className="welcomeMessage">
                    <h1>Welcome To The Puzzle Community!</h1>
                    <p>If you have a collection of puzzles and you're eager to swap
                        them for new challenges, you're in the right spot. Join our community
                        of fellow puzzle enthusiasts and dive into a world of delightful exchanges.
                        Let's share the joy of solving puzzles together!
                    </p>
                    <Link to="/index">
                        <button className="seeallPuzzlesButton">See All Puzzles</button>
                    </Link>
                </div>

                <div className="ContainerLogo">
                    <img src={logo_title} className="logo" alt="The Missing Piece" />
                </div>
                
            </div>

            <footer>
                <h4>© 2023 The Missing Piece Team</h4>
            </footer>
        </>
    )
}
