import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCart from './ProductCart';
import './ProductCard.css';
import { removeProductFromCart } from '../redux/Actions/ProductActions';

const CartList = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.ProductReducer?.cart);

    // Calculer le total de tous les produits
    const totalAmount = cart?.reduce(
        (acc, product) => acc + product.price * (product.quantity || 1),
        0
    );

    // Fonction pour supprimer un produit du panier
    const handleDelete = (productId) => {
        dispatch(removeProductFromCart(productId)); // Appeler l'action avec l'ID du produit
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#4CBB17' }}>
                    Votre Panier
                </h1>
                <div
                    className="total-box"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Total : {totalAmount?.toFixed(2) || 0} TND
                </div>
            </div>
            <div className="product-grid">
                {cart?.map((product) => (
                    <ProductCart
                        key={product._id}
                        product={product}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartList;
