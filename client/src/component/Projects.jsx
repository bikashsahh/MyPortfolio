// import React from "react";
// import styled from "styled-components";
// import TrackVisibility from "react-on-screen";
// import { Box, Typography, useMediaQuery, useTheme, CardMedia, CardContent } from "@mui/material";
// import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
// import projImg1 from "../assets/img/MnnitIgnou.png";
// import projImg2 from "../assets/img/Difi.png";
// import projImg3 from "../assets/img/college.png";

// const projectData = [
//   {
//     title: "Mnnit Ignou Study Center",
//     description: "A web application to facilitate seamless communication between students and center administration.",
//     imageUrl: projImg1,
//     url: "https://github.com/bikashsahh/Mini_Project2k24",
//   },
//   {
//     title: "Di-File System",
//     description: "A decentralized file system project with transparent accessibility, offering benefits in terms of security, resilience, and user empowerment.",
//     imageUrl: projImg2,
//     url: "https://github.com/bikashsahh/Difi-File-System",
//   },
//   {
//     title: "College Niwas",
//     description: "A web application for students where users can book rooms, order food, and access other facilities.",
//     imageUrl: projImg3,
//     url: "https://github.com/bikashsahh/DevjamPGFinal",
//   },
// ];

// const Section = styled.div`
//   padding: 60px 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   scroll-snap-align: center;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   max-width: 1300px;
// `;

// const Right = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   margin: 0 0 20px;
//   @media only screen and (max-width: 768px) {
//     font-size: 32px;
//   }
// `;

// const Qualification = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${(props) => (props.isMobile ? "0" : "10px")};
//   margin-bottom: 40px;
// `;

// const Subtitle = styled.h2`
//   color: #da4ea2;
//   font-size: 24px;
// `;

// const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: ${(props) => (props.isMobile ? "column" : props.isEven ? "row" : "row-reverse")};
//   align-items: center;
//   margin: 20px 0;
//   width: 100%;
//   max-width: 1200px;
//   padding: 20px;
//   box-shadow: 0px 4px 10px rgba(120, 10, 95, 0.2);
//   border-radius: 10px;
//   @media only screen and (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Projects = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const renderProjectCard = (project, index, isVisible = true) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, transform: "translateY(-500px)" }}
//       animate={
//         isVisible
//           ? { opacity: 1, transform: "translateY(-50px)" }
//           : { opacity: 0, transform: "translateY(100px)" }
//       }
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       style={{ display: "flex", justifyContent: "center", width: "100%" }}
//     >
//       <ProjectCard isMobile={isMobile} isEven={index % 2 === 0}>
//         <CardMedia
//           component="img"
//           sx={{
//             width: isMobile ? "100%" : "400px",
//             objectFit: "cover",
//             marginBottom: isMobile ? "10px" : 0,
//             borderRadius: "10px",
//           }}
//           image={project.imageUrl}
//           alt={project.title}
//         />
//         <CardContent
//           sx={{
//             backgroundColor: "rgba(32, 8, 21, 0.8)",
//             color: "white",
//             borderRadius: "10px",
//             padding: "40px",
//             marginLeft: isMobile ? "0" : "20px",
//             marginRight: isMobile ? "0" : "20px",
//             textAlign: isMobile ? "center" : "left",
//           }}
//         >
//           <Typography variant="h5" gutterBottom>
//             {project.title}
//           </Typography>
//           <Typography variant="body1">{project.description}</Typography>
//           <Box sx={{ mt: 2 }}>
//             <a
//               href={project.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ textDecoration: "none", color: "#da4ea2" }}
//             >
//               <GitHubIcon /> View on GitHub
//             </a>
//           </Box>
//         </CardContent>
//       </ProjectCard>
//     </motion.div>
//   );

//   return (
//     <Section id="projects">
//       <Container>
//         <Right>
//           {isMobile ? (
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <>
//                   {isVisible ? (
//                     <motion.div
//                       initial={{ opacity: 0, y: -70 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 1 }}
//                     >
//                       <Title>Exploring My Projects</Title>
//                       <Qualification isMobile={isMobile}>
//                         <HorizontalRuleIcon fontSize="large" />
//                         <Subtitle>Projects</Subtitle>
//                       </Qualification>
//                     </motion.div>
//                   ) : (<>
//                   <Title>Exploring My Projects</Title>
//                   <Qualification isMobile={isMobile}>
//                     <HorizontalRuleIcon fontSize="large" />
//                     <Subtitle>Projects</Subtitle>
//                   </Qualification></>)}
//                 </>
//               )}
//             </TrackVisibility>
//           ) : (
//             <>
//               <Title>Exploring My Projects</Title>
//               <Qualification isMobile={isMobile}>
//                 <HorizontalRuleIcon fontSize="large" />
//                 <Subtitle>Projects</Subtitle>
//               </Qualification>
//             </>
//           )}
//           <Box sx={{ width: "100%" }}>
//             {projectData.map((project, index) =>
//               isMobile ? (
//                 renderProjectCard(project, index)
//               ) : (
//                 <TrackVisibility key={index}>
//                   {({ isVisible }) => renderProjectCard(project, index, isVisible)}
//                 </TrackVisibility>
//               )
//             )}
//           </Box>
//         </Right>
//       </Container>
//     </Section>
//   );
// };

