import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const activeLink = "active-link mb-lg-0 mb-md-2 mb-2 ms-lg-3 ms-md-0 ms-0";
  const normalLink = "link mb-lg-0 mb-md-2 mb-2 ms-lg-3 ms-md-0 ms-0";

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand className="cursor-pointer" onClick={() => navigate("/")}>
            ARTICLE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                All Post
              </NavLink>
              <NavLink to="/addNew" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Add New
              </NavLink>
              <NavLink to="/preview" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Preview
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
