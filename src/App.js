import './App.css';
import { Routes, Route } from "react-router-dom";
import AboutPage from './page/AboutPage';
import Homepage from './page/Homepage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
