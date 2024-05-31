import React from "react";
import { Box, Grid, LinearProgress, Typography, useTheme, useMediaQuery } from "@mui/material";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";

function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const skills = [
    { name: "Programming", value: 90, color: "primary" },
    { name: "HTML & CSS", value: 95, color: "secondary" },
    { name: "React", value: 85, color: "success" },
    { name: "Blockchain", value: 75, color: "warning" },
    { name: "Web3", value: 70, color: "error" },
    { name: "IPFS", value: 65, color: "info" },
  ];

  return (
    <Box sx={{ mt: 5, ml: isMobile ? 0 : 20, mr: isMobile ? 0 : 5 }}>
      <Grid container spacing={isMobile ? 1 : 3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={
                    isVisible
                      ? { opacity: 1, width: `${skill.value}%` }
                      : { opacity: 0, width: 0 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant={isMobile ? "body2" : "subtitle1"}
                    sx={{ color: "white" }}
                  >
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={isVisible ? skill.value : 0}
                    color={skill.color}
                    sx={{ height: isMobile ? 2 : 3, borderRadius: 5 }}
                  />
                </motion.div>
              )}
            </TrackVisibility>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
