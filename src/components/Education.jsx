import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import contactBoxImage from "../assets/contact-box.png";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Education = ({ scrollToSection }) => {
  const theme = useTheme();

  return (
    <div
      id="education"
      style={{
        padding: "100px 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}  
        >
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
            Education & Experience
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => scrollToSection("nav")}
            rel="noopener noreferrer"
          >
            <ArrowUpwardIcon />
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              Education
            </Typography>
            <Typography
              variant="body2"
              style={{ color: theme.palette.text.secondary }}
            >
              Telecommunication engineering graduate from Damascus University.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: theme.palette.text.secondary }}
            >
              studying Informatics Engineering at the Syrian Virtual University (SVU).
            </Typography>

            <Box mt={2}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                Work Experiance
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                NOC Operation Engineer at MTN-Syria.
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                System Administrator at ASAS.
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                IT Helpdesk at SIA.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              Frontend Developer
            </Typography>
            <Typography
              variant="body2"
              style={{ color: theme.palette.text.secondary }}
            >
              E-Commerce and Agency websites, along with several training projects..
            </Typography>

            <Box mt={2}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                Backend Developer
              </Typography>
              <Typography
                variant="body2"
                style={{ color: theme.palette.text.secondary }}
              >
                blog and news website developed using Laravel, s to-do app built with PHP and Bootstrap,
                and a portfolio showcase using Laravel and API integrations. Additionally,
                I have worked on several training projects..
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundImage: `url(${contactBoxImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
            color: "white",
            minHeight: "250px",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Try me out, risk free!
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "white",
                marginTop: "10px",
              }}
            >
              If you're not happy with the design after the first draft, I'll
              refund your deposit,
              <strong> no questions asked</strong>.
            </Typography>
          </Box>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#00b4d8",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Education;
