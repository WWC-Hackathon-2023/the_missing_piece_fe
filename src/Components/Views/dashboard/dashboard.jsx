import "./dashboard.css";
import { Link } from "react-router-dom";
import ProfileSection from "./profileSection";
import puzzle_10 from "../../../assets/puzzle_10.jpg";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySweetAlert = withReactContent(Swal);

export default function Dashboard() {

  const handleAcceptClick = () => {
    MySweetAlert.fire({
      title: 'Are you sure?',
      text: 'Do you want to accept this request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#D9737B',
      cancelButtonColor: '#1C4259'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí es donde colocas la lógica que se ejecutará si el usuario confirma
        console.log("Request accepted!"); // Esto es solo un ejemplo
      }
    })
  }

  const handleDenyClick = () => {
    MySweetAlert.fire({
      title: 'Are you sure?',
      text: 'Do you want to deny this request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#D9737B',
      cancelButtonColor: '#1C4259'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí es donde colocas la lógica que se ejecutará si el usuario confirma
        console.log("Request denied!"); // Esto es solo un ejemplo
      }
    })
  }

  return (
    <>
      <div className="app-container">
        <header className="headerProfile">
          <NavigationBar />
        </header>
        <main className="main-profile">
          <ProfileSection />
          <section className="requests-for-user requests">
            {/* Aquí habrá que ver si estos divs se tienen que cambiar, porque lo que muestran dependerá del status del puzzle */}
            <div className="title-section">Request to Borrow My Puzzles</div>
            <div className="puzzle-info-container">
              <figure className="puzzle-img-div">
                <img className="puzzle-img-dashboard" src={puzzle_10} alt="puzzle" />
              </figure>
              <div className="request-info-text">
                <h3>Puzzle Name</h3>
                <p>Request date</p>
              </div>
              <div className="btn-request-div">
                <button className="profile-positive-btn accept-deny-btn btn" onClick={handleAcceptClick}>Accept</button>
                <button className="profile-positive-btn accept-deny-btn btn" onClick={handleDenyClick}>Deny</button>
              </div>
            </div>
          </section>
          <section className="user-requests requests">
            <div className="title-section">Puzzles I have requested</div>
            <div className="puzzle-info-container">
              <figure className="puzzle-img-div">
                <img className="puzzle-img-dashboard" src={puzzle_10} alt="puzzle" />
              </figure>
              <div className="request-info-text">
                <h3>Puzzle Name</h3>
                <p>Request date</p>
              </div>
              <div className="info-request-puzzle">
                <h3> {/* Título del puzzle*/} </h3>
                <p> {/* Fecha de solicitud del puzzle */} </p>
              </div>
              <div className="btn-request-div">
                <button className="profile-positive-btn owner-info-btn btn">Owner Info</button>
                {/* <button className="withdraw-request-btn btn">Withdraw Request</button>
              <button className="returned-puzzle-btn close-request-btn btn">Returned</button> */}
              </div>
            </div>
          </section>
        </main>
        <div className="foo-ter">
          <h4>© 2023 The Missing Piece Team</h4>
        </div>
      </div>
    </>
  );
}
