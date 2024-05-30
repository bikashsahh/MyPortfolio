import React, { useState } from "react";
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
import Net from "./Net";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      subject: e.target.elements.subject.value,
      message: e.target.elements.message.value,
    };

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setIsLoading(false);
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      toast.error("Failed to send email");
    }
  };

  return (
      <Box sx={{ padding: 20 }} id="contact">
        <ToastContainer />
        <Grid container spacing={2} alignItems="center" sx={{ mt: "20px" }}>
          <Grid item xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                          isVisible
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 50 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <Typography
                          gutterBottom
                          sx={{ fontSize: { md: "45px" } }}
                        >
                          Let's chat.
                          <br />
                          Tell me about your project.
                        </Typography>
                      </motion.div>
                    )}
                  </TrackVisibility>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(102,51,153,0.75)",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      sx={{ fontSize: { md: "25px" } }}
                      align={"center"}
                    >
                      Send us a message 🚀.
                    </Typography>
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
                </motion.div>
              )}
            </TrackVisibility>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Contact;
