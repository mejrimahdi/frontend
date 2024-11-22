import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { deleteUser } from '../redux/Actions/UserActions';

const DeleteUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Récupérer l'utilisateur connecté depuis Redux
    const user = useSelector(state => state.UserReducer.user);

    // Gérer la suppression de l'utilisateur
    const handleDelete = async () => {
        if (user) {
            await dispatch(deleteUser(user._id));  // Appelle l'action deleteUser avec l'ID de l'utilisateur
            
            // Supprimer le token ou les informations utilisateur locales (si nécessaire)
            localStorage.removeItem('token'); 
            
            // Rediriger vers la page d'accueil après la suppression
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Delete Account</h2>
            <p>Are you sure you want to delete your account? This action is irreversible.</p>
            <Button variant="danger" onClick={handleDelete}>Delete My Account</Button>
        </div>
    );
};

export default DeleteUser;
