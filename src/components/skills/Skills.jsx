import "./Skills.css";
import materialuiImg from "../../images/skillsImages/material-ui.png";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">
        <span className="icon-code"></span>
        My Skills
      </h1>
      <div className="skills-cards">
        <div className="react-card">
          <span className="icon-react"></span>
          <h1>React</h1>
        </div>
        <div className="js-card">
          <span className="icon-javascript"></span>
          <h1>JavaScript</h1>
        </div>
        <div className="html-card">
          <span className="icon-html5"></span>
          <h1>HTML</h1>
        </div>
        <div className="css-card">
          <span className="icon-css3"></span>
          <h1>CSS</h1>
        </div>
        <div className="materialui-card">
          <img src={materialuiImg} alt="" />
          <h1>Material Ui</h1>
        </div>
        <div className="nodejs-card">
          <span className="icon-node-dot-js"></span>
          <h1>Node Js</h1>
        </div>
        <div className="mongodb-card">
          <span className="icon-mongodb"></span>
          <h1>MongoDB</h1>
        </div>
        <div className="mysql-card">
          <span className="icon-mysql"></span>
          <h1>My SQL</h1>
        </div>
        <div className="git-card">
          <span className="icon-git"></span>
          <h1>Git</h1>
        </div>
        <div className="typeScript-card">
          <span className="icon-typescript"></span>
          <h1>Type Script</h1>
        </div>
        <div className="php-card">
          <span className="icon-php"></span>
          <h1>PHP</h1>
        </div>
        <div className="laravel-card">
          <span className="icon-laravel"></span>
          <h1>Laravel</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
