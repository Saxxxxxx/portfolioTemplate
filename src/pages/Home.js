import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../assets/cat-profile-img.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${ProfilePicture})` }}
      >
        <h1>My Portfolio Website</h1>
        <p>Portfolio better than yours</p>
        <Link to="/projectList">
          <button>Hire Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
