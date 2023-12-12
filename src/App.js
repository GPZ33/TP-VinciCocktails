import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AllDrinksPage from './pages/AllDrinksPage';
import DrinkDetailsPage from './pages/DrinkDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/drinks' element={<AllDrinksPage />} />
        <Route path="/drink/details/:id" element={<DrinkDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
