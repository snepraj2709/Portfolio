import "./skills.css";
import { userData } from "../../data/userData";

function Skills() {
  const languagesAndTools = userData.skills.languagesAndTools;
  const librariesAndFrameworks = userData.skills.librariesAndFrameworks;
  const databases = userData.skills.databases;
  const other = userData.skills.other;

  return (
    <div className="skill-container">
      <div className="skills-wrapper">
        <div>
          <h3 className="skill-heading">SKILLS</h3>
        </div>
        <div className="skill-list-header">
          <h3>Languages and Tools</h3>
          <div className="flex flex-wrap gap-6 transform-gpu seq">
            {languagesAndTools.map((skill) => (
              <img
                className="icon-image"
                key={skill}
                src={`../skills/${skill}.svg`}
                alt={skill}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
        <div className="skill-list-header">
          <h3>LIBRARIES AND FRAMEWORKS</h3>
          <div className="flex flex-wrap gap-6 transform-gpu seq">
            {librariesAndFrameworks.map((skill) => (
              <img
                className="icon-image"
                key={skill}
                src={`/skills/${skill}.svg`}
                alt={skill}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
        <div className="other-skills-row">
          <div className="skill-list-header">
            <h3>DATABASES</h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {databases.map((skill) => (
                <img
                  className="icon-image"
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="skill-list-header">
            <h3>Other</h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {other.map((skill) => (
                <img
                  className="icon-image"
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
