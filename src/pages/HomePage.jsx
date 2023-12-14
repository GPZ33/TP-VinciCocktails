import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastDrinks from "../components/LastDrinks";
import RandomCategory from "../components/RandomCategory";

const HomePage = () => {
    const [drinks, setDrinks] = useState(null);
    useEffect(() => {
        (async () => {
            const drinksReponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
            const drinksReponseData = await drinksReponse.json();

            setDrinks(drinksReponseData.drinks);
        })();
    }, []);

    return (
        <>
            <Header />
            <RandomCategory />
            <LastDrinks />
            <Footer />
        </>

    );
}

export default HomePage;