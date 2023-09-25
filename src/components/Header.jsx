import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import "../assets/css/Header.css";

const Header = () => {
  const activeLink = "text-red-500 border-b-2 border-red-500";
  const normalLink = "";
  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center w-[85%] py-8">
      <div className="my-4 md:my-0">
        <img src={Logo} alt="" />
      </div>

      <div className="space-x-4">
        <ul className="flex md:mr-8 ml-6 md:ml-0">
          <li className="mr-4 font-bold text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
          </li>
          <li className="mr-4 font-bold text-xl">
            <NavLink
              to="/donation"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Donation
            </NavLink>
          </li>
          <li className="mr-4 font-bold text-xl">
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
