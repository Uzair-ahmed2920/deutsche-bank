import { Container, Grid } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Button } from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./NavDrawer";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";
import React from "react";
import { Box } from "@mui/system";
import image from "../images/Deutsche-Bank-logo.png";
import Slider from "./Slider";


function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
        <Toolbar sx={{ borderBottom: "1px solid", borderColor: "grey.400" }}>
          {isMatch ? (
            <>
              <DrawerComp />
              <Box
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{ fontSize: "20px", color: "blue", marginTop: 1 }}
                >
                  Deutsche Bank
                </Typography>
                <img src={image} alt="Logo" style={{ height: "50px" }} />
              </Box>
            </>
          ) : (
            <>
              <Container maxWidth="lg">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0",
                    my: 3,
                  }}
                >
                  <Box sx={{ marginLeft: -3, marginRight: 2 }}>
                    <Typography sx={{ fontSize: "20px", color: "blue" }}>
                      Deutsche Bank
                    </Typography>
                  </Box>
                  <Box sx={{ my: 0.5 }}>
                    <Tabs
                      indicatorColor="none"
                      textColor="secondary"
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      sx={{
                        "& .MuiTabs-flexContainer": {
                          width: "50%",
                          height: "25px", // adjust this value to resize the tabs
                        },
                      }}
                    >
                      <Tab
                        label="Media"
                        sx={{
                          fontSize: "12px",
                          minWidth: "30px",
                          minHeight: "20px",

                          borderRight: "1px solid",
                          borderColor: "grey.400",
                        }}
                      />
                      <Tab
                        label="Careers"
                        sx={{
                          borderRight: "1px solid",
                          minWidth: "30px",
                          minHeight: "20px",
                          fontSize: "12px",
                          borderColor: "grey.400",
                        }}
                      />
                      <Tab
                        label="Investor Relation"
                        sx={{
                          borderRight: "1px solid",
                          minWidth: "30px",
                          minHeight: "20px",
                          fontSize: "12px",
                          borderColor: "grey.400",
                        }}
                      />
                      <Tab
                        label="Research"
                        sx={{
                          borderRight: "1px solid",
                          minWidth: "30px",
                          minHeight: "20px",
                          fontSize: "12px",
                          borderColor: "grey.400",
                        }}
                      />
                      <Tab
                        label="#PositiveImpect"
                        sx={{
                          borderRight: "1px solid",
                          minWidth: "30px",
                          minHeight: "20px",
                          fontSize: "12px",
                          borderColor: "grey.400",
                        }}
                      />
                      <Tab
                        label="Responsibility"
                        sx={{
                          borderRight: "1px solid",
                          minWidth: "30px",
                          minHeight: "20px",
                          fontSize: "12px",
                          borderColor: "grey.400",
                        }}
                      />
                      <Tab
                        label="ContracT"
                        sx={{
                          fontSize: "12px",
                          minWidth: "30px",
                          minHeight: "20px",
                        }}
                      />
                    </Tabs>
                  </Box>
                  <img
                    src={image}
                    alt="Logo"
                    style={{
                      height: "100px",
                      paddingLeft: "44px",
                      marginTop: -7,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0",
                    marginLeft: -3,
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    sx={{}}
                  >
                    <Tab
                      label="Deutsche Bank"
                      sx={{
                        border: "1px solid",
                        borderRadius: "5px 5px 0 0",
                        borderColor: "grey.400",
                        borderBottom: "5px solid white",
                      }}
                    />
                    <Tab label="Corporates/Institution" />
                    <Tab label="Private Client" />
                    <Tab label="Clients logins" />
                    <Tab label="Location" />
                  </Tabs>
                </Box>
              </Container>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
