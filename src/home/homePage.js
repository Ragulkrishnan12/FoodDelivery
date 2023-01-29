import React from "react";
import "./home.css";

function HomePage() {
  return (
    <div className="flex">
      <div className="RRR">
        <nav>
          <a class="navbar-brand" href="#">
            <img
              src="https://t3.ftcdn.net/jpg/00/96/40/18/360_F_96401810_LO67BgmOuktElpee2xNF7hOVIbQC2nvD.jpg"
              width="100"
              height="100"
              class="d-inline-block align-top"
              alt=""
            ></img>
          </a>
        </nav>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              HAPPIEE RESTAURANTS
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ">
                <a class="nav-link active " aria-current="page" href="#"></a>
                <br />
                <a class="btn btn-outline-warning " href="#">
                  Categories
                </a>
                <br />

                <a class="btn btn-outline-warning" href="#">
                  Near Store
                </a>
                <br />
                <a class="btn btn-outline-warning" href="#">
                  Login
                </a>
                <a class="btn btn-outline-warning" href="#">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid pad ">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Food here"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default HomePage;
