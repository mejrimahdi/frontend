import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/Actions/UserActions';
import { FaRegPaperPlane } from 'react-icons/fa';

function Login() {
  const user = useSelector(state => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div style={{ backgroundColor: '#a3de83', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
      <h1 className="mb-4 text-center" style={{ color: '#0066b2' }}>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '10px' }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" onClick={handleClick} className="w-100" style={{ borderRadius: '10px', backgroundColor: '#007bff', border: 'none' }}>
  <FaRegPaperPlane size={20} style={{ color: 'white' }} />
</Button>
      </Form>
    </div>
  );
}

export default Login;
