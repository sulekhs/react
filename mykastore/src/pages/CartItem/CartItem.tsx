
import {
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import { removeFromCart } from "../../redux/cartRedux/cartSlice";
import { useAppDispatch } from "../../redux/reduxHooks";
import { ProductType } from "../Home/Home";

type CartItemProps = {
  product: ProductType;
};

function CartItem({ product }: CartItemProps) {
  const dispatch = useAppDispatch();
  const { name, price, price_sign, image_link } = product;

  const handleRemoveButtonClick = () => {
    const action = removeFromCart(product.id);
    dispatch(action);
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        src={image_link}
        component="img"
        sx={{ height: 100, width: 100 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item md={6}>
            <Typography variant="body1">{name}</Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price_sign}
              {price}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Button>-</Button>
            <Typography variant="body1" sx={{ display: "inline" }}>
              1
            </Typography>
            <Button>+</Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          marginLeft: "auto",
          flexDirection: "column",
          flexShrink: 0,
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        <Button size="small">Save For Later</Button>
        <Button size="small" onClick={handleRemoveButtonClick} color="error">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
