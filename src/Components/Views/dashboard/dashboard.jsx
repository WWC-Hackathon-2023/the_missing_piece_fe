import "./dashboard.css";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";

export default function Dashboard() {
  return (
    <>
      <header className="headerProfile">
        <div className="containerButtons">
          <NavigationBar />
        </div>
      </header>
      <h1>"Hello Profile"</h1>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
      
    </>
  );
}
