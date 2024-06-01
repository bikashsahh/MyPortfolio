import { useState, useEffect } from "react";
import styled from "styled-components";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 100px 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  margin-left: 10px;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgray;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  animation: animate 1s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Hi there!",
    "I'm Bikash Sah.",
    "I'm a Programmer.",
    "I'm a Web Developer.",
    "Learning Blockchains.",
    "Highly interested in web3.",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
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
    <Section id="home" >
      <Container>
        <Left>
          <Title>Dream. Build. Achieve.</Title>
          <h3>
            <span className="txt-rotate" dataPeriod="1000">
              <span className="wrap">{text}</span>
            </span>
          </h3>
          <WhatIDo>
            <HorizontalRuleIcon fontSize="large" />
            <Subtitle>What I do</Subtitle>
          </WhatIDo>
          <Description>
            "As a software engineer and <b>web developer</b>, I innovate while
            pursuing my studies as a student, learning{" "}
            <b>blockchain development</b>
            for cutting-edge projects."
          </Description>

          <Typography
            sx={{ color: "#DA4EA2", fontSize: "20px", cursor: "pointer" }}
            onClick={() => openEmail()}
          >
            Let's Connect <ArrowRightCircle size={22} />
          </Typography>
        </Left>
        <Right>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <Img src={headerImg} alt="Header Img" />
              </div>
            )}
          </TrackVisibility>
        </Right>
      </Container>
    </Section>
  );
};
