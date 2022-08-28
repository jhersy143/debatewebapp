import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Div from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import axios from "axios"
import { useEffect, useState } from "react";
import {useNavigate,useParaams} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import PropTypes from "prop-types";
import  styles from './login.module.css';
export default function Login({setToken}) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit =  async (event) => {
        event.preventDefault();
        
        axios.post('http://localhost/api/users.php/login', inputs).then(function(response){
    
            if(response.data['status']==0){
                setShow(true);
             
            }
            else{
           
                setToken(response.data['userID']);
                navigate('/');
             
            }
            
        });
        
    }
   
     
  return (
      
      <Container className = {styles.container} style={{height:1000}}>
          {
              show &&
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap!!</Alert.Heading>
                <p>
                Wrong Email or Password.
                </p>
                </Alert>
              
           
          
          }
          
          <Row className="justify-content-md-center">
              
              <Col md="5">
              <Card className='mt-5' style={{ width: '100%',height:'100%'}}>
                        <Div variant="top" md="5" className={styles.formHeader}> 
                        <Card.Text>
                        LOGIN
                        </Card.Text>
                        
                        </Div>
              <Card.Body >
             
              <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formBasicEmail" className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name ="email" onChange={handleChange} className={styles.formTextbox}/>

                    </Form.Group>

                    <Form.Group  controlId="formBasicPassword" className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{width:300,alignSelf: 'center'}}  name ="password" onChange={handleChange} className={styles.formTextbox}/>
                    </Form.Group>
                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                        <Button type="submit"  className={styles.btnloginForm +' '+styles.btnLogin}>
                            Login
                        </Button>
                   
                    </Form.Group>
                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                    <Form.Label style={{textAlign:'center'}}>Or</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{textAlign:'center'}}>
                       
                    <Button  className={styles.btnloginForm +' '+styles.btnRegister}>
                   
                    <Nav.Link href="/register"> Sign-Up</Nav.Link>
                    </Button>
                    </Form.Group>
                </Form>
                </Card.Body>    
                </Card>
              </Col>
          </Row>
               

      </Container>
   

  );
}
Login.prototype = {
    setToken:PropTypes.func.isRequired
}