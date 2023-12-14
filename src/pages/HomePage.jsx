import Footer from "../components/Footer";
import Header from "../components/Header";
import LastDrinks from "../components/LastDrinks";
import RandomCategory from "../components/RandomCategory";

const HomePage = () => {

    return (
        <>
            <Header />
            <h1>Bienvenue sur Vinci Cocktails !</h1>
            <RandomCategory />
            <LastDrinks />
            <Footer />
        </>
    );
}

export default HomePage;