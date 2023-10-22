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

  function extractOwnerLoans(response) {
    if (!response || !response.data || !response.data.attributes.owner_loans) {
      return [];
    }
    return response.data.attributes.owner_loans;
  }

  function extractUserRequests(response) {
    if (!response || !response.data || !response.data.attributes.borrower_loans) {
      return [];
    }
    return response.data.attributes.borrower_loans;
  }

  const ownerPuzzles = extractOwnerLoans(responseData);

  const userRequests = extractUserRequests(responseData);

  function renderButtons(puzzleL) {
    if (puzzleL.loan_status === "Pending") {
      return (
        <>
          <button className="profile-positive-btn accept-deny-btn btn" onClick={() => handleAcceptClick(puzzleL.id)}>
            Accept
          </button>
          <button className="profile-positive-btn accept-deny-btn btn" onClick={() => handleDenyClick(puzzleL.id)}>
            Deny
          </button>
        </>
      );
    } else if (puzzleL.loan_status === "Accepted") {
      return (
        <>
          <button className="profile-positive-btn btn"> {/* Función para dirigir a la información del que pide prestado (necesita parámetro id del usuario)*/}
            Borrower Info
          </button>
          <button className="profile-positive-btn accept-deny-btn btn">  {/* Función para indicar que se retornó (patch para cambiar el status del loan)*/}
            Returned
          </button>
        </>
      );
    } else if (puzzleL.loan_status === "Denied") {
      return (
        <>
          <h3>Puzzle is denied</h3>
          <p>If you want to change it to "available" please visit My Puzzles page, and update the status of this puzzle.</p>
        </>
      );
    }

    // Si el estado es desconocido, puedes retornar algo o un botón por defecto.
    return null;
  }

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
                    <h2 className="user-name-profile">{responseData.data.attributes.user_info.full_name}</h2>
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
            {ownerPuzzles.map((puzzle, index) => (
              <div className="puzzle-info-container" key={index}>
                <figure className="puzzle-img-div">
                  <img className="puzzle-img-dashboard" src={puzzle.puzzle_image_url} alt={puzzle.puzzle_title} />
                </figure>
                <div className="request-info-text">
                  <h3>{puzzle.puzzle_title}</h3>
                  <p>{puzzle.loan_created_at}</p>
                </div>
                <div className="btn-request-div">
                  {renderButtons(puzzle)}
                </div>
              </div>
            ))}
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
                <button className="withdraw-request-btn btn">Withdraw Request</button>
                <button className="returned-puzzle-btn close-request-btn btn">Returned</button>
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
