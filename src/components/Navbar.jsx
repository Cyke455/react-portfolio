import React from "react";

export default function Navbar({ setView }) {
  return (
    <div className="navbar" id="nb">
      <h2>Cykle's Stuff</h2>
      <div className="sidenav">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => setView("portfolio")}
        >
          Portfolio
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => setView("contact")}
        >
          Contact Me!
        </button>
      </div>
    </div>
  );
}
