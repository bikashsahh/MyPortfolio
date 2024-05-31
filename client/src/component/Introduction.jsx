import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import cvFile from "../assets/file/cv.pdf";

const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDownloadCV = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <Grid>
      <TrackVisibility>
        {({ isVisible }) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-start"
              alignContent={isMobile ? "center" : "flex-start"}
              sx={{ mt: "10px" }}
            >
              <Box sx={{ mr: 2 }} className="abouttag">
                <Typography variant="h6" color="text.secondary">
                  Leetcode
                </Typography>
                <Typography variant="body1">1780+ Rating</Typography>
              </Box>
              <Box sx={{ mr: 2 }} className="abouttag">
                <Typography variant="h6" color="text.secondary">
                  Solved
                </Typography>
                <Typography variant="body1">1200+ problems</Typography>
              </Box>
              <Box className="abouttag">
                <Typography variant="h6" color="text.secondary">
                  Completed
                </Typography>
                <Typography variant="body1">3 projects</Typography>
              </Box>
            </Box>
            <Typography variant="body1" gutterBottom>
              Web Developer with a passion for solving problems and creating new
              things. I am a self-taught developer with a strong foundation in
              data structures and algorithms. I have experience in building web
              applications using React, Node.js, and Express.js. I am also
              familiar with blockchain technologies like Ethereum, IPFS, and
              Web3.
            </Typography>
            <Button
              variant="contained"
              className="abouttag"
              size="medium"
              sx={{ mt: "10px" }}
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </motion.div>
        )}
      </TrackVisibility>
    </Grid>
  );
};

export default Introduction;
