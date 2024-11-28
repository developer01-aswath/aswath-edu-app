import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutButton from "../../../components/LogoutButton";

const Navbar = ({ status, changeStatus }) => {

  const toggleDrawer = () => {
    changeStatus(!status);
  };
  
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2", zIndex: 1201 }}>
      <Toolbar>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            color: "white",
          }}
        >
          {status ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, paddingLeft: 5 }}>
          Organization Dashboard
        </Typography>

        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
