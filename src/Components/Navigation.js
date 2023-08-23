import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" title="Show navigation" href="/#">
        Show navigation
      </a>
      <a className="mobile-btn" title="Hide navigation" href="/#">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li className={location.pathname === "/" ? "current" : null}>
          <NavLink exact to="/" className="smoothscroll">
            Home
          </NavLink>
        </li>
        <li className={location.pathname === "/about" ? "current" : null}>
          <NavLink to="/about" className="smoothscroll">
            About
          </NavLink>
        </li>
        <li className={location.pathname === "/work" ? "current" : null}>
          <NavLink to="/work" className="smoothscroll">
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