// export default Projects;
import React from "react";
import styled from "styled-components";
import TrackVisibility from "react-on-screen";
import { Box, Typography, useMediaQuery, useTheme, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import projImg1 from "../assets/img/MnnitIgnou.png";
import projImg2 from "../assets/img/Difi.png";
import projImg3 from "../assets/img/college.png";

const projectData = [
  {
    title: "Mnnit Ignou Study Center",
    description: "A web application to facilitate seamless communication between students and center administration.",
    imageUrl: projImg1,
    url: "https://github.com/bikashsahh/Mini_Project2k24",
  },
  {
    title: "Di-File System",
    description: "A decentralized file system project with transparent accessibility, offering benefits in terms of security, resilience, and user empowerment.",
    imageUrl: projImg2,
    url: "https://github.com/bikashsahh/Difi-File-System",
  },
  {
    title: "College Niwas",
    description: "A web application for students where users can book rooms, order food, and access other facilities.",
    imageUrl: projImg3,
    url: "https://github.com/bikashsahh/DevjamPGFinal",
  },
];

const Section = styled.div`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-snap-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1300px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0 0 20px;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Qualification = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.isMobile ? "0" : "10px")};
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 24px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : props.isEven ? "row" : "row-reverse")};
  align-items: center;
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(120, 10, 95, 0.2);
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderProjectCard = (project, index, isVisible = true) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, transform: "translateY(-500px)" }}
      animate={
        isVisible
          ? { opacity: 1, transform: "translateY(-50px)" }
          : { opacity: 0, transform: "translateY(100px)" }
      }
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <ProjectCard isMobile={isMobile} isEven={index % 2 === 0}>
        <CardMedia
          component="img"
          sx={{
            width: isMobile ? "100%" : "400px",
            objectFit: "cover",
            marginBottom: isMobile ? "10px" : 0,
            borderRadius: "10px",
          }}
          image={project.imageUrl}
          alt={project.title}
        />
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <CardContent
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2}}
              sx={{
                backgroundColor: "rgba(32, 8, 21, 0.8)",
                color: "white",
                borderRadius: "10px",
                padding: "40px",
                marginLeft: isMobile ? "0" : "20px",
                marginRight: isMobile ? "0" : "20px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
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
          )}
        </TrackVisibility>
      </ProjectCard>
    </motion.div>
  );

  return (
    <Section id="projects">
      <Container>
        <Right>
          {isMobile ? (
            <TrackVisibility>
              {({ isVisible }) => (
                <>
                  {isVisible ? (
                    <motion.div
                      initial={{ opacity: 0, y: -70 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <Title>Exploring My Projects</Title>
                      <Qualification isMobile={isMobile}>
                        <HorizontalRuleIcon fontSize="large" />
                        <Subtitle>Projects</Subtitle>
                      </Qualification>
                    </motion.div>
                  ) : (
                    <>
                      <Title>Exploring My Projects</Title>
                      <Qualification isMobile={isMobile}>
                        <HorizontalRuleIcon fontSize="large" />
                        <Subtitle>Projects</Subtitle>
                      </Qualification>
                    </>
                  )}
                </>
              )}
            </TrackVisibility>
          ) : (
            <>
              <Title>Exploring My Projects</Title>
              <Qualification isMobile={isMobile}>
                <HorizontalRuleIcon fontSize="large" />
                <Subtitle>Projects</Subtitle>
              </Qualification>
            </>
          )}
          <Box sx={{ width: "100%" }}>
            {projectData.map((project, index) =>
              isMobile ? (
                renderProjectCard(project, index)
              ) : (
                <TrackVisibility key={index} partialVisibility>
                  {({ isVisible }) => renderProjectCard(project, index, isVisible)}
                </TrackVisibility>
              )
            )}
          </Box>
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;
