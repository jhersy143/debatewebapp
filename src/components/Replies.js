import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card } from 'react-bootstrap';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

function Replies({token,type}) {

  return (
 
    
            <Row style={{marginTop:10,paddin:0}}> 
                        
                        <Col md="11">
                        <Container fluid="md" >
                                <Row>
                            
                                <Col md="12">
                                <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder',fontSize:13,fontWeight:'bolder',fontStyle:'roboto'}}>
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
                        <Card.Text style={{fontSize: 13,padding:0,margin:0,fontWeight:'bolder',fontStyle:'roboto'}}>Jhersy A. Fernandez</Card.Text>
                            <Card.Text style={{fontSize: 13,padding:0,margin:0 ,fontWeight:'bolder',fontStyle:'roboto'}}>2 hr</Card.Text>
                            </Stack>
                            
                        </Col>
                        </Row>
                        <Row>
                        <Col md="1 " className='ml-1'  > 
                        
                        
                        </Col>
                        <Col md="11" > 
                        <Card.Text style={{fontSize: 14,padding:0,marginTop:5,fontStyle:'roboto'}}>
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

