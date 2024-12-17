import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Funny App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="me-2">
                            Register User
                        </NavLink>
                        <NavLink to="/users" className="me-2">
                            Users List
                        </NavLink>
                        <NavLink to="/cats" className="me-2">
                            Random Cats
                        </NavLink>
                        <NavLink to="/jokes" className="me-2">
                            Jokes
                        </NavLink>
                        <NavLink to="/characters" className="me-2">
                            Rick and Morty Characters
                        </NavLink>
                        <NavLink to="/about" className="me-2">
                            About
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;