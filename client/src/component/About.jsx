import React from 'react';
import { Box, Typography, Grid, Button, useMediaQuery, useTheme, LinearProgress } from '@mui/material';
import profilePic from '../assets/img/pic.jpeg';
import cvFile from '../assets/file/cv.pdf';
import TrackVisibility from 'react-on-screen';
import { motion } from 'framer-motion';


const skills = [
  { name: 'Programming', value: 90, color: 'primary' },
  { name: 'HTML & CSS', value: 95, color: 'secondary' },
  { name: 'React', value: 85, color: 'success' },
  { name: 'Blockchain', value: 75, color: 'warning' },
  { name: 'Web3', value: 70, color: 'error' },
  { name: 'IPFS', value: 65, color: 'info' },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDownloadCV = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* <SolarSystem> */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          padding: isMobile ? 2 : 15,
        }}
        id="about"
      >
        <TrackVisibility>
          {({ isVisible }) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Typography gutterBottom align="center" sx={{ fontSize: isMobile ? '32px' : '45px' }}>
                About Me
                <Typography variant="subtitle1" gutterBottom align="center" sx={{ color: '#8a8787', p: '-5px' }}>
                  My introduction
                </Typography>
              </Typography>
            </motion.div>
          )}
        </TrackVisibility>

        <Grid container spacing={2} alignItems="center" sx={{ mt: '5px' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  src={profilePic}
                  alt="Profile"
                  style={{
                    maxWidth: isMobile ? '80%' : '50%',
                    borderRadius: '10%',
                    marginLeft: isMobile ? 0 : '30%',
                  }}
                />
              )}
            </TrackVisibility>
          </Grid>
          <Grid item xs={12} md={6}>
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
                    mb={2}
                    flexDirection={isMobile ? 'column' : 'row'}
                    justifyContent={isMobile ? 'center' : 'flex-start'}
                  >
                    <Box mr={isMobile ? 0 : 1} mb={isMobile ? 2 : 0} className="abouttag">
                      <Typography variant={isMobile ? 'body1' : 'h6'} color="text.secondary">
                        Experience
                      </Typography>
                      <Typography variant="body1">8+ Years</Typography>
                    </Box>
                    <Box mr={isMobile ? 0 : 1} mb={isMobile ? 2 : 0} className="abouttag">
                      <Typography variant={isMobile ? 'body1' : 'h6'} color="text.secondary">
                        Completed
                      </Typography>
                      <Typography variant="body1">48+ Projects</Typography>
                    </Box>
                    <Box mr={isMobile ? 0 : 1} mb={isMobile ? 2 : 0} className="abouttag">
                      <Typography variant={isMobile ? 'body1' : 'h6'} color="text.secondary">
                        Support
                      </Typography>
                      <Typography variant="body1">Online 24/7</Typography>
                    </Box>
                  </Box>
                  <Typography variant={isMobile ? 'body2' : 'body1'} gutterBottom>
                    Frontend developer. I create web pages with UI / UX user interface, I have years of experience and many
                    clients are happy with the projects carried out.
                  </Typography>
                  <Button
                    variant="contained"
                    className="abouttag"
                    size={isMobile ? 'small' : 'medium'}
                    sx={{ mt: isMobile ? '20px' : '60px' }}
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </Button>
                </motion.div>
              )}
            </TrackVisibility>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mt: 5, ml: isMobile ? 0 : 20, mr: isMobile ? 0 : 5 }}>
          <Grid container spacing={isMobile ? 1 : 3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={isVisible ? { opacity: 1, width: `${skill.value}%` } : { opacity: 0, width: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography variant={isMobile ? 'body2' : 'subtitle1'} sx={{ color: 'white', mb: 1 }}>
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
      </Box>
      {/* </SolarSystem> */}
    </Box>
  );
};

export default About;
