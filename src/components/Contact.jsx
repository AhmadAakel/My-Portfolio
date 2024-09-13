import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
    console.log("Form submitted", formData);
  };

  return (
    <div
      id="contact"
      style={{
        padding: "100px 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: theme.palette.text.primary,
          }}
        >
          Let’s Discuss Your{" "}
          <span style={{ color: theme.palette.primary.main }}>Project</span>
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                Call me
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                +963992673673
              </Typography>
            </Box>

            <Box mt={4}>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                Email me
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                ahmad.akel3366@gmail.com
              </Typography>
            </Box>

            <Box mt={4}>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                Address
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                Al-Areen, Damascus, Syria
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: theme.palette.background.paper }}
                    InputLabelProps={{
                      style: { color: theme.palette.text.secondary },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    style={{ backgroundColor: theme.palette.background.paper }}
                    InputLabelProps={{
                      style: { color: theme.palette.text.secondary },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ backgroundColor: theme.palette.background.paper }}
                    InputLabelProps={{
                      style: { color: theme.palette.text.secondary },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                    style={{ backgroundColor: theme.palette.background.paper }}
                    InputLabelProps={{
                      style: { color: theme.palette.text.secondary },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
