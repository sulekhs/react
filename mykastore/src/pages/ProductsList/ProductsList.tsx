import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../redux/reduxHooks";
import ProductCard from './../../components/ProductCard/ProductCard';

function ProductsList() {
  const products = useAppSelector((state) => state.products);

  return (
    <Container fixed sx={{ py: 2 }}>
      <Grid container spacing={2} alignItems="stretch">
        {products.map((product) => (
          <Grid key={product.id} item xs={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsList;
