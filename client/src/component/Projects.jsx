import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import navIcon3 from "../assets/img/pic.jpeg";
import "animate.css";

const projectData = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.",
    imageUrl: navIcon3,
  },
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.",
    imageUrl: navIcon3,
  },
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.",
    imageUrl: navIcon3,
  },
  // ... rest of the projectData
];

export const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="project" sx={{ backgroundColor: "black" }} id="projects">
      <TrackVisibility>
        {({ isVisible }) => (
          <Typography
            className={isVisible ? "animate__animated animate__zoomIn" : ""}
            component="h2"
            gutterBottom
          >
            Projects
          </Typography>
        )}
      </TrackVisibility>
      <Box sx={{ p: "30px" }}>
        {projectData.map((project, index) => (
          <Box
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, transform: "translateY(100px)" }}
                  animate={
                    isVisible
                      ? { opacity: 1, transform: "translateY(0)" }
                      : { opacity: 0, transform: "translateY(100px)" }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`animate__animated ${
                    index % 2 === 0
                      ? "animate__slideInLeft"
                      : "animate__slideInRight"
                  }`}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      p: "10px",
                      display: "flex",
                      flexDirection: isMobile
                        ? "column"
                        : index % 2 === 0
                        ? "row"
                        : "row-reverse",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    style={{
                      width: isMobile ? "100%" : "80%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: isMobile ? "200px" : 200,
                        objectFit: "cover",
                        marginBottom: isMobile ? "10px" : 0,
                      }}
                      image={project.imageUrl}
                      alt={project.title}
                    />
                    <CardContent className="projectDescription">
                      <Typography variant="body2">{project.title}</Typography>
                      <Typography variant="body2" component="">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Box>
                </motion.div>
              )}
            </TrackVisibility>
          </Box>
        ))}
      </Box>
    </Box>
  );
};