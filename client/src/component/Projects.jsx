// import React from "react";
// import styled from "styled-components";
// import TrackVisibility from "react-on-screen";
// import { Box, Typography, useMediaQuery, useTheme, CardMedia, CardContent } from "@mui/material";
// import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";

// const projectData = [
//   {
//     title: "Project 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     imageUrl: projImg1,
//     url: "https://github.com/abhiperfect/project1",
//   },
//   {
//     title: "Project 2",
//     description: "Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl.",
//     imageUrl: projImg2,
//     url: "https://github.com/abhiperfect/project2",
//   },
//   {
//     title: "Project 3",
//     description: "Eget aliquam nisl nisl vel nisl.",
//     imageUrl: projImg3,
//     url: "https://github.com/abhiperfect/project3",
//   },
// ];

// const Section = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
//   scroll-snap-align: center;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     flex-direction: column;
//     height: auto;
//     margin-top: 100px;
//   }
// `;

// const Container = styled.div`
//   margin: 30px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;
//   max-width: 1300px;
//   height: 100vh;
//   scroll-snap-align: center;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     flex-direction: column;
//     height: auto;
//     margin: 0;
//   }
// `;

// const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: ${props => (props.isMobile ? "column" : props.isEven ? "row" : "row-reverse")};
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
//   width: 100%;
// `;

// const Projects = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Section id="projects">
//       <Container>
//         <TrackVisibility>
//           {({ isVisible }) => (
//             <Typography
//               className={isVisible ? "animate__animated animate__zoomIn" : ""}
//               component="h2"
//               gutterBottom
//               style={{ color: "white", marginBottom: "30px" }}
//             >
//               Projects
//             </Typography>
//           )}
//         </TrackVisibility>
//         <Box sx={{ p: "10px" }}>
//           {projectData.map((project, index) => (
//             <TrackVisibility key={index}>
//               {({ isVisible }) => (
//                 <motion.div
//                   initial={{ opacity: 0, transform: "translateY(100px)" }}
//                   animate={
//                     isVisible
//                       ? { opacity: 1, transform: "translateY(0)" }
//                       : { opacity: 0, transform: "translateY(100px)" }
//                   }
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   style={{ display: "flex", justifyContent: "center", width: "100%" }}
//                 >
//                   <ProjectCard isMobile={isMobile} isEven={index % 2 === 0}>
//                     <CardMedia
//                       component="img"
//                       sx={{
//                         width: isMobile ? "100%" : "200px",
//                         objectFit: "cover",
//                         marginBottom: isMobile ? "10px" : 0,
//                         borderRadius: "10px",
//                       }}
//                       image={project.imageUrl}
//                       alt={project.title}
//                     />
//                     <CardContent
//                       sx={{
//                         backgroundColor: "rgba(32, 8, 21, 0.8)",
//                         color: "white",
//                         borderRadius: "10px",
//                         padding: "20px",
//                         marginLeft: isMobile ? "0" : "20px",
//                         textAlign: isMobile ? "center" : "left",
//                       }}
//                     >
//                       <Typography variant="h6" gutterBottom>
//                         {project.title}
//                       </Typography>
//                       <Typography variant="body2">{project.description}</Typography>
//                       <Box sx={{ mt: 2 }}>
//                         <a
//                           href={project.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ textDecoration: "none", color: "#da4ea2" }}
//                         >
//                           <GitHubIcon /> View on GitHub
//                         </a>
//                       </Box>
//                     </CardContent>
//                   </ProjectCard>
//                 </motion.div>
//               )}
//             </TrackVisibility>
//           ))}
//         </Box>
//       </Container>
//     </Section>
//   );
// };

// export default Projects;
import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TrackVisibility from "react-on-screen";
import { Box, Typography, useMediaQuery, useTheme, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const projectData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: projImg1,
    url: "https://github.com/abhiperfect/project1",
  },
  {
    title: "Project 2",
    description: "Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl.",
    imageUrl: projImg2,
    url: "https://github.com/abhiperfect/project2",
  },
  {
    title: "Project 3",
    description: "Eget aliquam nisl nisl vel nisl.",
    imageUrl: projImg3,
    url: "https://github.com/abhiperfect/project3",
  },
];

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* corrected from height : 100vh, */
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh; /* corrected from height : 100vh, */
  scroll-snap-align: center;
  width: 100%;
  max-width: 1300px;
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
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 54px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Qualification = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
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

const ProjectCard = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMobile ? "column" : props.isEven ? "row" : "row-reverse")};
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Section id="projects">
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
          <Title>Exploring My Projects</Title>
          <Qualification>
            <HorizontalRuleIcon fontSize="large" />
            <Subtitle>Projects</Subtitle>
          </Qualification>
          <Box sx={{ p: "10px", width: "100%" }}>
            {projectData.map((project, index) => (
              <TrackVisibility key={index}>
                {({ isVisible }) => (
                  <motion.div
                    initial={{ opacity: 0, transform: "translateY(100px)" }}
                    animate={
                      isVisible
                        ? { opacity: 1, transform: "translateY(0)" }
                        : { opacity: 0, transform: "translateY(100px)" }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ display: "flex", justifyContent: "center", width: "100%" }}
                  >
                    <ProjectCard isMobile={isMobile} isEven={index % 2 === 0}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: isMobile ? "100%" : "200px",
                          objectFit: "cover",
                          marginBottom: isMobile ? "10px" : 0,
                          borderRadius: "10px",
                        }}
                        image={project.imageUrl}
                        alt={project.title}
                      />
                      <CardContent
                        sx={{
                          backgroundColor: "rgba(32, 8, 21, 0.8)",
                          color: "white",
                          borderRadius: "10px",
                          padding: "20px",
                          marginLeft: isMobile ? "0" : "20px",
                          textAlign: isMobile ? "center" : "left",
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2">{project.description}</Typography>
                        <Box sx={{ mt: 2 }}>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#da4ea2" }}
                          >
                            <GitHubIcon /> View on GitHub
                          </a>
                        </Box>
                      </CardContent>
                    </ProjectCard>
                  </motion.div>
                )}
              </TrackVisibility>
            ))}
          </Box>
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;
