import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
// import {Link} from 'react-router-dom'
import { Link } from "react-router-dom";
let user;
const Join = () => {
  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    // document.getElementById("joinInput").value = "";
  };
  const [name, setName] = useState("");
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="Logo" />
        <h1>JOIN PAGE</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="joinInput"
          placeholder="..."
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          <button className="joinbtn" onClick={sendUser}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
