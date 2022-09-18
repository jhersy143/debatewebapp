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
      
            <Nav.Link href="/profile">Personal Info</Nav.Link>
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
      <Row className="justify-content-md-center">
           <Col md = "6">
           <Nav.Link   href="/create">
           <Button type="submit" variant="primary" className={styles.btnCreate}>
             Create a Debate
           </Button> 
           </Nav.Link>
           </Col>
        
           </Row>  
     
        {users.map((user, key) =>
        {
        return(

    
                        
         <Row className="justify-content-md-center" >
           <Col md="6"  > 
           <Card className= {styles.card}  >
        
         <Card.Body >
           <Card.Title>
           <Container fluid="md">
             <Row >
              <Col  xs="2" lg="2" className = {styles.colLogo}> 
                 <Image rounded  src={userImage} className={styles.imgLogo} alternate="no image"/>
               </Col>
               <Col xs="6" lg="10" className = {styles.Colname}> 
               <Stack gap={1} >
               <Card.Text className={styles.cardText}>Jhersy A. Fernandez</Card.Text>
                 <Card.Text className={styles.cardText}>2 hr</Card.Text>
                 </Stack>
                 
               </Col>
   
             </Row>
             <Row>
          
               <Col md="12" className={styles.colContent}> 
               <Card.Text className={styles.cardCotent}>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
                 
               </Col>
             </Row>
           </Container>
           </Card.Title>
          
       
           <Container fluid="md">
             <Row className={styles.views}>
             <Col lg = "1" className={styles.viewsText}> 
             <Card.Text >
             <HiEye className={styles.iconTotal} /> 100k
           </Card.Text>
           </Col>
              <Col  lg = "1"  className={styles.viewsText}> 
              <Card.Text >
              <HiPlusCircle  className={styles.iconPros}/> 100
              </Card.Text>
               
               </Col>
               <Col  lg = "1" className={styles.viewsText}> 
               <Card.Text >
               <HiMinusCircle className={styles.iconCons} />  100
           </Card.Text>
                 
               </Col>
             </Row>
             <Row >
              <Col md = "12" className={styles.commentLabel} > 
              <Card.Text >
               Comments:
               </Card.Text>
               
               </Col>
             
             </Row>
             <Row >
              <Col onClick={handleClick}  md={prosisActivve?"11":"1"} className={styles.prosCol}> 
              <Card.Text className={styles.prosText}>
              <HiPlusCircle  style={{fontSize:20}}/> {prosisActivve?"Pros":""}  
              </Card.Text>
               </Col>
   
               <Col  onClick={handleClick}  md={prosisActivve?"1":"11"} className={styles.consCol}> 
               <Card.Text className={styles.consText}>
               <HiMinusCircle  style={{fontSize:20}}/> {prosisActivve?"":"Cons"}   
             </Card.Text>
                 
               </Col>
             </Row>
             {/* Comments */}
             <Row style={{marginTop:30}}>
               <Col lg = "12" className={styles.colComentTextarea}>
                   <Form.Control as="textarea" className={styles.comentTextarea}  placeholder="Leave a comment here" />  
               </Col>
               
             </Row>
             <Form>
                 <Row>
                 
                 <Col lg="3" className={styles.colbtnComment}>
                 <Button type="submit" variant="light"  className={styles.btnCancel}>
                                 Cancel
                             </Button>
                 </Col>
                 <Col lg="3" className={styles.colbtnComment}>
                 <Button type="submit" variant="primary" className={styles.btnComment}>
                                 Comment
                             </Button>
                 </Col>
                 
               </Row>
             </Form>
           
             <Row >
               {/* Pros comments */}
               
               <PostComments token={token} prosisActivve={prosisActivve} onClick ={handleClick} Types={"Pros"}/>
                {/* Pros comments */}
               {/* Cons comments */}
               
               <PostComments token={token} prosisActivve={prosisActivve} onClick ={handleClick} Types={"Cons"}/>
                {/* Cons comments */}
             </Row>
            
           </Container>
         </Card.Body>
       </Card></Col>
         </Row>
       );}
        )}
 
       
   
    </Container>
  );
}

export default Profile;