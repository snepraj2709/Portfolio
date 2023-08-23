import { useNavigate } from "react-router-dom";
import TypeWriter from "react-typewriter";

function HomeBanner({ data }) {
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
            <button onClick={() => navigate("/work")}>Work</button>
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
