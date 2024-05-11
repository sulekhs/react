import {
    Button,
    Box,
    Container,
    Divider,
    Grid,
    Typography
  } from "@mui/material";
import { useAppSelector } from "../../redux/reduxHooks";
import CartItem from './../CartItem/CartItem';
  
  
  function Cart() {
    const { products: cartItems, total } = useAppSelector((state) => state.cart);
  
    if (cartItems.length === 0) {
      return (
        <Container fixed sx={{ p: 2 }}>
          <Typography variant="h2">Your Cart Is Empty!</Typography>
        </Container>
      );
    }
  
    return (
      <Container fixed sx={{ p: 2 }}>
        <Typography variant="subtitle2">Your Cart</Typography>
  
        <Grid container spacing={2}>
          {cartItems.map((product) => (
            <Grid key={product.id} item sx={{ width: "100%" }}>
              <CartItem product={product} />
            </Grid>
          ))}
        </Grid>
  
        <Divider sx={{ my: 2 }} />
  
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" component="div" sx={{ mr: "auto" }}>
            Total ${total}
          </Typography>
  
          <Button color="primary" variant="contained">
            Checkout
          </Button>
        </Box>
      </Container>
    );
  }
  
  export default Cart;
  