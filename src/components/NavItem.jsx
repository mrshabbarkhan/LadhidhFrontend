import { Link } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => (
  <li>
    <Link
      to={to}
      className="nav-link flex items-center text-black py-1 my-2 hover:px-2 hover:shadow-md hover:bg-slate-50 rounded-lg transition-padding transition-background-color duration-200"
    >
      <span className="dz-icon mr-4 text-xl">
        <Icon />
      </span>
      <span className="font-medium text-lg">{label}</span>
    </Link>
  </li>
);

export default NavItem;
