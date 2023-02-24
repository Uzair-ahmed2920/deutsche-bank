import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";

const MultipleCards = () => {
  return (
    <Container maxWidth="lg" sx={{my:3}}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              Width: 320,
              borderRadius: "0",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              backgroundColor: "lightgrey",
              height: 300,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", color: "black" }}
              >
                Shere Price (EUR)
              </Typography>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontSize: "35px", color: "blue" }}
              >
                11.43 
              </Typography>
              <Typography variant="body2" color="#424242" sx={{fontSize:"20px"}}>
                Intrbaday(Xetra, Feb 22, 17:29)
              </Typography>
              <Typography variant="body2" color="#424242" sx={{fontSize:"20px"}}>
                Relative Change: -1.43%
              </Typography>
              <Typography variant="body2" color="#424242" sx={{fontSize:"20px"}}>
                High: 11.57 EUR
              </Typography>
              <Typography variant="body2" color="#424242"sx={{fontSize:"20px"}}>
                Low: 11.27 EUR
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              Width: 320,
              borderRadius: "0",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              backgroundColor: "blue",
              height: 300,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontSize: "35px", color: "white" }}
              >
                Financial releases, reports and calendar
              </Typography>
              <Typography variant="h6" color="white">
                Consult our financial reporting and events or read our creditor
                information
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              Width: 320,
              borderRadius: "0",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              backgroundColor: "purple",
                height: 300,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={{ fontSize: "30px", color: "white" }}
              >
                Graduate? Professional?
              </Typography>
              <Typography variant="h6" color="white">
              The world is changing, and so are we. This is more than banking.
              </Typography>
              <Typography variant="body2" color="white" sx={{mt:2}}>
              Opportunities for agile minds start here
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MultipleCards;
