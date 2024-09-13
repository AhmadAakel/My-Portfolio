import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import projectImage from "../assets/project.png";
import { projectList } from "../data/projectsList.js";

const Projects = () => {
  const theme = useTheme();

  return (
    <div
      id="projects"
      style={{
        padding: "100px 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
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
              My Creative Works
            </Typography>

            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              Latest Projects
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            href={"https://github.com/AhmadAakel"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Github
            <NorthEastIcon />
          </Button>
        </Box>
        <Grid container spacing={4}>
          {projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={projectImage}
                  alt={project.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Box p={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "bold",
                          color: theme.palette.text.primary,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="text"
                      color="primary"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ ml: 2 }}
                    >
                      <OpenInNewIcon />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
