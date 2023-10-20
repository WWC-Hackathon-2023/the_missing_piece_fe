import "./dashboard.css";
import zipIcon from "../../../assets/zip_icon.png";
import emailIcon from "../../../assets/email.png";
import phoneIcon from "../../../assets/phone.png";
import iconPerson from "../../../assets/icon_person.png";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";

export default function Dashboard() {

  // aquí va lógica para poner datos del usuario

  // aquí va lógica para traer las solicitudes de otros usuarios para pedir un puzzle

  // aquí va lógica para traer las solicitudes del usuario actual para pedir puzzles

  return (
    <>
      <header className="headerProfile">
        <NavigationBar />
      </header>
      <main className="main-profile">
        <section className="profile-btn-section">
          <div className="profile-div">
            <div className="profile-actions">
              <img className="icon-person" src={iconPerson} alt="Profile Icon" />
              <button className="add-puzzle-btn profile-positive-btn btn" /*onClick={onEditProfileClick}*/>Add Puzzle</button>
              <button className="update-profile-btn profile-positive-btn btn" /*onClick={onAddPuzzleClick}*/>Update Profile</button>
            </div>
            <div className="user-info">
              <h2>Andrea Ramirez</h2> {/* Aquí sería con interpolación {user.name} */}
              <div className="user-data-div">
                <img className="icons-profile" src={zipIcon} alt="Zip Icon" />
                <div className="user-data-text">
                  <strong>Zip Code</strong> {/* {user.zipCode} */}
                  <p>7100000</p>
                </div>
              </div>
              <div className="user-data-div">
                <img className="icons-profile" src={emailIcon} alt="Email Icon" />
                <div className="user-data-text">
                  <strong>Email</strong> {/* {user.email} */}
                  <p>andrea@mail.org</p>
                </div>
              </div>
              <div className="user-data-div">
                <img className="icons-profile" src={phoneIcon} alt="Phone Icon" />
                <div className="user-data-text">
                  <strong>Phone</strong> {/* {user.phone} */}
                  <p>+56 (123)4563789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-div">
            <button className="search-puzzles-btn btn">Search for Puzzles</button>
          </div>
        </section>
        <section className="requests-for-user requests">
          {/* Aquí habrá que ver si estos divs se tienen que cambiar, porque lo que muestran dependerá del status del puzzle */}
          <div className="title-section">Request to Borrow My Puzzles</div>
          <div className="puzzle-request-div">
            <img src="" alt="puzzle" />
          </div>
          <div className="btn-request-div">
            <button className="profile-positive-btn accept-btn btn">Accept</button>
            <button className="close-request-btn btn">Deny</button>
          </div>
        </section>
        <section className="user-requests requests">
          <div className="title-section">Puzzles I have requested</div>
          <div className="puzzle-request-div"></div>
          <div className="btn-request-div">
            <button className="profile-positive-btn owner-info-btn btn">Owner Info</button>
            <button className="withdraw-request-btn btn">Withdraw Request</button>
            <button className="returned-puzzle-btn close-request-btn btn">Returned</button>
          </div>
        </section>
      </main>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
