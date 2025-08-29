import React from "react";

export default function Portfolio({ setView }) {
  return (
    <>
      <div className="wic">
        <h2>What I can do</h2>
      </div>
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src="/symbispi.png" alt="mods" />
          <div className="card-body">
            <h5 className="card-title">Mods</h5>
            <p className="card-text">I made for the games I love!</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/capshield.png" alt="renders" />
          <div className="card-body">
            <h5 className="card-title">Renders</h5>
            <p className="card-text">I do 3D renders in Blender</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/spaceoodity.png" alt="games" />
          <div className="card-body">
            <h5 className="card-title">Games</h5>
            <p className="card-text">I made Games for School!</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-sm mt-3"
        onClick={() => setView("carousel")}
      >
        All my work
      </button>
    </>
  );
}
