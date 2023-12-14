import { Box, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RandomCategory = ({ drinks }) => {

    const [categories, setCategories] = useState(null);
    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
            const categoriesResponseData = await categoriesResponse.json();

            setCategories(categoriesResponseData.drinks);
        })();
    }, []);

    console.log(categories);
    const randomCategory = categories ? categories[Math.floor(Math.random() * categories.length)] : null;

    console.log(randomCategory, "random");
    return (
        <>
            <div>
                {randomCategory ? (
                    <>
                        <h3>On vous conseille ces verres (full random) : <Link to={`/category/drinks/${randomCategory.strCategory}`}> {randomCategory.strCategory} </Link></h3>
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
        </>
    );
};
export default RandomCategory;