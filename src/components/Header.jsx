import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const Header = () => {

  //Attention, avec l'API qui limite la requête fetch à 25 resultats, les resultats de la recherche ne marche que pour ces 25 verres

  const [drinks, setDrinks] = useState(null);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    (async () => {
      const drinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
      const drinksResponseData = await drinksResponse.json();

      setDrinks(drinksResponseData.drinks);
    })();
  }, []);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

    // Filtrer les boissons correspondant à la recherche
    const filteredDrink = drinks.filter((el) => {
      return el.strDrink.toLowerCase().includes(lowerCase);
    });

    // Mettre à jour les résultats de la recherche
    setSearchResults(filteredDrink);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href='/'>VINCI Cocktails</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/">Home</Link></Nav.Link>

            <Nav.Link><Link to="/drinks">Nos verres</Link></Nav.Link>
            <Nav.Link><Link to="/cocktails">Nos cocktails</Link></Nav.Link>
            <Nav.Link><Link to="/categories">Nos categories</Link></Nav.Link>
            <Nav.Link><Link to="/ingredients">Nos ingredients</Link></Nav.Link>
          </Nav>
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 flex-grow-1"
              aria-label="Search"
              onChange={inputHandler}
            />
            {searchResults.length > 0 && (
              <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: '#fff', zIndex: 100 }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {searchResults.map((drink) => (
                    <li key={drink.idDrink}><Link to={`/drink/details/${drink.idDrink}`}>{drink.strDrink}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;