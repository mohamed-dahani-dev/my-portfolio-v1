import "./App.css";
import { useEffect, useState, useRef } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const moveUp = useRef();

  const docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come Back 💔";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  return (
    <div ref={moveUp} className="container">
      <Header />
      <Hero />
      <div className="diveder" />
      <Skills />
      <div className="diveder" />
      <Main />
      <div className="diveder" />
      <Contact />
      <div className="diveder" />
      <Footer />

      <button
        style={{
          opacity: showScrollBtn ? 1 : 0,
        }}
        className="scroll2top icon-keyboard_arrow_up"
        onClick={() => {
          moveUp.current.scrollIntoView({
            block: "start",
          });
        }}
      ></button>
    </div>
  );
}

export default App;
