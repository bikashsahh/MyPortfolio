import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  margin-top: 100px;
`;

const FooterText = styled.p`
  color: #ffffff;
  font-size: 15px;
  margin: 0;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const HeartIcon = styled.span`
  color: #e25555;
`;

const Footer = ({ author }) => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>
        <span>&copy; {currentYear} </span>
        Made with <HeartIcon>❤️</HeartIcon> by {author}.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
