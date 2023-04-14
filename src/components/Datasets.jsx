import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import Demo from "./Demo.tsx";
import Navbar from "./Navbar.jsx";
import AddIcon from "@mui/icons-material/Add";
import MyGrid from "./MyGrid.jsx";
import "../style.css";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import icon from "../images/Icon.png";

import LinearProgress from "@mui/material/LinearProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs: "80%", md: "40%"},
  bgcolor: "#0C0D0F",
  borderRadius: "12px",
  border: "2px solid #000",
  boxShadow: 24,
  p: "32px",
  alignItems: "center",
  height: "auto",
  display: "flex",
  gap: "10px",
  color: "white",
  flexDirection: "column",
};

const Datasets = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <Navbar />
      <Box height={35}></Box>
      <Box sx={{ display: "flex", bgcolor: "#08090A", height: "100%" ,width:"100%"}}>
        <Demo />
        <Box component="main" sx={{ flexGrow: 1, pt: 3 ,pb: 2,px:1,pr:3}}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Typography
              fontSize={{xs: "24px", md: "34px" }}
              variant="h3"
              color={"white"}
              fontWeight={600}
              lineHeight={"54px"}
            >
              Datasets
            </Typography>
            <Box gap={6}>
              <Button sx={{ color: "white" }} variant="outlined">
                Download Sample CSV
              </Button>
              <Button sx={{ color: "white" }} variant="outlined">
                Download Sample JSONL
              </Button>
              <Button
                variant="contained"
                color="info"
                startIcon={<AddIcon />}
                onClick={handleOpen}
              >
                Import CSV or JSONL
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <img alt="icon" src={icon} />
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Uploading in progress
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      m={"auto"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{ mt: 0, color: "#6C757D" }}
                    >
                      Hold on while the upload is in progress. You will be
                      notified when it is completed.
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress />
                    </Box>
                    <Button sx={{ width: "100%" }} variant="outlined" color="info">
                      Cancle Upload
                    </Button>
                  </Box>
                </Fade>
              </Modal>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 2, pb: 2 }}>
            <Typography
            fontSize= {{xs: "20px", md: "24px" }}
              color="#0096C7"
              gutterBottom
              width={"100%"}
              fontWeight={500}
              lineHeight={"36px"}
            >
              Step 1
            </Typography>
            <Typography
              fontSize={"16px"}
              color="#6C757D"
              gutterBottom
              width={"100%"}
              fontWeight={400}
              lineHeight={"24px"}
            >
              Select the Posts, Pages and Products you want to use to generate
              datasets.
            </Typography>
          </Box>
          <MyGrid />
          <Box
            sx={{
              width: "100%",
              display:"flex",
              gap:"7px",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              p: 0,
            }}
            mt={5}
            display={"flex"}
            alignItems={"center"}
          >
            <Typography
              boxSizing="border-box"
              borderRadius="8px"
              border="1px solid #16191F"
              fontWeight={400}
              lineHeight={"18px"}
              color={"#6C757D"}
              p="5px"
              width={{xs: "100%", md: "50%" }}
              alignItems={"center"}
            >
              <FormGroup>
                <FormControlLabel fontSize= {{xs: "20px", md: "24px" }}
                  control={<Checkbox />}
                  label=" Merge imported data with data selected."
                />
              </FormGroup>
            </Typography>
            <Typography
              boxSizing="border-box"
              borderRadius="8px"
              border="1px solid #16191F"
              fontWeight={400}
              lineHeight={"18px"}
              color={"#6C757D"}
              p="5px"
              width={{xs: "100%", md: "50%" }}
              alignItems={"center"}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox bgcolor={"white"} />}
                  label="Save a copy of this model on Pansophy."
                />
              </FormGroup>
            </Typography>
          </Box>
          <Box gap={"4px"} justifyContent={"flex-end"} alignItems={"center"}>
            <Box
              mt={5}
              width={"100%"}
              bgcolor={"#0C0D0F"}
              border={"1px solid #16191F"}
              borderRadius={"8px"}
              alignSelf={"stretch"}
              height={"auto"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              p={"24px"}
            >
              <Button
                variant="outlined"
                width={{xs: "100%", md: "auto" }}
                sx={{
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "63px",
                 
                  px: "16px",
                  py: "24px",
                  bgcolor: "#0C0D0F",
                  border: "1px solid #16191F",
                  borderRadius: "8px",
                }}
              >
                Reset Page
              </Button>
              <Button
                variant="contained"
                color="info"
                sx={{
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "63px",
                  width: "auto",
                  px: "16px",
                  py: "24px",
                  border: "1px solid #16191F",
                  borderRadius: "8px",
                }}
              >
                Proceed to Next Step
              </Button>
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </>
  );
};

export default Datasets;
