import React from "react";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Qualification = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding: 20 ,backgroundColor:'black'}} id="education" >
      <TrackVisibility>
        {({ isVisible }) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Typography gutterBottom align="center" sx={{ fontSize: isMobile ? '32px' : '45px' }}>
              Qualification
              <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: '#8a8787', p: '-5px' }}>
                My Personal Journey
              </Typography>
            </Typography>
          </motion.div>
        )}
      </TrackVisibility>
      <Divider sx={{ mb: 4 }} />
      <Timeline position="alternate">
        <TrackVisibility>
          {({ isVisible }) => (
            <TimelineItem>
              <TimelineOppositeContent color="primary">
                <Typography variant="body2" color="#6D6B6D">
                  2022 – 2025
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6" 
                  
                  >
                    Master of Computer Application
                  </Typography>
                  <Typography variant="body1" color="#6D6B6D">
                    Motilal Nehru National Institute of Technology Allahabad
                    Prayagraj, Uttar Pradesh, India
                  </Typography>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <TimelineItem sx={{ mt: "30px" }}>
              <TimelineOppositeContent>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6">
                    Bachelor's of Computer Science
                  </Typography>
                  <Typography variant="body1" color="#6D6B6D">
                    Calcutta University Kolkata, West Bengal, India
                  </Typography>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color="primary">
                <Typography variant="body2" color="#6D6B6D">
                  2018 – 2021
                </Typography>
                <TimelineConnector />
              </TimelineContent>
            </TimelineItem>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <TimelineItem sx={{ mt: "30px" }}>
              <TimelineOppositeContent color="#6D6B6D">
                <Typography variant="body2">2016 – 2018</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="success" />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6">Secondary School</Typography>
                  <Typography variant="body1" color="#6D6B6D">
                    Pranab Vidyapith Higher Secondary School Dimapur, Nagaland,India
                  </Typography>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          )}
        </TrackVisibility>
      </Timeline>
    </Box>
  );
};

export default Qualification;
