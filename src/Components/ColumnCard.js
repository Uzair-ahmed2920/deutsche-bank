import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const cards = [
    {
    id: 1,
    title: 'The Majestic Mountains',
    description: 'This is a breathtaking view of the majestic mountains, with their snow-capped peaks reaching towards the sky. The mountains are shrouded in mystery and legends, and have always inspired awe and wonder in those who behold them. The crisp, clean air and the serene beauty of the mountains make it the perfect place to get away from the hustle and bustle of city life.',
    imageUrl: 'https://picsum.photos/seed/picsum/300/200',
    },
    {
    id: 2,
    title: 'The Tranquil Beach',
    description: 'This is a tranquil beach with its crystal clear blue waters gently lapping against the soft, white sand. The sound of the waves and the gentle breeze create a calming atmosphere that soothes the soul. The beach is a perfect spot to relax, unwind, and enjoy the simple pleasures of life.',
    imageUrl: 'https://picsum.photos/seed/picsum/300/200',
    },
    {
    id: 3,
    title: 'The Enchanted Forest',
    description: 'This is an enchanted forest, full of life, magic and mystery. The trees are tall and imposing, with lush green leaves and a canopy that lets in just enough light to create a sense of wonder and intrigue. The forest is home to a wide variety of flora and fauna, some of which can only be found in this mystical place. It is a wonderful place to explore and discover the hidden wonders of nature.',
    imageUrl: 'https://picsum.photos/seed/picsum/300/200',
    },
    {
    id: 4,
    title: 'The Vibrant City',
    description: 'This is a vibrant city, full of life, energy and excitement. The streets are alive with people from all walks of life, going about their daily business. The towering skyscrapers and bustling streets create a vibrant atmosphere that is both invigorating and inspiring. The city is a hub of culture, art, and entertainment, and there is always something new and exciting to discover around every corner.',
    imageUrl: 'https://picsum.photos/seed/picsum/300/200',
    },
    {
    id: 5,
    title: 'The Serene Countryside',
    description: 'This is the serene countryside, with its rolling hills, peaceful meadows, and charming little towns. The countryside is a place where time seems to stand still, and where the simple pleasures of life can be enjoyed. The gentle sound of the breeze, the rustle of leaves, and the occasional chirping of birds create a tranquil environment that is perfect for relaxing and recharging.',
    imageUrl: 'https://picsum.photos/seed/picsum/300/200',
    },
    {
    id: 6,
    title: 'The Majestic Waterfall',
    description: 'This is a majestic waterfall, with water cascading down from great heights, creating a breathtaking sight to behold. The mist created by the waterfall is cool and refreshing, and the sound of the water crashing against the rocks is both soothing and invigorating. The waterfall is a perfect spot for nature lovers and adventure seekers alike.',
    imageUrl: 'https://picsum.photos/seed/picsum/300/200',
    },
    {
    id: 7,
    title: 'The Historic Castle',
    description: 'This is a historic castle, steeped in rich history and grandeur. The castles towering walls and elegant architecture are a testament to its storied past. The castle has witnessed many important events and has been home to many legendary figures. Visiting',
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      id: 8,
      title: 'Card 8',
      description: 'This is the eighth card. It has a slightly longer description than the seventh card.',
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      id: 9,
      title: 'Card 9',
      description: 'This is the ninth card. It has a much longer description than the eighth card. In fact, it is the longest description of any of the cards.',
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      id: 10,
      title: 'Card 10',
      description: 'This is the tenth card. It has a relatively short description.',
      imageUrl: 'https://picsum.photos/300/200',
    },
  ];

const MultipleCards = () => {
  return (
    <Container maxWidth="lg">
    <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
      {cards.map((card) => (
        <Grid item key={card.id}>
          <Card sx={{ maxWidth: 372 ,borderRadius:'0',boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
            <CardMedia
              component="img"
              height="240"
              image={card.imageUrl}
              alt={card.title}
            />
            <CardContent sx={{ minHeight: 'auto' }}>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'30px'}}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:'19px'}}>
                {card.description}
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
