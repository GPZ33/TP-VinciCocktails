import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, CircularProgress } from "@mui/material";
import DrinkCard from "../components/DrinkCard";
const AllCoocktailsPage = () => {

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(cocktailsResponseData.drinks);
        })();
    }, []);
    console.log(cocktails);

    return (
        <>
            <Header />
            <body>
            <h1>Nos cocktails</h1>
            <div>
            {cocktails ? (
                    <>
                        {cocktails.map((cocktail) => {
                            return (
                                <>
                                <DrinkCard drink={cocktail} />
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
            </body>
            <Footer />
        </>
        
    );
}

export default AllCoocktailsPage;