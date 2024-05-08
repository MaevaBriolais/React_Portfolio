import "../CSS/navbar.scss";
import { Link } from "react-router-dom";

function NavbarPages() {
  return (
    <nav>
      <ul>
        <Link to="/DiplomesPage">Diplômes</Link>
        <Link to="ExperiencePage">Expériences</Link>
        <Link to="/ContactPage"> Contact</Link>
      </ul>
    </nav>
  );
}

export default NavbarPages;
