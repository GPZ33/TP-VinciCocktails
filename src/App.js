import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AllDrinksPage from './pages/AllDrinksPage';
import DrinkDetailsPage from './pages/DrinkDetailsPage';
import CategoriesDrinkPage from './pages/CategoriesDrinkPage';
import DrinksCategoryPage from './pages/DrinksCategoryPage';
import AllCoocktailsPage from './pages/AllCocktailsPage';
import AllIngredientsPage from './pages/AllIngredientsPage';
import IngredientDrinksPage from './pages/IngredientDrinksPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/drinks' element={<AllDrinksPage />} />
        <Route path="/drink/details/:id" element={<DrinkDetailsPage />} />
        <Route path="/categories" element={<CategoriesDrinkPage />} />
        <Route path="/category/drinks/:category" element={<DrinksCategoryPage />} />
        <Route path="/cocktails" element={<AllCoocktailsPage />} />
        <Route path="/ingredients" element={<AllIngredientsPage />} />
        <Route path="/ingredient/drinks/:ingredient" element={<IngredientDrinksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
