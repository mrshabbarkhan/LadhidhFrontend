import { Link } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => (
  <li>
    <Link to={to} className="nav-link flex items-center text-black py-2">
      <span className="dz-icon mr-4 text-xl">
        <Icon />
      </span>
      <span className="font-medium text-lg">{label}</span>
    </Link>
  </li>
);

export default NavItem