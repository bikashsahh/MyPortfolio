import React, { useRef } from "react";
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
// import TimelineOppositeContent 
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

import { useInView } from "react-intersection-observer";

const MyTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <Box sx={{ padding: 0 }}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="#6D6B6D">
              2022 – 2025
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ backgroundColor: "rgb(237, 31, 203)", color: "#fff", margin: "2px" }}
            >
              <SchoolIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector
              style={{ backgroundColor: "rgb(237, 31, 203)" }}
            />
          </TimelineSeparator>
          <TimelineContent ref={ref1}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" style={{ color: "#fff" }}>
                Master of Computer Application
              </Typography>
              <Typography variant="body1" style={{ color: "#6D6B6D" }}>
                Motilal Nehru National Institute of Technology Allahabad
                Prayagraj, Uttar Pradesh, India
              </Typography>
            </motion.div>
            <Divider sx={{ width: '100px', mx: 'auto', my: 2, color: 'white' }} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          <Typography variant="body2" color="#6D6B6D">
              2018 – 2021
            </Typography>
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ backgroundColor: "rgb(237, 31, 203)", color: "#fff", margin: "2px" }}
            >
              <SchoolIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector
              style={{ backgroundColor: "rgb(237, 31, 203)" }}
            />
          </TimelineSeparator>
          <TimelineContent ref={ref2}>
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6">Bachelor's of Computer Science</Typography>
              <Typography variant="body1" color="#6D6B6D">
                Calcutta University Kolkata, West Bengal, India
              </Typography>
              <Divider sx={{ width: '100px', mx: 'auto', my: 3, color: 'white' }} />
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="#6D6B6D">
            <Typography variant="body2">2016 – 2018</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ backgroundColor: "rgb(237, 31, 203)", color: "#fff", margin: "2px" }}
            >
              <SchoolIcon fontSize="large" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent ref={ref3}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6">Secondary School</Typography>
              <Typography variant="body1" color="#6D6B6D">
                Pranab Vidyapith Higher Secondary School Dimapur, Nagaland, India
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default MyTimeline;
