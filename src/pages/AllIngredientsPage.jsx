import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const AllIngredientsPage = () => {
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
            const ingredientsResponseData = await ingredientsResponse.json();

            setIngredients(ingredientsResponseData.drinks);
        })();
    }, []);

    return (
        <>
            <Header />
            <h1>Nos ingrédients</h1>
            <div>
                {ingredients ? (
                    <>
                        {ingredients.map((ingredient) => {
                            return (
                                <h3>
                                    <Link to={`/ingredient/drinks/${ingredient.strIngredient1}`}> {ingredient.strIngredient1} </Link>
                                </h3>
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

export default AllIngredientsPage;