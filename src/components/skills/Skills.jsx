/* eslint-disable react/jsx-no-target-blank */
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
        <a href="https://react.dev/" target="_blank" className="react-card">
          <span className="icon-react"></span>
          <h1>React</h1>
        </a>
        <a
          href="https://www.w3schools.com/js/default.asp"
          target="_blank"
          className="js-card"
        >
          <span className="icon-javascript"></span>
          <h1>JavaScript</h1>
        </a>
        <a
          href="https://www.w3schools.com/html/default.asp"
          target="_blank"
          className="html-card"
        >
          <span className="icon-html5"></span>
          <h1>HTML</h1>
        </a>
        <a
          href="https://www.w3schools.com/css/default.asp"
          target="_blank"
          className="css-card"
        >
          <span className="icon-css3"></span>
          <h1>CSS</h1>
        </a>
        <a href="https://mui.com/" target="_blank" className="materialui-card">
          <img src={materialuiImg} alt="" />
          <h1>Material Ui</h1>
        </a>
        <a href="https://getbootstrap.com/" target="_blank" className="bootstrap-card">
          <span className="icon-bootstrap"></span>
          <h1>Bootstrap</h1>
        </a>
        <a href="https://nodejs.org/en" target="_blank" className="nodejs-card">
          <span className="icon-node-dot-js"></span>
          <h1>Node Js</h1>
        </a>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          className="mongodb-card"
        >
          <span className="icon-mongodb"></span>
          <h1>MongoDB</h1>
        </a>
        <a href="https://dev.mysql.com/" target="_blank" className="mysql-card">
          <span className="icon-mysql"></span>
          <h1>My SQL</h1>
        </a>
        <a href="https://git-scm.com/" target="_blank" className="git-card">
          <span className="icon-git"></span>
          <h1>Git</h1>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" className="typeScript-card">
          <span className="icon-typescript"></span>
          <h1>Type Script</h1>
        </a>
        <a href="https://www.php.net/" target="_blank" className="php-card">
          <span className="icon-php"></span>
          <h1>PHP</h1>
        </a>
        <a href="https://laravel.com/" target="_blank" className="laravel-card">
          <span className="icon-laravel"></span>
          <h1>Laravel</h1>
        </a>
      </div>
    </section>
  );
};

export default Skills;
