import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Div from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import {useNavigate,useParaams} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import  styles from './Register.module.css';
import  Logo from '../images/icon.png';
import Image from 'react-bootstrap/Image';
function Register() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
   
        axios.post('http://localhost/api/users.php', inputs).then(function(response){
            console.log(response.data);

            navigate('/register');
        });
        
    }
  return (
      <Container className = {styles.container}>
         
          <Row className="justify-content-md-center">
              
              <Col md="5">
              <Card className={'mt-5'+ ' '+styles.card} >
              <Div  md="5" className={styles.formHeader}> 
                    <Image  src={Logo} className={styles.logo} rounded/>
              </Div>
              <Div variant="top" md="5" className={styles.formHeader}> 
                    <Card.Text className={styles.formHeadertext}>
                        REGISTER
                    </Card.Text>
                        
                        </Div>
              <Card.Body >
             
              <Form onSubmit={handleSubmit}>
                    <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                   
                    <Form.Control type="email" placeholder="Enter email" className={styles.formTextbox} name = "email" onChange={handleChange} />
                    <Form.Label className={styles.formLabel}>Email</Form.Label>
                    </Form.Group>

                    <Form.Group className={styles.formGroup} controlId="formFname" >
                    
                    <Form.Control type="text" placeholder="First Name" className={styles.formTextbox} name = "firstname" onChange={handleChange}/>
                    <Form.Label className={styles.formLabel}>First Name</Form.Label>
                    </Form.Group>

                    <Form.Group className={styles.formGroup} controlId="formLname">
                    
                    <Form.Control type="text" placeholder="Last Name" className={styles.formTextbox} name = "lastname" onChange={handleChange}/>
                    <Form.Label className={styles.formLabel}>Last Name</Form.Label>
                    </Form.Group>

                    <Form.Group className={styles.formGroup} controlId="formBasicPassword" >
                    
                    <Form.Control type="password" placeholder="Password" className={styles.formTextbox} name = "password" onChange={handleChange}/>
                    <Form.Label className={styles.formLabel}>Password</Form.Label>
                    </Form.Group>
                   
                   
                    <Form.Group  style={{textAlign:'center'}}>
                       
                    <Button type="submit"  className={styles.btnregisterForm  +  ' '  + styles.btnRegister}>
                            Register
                    </Button>
                    </Form.Group>
                    <Form.Group  style={{textAlign:'center'}}>
                        <Nav.Link className={styles.btnLogin}  href="/login">Already have  an account.</Nav.Link>
                    </Form.Group>
                   
                
                </Form>
                </Card.Body>    
                </Card>
              </Col>
          </Row>
               

      </Container>
   

  );
}

export default Register;