import React from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import techGroup from "../assets/tech-group.png";

const About = () => {
  const theme = useTheme();

  return (
    <div
      id="about"
      style={{
        padding: "100px 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "100%" }}>
              <img
                src={techGroup}
                alt="tech skills"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "300px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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
              About Me
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginBottom: "20px",
                fontFamily: "Poppins, sans-serif",
                color: theme.palette.text.secondary,
              }}
            >
              Telecommunication engineer, graduated from Damascus University, skilled in HTML, CSS, JavaScript, React, PHP, Laravel, and MySQL. 
              Proficient in both front-end and back-end development, with experience in programming, 
              engineering, and building comprehensive technical solutions.
            </Typography>
            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                HTML5
              </Typography>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>

            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                CSS3
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>

            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                JavaScript
              </Typography>
              <LinearProgress
                variant="determinate"
                value={80}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>

            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                React
              </Typography>
              <LinearProgress
                variant="determinate"
                value={85}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                PHP
              </Typography>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                Laravel
              </Typography>
              <LinearProgress
                variant="determinate"
                value={95}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                MySql
              </Typography>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.palette.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
