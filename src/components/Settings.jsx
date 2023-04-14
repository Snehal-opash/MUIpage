import { Box } from "@mui/material";
import React from "react";
import Demo from "./Demo.tsx";
import Navbar from "./Navbar.jsx";

const Settings = () => {
  return (
    <>
      <Navbar />
      <Box height={30}></Box>
      <Box sx={{ display: "flex" }}>
        <Demo />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>Settings</div>
        </Box>
        </Box>
      
    </>
  );
};

export default Settings;
