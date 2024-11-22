import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/Actions/UserActions';
import { FaRegPaperPlane } from 'react-icons/fa';

const Register = () => {
  const user = useSelector(state => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [photo, setPhoto] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = async () => {
    await dispatch(registerUser({ name: userName, email, password, age, photo, phone }));
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div style={{ backgroundColor: '#a3de83', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
      <h1 className="mb-4 text-center" style={{ color: '#0066b2' }}>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your photo URL"
            onChange={(e) => setPhoto(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone"
            onChange={(e) => setPhone(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleClick} className="w-100" style={{ borderRadius: '10px', backgroundColor: '#007bff', border: 'none' }}>
  <FaRegPaperPlane size={20} style={{ color: 'white' }} />
</Button>
      </Form>
    </div>
  );
};

export default Register;
