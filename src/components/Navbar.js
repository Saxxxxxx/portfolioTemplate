import React, { useState } from "react";
import logo from "../assets/cat-img.jpeg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setLinks] = useState(false);
  const toggleNavbar = () => {
    setLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/projectList">Project</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide" Hello>
        <Link to="/">Home</Link>
        <Link to="/projectList">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
