import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react'
import Header from './../../components/Header/Header';
import ProductCard from './../../components/ProductCard/ProductCard';


export type ProductType = {
    id?:number;
    brand:string;
    name: string;
    price:number;
    price_sign?:string
    currency?:number;
    image_link?:string;
    product_link?:string;
    website_link?:string;
    description?:string;
    rating?:number;
    category?:string;
    product_type?:string;
    created_at?:string;
    updated_at?:string;
    product_api_url?:string;
    api_featured_image?:string;
    product_colors:ProductColors[];
}

export type ProductColors = {
    hex_value?:string;
    color_name?:string;
}
const Home = () => {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(()=>{
      fetch("/products.json")
      .then(res => res.json())
      .then((data) => setProducts(data))
  },[])

  return (
    <>
        <Header/>
        <Container fixed sx={{ py:2 }}>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={6} md={4} lg={3}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
  )
}

export default Home