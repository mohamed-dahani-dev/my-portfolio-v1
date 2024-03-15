import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <Link to="hero" spy={true} smooth={false} offset={-10} duration={500}>
          About
        </Link>
        <Link to="skills" spy={true} smooth={false} offset={-50} duration={500}>
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={false}
          offset={-50}
          duration={500}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={false}
          offset={-50}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <p className="footer-right"> © 2024 Spencer Sharp. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
