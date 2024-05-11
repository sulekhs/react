import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../../redux/productRedux/productsSlice";
import { getAllProducts } from "../../services/products";
import ProductsList from './../ProductsList/ProductsList';


function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts().then((products) => {
      const action = initializeProducts(products);
      dispatch(action);
    });
  }, []);

  return (
    <>
      <ProductsList />
    </>
  );
}

export default Products;
