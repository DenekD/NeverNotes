import {
  AppBar,
  Avatar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

function Topbar({ handleDrawerOpen, open }) {
  const profile = useSelector((state) => state.firebase.profile);

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dziś jest {new Date().toDateString()}
          </Typography>
          <Avatar sx={{ ml: 1 }}>{profile.initials}</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Topbar;
