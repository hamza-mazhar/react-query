import React from "react";

const NavBar = ({ setPage }) => {
  return (
    <div>
      <button onClick={() => setPage("people")}>People</button>
      <button onClick={() => setPage("planets")}>Planets</button>
    </div>
  );
};

export default NavBar;
