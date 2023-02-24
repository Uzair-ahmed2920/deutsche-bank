import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Deutsche", "Corporates/Institution", "Private Client", "Client logins","Location"];
const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 ,color:"black" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="Black" />
      </IconButton>
      <Drawer
      sx={{
        width: "100vw",
        maxWidth: false
      }}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{fontSize:12}}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText sx={{fontSize:12}}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <List sx={{fontSize:3}}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText sx={{fontSize:2}}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default NavDrawer;