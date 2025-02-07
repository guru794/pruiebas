import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import logoI94 from '/src/assets/logo-i94.png';
import logo from '/src/assets/logo.png';

const NavLinks = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "navbar-item selected" : "navbar-item";
  };

  return (
    <>
      <li className={getLinkClass("/home")}>
        <Link to="/home">
          <span>Home</span>
        </Link>
      </li>
      <li className={getLinkClass("/forms")}>
        <Link to="/forms">
          <span>Forms</span>
        </Link>
      </li>
      <li className={getLinkClass("/news")}>
        <Link to="/news">
          <span>Newsroom</span>
        </Link>
      </li>
      <li className={getLinkClass("/applyform")}>
        <Link to="/applyform">
          <span>Apply form</span>
        </Link>
      </li>
      <li className={getLinkClass("/history")}>
        <Link to="/history">
          <span>View Travel History</span>
        </Link>
      </li>
      <li className={getLinkClass("/compliance")}>
        <Link to="/compliance">
          <span>View Compliance</span>
        </Link>
      </li>
      <li className="navbar-item">
        <a
          href="https://i736.cbp.dhs.gov/I736"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Guam-CNMI Travel Info</span>
        </a>
      </li>
      <li className={getLinkClass("/faq")}>
        <Link to="/faq">
          <span>FAQ</span>
        </Link>
      </li>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="navbar">
      <div className="container lg:w-full md:w-[760px] logo-row">
        <ul className="row">
          <li className="logo-i94 ">
            <Link to="/home">
              <img
                className="logo-left"
                src={logoI94}
                alt=""
                srcSet=""
              />
            </Link>
          </li>
          <li>
            <Link to="/home">
              <img
                className="logo-right"
                src={logo}
                alt=""
                srcSet=""
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-row">
        <nav className="container lg:w-full md:w-[760px] flex justify-between flex-wrap static">
          <div className="md:hidden flex items-center pl-2 py-2 w-1/2">
            <span className="text-white text-base font-bold">Menu</span>
          </div>
          <ul className="hidden md:flex md:flex-wrap items-center">
            <NavLinks />
          </ul>
          <div className="md:hidden flex justify-end w-1/2 pr-6">
            <button onClick={toggleNavbar}>
              <i
                className="fa fa-bars text-white text-[20px]"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div
            className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[-0fr]"
            }`}
          >
            <div
              className={`overflow-hidden text-[1.25em] bg-[#1e3a5d] duration-300 ${
                isOpen ? "border-solid border-t-[1px] pt-2" : ""
              }`}
            >
              <NavLinks />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
