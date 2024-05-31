import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Typography } from "@mui/material";
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

  const Title = styled.h1`
    font-size: 74px;
    margin: 0;
    @media only screen and (max-width: 768px) {
      text-align: center;
      font-size: 60px;
    }
  `;
  const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    /* gap: 10px; */
  `;
  const Line = styled.img`
    height: 5px;
    width: 50px;
    filter: invert(100%);
  `;

  const Subtitle = styled.h2`
    color: #da4ea2;
  `;

  const Description = styled.p`
    font-size: 24px;
    color: lightgray;
    @media only screen and (max-width: 768px) {
      padding: 20px;
      text-align: center;
    }
  `;
  const Right = styled.div`
    flex: 3;
    position: relative;
    height: 100vh;
    @media only screen and (max-width: 768px) {
      flex: 1;
      width: 100%;
    }
  `;
  const Img = styled.img`
    width: 600px;
    height: 550px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 1;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 1s infinite ease alternate;
    @keyframes animate {
      to {
        transform: translateY(20px);
      }
    }
    @media only screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
  `;

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
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Title>Dream. Build. Achieve.</Title>
                  <h3>
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h3>

                  <WhatIDo>
                    <HorizontalRuleIcon fontSize="large" />
                    {/* <Line src="../assets/img/line.png"></Line> */}
                    <Subtitle>What I do</Subtitle>
                  </WhatIDo>
                  <Description>
                    "As a software engineer and <b>web developer</b>, I innovate
                    while pursuing my studies as a student, learning{" "}
                    <b>blockchain development</b> for cutting-edge projects."
                  </Description>
                  <button>
                    <Typography sx={{ color: "#DA4EA2" }} onClick={() => openEmail()}>
                      Let’s Connect
                    </Typography>
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
