import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import image1 from "../images/xyz.png";
import image2 from "../images/images2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import RowCard from "./RowCard";

const images = [
  {
    id: 1,
    url: image1,
    buttonText: "What Next | Responsible Growth",
    buttonLabel: "Climate emergency: can green tech save us?",
    buttonLink: "Game changer green tech",
  },
  {
    id: 2,
    url: image2,
    buttonText: "",
    buttonLabel: "Deutsche Bank reports 2022 profit before tax of € 5.6 billion",
    buttonLink: "more",
  },
  {
    id: 3,
    url: image3,
    buttonText: "What Next | Digital Disruption ",
    buttonLabel: "More flexible and innovative: How developers use the cloud",
    buttonLink: "Cloud in banking",
  },
  {
    id: 4,
    url: image4,
    buttonText: "",
    buttonLabel: "Navigating towards a greener future",
    buttonLink: "Will CO2 neutrality succeed by 2050?",
  },
  {
    id: 5,
    url: image5,
    buttonText: "#positiveimpact",
    buttonLabel: "our cities need us to change how we live",
    buttonLink: "more",
  },
];

const useStyles = makeStyles({
  image: {
    height: 400,
    width: "100%",
    objectFit: "cover",
    // [theme.breakpoints.up("sm")]: {
    //   height: 300,
    // },
  },
  buttonContainer: {
    position: "absolute",
    bottom: "30%",
    left: "20%",
    width: "50%",
  },
});

function ImageSlider() {
  const classes = useStyles();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = images[activeImageIndex];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePreviousImage = () => {
    setActiveImageIndex(
      activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex(
      activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1
    );
  };

  return (
    <>
    <Box
       sx={{
        my: 5,
        backgroundImage: `url(${activeImage.url})`,
        backgroundSize: "100% 100%",
        height: 500,
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xl" sx={{paddingTop:17}}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Box sx={{ justifyContent: "center", justifyItems: "center" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                {activeImage.buttonText}
              </Typography>
              <Typography variant="h3" sx={{ color: "white" }}>
                {activeImage.buttonLabel}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  fontSize: "12px",
                  backgroundColor: "white",
                  borderRadius: 5,
                  opacity: 0.8,
                  color: "black",
                  borderColor: "black",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "black",
                  },
                }}
              >
                {activeImage.buttonLink}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid container justifyContent="center" sx={{mt:4}}>
        <Grid item sx={{borderRadius:50,backgroundColor:'black' ,opacity:0.4}}>
          <IconButton onClick={handlePreviousImage}  >
            <ArrowBackIos sx={{color:'white'}}/>
          </IconButton>
        </Grid>
        <Grid item sx={{borderRadius:50,backgroundColor:'black' ,opacity:0.4, marginLeft:2}}>
          <IconButton onClick={handleNextImage}>
            <ArrowForwardIos sx={{color:'white'}}/>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default ImageSlider;
