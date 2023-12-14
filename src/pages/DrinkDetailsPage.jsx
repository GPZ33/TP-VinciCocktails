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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div class="card mb-3" style={{ maxWidth: '540px', marginTop: '20px', boxShadow: '44px 0px 50px 0px rgba(0,0,0,0.1)' }}>
                            <img src={drink.strDrinkThumb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{drink.strCategory + " : " + drink.strDrink}</h5>
                                <h6 class="card-title"><Link to={`/category/drinks/${drink.strCategory}`}> Les autres {drink.strCategory} </Link> </h6>
                                <p class="card-text">{renderIngredients()}</p>
                                <p class="card-text">{drink.strInstructions}</p>
                                <p class="card-text"><small class="text-body-secondary">{drink.dateModified}</small></p>
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