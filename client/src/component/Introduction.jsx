import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cvFile from "../assets/file/Resume.pdf";

const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDownloadCV = () => {
    window.open(cvFile, "_blank");
  };

  const { ref, inView } = useInView({
    threshold: 0.1, // Percentage of the element visibility required to trigger the animation
  });

  const renderContent = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : "flex-start"}
        justifyContent="flex-start"
        sx={{ mt: "10px", mb: "10px" }}
      >
        <Box sx={{ mr: 2, mb: isMobile ? 1 : 0, textAlign: isMobile ? "center" : "left" }} className="abouttag">
          <Typography variant="h6" color="text.secondary">
            Leetcode&GFG
          </Typography>
          <Typography variant="body1">1800+ Rating</Typography>
        </Box>
        <Box sx={{ mr: 2, mb: isMobile ? 1 : 0, textAlign: isMobile ? "center" : "left" }} className="abouttag">
          <Typography variant="h6" color="text.secondary">
            Solved
          </Typography>
          <Typography variant="body1">1000+ Problem</Typography>
        </Box>
        <Box sx={{ mr: isMobile ? 2 : 0, mb: isMobile ? 1 : 0, textAlign: isMobile ? "center" : "left" }} className="abouttag">
          <Typography variant="h6" color="text.secondary">
            Completed
          </Typography>
          <Typography variant="body1">3 projects</Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          textAlign: isMobile ? "center" : "left",
          px: isMobile ? 2 : 0, // Padding for mobile and larger screens
          maxWidth: isMobile ? '100%' : '80%', // Constrain width on larger screens
          margin: '2 auto', // Center align content within the box
        }}
      >
        Web Developer with a passion for solving problems and creating new
        things. I am a self-taught developer with a strong foundation in
        data structures and algorithms. I have experience in building web
        applications using React, Node.js, and Express.js. I am also
        familiar with blockchain technologies like Ethereum, IPFS, and
        Web3.
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}
      >
        <Button
          variant="contained"
          className="abouttag"
          size="medium"
          sx={{ mt: "10px" }}
          onClick={handleDownloadCV}
        >
          Download CV
        </Button>
      </Box>
    </motion.div>
  );

  return (
    <Grid ref={ref}>
      {renderContent()}
    </Grid>
  );
};

export default Introduction;
