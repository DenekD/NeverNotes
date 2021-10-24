import * as React from "react";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Drawer, DrawerHeader } from "../../helpers/LayoutHelpers";

import { SubjectOutlined } from "@mui/icons-material";
import { Avatar, ListItemButton } from "@mui/material";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOuting } from "../../store/actions/authActions";
import SnackBarComponent from "../../helpers/SnackBarComponent";
import logo from "../../img/hippo-av.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const signedInMenuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="success" />,
    path: "/",
  },
  {
    text: "Logout",
    icon: <LogoutIcon color="success" />,
    path: "",
  },
];

const signedOutMenuItems = [
  {
    text: "Sign In",
    icon: <LoginIcon color="success" />,
    path: "/signIn",
  },
  {
    text: "Sign Up",
    icon: <PersonAddIcon color="success" />,
    path: "/signUp",
  },
];

export default function Layout({ children }) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);

  const theme = useTheme();
  const isOpen = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const links = auth.uid ? signedInMenuItems : signedOutMenuItems;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <Topbar open={open} handleDrawerOpen={() => setOpen(true)} /> */}
      <AppBar position="fixed" open={open} color="success">
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
          <Avatar sx={{ mx: 1 }} src={logo} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NeverNote
          </Typography>

          <Avatar sx={{ ml: 1 }}>{profile.initials}</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((item) => (
            <ListItemButton
              key={item.text}
              sx={
                location.pathname === item.path
                  ? { backgroundColor: "#f4f4f4" }
                  : null
              }
              onClick={
                item.text === "Logout"
                  ? () => dispatch(signOuting())
                  : () => history.push(item.path)
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <DrawerHeader id="back-to-top-anchor" />
        <SnackBarComponent />

        {children}
      </Box>
    </Box>
  );
}
