import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card } from 'react-bootstrap';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import  styles  from  './Replies.module.css';
function Replies({token,type}) {

  return (
 
    
            <Row className={styles.row}> 
                        
                        <Col md="11">
                        <Container fluid="md" >
                                <Row>
                            
                                <Col md="12">
                                <Card.Text className={styles.repliesText}>
                            Replies:
                            </Card.Text>  
                            </Col>
                        </Row>
                        <Row >
                        <Col md="1" > 
                            <Image rounded  src={userImage} width="30" height="30"/>
                        
                        </Col>
                        <Col md="5" > 
                        <Stack gap={0} >
                        <Card.Text className={styles.cardTitle}>Jhersy A. Fernandez</Card.Text>
                            <Card.Text className={styles.cardTitle}>2 hr</Card.Text>
                            </Stack>
                            
                        </Col>
                        </Row>
                        <Row>
                        <Col md="1 " className='ml-1'  > 
                        
                        
                        </Col>
                        <Col md="11" > 
                        <Card.Text  className={styles.replyText}>
                        {type=="Pros"?"PROS REPPLIES":"CONS REPPLIES"}
                
                        </Card.Text>
                            
                        </Col>
                        </Row>
                        
                        </Container>
                        </Col>
            </Row>
          
      
    
  );
}

export default Replies;

