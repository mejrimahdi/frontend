import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordUser } from '../redux/Actions/UserActions';

function Reset_password() {
    const dispatch =useDispatch();
    const user =useSelector((state)=>state.UserReducer.user)
    const [password,setPassword] =useState("");


    const handleResetPassword =()=>{
       if (password) {
        dispatch(resetPasswordUser(user._id,password));
       }
    }
  return (
    <div>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          NewPassword
        </Form.Label>
        <Col sm="10">
          <Form.Control
           plaintext  defaultValue="newPassword"
           onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
    </Form>
    <button onClick={handleResetPassword}>submitt</button>
    </div>
  );
}

export default Reset_password;