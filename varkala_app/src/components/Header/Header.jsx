import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="left">
            <div className="social-media">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-solid fa-phone"></i>
              <span>020-800-456-747</span>
            </div>
          </div>
          <div>
            <span>Free in-store delivery</span>
          </div>
          <div className="right ml-3">
            <button className="dropbtn">
              English <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">German</a>
              <a href="#">French</a>
            </div>
            <button className="dropbtn">
              USD <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">EUR</a>
              <a href="#">GBR</a>
            </div>
          </div>
        </div>
        <div className="leke">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#e0d4ab"
              d="M354,340Q240,440,139.5,340Q39,240,139.5,125Q240,10,354,125Q468,240,354,340Z"
            />
          </svg>
        </div>
        <div
          className="container-fluid"
          style="position: absolute; top: 50px; z-index: 5;"
        >
          <div className="row">
            <div className="col-lg-7 col-4">
              <div className="lists">
                <ul>
                  <li>
                    <a className="active" href="./index.html">
                      Varkala
                    </a>
                  </li>
                  <li className="myList active">
                    Home <i className="fa-solid fa-angle-down"></i>
                  </li>
                  <li className="myList">
                    Shop <i className="fa-solid fa-angle-down"></i>
                  </li>
                  <li className="myList">
                    Icons <i className="fa-solid fa-angle-down"></i>
                  </li>
                  <li className="myList">
                    Pages <i className="fa-solid fa-angle-down"></i>
                  </li>
                  <li className="myList">
                    Docs <i className="fa-solid fa-angle-down"></i>
                  </li>
                </ul>
                <ul className="home-list">
                  <li>Home 1 - Fashion</li>
                  <li>Home 2 - Fashion</li>
                  <li>
                    Home 3 - Design <span> New</span>
                  </li>
                  <li>
                    Home 4 - Design <span> New</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-4">
              <div className="input-basket">
                <div className="search">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                  <i className="bi bi-search"></i>
                </div>
                <div className="myList person-basket">
                  <i className="person bi bi-person"></i>
                  <i className="bi bi-heart"></i>{" "}
                  <span className="wishlist">3</span>
                  <i
                    className="myList bi bi-basket btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  ></i>{" "}
                  <span className="baskett">3</span>
                  <i
                    className="myList bi bi-list btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBack"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
