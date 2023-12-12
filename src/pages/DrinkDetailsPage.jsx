import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";



const DrinkDetailsPage = () => {

    const { id } = useParams();

    const [drink, setDrink] = useState(null);

    useEffect(() => {
        (async () => {
            const drinkResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
            const drinkResponseData = await drinkResponse.json();
            setDrink(drinkResponseData.drinks[0]);
        })();
    }, []);
    console.log(drink);

    const renderIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];

            if (ingredient && measure) {
                ingredients.push(
                    <li key={i}>
                        {`${measure} ${ingredient}`}
                    </li>
                );
            }
        }
        return ingredients;
    }

    return (
        <div>
            {drink ? (
                <>
                    <Header />
                    <h1>{drink.strCategory + " : " + drink.strDrink }</h1>
                    <h5>{"Date : " + drink.dateModified}</h5>
                    <img src={drink.strDrinkThumb}></img>
                    <ul> <h5>Ingrédients :</h5>
                    {renderIngredients()}
                    </ul>
                    <h5>Consignes</h5>
                    <p>{drink.strInstructions}</p>
                    <Footer />
                </>
            ) : (
                <p>En cours de chargement</p>
            )}
        </div>
    );
}

export default DrinkDetailsPage;