import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {
  GaugeIcon,
  BicycleIcon,
  CarIcon,
  GlobeIcon,
  ListDashesIcon,
  PaintBrushIcon,
  UserIcon,
  SingOutIcon,
} from "../components/Icons";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Riviera logo" className="nav-logo" />
      <ul className="ul-container">
        <li>
          <Link className="nav-link" to="/">
            <GaugeIcon />
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Users">
            <UserIcon />
            Users
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Orders">
            <ListDashesIcon />
            Orders
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Cars">
            <CarIcon />
            Cars
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Art">
            <PaintBrushIcon />
            Art
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Merchandising">
            <BicycleIcon />
            Merchandising
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/HallOfPrestige">
            <GlobeIcon />
            Hall of Prestige
          </Link>
        </li>
      </ul>
      <hr />
      <div className="admin-user">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="Profile-pic"
          className="nav-admin-img"
        />
        <div className="admin-data">
          <p>Miken Jordan</p>
          <p className="small">User admin</p>
        </div>
      </div>
      <button className="log-out-btn" /* onClick={handleLogOut} */>
        <SingOutIcon color="#aaedd1" /> Log out
      </button>
    </nav>
  );
}
