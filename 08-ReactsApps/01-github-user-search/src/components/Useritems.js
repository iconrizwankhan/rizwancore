import React from "react";
import { Link } from "react-router-dom";

function Useritems({ ui }) {
  return (
    <div className="useritemcontainer" style={{ display: "flex", padding: "1rem" }}>
      <div className="card" style={{ width: "15rem" }}>
        <img className="card-img-top" src={ui.avatar_url} alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{ui.login}</h5>
          <Link to={`/profile/${ui.login}`} className="btn btn-primary">
            Show Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Useritems;
