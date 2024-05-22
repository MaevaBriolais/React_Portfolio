import Avatar from "../assets/Avatar.jpg";
import "../CSS/header.scss"

function Header() {
  return (
    <header className="left">
        <img src={Avatar} alt="User profil" />
        <div className="userProfil">
          <h2>Maëva BRIOLAIS</h2>
          <h3>Développeuse Web</h3>
          <p>
            A la recherche d'une alternance - Concepteur
            Développeur d'Applications
          </p>
        </div>
    </header>
  );
}
export default Header;
