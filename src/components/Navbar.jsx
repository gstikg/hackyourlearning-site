// Importing Components from node_modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as ReactNavbar } from 'react-bootstrap';

// Importing styles
import '../stylesheets/Navbar.scss';

// Importing Images
import logo from '../assets/Light_Logo.png';

/*
  Passing in the className allows the styling of the Navbar to be customized based on what page we
  are on
*/
const Navbar = ({ className }) => {
  return (
    <>
      <ReactNavbar
        className={className}
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
            <Nav.Link
              href="#"
              target="_blank"
            >
              About
            </Nav.Link>

            <Nav.Link
              href="#"
              target="_blank"
            >
              Schedule
            </Nav.Link>

            <Nav.Link
              href="#"
              target="_blank"
            >
              Sponsors
            </Nav.Link>

            <Nav.Link
              href="#"
              target="_blank"
            >
              FAQ
            </Nav.Link>

          </Nav>

          {/* Login "button" */}
          <NavLink
            to="/other-events"
            className="btn-navbar"
          >
            Other Events
          </NavLink>

        </ReactNavbar.Collapse>
      </ReactNavbar>
    </>
  );
};

export default Navbar;
