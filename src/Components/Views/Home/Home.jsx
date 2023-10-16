import "./home.css";
import { Link } from 'react-router-dom';
import LogInButton from "../../commonComponents/logInButton/logInButton.js";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.js";
// import Logo from "../Img/Logo.jpg"

export default function Home() {
    return (
        <>
            <header>
                <h1>Header</h1>
                <SignUpButton />
                <LogInButton />
            </header>
            <div className="ContainerLogo">
                {/* <img src={Logo} className="logo" alt="The Missing Piece" /> */}
            </div>
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
            <footer>
                <h1>© 2023 The Missing Piece Team</h1>
            </footer>
        </>
    )
}
