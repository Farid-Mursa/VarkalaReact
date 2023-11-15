import React from "react";


function Header() {
  return (
    <>
      <header>
        <div class="leke">
        <svg
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="#e0d4ab"
        d="M354,340Q240,440,139.5,340Q39,240,139.5,125Q240,10,354,125Q468,240,354,340Z"
      />
    </svg>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-7 col-4">
              <div class="lists">
                <ul>
                  <li>
                    <a class="active" href="./index.html">
                      Varkala
                    </a>
                  </li>
                  <li>
                    <a class="active" href="./index.html">
                      Home <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html">
                      Shop <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html">
                      Icons <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html">
                      Pages <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html">
                      Docs <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </a>
                  </li>
                </ul>
                <ul class="home-list">
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
            <div class="col-lg-5 col-4">
              <div class="input-basket">
                <div class="search">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="person-basket">
                  <i class="person bi bi-person"></i>
                  <i class="bi bi-heart"></i> <span class="wishlist">3</span>
                  <i class="basket bi bi-basket"></i>{" "}
                  <span class="baskett">3</span>
                  <i class="menu bi bi-list"></i>
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
