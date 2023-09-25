import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const activeLink = "text-red-500 border-b-2 border-red-500";
  const normalLink = "";
  return (
    <nav className="flex justify-between items-center mx-auto w-[85%] py-8">
      <div>
        <img src={Logo} alt="" />
      </div>

      <div className="space-x-4">
        <ul className="flex mr-8">
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
