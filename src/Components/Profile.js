import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteUser, resetPasswordUser } from '../redux/Actions/UserActions';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(state => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const togglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  const handleDelete = async () => {
    await dispatch(deleteUser(user._id));
    navigate("/");
  };

  const handleChangePassword = async () => {
    await dispatch(resetPasswordUser(user._id, newPassword));
    setShowPasswordForm(false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="container mt-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
      <h1 className="mb-4 text-center" style={{ fontWeight: 'bold', color: '#4CBB17' }}>Profile</h1>
      <Card className="mx-auto" style={{
        width: '24rem', borderRadius: '15px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', backgroundColor: '#ecf0f1'
      }}>
        {user?.photo && <Card.Img variant="top" src={user.photo} style={{ borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto' }} />}
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Title style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#34495e' }}>{user?.username}</Card.Title>
          <Card.Text style={{ fontSize: '1rem', color: '#7f8c8d' }}>Email: {user?.email}</Card.Text>
          <Card.Text style={{ fontSize: '1rem', color: '#7f8c8d' }}>Age: {user?.age}</Card.Text>
          <Card.Text style={{ fontSize: '1rem', color: '#7f8c8d' }}>Phone: {user?.phone}</Card.Text>
          <div className="d-flex justify-content-around mt-4">
            <Button variant="danger" onClick={handleDelete} style={{
              backgroundColor: '#e74c3c', border: 'none', padding: '10px 20px', fontSize: '1rem', borderRadius: '5px'
            }}>Delete Account</Button>
            <Button variant="info" onClick={togglePasswordForm} style={{
              backgroundColor: '#3498db', border: 'none', padding: '10px 20px', fontSize: '1rem', borderRadius: '5px'
            }}>
              {showPasswordForm ? "Cancel" : "Modify Password"}
            </Button>
          </div>
          {showPasswordForm && (
            <Form.Group className="mt-3" controlId="formNewPassword">
              <Form.Label style={{ fontSize: '1.2rem', color: '#34495e' }}>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ borderRadius: '10px', padding: '10px', borderColor: '#bdc3c7' }}
              />
              <Button variant="primary" className="mt-2" onClick={handleChangePassword} style={{
                backgroundColor: '#2ecc71', border: 'none', padding: '10px 20px', fontSize: '1rem', borderRadius: '5px'
              }}>Update Password</Button>
            </Form.Group>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
