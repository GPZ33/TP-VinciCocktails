import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DrinkCard from "../components/DrinkCard";
import { Box, CircularProgress } from "@mui/material";

const IngredientDrinksPage = () => {
    const { ingredient } = useParams();

    const [ingredientDrinks, setIngredientDrinks] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientDrinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient);
            const ingredientDrinksResponseData = await ingredientDrinksResponse.json();

            setIngredientDrinks(ingredientDrinksResponseData.drinks);
        })();
    }, []);
    console.log(ingredientDrinks);

    return (
        <>
        <div>
            <Header />
            {ingredientDrinks ? (
                    <>
                        {ingredientDrinks.map((drink) => {
                            return (
                                <>  
                                <DrinkCard drink={drink} />
                                </>
                            );
                        })}
                    </>
                ) : (

                    <>
                        <Box sx={{ display: 'flex' }}>
                            Chargement...
                            <CircularProgress />
                        </Box>
                    </>
                )}
        </div>
        <Footer />
        </>
    );
}

export default IngredientDrinksPage;