import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);
  return (
    <header>
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <div />
      <nav>
        <Link to="hero" spy={true} smooth={false} offset={-10} duration={500}>
          <span className="icon-user"></span>About
        </Link>
        <Link to="skills" spy={true} smooth={false} offset={-50} duration={500}>
          <span className="icon-code"></span>Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={false}
          offset={-50}
          duration={500}
        >
          <span className="icon-planet"></span>Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={false}
          offset={-50}
          duration={500}
        >
          <span className="icon-envelope"></span>Contact
        </Link>
      </nav>
      <button
        onClick={() => {
          // send value to ls
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from ls
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sunny"></span>
        )}
      </button>

      {showMenu && (
        <div className="pop-up">
          <div className="menu-list">
            <div className="btnCloseMenu">
              <button
                className="icon-close"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </div>
            <Link
              to="hero"
              spy={true}
              smooth={false}
              offset={-20}
              duration={500}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <span className="icon-user"></span>About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={false}
              offset={-50}
              duration={500}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <span className="icon-code"></span>Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={false}
              offset={-50}
              duration={500}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <span className="icon-planet"></span>Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={false}
              offset={-50}
              duration={500}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <span className="icon-envelope"></span>Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
