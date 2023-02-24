import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Grid,
  Button,
  Box,
  Container,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { padding } from "@mui/system";

const cards1 = [
  {
    id: 1,
    title: "Card 1",
    description:
      "This is the first card. It has a relatively short description that is longer than 40 words.",
    imageUrl: "https://picsum.photos/id/1015/300/200",
  },
  {
    id: 2,
    title: "Card 2",
    description:
      "This is the second card. It has a slightly longer description than the first card, but still less than 40 words.",
    imageUrl: "https://picsum.photos/id/1018/300/200",
  },
  {
    id: 3,
    title: "Card 3",
    description:
      "This is the third card In fact, it is the longest description of any of the cards, with more than 40 words.",
    imageUrl: "https://picsum.photos/id/1019/300/200",
  },
];

const cards2 = [
  {
    id: 4,
    title: "Card 4",
    description:
      "This is the fourth card. It has a relatively short description that is longer than 40 words.",
    imageUrl: "https://picsum.photos/id/1020/300/200",
  },
  {
    id: 5,
    title: "Card 5",
    description:
      "This is the fifth card. It has a slightly longer description than the fourth card, but still less than 40 words.",
    imageUrl: "https://picsum.photos/id/1021/300/200",
  },
  {
    id: 6,
    title: "Card 6",
    description:
      "This is the sixth card. it is the longest description of any of the cards, with more than 40 words.",
    imageUrl: "https://picsum.photos/id/1022/300/200",
  },
];

function CardCarousel(props) {
  return (
    <Box sx={{ backgroundColor: "#D4F1F4", width: "100%", mt: 10 }}>
      <Container maxWidth="lg">
        <Carousel
          navButtonsAlwaysVisible
          animation="slide"
          indicators={false}
          swipe={false}
          autoPlay={false}
          timeout={500}
          style={{ width: "100%" }}
          navButtonsProps={{
            style: {
              backgroundColor: "white",
              borderRadius: 50,
              border: "1px solid black",
              borderColor: "Black",
              color: "black",
              marginLeft: '10px',
              marginRight: '10px',
            },
          }}
        >
          <Grid container spacing={3}>
            {cards1.map((card) => (
              <Grid key={card.id} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    Width: 245,
                    borderRadius: "0",
                    my: 5,
                    boxShadow: "none",
                    backgroundColor: "#D4F1F4",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    width="200"
                    image={card.imageUrl}
                    title={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      sx={{
                        borderRadius: 5,
                        fontSize: "12px",
                        backgroundColor: "#121858",
                        padding: "10px 20px",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#121858",
                          color: "white",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3}>
            {cards2.map((card) => (
              <Grid key={card.id} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    Width: 245,
                    borderRadius: "0",
                    boxShadow: "none",
                    backgroundColor: "#D4F1F4",
                    my: 5,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    width="200"
                    image={card.imageUrl}
                    title={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" sx={{borderRadius: 5,
                        fontSize: "12px",
                        backgroundColor: "#121858",
                        padding: "10px 20px",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#121858",
                          color: "white",
                        },}}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Carousel>
      </Container>
    </Box>
  );
}

export default CardCarousel;
