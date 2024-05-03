import Avatar from "../assets/Avatar.jpg";

function Header() {
  return (
    <header>
      <div className="left">
        <img src={Avatar} alt="User profil" />
        <div className="userProfil">
          <h1>Maëva BRIOLAIS</h1>
          <h2>Développeuse Web</h2>
          <p>
            A la recherche d'une alternance pour Septembre 2024 - Concepteur
            Développeur d'Applications
          </p>
        </div>
      </div>

      <div className="right">
        <button className="contact-moi">Contactez-moi</button>
      </div>
    </header>
  );
}
export default Header;
