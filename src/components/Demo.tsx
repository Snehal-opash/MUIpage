import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useAppstore } from "../appStore";
import img1 from "../images/Illustration Container.png";
// import arr from "../images/arrow-swap-horizontal.png";
import av1 from "../images/speedometer.png";
import av2 from "../images/note-2.png";
import global from "../images/global.png";
import av4 from "../images/card.png";
import av5 from "../images/setting-5.png";
import { Avatar,
  //  Button,
    Typography } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: "#1E1E1E",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)})`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(0)} )`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function Demo() {
  // const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppstore((state) => state.dopen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Box display={"flex"} sx={{ bgcolor: "#0C0D0F" }}>
        <Drawer sx={{ h: "auto" }} variant="permanent" open={open}>
          <Divider />
          <Box
            display={"flex"}
            fontWeight={"500"}
            mt={7}
            justifyContent={"space-between"}
            px={"20px"}
            width={"100%"}
          >
            <Typography color={"white"}>
              Pan<span style={{ color: "rgba(0, 150, 199, 1)" }}>sophy</span>
            </Typography>
            {/* <Button  sx={{ color: "black" }} >
              <img src={arr} alt="" />
            </Button> */}
          </Box>
          <Box
            height={"100%"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            justifyItems={"space-between"}
            justifyContent={"space-between"}
          >
            <List sx={{ color: "white" }}>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: "white",
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                     <Avatar
                      
                      src={av1}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Models"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/datasets");
                }}
              >
                <ListItemButton
                
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    background: 'linear-gradient(90deg, rgba(2, 62, 138, 0.24) 0%, rgba(2, 62, 138, 0) 100%)',
                    borderLeft: '5px solid #0096C7',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: "white",
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      
                      src={av2}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                  
                    primary="Datasets"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/settings");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: "white",
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      
                      src={global}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Connected Websites"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: "white",
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                     <Avatar
                      
                      src={av4}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Manage Subscription"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: "white",
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      
                      src={av5}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Settings"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <img alt="image" src={img1} />
          </Box>
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, m: 1 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

export default Demo;
