import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Container } from '@mui/system';

const cards = [
  {
    id: 1,
    title: 'Deutsche Bank invests in Australian paytech DataMesh',
    description: 'Media Release|February 22, 2023',
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    id: 2,
    title: 'Deutsche Bank invests in Australian paytech DataMesh',
    description: 'Media Release|February 22, 2023',
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    id: 3,
    title: 'Deutsche Bank invests in Australian paytech DataMesh',
    description: 'Media Release|February 22, 2023',
    imageUrl: 'https://picsum.photos/300/200',
  },
];

const MultipleCards = () => {
  return (
    <Container maxWidth="lg" sx={{my:15}}>
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <Card sx={{ Width: 320 , borderRadius:'0',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
            <CardMedia
              component="img"
              height="240"
              image={card.imageUrl}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography gutterBottom variant="h4" component="div" sx={{fontSize:'30px'}}>
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default MultipleCards;
