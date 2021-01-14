// Importing Components from node_modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as ReactNavbar } from 'react-bootstrap';
import { Link } from 'react-scroll'

// Importing styles
import '../stylesheets/navbar/Navbar.scss';
import '../stylesheets/navbar/NavbarMobile.scss';

// Importing Images
import logo from '../assets/Light_Logo.png';

/*
  Passing in the className allows the styling of the Navbar to be customized based on what page we
  are on
*/
const Navbar = () => (
  <>
    <ReactNavbar
      expand="lg"
      variant="dark"
    >

      {/* Logo on nav */}
      <ReactNavbar.Brand>
        <NavLink
          to="/"
        >
          <img
            src={logo}
            alt="Hack Your Learning logo"
            className="d-inline-block align-top"
          />
        </NavLink>
      </ReactNavbar.Brand>

      {/* Toggle for {sm | md | lg } devices */}
      <ReactNavbar.Toggle
        aria-controls="basic-navbar-nav"
      />

      <ReactNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* the "to" prop refers to the classname */}
          {/* Make sure to put classname of the parent div */}
          <Link className="nav-link" to="about-info--container" spy={true} smooth={true}>
            About
          </Link>

          <Link className="nav-link" to="landing-schedule--container" spy={true} smooth={true}>
            Schedule
          </Link>

          {/* Add "to" once component is made */}
          <Link className="nav-link" to="" spy={true} smooth={true}>
            Schedule
          </Link>
 
          {/* Add "to" once component is made */}
          <Link className="nav-link" to="" spy={true} smooth={true}>
            FAQ
          </Link>

          {/* Login "button" */}
          <NavLink
            to="/other-events"
            className="btn-navbar"
          >
            Other Events
          </NavLink>
        </Nav>
      </ReactNavbar.Collapse>
    </ReactNavbar>
  </>
);

export default Navbar;
