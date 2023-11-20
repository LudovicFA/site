import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">LFA</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/experiences"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Experiences
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
        | FR - EN
      </nav>
    </header>
  );
};

export default Navbar;
