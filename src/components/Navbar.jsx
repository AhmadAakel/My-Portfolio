import React from "react";
import {
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ scrollToSection, handleThemeChange, darkMode }) => {
  const theme = useTheme();
  return (
    <div id="nav">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
                fontFamily: "Playwrite CU, cursive",
                fontWeight: "bold",
                fontSize: '25px'
              }}
            >
              Ahmad<span style={{ color: theme.palette.primary.main }}>Aakel</span>
            </Typography>
            <Tabs value={false} textColor="inherit" indicatorColor="primary">
              <Tab
                label="Home"
                onClick={() => scrollToSection("home")}
                sx={{
                  textTransform: "none",
                  color: theme.palette.primary,
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0a58ca",
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Tab
                label="About me"
                onClick={() => scrollToSection("about")}
                sx={{
                  textTransform: "none",
                  color: theme.palette.primary,
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0a58ca",
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Tab
                label="Education"
                onClick={() => scrollToSection("education")}
                sx={{
                  textTransform: "none",
                  color: theme.palette.primary,
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0a58ca",
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Tab
                label="Projects"
                onClick={() => scrollToSection("projects")}
                sx={{
                  textTransform: "none",
                  color: theme.palette.primary,
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0a58ca",
                    backgroundColor: "transparent",
                  },
                }}
              />
              <Tab
                label="Contact"
                onClick={() => scrollToSection("contact")}
                sx={{
                  textTransform: "none",
                  color: theme.palette.primary,
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0a58ca",
                    backgroundColor: "transparent",
                  },
                }}
              />
            </Tabs>
            <IconButton onClick={handleThemeChange} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>

  );
};

export default Navbar;
