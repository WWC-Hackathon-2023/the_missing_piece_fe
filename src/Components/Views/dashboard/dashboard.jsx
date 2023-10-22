import "./dashboard.css";
import { Link } from "react-router-dom";
import puzzle_10 from "../../../assets/puzzle_10.jpg";
import zipIcon from "../../../assets/zip_icon.png";
import emailIcon from "../../../assets/email.png";
import phoneIcon from "../../../assets/phone.png";
import iconPerson from "../../../assets/icon_person.png";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../../Services/UserServices";

const MySweetAlert = withReactContent(Swal);

export default function Dashboard() {

  const [responseData, setResponseData] = useState(null);

  // Función para hacer la solicitud y obtener la respuesta
  useEffect(() => {
    // Mueve la lógica de fetchData aquí
    const fetchData = async (id) => {
      try {
        const data = await fetchDashboardData(id); // Llama a la función del servicio API
        setResponseData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData(1); // Llama a la función que obtiene los datos cuando el componente se monta.
  }, []);

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
          <section className="profile-btn-section">
            <div className="profile-div">
              <div className="profile-actions">
                <img className="icon-person" src={iconPerson} alt="Profile Icon" />
                <button className="profile-positive-btn btn">
                  <Link to="/addNewPuzzle" className="add-puzzle-btn">
                    Add Puzzle
                  </Link>
                </button>
                <button className="profile-positive-btn btn">
                  <Link to="/updateProfile" className="update-profile-btn">
                    Update Profile
                  </Link>
                </button>
              </div>
              <div className="user-info">
                {responseData ? (
                  <>
                    <div className="user-data-div">
                      <img className="icons-profile" src={zipIcon} alt="Zip Icon" />
                      <div className="user-data-text">
                        <strong>Zip Code</strong>
                        <p>{responseData.data.attributes.user_info.zip_code}</p>
                      </div>
                    </div>
                    <div className="user-data-div">
                      <img className="icons-profile" src={emailIcon} alt="Email Icon" />
                      <div className="user-data-text">
                        <strong>Email</strong>
                        <p>{responseData.data.attributes.user_info.email}</p>
                      </div>
                    </div>
                    <div className="user-data-div">
                      <img className="icons-profile" src={phoneIcon} alt="Phone Icon" />
                      <div className="user-data-text">
                        <strong>Phone</strong>
                        <p>{responseData.data.attributes.user_info.phone_number}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>CARGANDO?</div>
                )}
                {/* <h2 className="user-name-profile">Andrea Ramirez</h2>
                <div className="user-data-div">
                  <img className="icons-profile" src={zipIcon} alt="Zip Icon" />
                  <div className="user-data-text">
                    <strong>Zip Code</strong> 
                    <p>7100000</p>
                  </div>
                </div>
                <div className="user-data-div">
                  <img className="icons-profile" src={emailIcon} alt="Email Icon" />
                  <div className="user-data-text">
                    <strong>Email</strong>
                    <p>andrea@mail.org</p>
                  </div>
                </div>
                <div className="user-data-div">
                  <img className="icons-profile" src={phoneIcon} alt="Phone Icon" />
                  <div className="user-data-text">
                    <strong>Phone</strong>
                    <p>+56 (123)4563789</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="btn-div">
              <button className="search-puzzles-btn btn">
                <Link to="/index" className="search-puzzles">
                  Search for Puzzles
                </Link>
              </button>
            </div>
          </section>
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
