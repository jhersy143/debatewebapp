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
import  styles from './Createdebate.module.css';
import Image from 'react-bootstrap/Image';
import  Logo from '../images/icon.png';
export default function Createdebate({token}) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
 
    useEffect(() => {
        addUserid();
    }, []);

    function addUserid(){
        const name = "userID";
        const value = token;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit =  async (event) => {
        event.preventDefault();
        
        axios.post('http://localhost/api/post.php/create', inputs).then(function(response){
    
            if(response.data['status']==0){
                setShow(true);
                console.log(response.data);
             
            }
            else{
                console.log(response.data);
                //navigate('/');
             
            }
            
        });
        
    }
   
     
  return (
      
      <Container className = {styles.container} >
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
              <Card className={'mt-5'+ ' '+styles.card} >
            
              <Div variant="top" md="5" className={styles.formHeader}> 
                    <Card.Text className={styles.formHeadertext}>
                        Create
                    </Card.Text>
                        
              </Div>
              <Card.Body >
             
              <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formBasicEmail" className={styles.formGroup}>
                    
                    <Form.Control as="textarea" className = {styles.textArea} placeholder="Content here" name="content" style={{height:150}} onChange={handleChange}/>  
                    <Form.Label className={styles.formLabel}></Form.Label>
                    </Form.Group>

                    <Form.Group  controlId="formBasicPassword" className={styles.formGroup}>
                    <Form.Control type="text" placeholder="Yes" name ="pros" onChange={handleChange} className={styles.formTextbox}/>
                    <Form.Label className={styles.formLabel}>Pros</Form.Label>
                    </Form.Group>

                    <Form.Group  controlId="formBasicPassword" className={styles.formGroup}>
                    <Form.Control type="text" placeholder="No"  name ="cons" onChange={handleChange} className={styles.formTextbox}/>
                    <Form.Label className={styles.formLabel}>Cons</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3"  style={{textAlign:'center'}}>
                        <Button type="submit"  className={styles.btnloginForm +' '+styles.btnLogin}>
                            Post
                        </Button>
                   
                    </Form.Group>
                  
                    <Form.Group className="mb-3" style={{textAlign:'center'}}>
                       
                    <Nav.Link href="/"> 
                    <Button variant="light"  className={styles.btnloginForm +' '+styles.btnCancel}>
                              Cancel
                     </Button>
                     </Nav.Link>
                  
                    </Form.Group>
                </Form>
                </Card.Body>    
                </Card>
              </Col>
          </Row>
               

      </Container>
   

  );
}
Createdebate.prototype = {
    setToken:PropTypes.func.isRequired
}