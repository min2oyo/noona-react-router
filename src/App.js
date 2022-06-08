import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import AboutPage from './page/AboutPage';
import Homepage from './page/Homepage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    return authenticate ? <UserPage /> : <Navigate to='/login' />;
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id/:num' element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
