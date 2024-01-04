import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({category , desc , image , price ,title}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {category}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}