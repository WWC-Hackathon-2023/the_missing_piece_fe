import "./index.css";
import LogInButton from "../../commonComponents/logInButton/logInButton.js";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.js";
// import Logo from "../Img/Logo.jpg"

export default function Index() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <SignUpButton/>
        <LogInButton/>
      </header>
      <div className="ContainerLogo">
        {/* <img src={Logo} className="logo" alt="The Missing Piece" /> */}
      </div>
      <div className="all">
        <h1>Welcome To The Index!</h1>
        
      </div>
      <footer>
        <h1>© 2023 The Missing Piece Team</h1>
      </footer>
    </>
  )
}