// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import NET from "vanta/dist/vanta.net.min";

// const Box = styled.div`
//   // z-index: -1;
//   width: 100%;
//   height: 100%; // Ensuring it covers the full viewport height
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #121114; // Matching the background color
//   @media only screen and (max-width: 768px) {
//     height: 100vh;
//     width: 100%;
//   }
// `;

// const Net = ({ children }) => {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const myRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         NET({
//           el: myRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0x460746,
//           backgroundColor: 0x121114,
//           points: 11.0,
//           maxDistance: 31.0,
//           spacing: 16.0,
//   //         `@media only screen and (max-width: 768px) {
//   //           minHeight: 200.00,
//   // minWidth: 200.00,
//   // scale: 1.00,
//   // scaleMobile: 1.00,
//   // points: 5.00,
//   // maxDistance: 27.00,
//   // spacing: 17.00
//   //         }`
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return <Box ref={myRef}>{children}</Box>;
// };

// export default Net;
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NET from "vanta/dist/vanta.net.min";

const Box = styled.div`
  width: 100%;
  height: 100vh; // Ensuring it covers the full viewport height
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121114; // Matching the background color
  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const Net = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) vantaEffect.destroy();
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x460746,
          backgroundColor: 0x121114,
          points: window.innerWidth < 768 ? 11.0 : 11.0,
          maxDistance: window.innerWidth < 768 ? 27.0 : 31.0,
          spacing: window.innerWidth < 768 ? 19.0 : 16.0,
        })
      );
    };

    handleResize(); // Call the resize function on mount
    window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  return <Box ref={myRef}>{children}</Box>;
};

export default Net;
