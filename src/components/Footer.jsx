import React from "react";
import { Box, Typography, IconButton, Container, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Divider sx={{ mb: 3 }} />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="body2"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: theme.palette.text.secondary,
            }}
          >
            © 2024. All Rights Reserved
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: theme.palette.text.secondary,
            }}
          >
            Development by Ahmad Akel
          </Typography>
          <Box>
            <IconButton
              href="https://www.facebook.com/ahmad.aakell"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.primary.main }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://x.com/AhmadAkel3366"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.primary.main }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/ahmad-akel/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.primary.main }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/ahmad.aqel3366/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.primary.main }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
