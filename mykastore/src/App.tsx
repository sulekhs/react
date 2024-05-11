import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { useAppSelector } from './redux/reduxHooks';
import Login from './pages/Login/Login';
import ProductsList from './pages/ProductsList/ProductsList';

function App() {
  //const user = useAppSelector((state) => state.user.currentUser)
  const user = true;
  return (
    <BrowserRouter>
      <CssBaseline />
      
      <Routes>
        <Route path='/' element={user ? <Navigate to="/home"/> : <Login/>} />
        <Route path='home' element={<Home/>} />
        <Route path="productList" element={<ProductsList />} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
