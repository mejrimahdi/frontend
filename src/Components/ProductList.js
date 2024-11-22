import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';
import { addProduct, getProducts } from '../redux/Actions/ProductActions';

const ProductList = ({ search }) => {
    const dispatch = useDispatch();
    const ListProduct = useSelector(state => state.ProductReducer.products);
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgURL, setImgURL] = useState("");
    const [type, setType] = useState("");

    const handleClick = () => {
        dispatch(addProduct({ id: Math.random(), name, description, price, imgURL, type }));
        handleClose();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Filtrage des produits en fonction de la recherche
    const filteredProducts = ListProduct?.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#4CBB17' }}>
  Nos Produits
</h1>
            <Button variant="primary" onClick={handleShow} className="mb-3">
                Add New Product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Name</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter product name"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Description</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Price</InputGroup.Text>
                            <Form.Control
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter product price"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Image URL</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setImgURL(e.target.value)}
                                placeholder="Enter image URL"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Type</InputGroup.Text>
                            <Form.Select onChange={(e) => setType(e.target.value)}>
                                <option value="">Select type</option>
                                <option value="Peaux Grasses">Peaux Grasses</option>
                                <option value="Peaux Séches">Peaux Séches</option>
                                <option value="Peaux Mixtes">Peaux Mixtes</option>
                                <option value="Peaux Acnéiques">Peaux Acnéiques</option>
                                <option value="Peaux Sensibles">Peaux Sensibles</option>
                                <option value="Anti-Age & Anti-Ride">Anti-Age & Anti-Ride</option>
                                <option value="Anti-Tâches & Dépigmentants">Anti-Tâches & Dépigmentants</option>
                                <option value="Anti-Imperfections">Anti-Imperfections</option>
                                <option value="Stick & Baume à Lèvres">Stick & Baume à Lèvres</option>
                            </Form.Select>
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Register Product
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="product-grid">
    {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
        ))
    ) : (
        <p className="text-center">Aucun produit trouvé.</p>
    )}
</Row>
        </div>
    );
};

export default ProductList;
