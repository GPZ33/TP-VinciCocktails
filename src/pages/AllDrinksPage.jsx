import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, CircularProgress } from "@mui/material";
import DrinkCard from "../components/DrinkCard";

const AllDrinksPage = () => {
    const [drinks, setDrinks] = useState(null);
    useEffect(() => {
        (async () => {
            const drinksReponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
            const drinksReponseData = await drinksReponse.json();

            setDrinks(drinksReponseData);
        })();
    }, []);

    console.log(drinks);

    return (
        <>
            <Header />
            <div>
            {drinks ? (
                    <>
                        {drinks.drinks.map((drink) => {
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

export default AllDrinksPage;