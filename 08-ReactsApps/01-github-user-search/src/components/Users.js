import React from "react";
import Useritems from "./Useritems";
import Navbar from "./Navbar";
import Loader from "./Loader";

function Users({ u, searchUsers, loading,setUsers ,resetUsers}) {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "1rem",
    margin: "auto",
  };

  return (
    <div>
      <Navbar setUsers={setUsers} searchUsers={searchUsers} resetUsers={resetUsers}></Navbar>
      <div className="usercontainer" style={styles}>
        {loading && <Loader />}
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
