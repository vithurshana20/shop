import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";

function Navbar() {
    return (
        <>
           <nav className="navbar bg-body-tertiary" >
  <div className="container-fluid" style={{ backgroundColor: "#c5c3c3" }} >
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo"  width="80" height="80" className="d-inline-block align-text-top"/>
    </a>
    <ul className="nav justify-content-end" style={{ marginRight: "70px" }}>
      <li className="nav-item mx-3"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item mx-3"><Link to="/AboutUs" className="nav-link">About</Link></li>
      <li className="nav-item mx-3"><Link to="/Faq" className="nav-link">Faq</Link></li>
      <li className="nav-item mx-3"><Link to="/Contact" className="nav-link">Contact</Link></li>
    </ul>
  </div>
</nav>

        </>
    )
}

export default Navbar