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
      
      <Container>
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
                        <Div variant="top" md="5" style={{backgroundColor: "#8AFFC7",height:50,color:"#FFFFFF",display: 'flex', justifyContent: 'center', alignItem: 'center' }}> 
                        <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder' }}>
                        LOGIN
                        </Card.Text>
                        
                        </Div>
              <Card.Body >
             
              <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{display: 'flex',flexDirection:'column'}}>
                    <Form.Label style={{alignSelf: 'center'}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{width:300,alignSelf: 'center'}} name ="email" onChange={handleChange}/>

                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword" style={{display: 'flex',flexDirection:'column'}}>
                    <Form.Label style={{alignSelf: 'center'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{width:300,alignSelf: 'center'}}  name ="password" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                        <Button type="submit"  style={{backgroundColor: "#8AFFF8",height:40,color:"#FFFFFF",width:200}}>
                            Login
                        </Button>
                   
                    </Form.Group>
                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                    <Form.Label style={{textAlign:'center'}}>Or</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{textAlign:'center'}}>
                       
                    <Button  style={{backgroundColor: "#8AFFC7",height:40,color:"#FFFFFF",width:200}}>
                   
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