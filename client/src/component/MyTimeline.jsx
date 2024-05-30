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
import SchoolIcon from '@mui/icons-material/School';
import HorizontalRule from "@mui/icons-material/HorizontalRule";
import { SymmetryHorizontal } from "react-bootstrap-icons";

const MyTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding: 0 }}>
      {/* <TrackVisibility>
        {({ isVisible }) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Typography gutterBottom align="center" sx={{ fontSize: isMobile ? '32px' : '45px' }}>
              MyTimeline
              <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: '#8a8787' }}>
                My Personal Journey
              </Typography>
            </Typography>
          </motion.div>
        )}
      </TrackVisibility> */}
      {/* <Divider sx={{ mb: 4 }} /> */}
      <Timeline position="alternate">
        <TrackVisibility>
          {({ isVisible }) => (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="#6D6B6D">
                  2022 – 2025
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "rgb(237, 31, 203)", color: "#fff" ,margin:'2px'}}>
                  <SchoolIcon fontSize="large"/>
                </TimelineDot>
                <TimelineConnector style={{ backgroundColor: "rgb(237, 31, 203)" }} />
              </TimelineSeparator>
              <TimelineContent >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6" style={{ color: "#fff" }}>
                    Master of Computer Application
                  </Typography>
                  <Typography variant="body1" style={{ color: "#fff" }}>
                    Motilal Nehru National Institute of Technology Allahabad
                    Prayagraj, Uttar Pradesh, India
                  </Typography>
                </motion.div>
                {/* <HorizontalRule sx={{width:'100px'}}></HorizontalRule> */}
                <Divider sx={{ width: '100px', mx: 'auto', my: 2 ,color:'white'}}/>
                 {/* <Divider sx={{ width: '100%', mx: 'auto', my: 3, borderColor: 'white' }} /> */}
                {/* <SymmetryHorizontal/> */}
              </TimelineContent>
            </TimelineItem>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <TimelineItem sx={{ mt: "0px" }}>
              <TimelineOppositeContent>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6">
                    Bachelor's of Computer Science
                  </Typography>
                  <Typography variant="body1" color="#6D6B6D">
                    Calcutta University Kolkata, West Bengal, India
                  </Typography>
                  <Divider sx={{ width: '100px', mx: 'auto', my: 3 ,color:'white'}}/>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "rgb(237, 31, 203)", color: "#fff" ,margin:'2px'}}>
                  <SchoolIcon fontSize="large"/>
                </TimelineDot>
                <TimelineConnector style={{ backgroundColor: "rgb(237, 31, 203)" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" color="#6D6B6D">
                  2018 – 2021
                </Typography>

              </TimelineContent>
            </TimelineItem>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <TimelineItem sx={{ mt: "0px" }}>
              <TimelineOppositeContent color="#6D6B6D">
                <Typography variant="body2">2016 – 2018</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "rgb(237, 31, 203)", color: "#fff" ,margin:'2px'}}>
                  <SchoolIcon fontSize="large"/>
                </TimelineDot>
                {/* <TimelineConnector style={{ backgroundColor: "rgb(237, 31, 203)" }} /> */}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6">Secondary School</Typography>
                  <Typography variant="body1" color="#6D6B6D">
                    Pranab Vidyapith Higher Secondary School Dimapur, Nagaland, India
                  </Typography>
                </motion.div>
              {/* <Divider sx={{ width: '100px', mx: 'auto', my: 3 ,color:'white'}}/> */}

              </TimelineContent>
            </TimelineItem>
          )}
        </TrackVisibility>
      </Timeline>
    </Box>
  );
};

export default MyTimeline;
