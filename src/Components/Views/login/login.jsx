import "./login.css";
import Logo from "../../commonComponents/logo/logo.jsx";
// import '@passageidentity/passage-elements/passage-auth';
import "./login.css";
import { useState } from 'react'; // Paso 1: Importa useState
import { loginUser } from '../../../Services/UserServices'; // Asegúrate de que esta ruta sea correcta
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      if (response && response.data) {
        // Suponiendo que el ID del usuario viene en response.data.userId
        localStorage.setItem('userId', response.data.userId);

        navigate('/dashboard');
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Incorrect Credentials.',
          icon: 'error',
          confirmButtonText: 'Accept',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem to login.',
        icon: 'error',
        confirmButtonText: 'Accept',
      });
    }
  };




  return (
    <>
      <div className='app-container'>
        <div className='backgroung-login'>
          <header className="header-signup">
            <div className="logo-container">
              <Logo />
            </div>
            <Link to="/index">
              <button className="second-seach-puzzle-button">
                Search for puzzles
              </button>
            </Link>
          </header>


          <div className="main-login">
            <div className="left-side-signup ">
              <h1 className='title-login'>Welcome to the Puzzle Community!</h1>

              <input
                className="emailInput"
                placeholder="e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="passwordInput"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className="signUpButtonBlack" onClick={handleLogin}>Log In</button>
              <p className="log-in-message">Don't you have an account yet?</p>
              <Link to="/signup">
                <p className="log-in-here">Sign up</p>
              </Link>
            </div>
            {/* <div className="form-container">
                <passage-auth
                  app-id={process.env.REACT_APP_PASSAGE_APP_ID}
                />
              </div>
          </div> */}
            <div className="right-side-home">
            </div>
          </div>
          <footer className="foo-ter">
            <h4>© 2023 The Missing Piece Team</h4>
          </footer>
        </div>
      </div >
    </>
  );
}


