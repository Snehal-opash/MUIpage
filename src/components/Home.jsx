import { Box } from "@mui/material";
import React from "react";
import Demo from "./Demo.tsx";
import Navbar from "./Navbar.jsx";

const Home = () => {
  return (
    <>
    <Navbar />
      <Box height={30}></Box>
      <Box sx={{ display: "flex" }}>
        <Demo />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>Modals</div>
        </Box>
        </Box>
      
    </>
  );
};

export default Home;
