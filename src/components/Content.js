import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { HiEye,HiMinusCircle,HiPlusCircle } from "react-icons/hi";
import { useState } from 'react';
import PostComments from './Comments'

function Content(token) {
  const [prosisActivve,setproisActive] = useState(true);

  function handleClick()
    {
      setproisActive(current=>!current);
      }
  return (
    
    <Container fluid="md" >
      <Row className="justify-content-md-center">
        <Col md="6"  > 
        <Card className='mt-5' style={{ width: '100%',height:'100%'}}>
     
      <Card.Body >
        <Card.Title>
        <Container fluid="md">
          <Row >
           <Col md="1 " className='ml-1'  > 
              <Image rounded  src={userImage} width="40" height="40"/>
            
            </Col>
            <Col md="6" > 
            <Stack gap={1} >
            <Card.Text style={{fontSize: 14,padding:0,margin:0,fontStyle:'roboto',fontWeight:"bold"}}>Jhersy A. Fernandez</Card.Text>
              <Card.Text style={{fontSize: 14,padding:0,margin:0,fontStyle:'roboto',fontWeight:"bold" }}>2 hr</Card.Text>
              </Stack>
              
            </Col>
          </Row>
          <Row>
          <Col md="1 " className='ml-1'  > 
            
            
            </Col>
            <Col md="11" > 
            <Card.Text style={{fontSize: 14,padding:0,marginTop:5}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
              
            </Col>
          </Row>
        </Container>
        </Card.Title>
       
        <Card.Text style={{fontWeight:'bolder'}}>
          <HiEye  style={{fontSize:20}}/> 100
        </Card.Text>
        <Container fluid="md">
          <Row >
           <Col  md="6" style={{backgroundColor: "#1DA185",height:50,color:"#FFFFFF",display: 'flex', justifyContent: 'center', alignItem: 'center' }}> 
           <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder' }}>
           <HiPlusCircle  style={{fontSize:20,fontStyle:'roboto'}}/> PROS 100
           </Card.Text>
            
            </Col>
            <Col md="6" style={{backgroundColor: "#BD392E",height:50,color:"#FFFFFF",display: 'flex', justifyContent: 'center', alignItem: 'center'  }}> 
            <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder' }}>
            <HiMinusCircle  style={{fontSize:20,fontStyle:'roboto'}}/> CONS 100
        </Card.Text>
              
            </Col>
          </Row>
          <Row >
           <Col md="12" className='ml-1'  > 
           <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder',fontStyle:'roboto' }}>
            Comments:
            </Card.Text>
            
            </Col>
          
          </Row>
          <Row >
           <Col onClick={handleClick}  md={prosisActivve?"11":"1"} style={{backgroundColor: "#1DA185",height:50,color:"#FFFFFF",display: 'flex', justifyContent: 'center', alignItem: 'center' }}> 
           <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder' }}>
           <HiPlusCircle  style={{fontSize:20,fontStyle:'roboto'}}/> {prosisActivve?"PROS":""}  
           </Card.Text>
            
            </Col>
            <Col  onClick={handleClick}  md={prosisActivve?"1":"11"} style={{backgroundColor: "#BD392E",height:50,color:"#FFFFFF",display: 'flex', justifyContent: 'center', alignItem: 'center'  }}> 
            <Card.Text style={{marginTop:13,marginBottom:13,fontWeight:'bolder' }}>
            <HiMinusCircle  style={{fontSize:20,fontStyle:'roboto'}}/> {prosisActivve?"":"CONS"}   
          </Card.Text>
              
            </Col>
          </Row>
          {/* Comments */}
          <Row style={{marginTop:30}}>
            <Col>
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{height:80}}/>  
            </Col>
            
          </Row>
          <Form>
              <Row>
              
              <Col lg="2">
              <Button type="submit" variant="light" style={{marginTop:10,fontStyle:'roboto'}}>
                              Cancel
                          </Button>
              </Col>
              <Col lg="2">
              <Button type="submit" variant="primary" style={{marginTop:10,fontStyle:'roboto'}}>
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
    </Container>
  );
}

export default Content;