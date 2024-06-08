import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import mypic from "../assets/img/newlogo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ scrolled, isNavCollapsed }) =>
    scrolled || !isNavCollapsed ? "black" : "transparent"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: background-color 0.3s ease;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Logo = styled(Box)`
  margin-right: 20px;
  width: auto;
  height: 50px;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    margin-bottom: 2px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: black;
    display: ${({ isNavCollapsed }) => (isNavCollapsed ? "none" : "flex")};
  }
`;

const NavLink = styled(HashLink)`
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    margin: 10px 0;
    margin-left: 45%;
  }
`;

const SocialAndConnect = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    margin-left: 12%;
    margin-top: 10px;
    display: ${({ isNavCollapsed }) => (isNavCollapsed ? "none" : "flex")};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  margin-left: 10px;
`;

const ConnectButton = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  background-color: #da4ea2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  function openEmail() {
    const emailAddress = "bikashsah0312@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi there,\n\nLet's connect!\n\nRegards,\n[Your Name]";
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  }

  return (
    <Router>
      <Nav scrolled={scrolled} isNavCollapsed={isNavCollapsed}>
        <Logo
          component="img"
          alt="mypic"
          src={mypic}
        />
        <ToggleButton onClick={toggleNav}>
          {isNavCollapsed ? "☰" : "×"}
        </ToggleButton>
        <NavLinks isNavCollapsed={isNavCollapsed}>
          <NavLink
            smooth
            to="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </NavLink>
          <NavLink
            smooth
            to="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => onUpdateActiveLink("about")}
          >
            About
          </NavLink>
          <NavLink
            smooth
            to="#education"
            className={activeLink === "education" ? "active" : ""}
            onClick={() => onUpdateActiveLink("education")}
          >
            Qualification
          </NavLink>
          <NavLink
            smooth
            to="#projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => onUpdateActiveLink("projects")}
          >
            Projects
          </NavLink>
          <NavLink
            smooth
            to="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => onUpdateActiveLink("contact")}
          >
            Contact
          </NavLink>
        </NavLinks>
        <SocialAndConnect isNavCollapsed={isNavCollapsed}>
          <SocialIcons>
            <SocialIcon href="https://www.linkedin.com/in/thebikashsah/">
              <LinkedInIcon sx={{color:'white'}}/>
            </SocialIcon>
            <SocialIcon href="https://github.com/bikashsahh">
              <GitHubIcon sx={{color:'white'}}/>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/bikashsahh/">
              <InstagramIcon sx={{color:'white'}}/>
            </SocialIcon>
          </SocialIcons>
          <ConnectButton onClick={() => openEmail()}>
            Let's Connect 
          </ConnectButton>
        </SocialAndConnect>
      </Nav>
    </Router>
  );
};

export default NavBar;
