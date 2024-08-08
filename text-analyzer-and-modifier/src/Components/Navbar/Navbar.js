import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
<div>
<nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Word'O'Read</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  );
}

