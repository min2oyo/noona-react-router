import './App.css';
import AboutPage from './page/AboutPage';
import Homepage from './page/Homepage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
