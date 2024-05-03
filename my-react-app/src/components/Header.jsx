import Avatar from "../assets/Avatar.jpg";
import "../CSS/header.scss"

function Header() {
  return (
    <header className="left">
        <img src={Avatar} alt="User profil" />
        <div className="userProfil">
          <h1>Maëva BRIOLAIS</h1>
          <h2>Développeuse Web</h2>
          <p>
            A la recherche d'une alternance - Concepteur
            Développeur d'Applications
          </p>
        </div>
    </header>
  );
}
export default Header;
