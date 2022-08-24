import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card } from 'react-bootstrap';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import Replies from './Replies';
function Comments({token,prosisActivve,onClick,Types}) {

console.log(Types=="Pros")
console.log("proactive"+prosisActivve)


  return (
      

        <Col  onClick={onClick}  sm={Types=="Pros"?prosisActivve?"11":"1":prosisActivve?"1":"11"} style={{backgroundColor: "#FFFFFF",marginTop:20,display: 'flex', justifyContent: 'center', alignItem: 'center',display:Types=="Pros"?prosisActivve?"":"none":prosisActivve?"none":"" }} >
 
        <Container fluid="md" >
            <Row >
            <Col md="1" > 
                <Image rounded  src={userImage} width="35" height="35"/>
                
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
                <Card.Text style={{fontSize: 14,padding:0,marginTop:5,fontStyle:'roboto'}}>{Types=="Pros"?"PROS COMMENTS":"CONS COMMENTS"}
                
                </Card.Text>
                
                </Col>
            </Row>
            {/* Cons Replies */}
            <Replies token={token} type={Types}/>
           
            {/* Cons Replies */}
        </Container>

        </Col>
    
  );
}

export default Comments;
