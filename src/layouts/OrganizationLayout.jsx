import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Organization/component/Navbar";
import Sidebar from "./Organization/component/Sidebar";

const OrganizationLayout = ({ children }) => {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const windowWidth = window.screen.width;

  useEffect(() => {
    if (windowWidth <= 600) {
      setSidebarStatus(false);
    }
  }, [windowWidth]);

  return (
    <Box>
      <CssBaseline />
      <Navbar status={sidebarStatus} changeStatus={setSidebarStatus} />
      <Box sx={{ display: "flex", minHeight: "92vh" }}>
        <Sidebar status={sidebarStatus} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#f5f5f5",
            padding: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

OrganizationLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default OrganizationLayout;
