import React from "react";

export default function ContactForm({ setView }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for sending a Message :D I might reply back soon!");
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="el">Email</label>
        <input type="text" id="el" name="email" placeholder="Your Email..." />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="php">Philippines</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="england">England</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
        />

        <input type="submit" value="Submit" />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setView("welcome")}
        >
          Go Back
        </button>
      </form>
    </div>
  );
}
