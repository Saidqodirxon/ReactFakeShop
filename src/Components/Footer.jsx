import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="text-bg-secondary shadow py-3">
        <div className="container d-flex justify-content-between p-3">
          <Link className="text-reset text-decoration-none fs-1" to="/">
            <img src="https://saidqodirxon.uz/srx.png" width={50} alt="" />{" "}
            S-Market
          </Link>
          <h4 className="">© All Right Reserved</h4>

          <ul className="list-unstyled  m-0 gap-3 d-flex  justify-content-between">
            <li>
              <Link className="text-decoration-none text-light fs-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light fs-4" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light fs-4" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
