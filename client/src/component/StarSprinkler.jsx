import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const sparkleAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
`;

const Star = styled.div`
  position: fixed;
  width: 2px;
  height: 2px;
  background-color: #000;
  border-radius: 50%;
  animation: ${sparkleAnimation} 1s ease-out forwards;
`;

const StarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1; /* Ensure stars are behind other content */
`;

const StarSprinkle = ({children}) => {
  const [stars, setStars] = useState([]);

  const createStars = (count) => {
    const newStars = Array.from({ length: count }).map((_, index) => {
      const side = Math.floor(Math.random() * 4); // Randomize which side to emit stars from
      let left, top;
      switch (side) {
        case 0: // Top side
          left = `${Math.random() * window.innerWidth}px`;
          top = `${window.scrollY}px`; // Adjust top position based on current scroll
          break;
        case 1: // Right side
          left = `${window.innerWidth}px`;
          top = `${Math.random() * window.innerHeight + window.scrollY}px`; // Adjust top position based on current scroll
          break;
        case 2: // Bottom side
          left = `${Math.random() * window.innerWidth}px`;
          top = `${window.innerHeight + window.scrollY}px`; // Adjust top position based on current scroll
          break;
        case 3: // Left side
          left = `0px`;
          top = `${Math.random() * window.innerHeight + window.scrollY}px`; // Adjust top position based on current scroll
          break;
        default:
          break;
      }
      return { id: index, left, top };
    });
    setStars([...stars, ...newStars]);
  };

  return (
    <>
      <StarContainer>
        {stars.map((star) => (
          <Star key={star.id} style={{ left: star.left, top: star.top }} />
        ))}
      </StarContainer>
      <button
        onClick={() => createStars(50)}
        style={{ position: "absolute", zIndex: 9999 }}
      >
        {children}
      </button>
    </>
  );
};

export default StarSprinkle;
