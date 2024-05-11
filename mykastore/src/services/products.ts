import { ProductType } from "../pages/Home/Home";

const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";

async function getAllProducts() {
  const response = await fetch("/products.json");
  const data: ProductType[] = await response.json();
  return data.filter((item) => item.price !== 0).slice(0, 24);
}

export { getAllProducts };
