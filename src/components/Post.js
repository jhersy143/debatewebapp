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
import styles from "./Post.module.css";
import Form from 'react-bootstrap/Form'
import PostComments from './Comments'
import Postcontent from './Postcontent';
function Profile({token}) {
  const [users, setUsers] = useState([]);
  const [prosisActivve,setproisActive] = useState(true);
  const [offset, setOffset] = useState(0);
  const [scroll,setScroll] = useState(false);
  function handleClick()
    {
      setproisActive(current=>!current);
      }
     
 function getUsers(token) {
        axios.get(`http://localhost/api/users.php/${token}/profile`).then(function(response) {
           
            setUsers([response.data]);

        });
    }
      useEffect(() => {
          const onScroll = () => setOffset(window.pageYOffset);
          getUsers(token);
          if(offset>0){
            setScroll(true); 
         
          }
          else{
             setScroll(false); 
          }
          
          // clean up code
          window.removeEventListener('scroll', onScroll);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
      }, [offset]);
  return (
    <>
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
         
   
      <Postcontent ></Postcontent>
   
 
       
   
    </Container>

     </>
  );
}

export default Profile;