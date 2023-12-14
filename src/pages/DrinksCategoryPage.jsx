import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DrinkCard from "../components/DrinkCard";
import { Box, CircularProgress } from "@mui/material";

const DrinksCategoryPage = () => {
    const { category } = useParams();

    const [drinksCategory, setDrinksCategory] = useState(null);

    useEffect(() => {
        (async () => {
            const drinksCategoryResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category);
            const drinksCategoryResponseData = await drinksCategoryResponse.json();

            setDrinksCategory(drinksCategoryResponseData.drinks);
        })();
    }, []);
    console.log(drinksCategory, "heeeey");


    return (
        <>
        <div>
            <Header />
            {drinksCategory ? (
                    <>
                        {drinksCategory.map((drink) => {
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

export default DrinksCategoryPage;