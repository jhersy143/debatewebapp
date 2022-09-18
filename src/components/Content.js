import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { HiEye,HiMinusCircle,HiPlusCircle } from "react-icons/hi";
import { useEffect,useState } from 'react';
import PostComments from './Comments'
import styles from './Content.module.css';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function Content({token}) {
  const [prosisActivve,setproisActive] = useState(true);
  const [offset, setOffset] = useState(0);
  const [scroll,setScroll] = useState(false);
  const[contents,setContent]  = useState([]);
  const[inputs,setInputs] = useState([]);
  const[comment,setComment] = useState('');
  const  navigate = useNavigate();

  const handlechange =  (event)=>{

    const name = event.target.name;
    const value = event.target.value;
    setComment(event.target.value);
    setInputs(values=>({...values,[name]:value}));
    
  }
  function insertUserID(){
    const name = "userID";
    const value = token.token;

    setInputs(values=>({...values,[name]:value}))
  }
 
  function handleClick()
    {
      setproisActive(current=>!current);
      }
     
    
      useEffect(() => {
          getContent();
          insertUserID();
       
         // const onScroll = () => setOffset(window.pageYOffset);
          //if(offset>0){ 
           // setScroll(true); 
         
          //}
          //else{
           //  setScroll(false); 
         // }
          
          // clean up code
          //window.removeEventListener('scroll', onScroll);
         // window.addEventListener('scroll', onScroll, { passive: true });
         // return () => window.removeEventListener('scroll', onScroll);
      }, []);
  
      function getContent(){
        axios.get("http://localhost/api/post.php").then(function(response){
          setContent(response.data);
         
         
          
        });
       
      }
      const cancel = async(event)=>{
        setInputs([]);
        setComment('');
        getContent();
        insertUserID();
        console.log(inputs);
     
      }
      const  addComment = async (event)=>{

        event.preventDefault();
    
    
        axios.post("http://localhost/api/comments.php",inputs).then(function(response){
        
          console.log(response.data);
        });
 
        navigate('/');
      }
  return (
    
    <Container fluid="md" className={styles.container} >
    
       <Row className="justify-content-md-center" >
        <Col md = "6">
        <Nav.Link   href="/create">
        <Button type="submit" variant="primary" className={styles.btnCreate}>
          Create a Debate
        </Button> 
        </Nav.Link>
        </Col>
     
        </Row>   
        {contents.map((content,key)=>
              {
                return(
      <Row key={key} className={styles.rowContent+" "+"justify-content-md-center"}>
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
         
            
                  <Stack gap={1}  >
                  <Card.Text className={styles.textName}>{content.firstname + " " +content.lastname}</Card.Text>
                  <Card.Text className={styles.cardTextTime}>2 hours ago</Card.Text>
                  </Stack>
              
          
             
              
            </Col>

          </Row>
          <Row>
       
            <Col md="12" className={styles.colContent}> 
            <Card.Text className={styles.cardCotent}>
             {content.content}
            </Card.Text>
              
            </Col>
          </Row>
        </Container>
        </Card.Title>
       
    
        <Container fluid="md" >
          <Row className={styles.views} md = "12">
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
           <HiPlusCircle  /> {prosisActivve?"Pros":""}  
           </Card.Text>
            </Col>

            <Col  onClick={handleClick}  md={prosisActivve?"1":"11"} className={styles.consCol}> 
            <Card.Text className={styles.consText}>
            <HiMinusCircle /> {prosisActivve?"":"Cons"}   
          </Card.Text>
              
            </Col>
          </Row>
          {/* Comments */}
       
        
          <Row >
            {/* Pros comments */}
            
            <PostComments token={token} prosisActivve={prosisActivve} onClick ={handleClick} Types={"Pros"} postID={content.postID}/>
             {/* Pros comments */}
            {/* Cons comments */}
            
            <PostComments token={token} prosisActivve={prosisActivve} onClick ={handleClick} Types={"Cons"}/>
             {/* Cons comments */}
          </Row>
         
        </Container>
      </Card.Body>
    </Card></Col>
      </Row>
          );
        }
            
        )
        }
    </Container>
  );
}

export default Content;