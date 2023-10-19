import "./dashboard.css";
import zipIcon from "../../../assets/zip_icon.png";
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
      <main>
        <section className="profile-section">
          <h2>Andrea Ramirez</h2> {/* Aquí sería con interpolación {user.name} */}
          <div className="user-info">
            <div>
              <img className="icons" src={zipIcon} alt="Zip Icon" />
              <strong>Zip Code:</strong>  {/* {user.zipCode} */}
            </div>
            <div>
              <img className="icons" src="" alt="Email Icon" />
              <strong>Email:</strong> {/* {user.email} */}
            </div>
            <div>
              <img className="icons" src="" alt="Phone Icon" />
              <strong>Phone:</strong> {/* {user.phone} */}
            </div>
          </div>
          <div className="profile-actions">
            <button className="add-puzzle-btn profile-btn" /*onClick={onEditProfileClick}*/>Add Puzzle</button>
            <button className="update-profile-btn profile-btn" /*onClick={onAddPuzzleClick}*/>Update Profile</button>
          </div>
        </section>
        <section className="requests-for-user requests"></section>
        <section className="user-requests requests"></section>
      </main>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
