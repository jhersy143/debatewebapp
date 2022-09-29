import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card,Form  } from 'react-bootstrap';
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
        <Card  className={styles.cardProfileheader}>
     
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

            <Card.Text className={styles.name}  key={key}>{user.firstname + " " +user.lastname}</Card.Text>
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
        
        <Navbar>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarFooter}>
          <Nav className="me-auto" >
      
            <Nav.Link href="/personalinfo" className={styles.navlinkFooter}>Profile</Nav.Link>
            <Nav.Link href="/post" className={styles.navlinkFooter}>Post</Nav.Link>
            
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
        <Card className={styles.cardPersonalinfo}>
     
      <Card.Body >
        <Card.Title>
        {users.map((user, key) =>
        {
        return(

        
        <Container fluid="md" key ={key}>
        
        <Row className={styles.rowTextarea + " "+"justify-content-center"}>
         
        <Col lg = "11" className={styles.colComentTextarea}>
        <Form   name="a" >
                <Form.Control as="textarea"  value="" className={styles.Textarea} name = "address" placeholder="Address"   />  
        </Form>    
            </Col>
         </Row>
 
         <Row className={styles.rowTextarea+ " "+"justify-content-center"} >
         
         <Col lg = "11" className={styles.colComentTextarea}>
         <Form   name="a" >
                 <Form.Control as="textarea"  value="" className={styles.Textarea} name = "comment" placeholder="Birthday"   />  
         </Form>    
             </Col>
          </Row>

          <Row className={styles.rowTextarea+ " "+"justify-content-center"} >
         
         <Col lg = "11" className={styles.colComentTextarea}>
         <Form   name="a" >
                 <Form.Control as="textarea"  value="" className={styles.Textarea} name = "comment" placeholder="Contact"   />  
         </Form>    
             </Col>
          </Row>

      <Row className={styles.rowTextarea+ " "+"justify-content-center"} >
         
        <Col lg = "11" className={styles.colComentTextarea}>
        <Form   name="a" >
                <Form.Control as="textarea"  value="" className={styles.Textarea} name = "comment" placeholder="Work"   />  
        </Form>    
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