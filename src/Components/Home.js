import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

// Importation des images locales
import Produit1 from '../assets/images/produit1.png';
import Produit2 from '../assets/images/produit2.png';
import Produit3 from '../assets/images/produit3.png';

const Home = () => {
  return (
    <div
      className="vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/007/360/257/large_2x/close-up-of-nature-view-green-leaf-on-blurred-greenery-background-under-sunlight-with-bokeh-and-copy-space-using-as-background-natural-plants-landscape-ecology-wallpaper-concept-free-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="text-center mb-5">
        <h1
          className="animate-title"
          style={{
            fontSize: '7rem',
            position: 'relative',
            top: '50px',
            left: '-300px',
          }}
        >
          <span style={{ color: '#0C2340' }}>Para</span>
          <span style={{ color: '#0066b2' }}>Click</span>
        </h1>
        <p
          className="animate-subtitle"
          style={{
            fontSize: '2.5rem',
            position: 'relative',
            top: '60px',
            left: '-220px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#4CBB17' }}>Votre bien-être à portée en </span>
          <span className="animate-click">Click</span>
        </p>
      </div>

      {/* Carousel */}
      <div style={{ width: '120%', maxWidth: '900px' }}>
        <Carousel fade interval={2000} pause="hover" controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Produit1}
              alt="Produit 1"
              style={{
                background: 'transparent',
                objectFit: 'contain',
                border: 'none',
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Produit2}
              alt="Produit 2"
              style={{
                background: 'transparent',
                objectFit: 'contain',
                border: 'none',
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Produit3}
              alt="Produit 3"
              style={{
                background: 'transparent',
                objectFit: 'contain',
                border: 'none',
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
