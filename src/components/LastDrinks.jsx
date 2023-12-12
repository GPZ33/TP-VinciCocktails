import { Box, CircularProgress } from "@mui/material";
import DrinkCard from "./DrinkCard";

const LastDrinks = ({ drinks }) => {

    const lastFourDrinks =  drinks ? drinks.slice(-4) : null ;
    
    console.log(drinks);
    return (
        <>
            <section>
                {lastFourDrinks ? (
                    <>
                    <h3>Les quatre dernièrs cocktails :</h3>
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