import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const CategoriesDrinkPage = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
            const categoriesResponseData = await categoriesResponse.json();

            setCategories(categoriesResponseData.drinks);
        })();
    }, []);

    console.log(categories);

    return (
        <>
            <Header />
            <div>
                {categories ? (
                    <>
                        {categories.map((categories) => {
                            return (
                                <h3>
                                <Link to={`/category/drinks/${categories.strCategory}`}> {categories.strCategory} </Link>
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

export default CategoriesDrinkPage;