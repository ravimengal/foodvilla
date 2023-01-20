import '../index.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="navbar " style={{ backgroundColor: "#D3D3D3" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img
              style={{ marginRight: "10px" }}
              src="https://as1.ftcdn.net/v2/jpg/02/51/09/16/1000_F_251091660_usuTtAaEpyULKwq3rgwmKRmtIT6Kh7WS.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            FooDVilla
          </Link>
          <div className="nav--item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
          <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
          </div>

          <button className="btn" type="submit">
            Login
          </button>
         
        </div>
      </nav>
    </>
  );
};

export default Nav;
