import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import { ProductType } from "../Home/Home";
import { useAppDispatch } from './../../redux/reduxHooks';
import { addProduct } from "../../redux/cartRedux/cartSlice";


type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { name, image_link, price_sign, price } = product;

  const handleCartButtonClick = () => {
    const action = addProduct(product);
    dispatch(action);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia component="img" alt="" height="200" image={image_link} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {price_sign}
          {price}
        </Typography>
        <Typography variant="body1">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleCartButtonClick}>
          <CartIcon />
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
