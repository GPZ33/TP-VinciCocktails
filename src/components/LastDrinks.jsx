import { Box, CircularProgress } from "@mui/material";
import DrinkCard from "./DrinkCard";
import { useState, useEffect } from "react";

const LastDrinks = () => {
    const [drinks, setDrinks] = useState(null);
    useEffect(() => {
        (async () => {
            const drinksReponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
            const drinksReponseData = await drinksReponse.json();

            setDrinks(drinksReponseData.drinks);
        })();
    }, []);
    const lastFourDrinks = drinks ? drinks.slice(-4) : null;

    return (
        <>
            <section>
                {lastFourDrinks ? (
                    <>
                        <h3>Nos quatre derniers cocktails :</h3>
                        {lastFourDrinks.map((drink) => {
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
            </section>
        </>
    );
}

export default LastDrinks;