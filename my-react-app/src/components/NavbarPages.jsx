import "../CSS/navbar.scss";
import { Link } from "react-router-dom";

function NavbarPages() {
  return (
    <nav>
      <ul>
        {/* <li><a>Diplômes</a></li>
        <li><a>Expériences</a></li> */}
        <Link to="/ContactPage"> Contact</Link>
      </ul>
    </nav>
  );
}

export default NavbarPages;
