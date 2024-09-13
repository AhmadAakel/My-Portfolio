import React from "react";
import { Button, Box, Typography, Grid, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import personal from '../assets/personal.png';
const Home = () => {
  const theme = useTheme();

  return (
    <div
      id="home"
      style={{
        padding: "150px 0",
        textAlign: "left",
        background: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{ maxWidth: "600px", margin: "0 auto", paddingLeft: "20px" }}
            >
              <Typography
                variant="h3"
                component="h1"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                  color: theme.palette.text.primary,
                }}
              >
                HEY! I’m{" "}
                <span style={{ color: theme.palette.primary.main }}>Ahmad</span>
                ,
                <br /> Full Stuck Developer
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "20px",
                  fontFamily: "Poppins, sans-serif",
                  color: theme.palette.text.secondary,
                }}
              >
                Providing innovative fullstack development solutions with the versatility of a skilled developer and the reliability of a leading tech company.
              </Typography>
              <Button
                variant="contained"
                style={{
                  marginTop: "40px",
                  fontWeight: "bold",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                component="a"
                href="https://drive.usercontent.google.com/u/0/uc?id=1aBVogJ6tUwbneZqBk4xv9KyMt32MiJMB&export=download"
                download="Ahmad_Akel_CV.pdf"
              >
                Download CV
              </Button>

            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: "30px", md: "0" },
              }}
            >
              <img
                src={personal}
                alt="Laura Frontend Developer"
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  borderRadius: "100%",
                  boxShadow: `0px 0px 20px ${theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                    }`,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
