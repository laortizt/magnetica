import logo from "../img/logoMagnetica.png";

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="Magnética Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#Schedule">Agendar</a></li>
        <li><a href="#Galery">Galería</a></li>
        <li><a href="#Store">Tienda</a></li>
        <li><a href="#Payment">Pago</a></li>
      </ul>

      <a href="#agendar" className="nav-cta">
        Reservar
      </a>
    </nav>
  );
}

export default Navbar;