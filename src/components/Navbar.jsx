// Importing Components from node_modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as ReactNavbar } from 'react-bootstrap';

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

          <Nav.Link className="first-link" href="/#about">
            About
          </Nav.Link>

          <Nav.Link className="second-link" href="/#schedule">
            Schedule
          </Nav.Link>

          {/* Add id="#sponsors" in parent div of Sponsors component  */}
          <Nav.Link className="third-link" href="/#sponsors">
            Sponsors
          </Nav.Link>

          {/* Add id="#faq" in parent div of FAQ component  */}
          {/* <Nav.Link className="last-link" href="/#faq">
            FAQ
          </Nav.Link> */}

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
