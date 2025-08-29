import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import CarouselGallery from "./components/CarouselGallery";

export default function App() {
  const [view, setView] = useState("welcome");


  useEffect(() => {
    const handleKey = (event) => {
      if (event.code === "Tab") {
        event.preventDefault();
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

        document.querySelectorAll("*").forEach((el) => {
          if (el.style) {
            el.style.color = randomColor;
            const computedStyle = getComputedStyle(el);
            if (
              computedStyle.borderStyle !== "none" &&
              computedStyle.borderWidth !== "0px"
            ) {
              el.style.borderColor = randomColor;
            }
          }
        });
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar setView={setView} />

      {view === "welcome" && (
        <>
          <Welcome />
          <AboutMe />
        </>
      )}

      {view === "portfolio" && <Portfolio setView={setView} />}

      {view === "contact" && <ContactForm setView={setView} />}

      {view === "carousel" && <CarouselGallery setView={setView} />}
    </div>
  );
}
