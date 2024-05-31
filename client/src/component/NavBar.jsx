import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Box } from "@mui/material"; // Import Box from @mui/material
import mypic from "../assets/img/personal-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [navbarColor, setNavbarColor] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
    setNavbarColor(isNavCollapsed ? "bg-black" : "");
  };
  function openEmail() {
    // Email address
    const emailAddress = "bikashsah0312@gmail.com";

    // Subject and body of the email
    const subject = "Let's Connect!";
    const body = "Hi there,\n\nLet's connect!\n\nRegards,\n[Your Name]";

    // Construct the mailto URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the mailto URL
    window.open(mailtoUrl);
  }

  return (
    <Router>
      <Navbar
        expand="md"
        className={`${scrolled ? "scrolled" : ""} ${navbarColor}`}
      >
        <Container>
          <Navbar.Brand href="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Box
                component="img"
                alt="mypic"
                src={mypic}
                sx={{
                  marginRight: 2,
                  width: 100,
                  height: 40,
                  backgroundColor: "transparent",
                }}
              />
            </Box>
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#education"
                className={
                  activeLink === "education"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("education")}
              >
                Qualification
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>

                
              </div>
              <HashLink to="#connect">
                <button className="vvc" onClick={() => openEmail()}>
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
