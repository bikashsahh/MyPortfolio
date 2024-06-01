// import React, { useState } from "react";
// import styled from "styled-components";
// import {
//   Box,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Link,
//   CircularProgress,
// } from "@mui/material";
// import TrackVisibility from "react-on-screen";
// import { motion } from "framer-motion";
// import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import emailjs from 'emailjs-com';
// import Footer from "./Footer";

// const Section = styled.div`
//   margin: 5%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   scroll-snap-align: center;

//   @media (max-width: 768px) {
//     margin: 10%;
//   }
// `;

// const FormContainer = styled.div`
//   box-shadow: 0px 0px 10px 0px rgba(102, 51, 153, 0.75);
//   padding: 20px;
//   border-radius: 10px;
//   background-color: rgba(32, 8, 21, 0.8);
//   width: 100%;
//   max-width: 500px;
// `;

// const Contact = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       from_name: e.target.elements.fullName.value,
//       message: e.target.elements.message.value,
//       email: e.target.elements.email.value,
//       subject: e.target.elements.subject.value,
//       to_name: 'Bikash Sah',
//     };

//     setIsLoading(true);

//     emailjs.send(
//       'service_6k5vqml',
//       'template_k8eh8f4',
//       formData,
//       'j34buDdTVlc6bO_Vl'
//     ).then((result) => {
//       setIsLoading(false);
//       toast.success("Email sent successfully");
//     }, (error) => {
//       setIsLoading(false);
//       toast.error("Failed to send email");
//     });
//   };

