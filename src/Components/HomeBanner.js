import { useLocation, useNavigate } from "react-router-dom";
import TypeWriter from "react-typewriter";

function HomeBanner({ data }) {
  const location = useLocation();
  const navigate = useNavigate();
  const greet = "Hey!  There👋";
  var name = data.name;
  var occupation = data.occupation;
  var description = data.description;
  var networks = data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });
  return (
    <header>
      <nav id="nav-wrap">
        <a className="mobile-btn" title="Show navigation" href="/">
          Show navigation
        </a>
        <a className="mobile-btn" title="Hide navigation" href="/">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={location.pathname === "/" ? "current" : null}>
            <a href="/" className="smoothscroll">
              Home
            </a>
          </li>
          <li className={location.pathname === "/about" ? "current" : null}>
            <a href="/#about" className="smoothscroll">
              About
            </a>
          </li>
          <li className={location.pathname === "/work" ? "current" : null}>
            <a href="/#work" className="smoothscroll">
              Work
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <TypeWriter typing={0.5} className="responsive-headline">
            <h3>{`${greet}`}</h3>
          </TypeWriter>
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
          <div className="main-button">
            <h2>Check out my</h2>
            <button onClick={() => navigate("/#work")}>Work</button>
          </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="/">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default HomeBanner;
