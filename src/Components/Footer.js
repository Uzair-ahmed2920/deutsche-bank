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
      <AppBar position="static" sx={{ mt:2,background: "#eeeeee", boxShadow: "none" }}>
        <Toolbar>
              <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0",
                  }}
                >
                    <Tabs
                      indicatorColor="none"
                      textColor="secondary"
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      sx={{
                        "& .MuiTabs-flexContainer": {
                          width: "50%", // adjust this value to resize the tabs
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
                </Grid>
                </Grid>
              </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
