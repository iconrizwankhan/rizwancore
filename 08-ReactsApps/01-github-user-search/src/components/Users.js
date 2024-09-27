import React from "react";
import Useritems from "./Useritems";
import Navbar from "./Navbar";

function Users({ u, searchUsers }) {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "1rem",
    margin: "auto",
  };

  return (
    <div>
      <Navbar searchUsers={searchUsers}></Navbar>
      <div className="usercontainer" style={styles}>
        {
          // u.map((ele)=><Useritems ui={ele}/>)
          u.map((user, index) => (
            <Useritems key={index} ui={user} />
          ))
        }
      </div>
    </div>
  );
}
export default Users;

//props is an input to a component
