import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaUser, FaPlus } from 'react-icons/fa';
import { Search } from 'react-bootstrap-icons';
import { logoutUser } from '../redux/Actions/UserActions';
import logo from '../assets/images/logo.png';

function Navb({ search, setSearch }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer.user);
  const isAdmin = user && user.role === 'admin';

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      {/* Barre de navigation supérieure */}
      <Navbar bg="light" variant="light" className="shadow-sm custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="ClickCare" style={{ height: '80px' }} />
          </Navbar.Brand>

          {/* Formulaire de recherche */}
          <Form className="d-flex me-3" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="search"
              placeholder="Rechercher un produit"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '300px' }}
            />
            <Button variant="outline-success">
              <Search />
            </Button>
          </Form>

          <div className="d-flex align-items-center">
            {isAdmin && (
              <Link to="/add-product" className="me-3 text-decoration-none">
                <Button variant="outline-primary">
                  <FaPlus /> Ajouter un produit
                </Button>
              </Link>
            )}
            <Link
            to="/cart"
            className="me-3 text-decoration-none"
            onMouseOver={(e) => (e.currentTarget.firstChild.style.color = "#4CBB17")}
            onMouseOut={(e) => (e.currentTarget.firstChild.style.color = "gray")}>
              <FaShoppingCart size={24} style={{ color: "gray" }} />
            </Link>

            {user ? (
              <>
                <Link to="/profile" className="me-3 text-decoration-none">
                <FaUser
                size={24}
                style={{ color: '#6c757d' }} // Couleur par défaut
                onMouseEnter={(e) => (e.target.style.color = '#0066b2')} // Couleur au survol
                onMouseLeave={(e) => (e.target.style.color = '#6c757d')} // Couleur par défaut après survol
                />
                </Link>
                <Button variant="outline-danger" onClick={handleLogout}>
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="me-2">
                  <Button variant="outline-primary">Connexion</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Inscription</Button>
                </Link>
              </>
            )}
          </div>
        </Container>
      </Navbar>

      {/* Barre de navigation inférieure */}
      <Navbar expand="lg" bg="light" variant="light" className="mb-4 shadow-sm custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown 
                title={
                  <Link to="/ProductsList" style={{ color: 'black', textDecoration: 'none' }}>
                    Visage
                  </Link>
                } 
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Peaux Grasses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Peaux Séches</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Peaux Mixtes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Peaux Acnéiques</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Peaux Sensibles</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Anti-Age & Anti-Ride</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Anti-Tâches & Dépigmentants</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Anti-Imperfections</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">Stick & Baume à Lèvres</NavDropdown.Item>
              </NavDropdown>

            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      corps
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Hygiène Corporelle</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hydratation & Nutrition</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gommages & Exfoliants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Epilation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Anti-Grattage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Massage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soins Des Mains</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soins Des Pieds</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Produits Soins Minceur</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      Cheveux
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Shampoing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Aprés-Shampoing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Masques</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soins Capillaires</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      Maman & Bébé
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Maman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Soins & Toilette Bébé</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Change & Soins De Siège</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessoires</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      Solaire
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Créme Solaire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pack Solaire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aprés Solaire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Peaux Acnéiques</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Solaire Bébés Enfants</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      Hygiène
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Douche & Bain</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Déodorant & Anti-Transpirant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hygiène Bucco-Dentaire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Anti-Acarien & Anti-Moustique</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hygiène Intime</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Plaisirs</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      Hommes
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Hygiène Corporelle</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Déodorant & Anti-Transpirant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soins Capillaires</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Solaire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rasage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soins De Visage</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown 
  title={
    <span 
      style={{ color: 'black' }} 
      onMouseOver={e => e.target.style.color = '#318CE7'} 
      onMouseOut={e => e.target.style.color = 'black'}
    >
      Compléments Alimentaires
    </span>
  } 
  id="basic-nav-dropdown"
>
              <NavDropdown.Item href="#action/3.1">Stimulants Sexuels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Stimulants Immunitaires</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Minceur</NavDropdown.Item>
              
            </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;
