import React from "react";
import { useState } from "react";

function Searchbar({ searchUsers }) {
  const [query, setQuery] = useState("");

  const onChangehandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmithandler = (e) => {
    e.preventDefault();
    searchUsers(query);
    setQuery("");
  };
  return (
    <div className="search-container">
      <form style={{ display: "flex" }} onSubmit={onSubmithandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Github user search engine"
          onChange={onChangehandler}
          value={query}
          required
        />
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
    </div>
  );
}
export default Searchbar;

//handling forms in react
//Form data must be stored in component state only
//always create handlers for al behaviors
//Prop drilling
//props default
