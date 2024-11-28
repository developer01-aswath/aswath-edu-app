import React from "react";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { OrganizationSidebarMenu } from "../../../utils/constants";

const Sidebar = ({ status }) => {
  const Location = useLocation();
  const { pathname } = Location;

  return (
    <Drawer
      sx={{
        width: status ? 240 : 0,
        flexShrink: 0,
        bgcolor: "#f5f5f5",
        "& .MuiDrawer-paper": {
          width: status ? 240 : 0,
          boxSizing: "border-box",
          marginTop: "64px",
        },
      }}
      variant="persistent"
      anchor="left"
      open={status}
    >
      <List>
        {OrganizationSidebarMenu.map((Item, i) => (
          <ListItem
            className={
              pathname === Item.path ? "sidebar-active-item" : "sidebar-item"
            }
            key={i}
            button
            component={Link}
            to={Item.path}
          >
            {Item.Icon} &nbsp;&nbsp;
            <ListItemText primary={Item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
