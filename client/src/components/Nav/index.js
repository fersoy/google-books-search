import React from "react";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="#searchBar">
        Search
      </a>
      <a className="navbar-brand" href="#">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
