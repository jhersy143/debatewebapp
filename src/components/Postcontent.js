import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { HiOutlineMinusCircle,HiOutlinePlusCircle } from "react-icons/hi";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { useEffect,useState,useContext } from 'react';
import PostComments from './Comments'
import styles from './Postcontent.module.css';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";
function Postcontent() {
  
  const [prosisActivve,setproisActive] = useState(true);
  const [offset, setOffset] = useState(0);
  const [scroll,setScroll] = useState(false);
  const[contents,setContent]  = useState([]);
  const[inputs,setInputs] = useState([]);
  const[comment,setComment] = useState('');
  const  navigate = useNavigate();
  const user = useContext(UserContext);
  const [isFocustxtcomment,setFocustxtcomment] = useState(false);
  const handlechange =  (event)=>{

    const name = event.target.name;
    const value = event.target.value;
    setComment(event.target.value);
    setInputs(values=>({...values,[name]:value}));
    
  }
  function insertUserID(){
    const name = "userID";
    const value = user.token;

    setInputs(values=>({...values,[name]:value}))
  }
 
  function handleClick()
    {
      setproisActive(current=>!current);
      }
     
    
      useEffect(() => {
          getContent();
  
       
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
        setFocustxtcomment(false);
     
      }
      const  addComment = async (event)=>{

        event.preventDefault();
    
    
        axios.post("http://localhost/api/comments.php",inputs).then(function(response){
        
          console.log(response.data);
        });
 
        navigate('/');
      }
      function onFocustxtcomment(){
        setFocustxtcomment(true);
      }
        function onBlurtxtcomment(){
          setFocustxtcomment(false);
      }
  return (
    
    < >
    
     
        {contents.map((content,key)=>
              {
                return(
      <Row key={key} className={styles.rowMain+" "+"justify-content-md-center"}>
        <Col md="6" > 
        <Card className= {styles.card}  >
        <Card.Header className={styles.rowHeader} ></Card.Header>
      <Card.Body >
        <Card.Title>
        <Container fluid="md">
      
          <Row className={styles.rowName}>
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
          <Row className={styles.rowContent}>
       
            <Col md="12" className={styles.colContent}> 
            <Card.Text className={styles.cardCotent}>
             {content.content}
            </Card.Text>
              
            </Col>
          </Row>
      
        </Container>
        </Card.Title>
       
    
        <Container fluid="md" >
        <Row  className={"justify-content-center"+" "+styles.rowChoices}>
           <Col  md={"5"} className={styles.colChoicespros}> 
           <Card.Text className={styles.textChoicespros}>
           <HiOutlinePlusCircle  className={styles.iconChoicespros}/>{"Pros"}  
           </Card.Text>
            </Col>

            <Col   md={"5"} className={styles.colChoicescons}> 
            <Card.Text className={styles.textChoicescons}>
            {"Cons"}   
            <HiOutlineMinusCircle className={styles.iconChoicescons}/> 
          </Card.Text>
              
            </Col>
          </Row>
         
        
         
          <Row className={styles.views} md = "12">
          <Col lg = "1" className={styles.viewsText}> 
          <Card.Text >
          <BiMessageRoundedDetail className={styles.iconTotal} /> 100k
        </Card.Text>
        </Col>
           <Col  lg = "1"  className={styles.viewsText}> 
           <Card.Text >
           <HiOutlinePlusCircle  className={styles.iconPros}/> 100
           </Card.Text>
            
            </Col>
            <Col  lg = "1" className={styles.viewsText}> 
            <Card.Text >
            <HiOutlineMinusCircle className={styles.iconCons} />  100
        </Card.Text>
              
            </Col>
          </Row>
          <Form   name="a" onSubmit={addComment}>
          <Row style={{marginTop:30}} className={"justify-content-center"}>
            <Col lg = "11" className={styles.colComentTextarea}>
                <Form.Control as="textarea"  value={comment} className={styles.comentTextarea} name = "comment" onChange={handlechange}  placeholder="Leave a comment here" onFocus={onFocustxtcomment}  />  
            </Col>
          
          </Row>
         
        
              <Row  className={isFocustxtcomment?styles.rowbtnComment:styles.rowbtnInvicomment}>
              <Col  lg="6"sm="6" >
                
              </Col>
              <Col  lg={"3"}sm="3" className={styles.colbtnComment}>
                  <Button type="button" variant="light"  className={styles.btnCancel} onClick={cancel}>
                        Cancel
                  </Button>
              </Col>
              <Col lg="3"  sm="3" className={styles.colbtnComment} >
                  <Button type="submit" variant="primary" className={styles.btnComment} >
                        Comment
                  </Button>
              </Col>
            
            </Row>
          </Form>
          <Row className={"justify-content-md-center"}>
           <Col onClick={handleClick}  md={prosisActivve?"10":"1"} className={styles.prosCol}> 
           <Card.Text className={styles.prosText}>
           <HiOutlinePlusCircle  /> {prosisActivve?"Pros":""}  
           </Card.Text>
            </Col>

            <Col  onClick={handleClick}  md={prosisActivve?"1":"10"} className={styles.consCol}> 
            <Card.Text className={styles.consText}>
            {prosisActivve?"":"Cons"}    <HiOutlineMinusCircle />
          </Card.Text>
              
            </Col>
          </Row>
          {/* Comments */}
       
        
          <Row className={"justify-content-md-center"+" "+styles.comment}>
            {/* Pros comments */}
            
            <PostComments prosisActivve={prosisActivve} onClick ={handleClick} Types={"Pros"} postID={content.postID}/>
             {/* Pros comments */}
            {/* Cons comments */}
            
            <PostComments prosisActivve={prosisActivve} onClick ={handleClick} Types={"Cons"}/>
             {/* Cons comments */}
          </Row>
         
        </Container>
      </Card.Body>
    </Card>
    </Col>
      </Row>
          );
        }
            
        )
        }
    </>
  );
}

export default Postcontent;