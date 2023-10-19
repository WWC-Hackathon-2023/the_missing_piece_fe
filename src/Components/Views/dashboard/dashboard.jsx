import "./dashboard.css";
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
        <h1>"Hello Profile"</h1>
        <section className="profile-section">
        <div className="user-profile">
      <h2>Andrea Ramirez</h2> {/* Aquí sería con interpolación {user.name} */}
      <div className="user-info">
        <div>
          {/* <strong>Zip Code:</strong> {user.zipCode} */}
        </div>
        <div>
          {/* <strong>Email:</strong> {user.email} */}
        </div>
        <div>
          {/* <strong>Phone:</strong> {user.phone} */}
        </div>
      </div>
      <div className="profile-actions">
        <button className="add-puzzle-btn" /*onClick={onEditProfileClick}*/>Add New Puzzle</button>
        <button className="update-profile-btn" /*onClick={onAddPuzzleClick}*/>Update Profile</button>
      </div>
    </div>
        </section>
        <section className="requests-for-user"></section>
        <section className="user-requests"></section>
      </main>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
