import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import { deleteProduct, updateProduct, addToCart } from '../redux/Actions/ProductActions';
import axios from 'axios';
import { FaTrashAlt, FaEdit, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './ProductCard.css'; // Ajouter un fichier CSS pour les styles personnalisés

function ProductCard(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newPrice, setNewPrice] = useState(props.product.price);

    const handleDelete = () => {
        dispatch(deleteProduct(props.product._id));
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = async () => {
        if (newPrice && newPrice !== props.product.price) {
            try {
                await axios.put(`http://localhost:8000/api/product/updateProduct/${props.product._id}`, { price: newPrice });
                dispatch(updateProduct(props.product._id, { price: newPrice }));
                handleClose();
            } catch (error) {
                console.error('Erreur lors de la mise à jour du prix :', error);
            }
        }
    };

    const handleAddToCart = () => {
        dispatch(addToCart(props.product));
    };

    return (
        <div className="card-container">
            <Card className="custom-card">
                <Card.Img variant="top" src={props.product.imgURL} />
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text className="product-description">{props.product.description}</Card.Text>
                    <Card.Text>
                        {props.product.price} TND
                    </Card.Text>

                    <Button variant="link" onClick={handleDelete} style={{ marginRight: '8px' }}>
                        <FaTrashAlt style={{ color: 'red', fontSize: '1.5rem' }} />
                    </Button>
                    <Button variant="link" onClick={handleShow} style={{ marginRight: '8px' }}>
                        <FaEdit style={{ color: '#00bfff', fontSize: '1.5rem' }} /> {/* Bleu ciel */}
                    </Button>
                    <Button
                        variant="link"
                        style={{
                            color: props.product.dispo ? 'green' : 'red',
                            fontSize: '1.5rem',
                        }}
                    >
                        {props.product.dispo ? <FaCheckCircle /> : <FaTimesCircle />}
                    </Button>

                    <Button
                        variant="success"
                        style={{ marginTop: '10px', width: '100%' }}
                        onClick={handleAddToCart}
                    >
                        Ajouter Au Panier
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product Price</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Price</InputGroup.Text>
                        <Form.Control
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            aria-label="Product Price"
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update Price
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProductCard;
