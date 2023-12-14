import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
                        {`${measure}`} <Link to={`/ingredient/drinks/${ingredient}`}>{`${ingredient}`}</Link>
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
                    <h1>{drink.strCategory + " : " + drink.strDrink}</h1>
                    <h5>{"Date : " + drink.dateModified}</h5>
                    <img src={drink.strDrinkThumb}></img>
                    <ul> <h5>Ingrédients :</h5>
                        {renderIngredients()}
                    </ul>
                    <h5>Consignes</h5>
                    <p>{drink.strInstructions}</p>
                    <div class="card mb-3">
                        <img src={drink.strDrinkThumb} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{drink.strCategory + " : " + drink.strDrink}</h5>
                            <p class="card-text">{renderIngredients()}</p>
                            <p class="card-text">{drink.strInstructions}</p>
                            <p class="card-text"><small class="text-body-secondary">{drink.dateModified}</small></p>
                        </div>
                    </div>
                    <div class="card mb-3" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={drink.strDrinkThumb} class="img-fluid" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{drink.strCategory + " : " + drink.strDrink}</h5>
                                    <p class="card-text">{renderIngredients()}</p>
                                    <p class="card-text">{drink.strInstructions}</p>
                                    <p class="card-text"><small class="text-body-secondary">{drink.dateModified}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <p>En cours de chargement</p>
            )}
        </div>
    );
}

export default DrinkDetailsPage;