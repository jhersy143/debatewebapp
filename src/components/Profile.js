import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { HiEye,HiMinusCircle,HiPlusCircle } from "react-icons/hi";
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios"
import styles  from './Profile.module.css';
function Profile({token}) {
  const [users, setUsers] = useState([]);
    
  useEffect(() => {

        getUsers(token);

        }, 
    []);
   
    function getUsers(token) {
        axios.get(`http://localhost/api/users.php/${token}/profile`).then(function(response) {
           
            setUsers([response.data]);

        });
    }
    console.log(users);
  return (

    <Container fluid="md" className={styles.container}>

      <Row className="justify-content-md-center">
        <Col md="6"  > 
        <Card  className={styles.card}>
     
      <Card.Body >
        <Card.Title>
        <Container fluid="md">
          <Row >
           <Col md="1 " className={styles.colLogo +" "+'ml-1' } > 
              <Image rounded  src={userImage}  className={styles.imgLogo} />
            
            </Col>
            <Col md="6" > 

            <Stack gap={1} >
            {users.map((user, key) =>
        {
        return(

            <Card.Text className='mt-2'  style={{fontSize: 20,padding:0,margin:5}} key={key}>{user.firstname + " " +user.lastname}</Card.Text>
        )
         }
        )}
          
              </Stack>
              
            </Col>
          </Row>
         
        </Container>
        </Card.Title>
       
    
      </Card.Body>
      <Card.Footer className={styles.cardFooter}>
        
      <Container fluid="md" style={{margin:0,padding:0}}>
        
        <Navbar bg="light" >
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
            <Nav.Link href="/personalinfo">Personal Info</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
        </Container>
      </Card.Footer>
    </Card>
    
    </Col>
      </Row>
      <Row className="justify-content-md-center mt-2">
        <Col md="6"  > 
        <Card className={styles.card}>
     
      <Card.Body >
        <Card.Title>
        {users.map((user, key) =>
        {
        return(

        
        <Container fluid="md" key ={key}>
        
        <Row className='mt-1' >
         
         <Col md="6" > 
   
         <Card.Text style={{fontSize: 20,padding:0,margin:0}}>Personal Info</Card.Text>
         
           
         </Col>
         </Row>
 
          <Row className='mt-3'>
         
            <Col md="6" > 
      
            <Card.Text style={{fontSize: 14,padding:0,margin:0}}>Email:{user.email}</Card.Text>
            
              
            </Col>
          </Row>
          <Row className='mt-3'>
         
         <Col md="6" > 
   
         <Card.Text style={{fontSize: 14,padding:0,margin:0}}>Firstname:{user.firstname}</Card.Text>
         
           
         </Col>
       </Row>
       <Row className='mt-3'>
         
         <Col md="6" > 
   
         <Card.Text style={{fontSize: 14,padding:0,margin:0}}>Lastname:{user.lastname}</Card.Text>
         
           
         </Col>
       </Row>
        </Container>);}
        )}
        </Card.Title>
       
    
       
      </Card.Body>
    </Card>
    
    </Col>
      </Row>
    </Container>
  );
}

export default Profile;