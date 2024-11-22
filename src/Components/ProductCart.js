import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCart } from '../redux/Actions/ProductActions';
import './ProductCard.css';

function ProductCart({ product, onDelete }) {
    const dispatch = useDispatch();

    // Fonction pour augmenter la quantité
    const incrementQuantity = () => {
        const newQuantity = (product.quantity || 1) + 1;
        dispatch(updateCart(product._id, newQuantity));
    };

    // Fonction pour diminuer la quantité
    const decrementQuantity = () => {
        if (product.quantity > 1) {
            const newQuantity = product.quantity - 1;
            dispatch(updateCart(product._id, newQuantity));
        }
    };

    // Calculer le total pour ce produit
    const totalPrice = product.price * (product.quantity || 1);

    return (
        <Card className="custom-card">
            <Card.Img variant="top" src={product.imgURL} className="card-img" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="product-description">{product.description}</Card.Text>
                <Card.Text>Prix Unitaire : {product.price} TND</Card.Text>
                <Card.Text>Total : {totalPrice.toFixed(2)} TND</Card.Text>

                <div className="d-flex justify-content-between align-items-center">
                    {/* Bouton de suppression */}
                    <Button
                        variant="danger"
                        onClick={() => onDelete(product._id)}
                        className="btn-delete"
                    >
                        Supprimer
                    </Button>

                    {/* Contrôleur de quantité */}
                    <div className="quantity-controller d-flex align-items-center">
                        <Button variant="outline-secondary" onClick={decrementQuantity}>
                            -
                        </Button>
                        <span style={{ margin: '0 10px', fontSize: '1.2rem' }}>
                            {product.quantity || 1}
                        </span>
                        <Button variant="outline-secondary" onClick={incrementQuantity}>
                            +
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCart;
