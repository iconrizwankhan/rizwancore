import React from "react";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

function Navbar({ searchUsers }) {
const navigate=useNavigate();
const onClickhandler = (e)=>{
  e.preventDefault();
  navigate("/");
}

  return (
    <div className="navbarcontainer">
      <div className="navbar navbar-dark bg-dark">
        <h1 style={{ color: "white", marginLeft: "10px", cursor:"pointer" }} onClick={onClickhandler}>GitHub</h1>
        <Searchbar searchUsers={searchUsers}></Searchbar>
      </div>
    </div>
  );
}

export default Navbar;
