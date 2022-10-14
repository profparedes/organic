import { Link } from "react-router-dom";

const MenuDesktop = () => (
    <nav className="">
      <ul className="list-unstyled d-flex mb-0 fw-bold">
        <li className="me-4">
          <Link  to="/" className="text-decoration-none text-uppercase text-gray">
            Home
          </Link>
        </li>
        <li className="me-4">
          <Link to="/shop" className="text-decoration-none text-uppercase text-gray">
            Shop
          </Link>
        </li>
        <li className="me-4">
          <Link to="/about" className="text-decoration-none text-uppercase text-gray">
            About
          </Link>
        </li>
        <li className="me-4">
          <Link to="/contact" className="text-decoration-none text-uppercase text-gray">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
  
  export default MenuDesktop;