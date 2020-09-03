import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar text-uppercase navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="#">
          TESLA
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Model s <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                model 3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                model X
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                model Y
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Solar roof
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Solar Pannel
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
