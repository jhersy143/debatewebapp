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
      <Container>
         
          <Row className="justify-content-md-center">
              
              <Col md="5">
              <Card className='mt-5' style={{ width: '100%',height:'100%'}}>
                        <Div variant="top" md="5" style={{backgroundColor: "#8AFFC7",height:50,color:"#FFFFFF",display: 'flex', justifyContent: 'center', alignItem: 'center' }}> 
                        <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder' }}>
                        REGISTER
                        </Card.Text>
                        
                        </Div>
              <Card.Body >
             
              <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{display: 'flex',flexDirection:'column'}}>
                    <Form.Label style={{alignSelf: 'center'}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{width:300,alignSelf: 'center'}} name = "email" onChange={handleChange} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFname" style={{display: 'flex',flexDirection:'column'}}>
                    <Form.Label style={{alignSelf: 'center'}}>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" style={{width:300,alignSelf: 'center'}} name = "firstname" onChange={handleChange}/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLname" style={{display: 'flex',flexDirection:'column'}}>
                    <Form.Label style={{alignSelf: 'center'}}>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" style={{width:300,alignSelf: 'center'}} name = "lastname" onChange={handleChange}/>

                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword" style={{display: 'flex',flexDirection:'column'}}>
                    <Form.Label style={{alignSelf: 'center'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{width:300,alignSelf: 'center'}} name = "password" onChange={handleChange}/>
                    </Form.Group>
                   
                   
                    <Form.Group className="mb-3" style={{textAlign:'center'}}>
                       
                    <Button type="submit"  style={{backgroundColor: "#8AFFC7",height:40,color:"#FFFFFF",width:200}}>
                    Sign-Up
                    </Button>
                    </Form.Group>

                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                    <Form.Label style={{textAlign:'center'}}>Or</Form.Label>
                    </Form.Group>
                    
                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                        <Button   style={{backgroundColor: "#8AFFF8",height:40,color:"#FFFFFF",width:200}}>
                        <Nav.Link href="/login">Login</Nav.Link>
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

export default Register;