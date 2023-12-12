import { Box, CircularProgress } from "@mui/material";
import DrinkCard from "../components/DrinkCard";

const RandomDrink= ({ drinks }) => {
    const randomDrink = drinks ? drinks[Math.floor(Math.random() * drinks.length)] : null;
    
    console.log(drinks, "random");
    return (
        <>
            <div>
                {randomDrink ? (
                    <>
                    <h3>Le cocktail du moment :</h3>
                                <>
                                <DrinkCard drink={randomDrink} />
                                </>
                        
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
export default RandomDrink;