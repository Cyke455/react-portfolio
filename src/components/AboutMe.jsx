import React from "react";

export default function AboutMe() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="aboutme" style={{ width: "18rem" }}>
        <img className="aboutme-img" src="/DeLeon_GOO2.png" width={500}  alt="me" />
        <div className="card-body">
          <h1 className="card-title">Who am I?</h1>
          <p className="card-text">
            I am Cykle but my real name is Clark. I have been making mods for 5 years now
            and I am a student at De La Salle Lipa. I like pizza and Spider-Man!
          </p>
        </div>
      </div>
    </div>
  );
}
