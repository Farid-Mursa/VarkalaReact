import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <i className="fa fa-truck" aria-hidden="true"></i>
                <div className="content">
                  <h6>Free shipping & return</h6>
                  <p>Free Shipping over $300</p>
                </div>
              </div>
              <div className="col-lg-3">
                <i className="bi bi-currency-exchange"></i>
                <div className="content">
                  <h6>Money back guarantee</h6>
                  <p>30 Days Money Back Guarantee</p>
                </div>
              </div>
              <div className="col-lg-3">
                <i className="bi bi-coin"></i>
                <div className="content">
                  <h6>Best prices</h6>
                  <p>Always the best prices</p>
                </div>
              </div>
              <div className="col-lg-3">
                <i className="bi bi-person"></i>
                <div className="content">
                  <h6>020-800-456-747</h6>
                  <p>24/7 Available Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h6>Be in touch</h6>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  At itaque temporibus.
                </p>
                <form action="">
                  <input type="text" placeholder="Your Email address" />
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </form>
              </div>
              <div className="col-lg-7">
                <div className="col-lg-4">
                  <h6>Shop</h6>
                  <ul className="list">
                    <li className="list-item">
                      {" "}
                      <a>For women</a>
                    </li>
                    <li className="list-item">
                      <a> For men</a>
                    </li>
                    <li className="list-item">
                      <a>Stores</a>
                    </li>
                    <li className="list-item">
                      <a>Our Blog</a>
                    </li>
                    <li className="list-item">
                      <a>Shop</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h6>Company</h6>
                  <ul className="list">
                    <li className="list-item">
                      <a>Login</a>
                    </li>
                    <li className="list-item">
                      <a>Register</a>
                    </li>
                    <li className="list-item">
                      <a>Wishlist</a>
                    </li>
                    <li className="list-item">
                      <a>Our product</a>
                    </li>
                    <li className="list-item">
                      <a>Checkouts</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h6>Your account</h6>
                  <ul className="list">
                    <li className="list-item">
                      <a>Login</a>
                    </li>
                    <li className="list-item">
                      <a>Register</a>
                    </li>
                    <li className="list-item">
                      <a>Wishlist</a>
                    </li>
                    <li className="list-item">
                      <a>Our product</a>
                    </li>
                    <li className="list-item">
                      <a>Checkouts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p> © 2020 Your company. All rights reserved. </p>
              </div>
              <div className="col-lg-8">
                <p>Terms & Conditions</p>
                <p>Privacy & cookies</p>
                <p>Accessibility</p>
                <p>Customer Data Promise</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
