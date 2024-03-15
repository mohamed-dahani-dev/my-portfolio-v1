/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import "./Main.css";
import projectsData from "../../data/ProjectsData";
import { AnimatePresence, motion } from "framer-motion";
const widthCard = 300;

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [newArray, setNewArray] = useState(projectsData);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const filterArray = projectsData.filter((item) => {
      return item.category === buttonCategory;
    });
    setNewArray(filterArray);
  };
  return (
    <main id="projects">
      <h1 className="project-title">
        <span className="icon-planet"></span>
        My Projects
      </h1>
      <section className="content-main">
        <section className="left-section-main">
          <button
            onClick={() => {
              setCurrentActive("all");
              setNewArray(projectsData);
            }}
            className={currentActive === "all" ? "btn-main-active" : null}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              setCurrentActive("html&css");
              handleClick("html&css");
            }}
            className={currentActive === "html&css" ? "btn-main-active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => {
              setCurrentActive("javascript");
              handleClick("javascript");
            }}
            className={
              currentActive === "javascript" ? "btn-main-active" : null
            }
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              setCurrentActive("reactjs");
              handleClick("reactjs");
            }}
            className={currentActive === "reactjs" ? "btn-main-active" : null}
          >
            React Js
          </button>
          <button
            onClick={() => {
              setCurrentActive("node&express");
              handleClick("node&express");
            }}
            className={
              currentActive === "node&express" ? "btn-main-active" : null
            }
          >
            Node & Express
          </button>
        </section>
        <section className="right-section-main">
          <AnimatePresence>
            {newArray.map((card) => {
              return (
                <motion.article
                  key={card.id}
                  className="card"
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 10, stiffness: 50 }}
                >
                  <img height={150} width={widthCard} src={card.img} alt="" />
                  <div style={{ width: widthCard }} className="box">
                    <h1 className="box-title">{card.title}</h1>
                    <p className="box-subtitle">{card.description}</p>
                    <div className="card-icon">
                      <a
                        href={card.gitHub}
                        target="_blank"
                        className="icon-github"
                      ></a>
                      <a
                        href={card.link}
                        target="_blank"
                        className="icon-external-link"
                      ></a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </section>
    </main>
  );
};

export default Main;
