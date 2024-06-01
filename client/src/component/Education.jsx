// import React, { Suspense, useRef } from "react";
// import styled from "styled-components";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
// import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
// import MyTimeline from "./MyTimeline";

// const Section = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh; /* corrected from height : 100vh, */
//   scroll-snap-align: center;
//   @media only screen and (max-width: 768px) {
//     height: 60vh;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 100vh; /* corrected from height : 100vh, */
//   scroll-snap-align: center;

// `;

// const Left = styled.div`
//   flex: 1;
//   height: 100vh;
//   /* gap: 10px; */
//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// const Right = styled.div`
//   flex: 1.5;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* gap: 20px; */
//   @media only screen and (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//   }
// `;

// const Title = styled.h1`
//   font-size: 54px;
//   margin: 0;
//   @media only screen and (max-width: 768px) {
//     font-size: 40px;
//     width: 300px;
//     display: flex;
//     flex-wrap: wrap;
//   }
// `;
// const Qualification = styled.div`
//   margin: 0;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Line = styled.img`
//   height: 5px;
// `;

// const Subtitle = styled.h2`
//   color: #da4ea2;
// `;

// const Description = styled.p`
//   /* font-size: 24px; */
//   margin: 0;
//   color: lightgray;
// `;
// const Square = ({ position, color }) => {
//   const mesh = useRef();

//   // useFrame hook to animate the square
//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.x += 0.01;
//       mesh.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={mesh} position={position}>
//       <boxGeometry args={[1, 1, 1]} />
//       <MeshDistortMaterial
//         color={color}
//         attach="material"
//         distort={0}
//         speed={10}
//       />
//     </mesh>
//   );
// };
// const Education = () => {
//   // const resumeUrl = process.env.REACT_APP_RESUME_LINK;
//   return (
//       <Section id="education">
//         <Container>
//           <Left>
//             {/* 3d model */}
//             <Canvas>
//               <Suspense fallback={null}>
//                 <OrbitControls enableZoom={false} />
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[4, 1, 1]} />
//                 {/* First Square */}
//                 <Square position={[-1.5, 0, 0]} color="#3d1c56" />
//                 {/* Second Square */}
//                 <Square position={[1.5, 0, 0]} color="#da4ea2" />
//               </Suspense>
//             </Canvas>
//             {/* <Img src="./image/moon.png"></Img> */}
//           </Left>
//           <Right>
//             <Title>Achieving Milestones, Building Futures</Title>
//             <Qualification>
//             <HorizontalRuleIcon fontSize="large" />
//               <Subtitle>Qualifications</Subtitle>
//             </Qualification>
//             <Description>
//               <MyTimeline></MyTimeline>
//             </Description>
//           </Right>
//         </Container>
//       </Section>
//   );
// };

// export default Education;
import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import MyTimeline from "./MyTimeline";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 54px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Qualification = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Description = styled.div`
  color: lightgray;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Square = ({ position, color }) => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial color={color} attach="material" distort={0} speed={10} />
    </mesh>
  );
};

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <Left>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[4, 1, 1]} />
              <Square position={[-1.5, 0, 0]} color="#3d1c56" />
              <Square position={[1.5, 0, 0]} color="#da4ea2" />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Achieving Milestones, Building Futures</Title>
          <Qualification>
            <HorizontalRuleIcon fontSize="large" />
            <Subtitle>Qualifications</Subtitle>
          </Qualification>
          <Description>
            <MyTimeline />
          </Description>
        </Right>
      </Container>
    </Section>
  );
};

export default Education;
