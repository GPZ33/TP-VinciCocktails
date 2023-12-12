import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const DrinkCard = ({ drink }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='drinks'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={drink.strDrinkThumb}
          alt="drink"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drink.strDrink}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {<Link to={`/drink/details/${drink.idDrink}`}>Voir la recette</Link>}
           <p>A consommer avec modération sauf si c'est votre cocktail préféré</p> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default DrinkCard;