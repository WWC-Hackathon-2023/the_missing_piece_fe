import "./home.css";
import { Link } from 'react-router-dom';
import LogInButton from "../../commonComponents/logInButton/logInButton.js";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.js";
import logo_title from "../../../assets/logo_title.png";

export default function Home() {
    return (
        <>
            <header>
                <SignUpButton />
                <LogInButton />
            </header>
            <div className="main">
                
                <div className="all">
                    <h1>Welcome To The Puzzle Community!</h1>
                    <p>If you have a collection of puzzles and you're eager to swap
                        them for new challenges, you're in the right spot. Join our community
                        of fellow puzzle enthusiasts and dive into a world of delightful exchanges.
                        Let's share the joy of solving puzzles together!
                    </p>
                    <Link to="/index">
                        <button className="seeallPuzzles">See All Puzzles</button>
                    </Link>
                </div>

                <div className="ContainerLogo">
                    <img src={logo_title} className="logo" alt="The Missing Piece" />
                </div>
                
            </div>
            <footer>
                <h1>© 2023 The Missing Piece Team</h1>
            </footer>
        </>
    )
}