//   return (
//     <Section id="contact">
//       <ToastContainer />
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <TrackVisibility>
//             {({ isVisible }) => (
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={
//                   isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
//                 }
//                 transition={{ duration: 0.5 }}
//               >
//                 <Typography
//                   gutterBottom
//                   sx={{ fontSize: { xs: "30px", md: "45px" } }}
//                 >
//                   Let's chat.
//                   <br />
//                   Tell me about your project.
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   Let's create something together 👋
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   <Box className="mailbox">
//                     <ForwardToInboxOutlinedIcon sx={{ mr: 2 }} />
//                     Mail me at
//                     <br />
//                     <Link
//                       href="mailto:bikashsah0312@gmail.com"
//                       color={"secondary"}
//                     >
//                       bikashsah0312@gmail.com
//                     </Link>
//                   </Box>
//                 </Typography>
//               </motion.div>
//             )}
//           </TrackVisibility>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TrackVisibility>
//             {({ isVisible }) => (
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={
//                   isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
//                 }
//                 transition={{ duration: 0.5 }}
//               >
//                 <FormContainer>
//                   <Typography
//                     gutterBottom
//                     sx={{ fontSize: { xs: "20px", md: "25px" }, color: "white" }}
//                     align={"center"}
//                   >
//                     Send us a message 🚀.
//                   </Typography>
//                   <form onSubmit={handleSubmit}>
//                     <Grid container spacing={2}>
//                       <Grid item xs={12}>
//                         <TextField
//                           variant="filled"
//                           fullWidth
//                           label="Full Name"
//                           color="secondary"
//                           InputLabelProps={{
//                             style: { color: "white" },
//                           }}
//                           InputProps={{
//                             style: { color: "white" },
//                           }}
//                           required
//                           name="fullName"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           variant="filled"
//                           fullWidth
//                           label="Email address"
//                           type="email"
//                           required
//                           color="secondary"
//                           InputLabelProps={{
//                             style: { color: "white" },
//                           }}
//                           InputProps={{
//                             style: { color: "white" },
//                           }}
//                           name="email"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           variant="filled"
//                           fullWidth
//                           label="Subject"
//                           color="secondary"
//                           InputLabelProps={{
//                             style: { color: "white" },
//                           }}
//                           InputProps={{
//                             style: { color: "white" },
//                           }}
//                           name="subject"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           variant="filled"
//                           fullWidth
//                           label="Tell us more about your project"
//                           multiline
//                           rows={4}
//                           required
//                           color="secondary"
//                           InputLabelProps={{
//                             style: { color: "white" },
//                           }}
//                           InputProps={{
//                             style: { color: "white" },
//                           }}
//                           name="message"
//                         />
//                       </Grid>
//                       <Grid
//                         item
//                         xs={12}
//                         sx={{
//                           display: "flex",
//                           justifyContent: "center",
//                           mt: 2,
//                         }}
//                       >
//                         <Button
//                           variant="contained"
//                           type="submit"
//                           color="secondary"
//                           style={{ color: "white", position: "relative" }}
//                           disabled={isLoading}
//                         >
//                           {isLoading && (
//                             <CircularProgress
//                               size={24}
//                               sx={{
//                                 color: "white",
//                                 position: "absolute",
//                                 top: "50%",
//                                 left: "50%",
//                                 marginTop: "-12px",
//                                 marginLeft: "-12px",
//                               }}
//                             />
//                           )}
//                           Send message
//                         </Button>
//                       </Grid>
//                     </Grid>
//                   </form>
//                 </FormContainer>
//               </motion.div>
//             )}
//           </TrackVisibility>
//         </Grid>
//       </Grid>
//       <Footer author={"Bikash Sah"} />
//     </Section>
//   );
// };

// export default Contact;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from 'emailjs-com';
import Footer from "./Footer";

const Section = styled.div`
  margin: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  scroll-snap-align: center;

  @media (max-width: 768px) {
    margin: 10%;
  }
`;

const FormContainer = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(102, 51, 153, 0.75);
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(32, 8, 21, 0.8);
  width: 100%;
  max-width: 500px;
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      from_name: e.target.elements.fullName.value,
      message: e.target.elements.message.value,
      email: e.target.elements.email.value,
      subject: e.target.elements.subject.value,
      to_name: 'Bikash Sah',
    };

    setIsLoading(true);

    emailjs.send(
      'service_6k5vqml',
      'template_k8eh8f4',
      formData,
      'j34buDdTVlc6bO_Vl'
    ).then((result) => {
      setIsLoading(false);
      toast.success("Email sent successfully");
      e.target.elements.fullName.value="";
      e.target.elements.message.value="";
      e.target.elements.email.value="";
      e.target.elements.subject.value="";
    }, (error) => {
      setIsLoading(false);
      toast.error("Failed to send email");
    });
  };

  return (
    <Section id="contact">
      <ToastContainer />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          {!isMobile && (
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    gutterBottom
                    sx={{ fontSize: { xs: "30px", md: "45px" } }}
                  >
                    Let's chat.
                    <br />
                    Tell me about your project.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Let's create something together 👋
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <Box className="mailbox">
                      <ForwardToInboxOutlinedIcon sx={{ mr: 2 }} />
                      Mail me at
                      <br />
                      <Link
                        href="mailto:bikashsah0312@gmail.com"
                        color={"secondary"}
                      >
                        bikashsah0312@gmail.com
                      </Link>
                    </Box>
                  </Typography>
                </motion.div>
              )}
            </TrackVisibility>
          )}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                gutterBottom
                sx={{ fontSize: { xs: "30px", md: "45px" } }}
              >
                Let's chat.
                <br />
                Tell me about your project.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Let's create something together 👋
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Box className="mailbox">
                  <ForwardToInboxOutlinedIcon sx={{ mr: 2 }} />
                  Mail me at
                  <br />
                  <Link
                    href="mailto:bikashsah0312@gmail.com"
                    color={"secondary"}
                  >
                    bikashsah0312@gmail.com
                  </Link>
                </Box>
              </Typography>
            </motion.div>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {!isMobile && (
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                   <FormContainer>
                  <Typography
                    gutterBottom
                    sx={{ fontSize: { xs: "20px", md: "25px" }, color: "white" }}
                    align={"center"}
                  >
                    Send us a message 🚀.
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Full Name"
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          required
                          name="fullName"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Email address"
                          type="email"
                          required
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          name="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Subject"
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          name="subject"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Tell us more about your project"
                          multiline
                          rows={4}
                          required
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          name="message"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          color="secondary"
                          style={{ color: "white", position: "relative" }}
                          disabled={isLoading}
                        >
                          {isLoading && (
                            <CircularProgress
                              size={24}
                              sx={{
                                color: "white",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                marginTop: "-12px",
                                marginLeft: "-12px",
                              }}
                            />
                          )}
                          Send message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </FormContainer>
                </motion.div>
              )}
            </TrackVisibility>
          )}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
               <FormContainer>
                  <Typography
                    gutterBottom
                    sx={{ fontSize: { xs: "20px", md: "25px" }, color: "white" }}
                    align={"center"}
                  >
                    Send us a message 🚀.
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Full Name"
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          required
                          name="fullName"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Email address"
                          type="email"
                          required
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          name="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Subject"
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          name="subject"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="filled"
                          fullWidth
                          label="Tell us more about your project"
                          multiline
                          rows={4}
                          required
                          color="secondary"
                          InputLabelProps={{
                            style: { color: "white" },
                          }}
                          InputProps={{
                            style: { color: "white" },
                          }}
                          name="message"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          color="secondary"
                          style={{ color: "white", position: "relative" }}
                          disabled={isLoading}
                        >
                          {isLoading && (
                            <CircularProgress
                              size={24}
                              sx={{
                                color: "white",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                marginTop: "-12px",
                                marginLeft: "-12px",
                              }}
                            />
                          )}
                          Send message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </FormContainer>
            </motion.div>
          )}
        </Grid>
      </Grid>
      <Footer author={"Bikash Sah"} />
    </Section>
  );
};

export default Contact;