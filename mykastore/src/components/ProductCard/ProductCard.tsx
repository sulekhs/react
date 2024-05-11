import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductType } from '../../pages/Home/Home';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const ProductCard = ({product}: {product: ProductType}) => {
  return (
    <>
        <Card sx={{ maxWidth: 345, border:1, color: 'grey'}}>
            <CardMedia
                component="img"
                alt="img"
                height="140"
                image={product.image_link}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {product.price_sign}{product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <ShoppingCart/>
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    </>
  )
}

export default ProductCard