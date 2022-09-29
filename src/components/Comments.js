import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card,Form,Button,Div } from 'react-bootstrap';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { useContext, useEffect, useState } from 'react';
import Replies from './Replies';
import styles from './Comments.module.css';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import {UserContext} from "../App";
function Comments(props) {

    const [offset, setOffset] = useState(0);
    const [scroll,setScroll] = useState(false);
    const[contents,setContent]  = useState([]);
    const[inputs,setInputs] = useState([]);
    const[comment,setComment] = useState('');
    const  navigate = useNavigate();
    const [isReplies,setReplies] = useState(false);
    const [isFocustxtcomment,setFocustxtcomment] = useState(false);
    const user = useContext(UserContext);
        const handlechange =  (event)=>{
      
          const name = event.target.name;
          const value = event.target.value;
          event.target.style.height = `24px`;
          event.target.style.height = `${event.target.scrollHeight}px`;

          setComment(event.target.value);
          setInputs(values=>({...values,[name]:value}));
          
        }
        function clickreplies(){
          setReplies(!isReplies);
        }
        function insertUserID(){
          const name = "userID";
          const value = user.token;
      
          setInputs(values=>({...values,[name]:value}))
        }
        function insertPostID(){
          const name = "postID";
          const value = props.postID;
      
          setInputs(values=>({...values,[name]:value}))
        }
        function getComment(){
            axios.get("http://localhost/api/post.php").then(function(response){
              setContent(response.data);
             
             
              
            });
           
          }
          function onFocustxtcomment(){
              setFocustxtcomment(true);
          }
          function onBlurtxtcomment(){
            setFocustxtcomment(false);
        }
            useEffect(() => {
                getComment();
                insertUserID();
                insertPostID();
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
   
        
  return (
      

        <Col className={props.prosisActivve?styles.colCommentpros:styles.colCommentcons}  sm={props.Types=="Pros"?props.prosisActivve?"10":"1":props.prosisActivve?"1":"10"} style={{visibility:props.Types=="Pros"?props.prosisActivve?"visible":"hidden":props.prosisActivve?"hidden":"visible" }} >
 
        <Container fluid="md" style={{display:props.Types=="Pros"?props.prosisActivve?"":"none":props.prosisActivve?"none":"" }} className={styles.containerComment}>
      
            <Row  className={styles.rowComment+" "+'justify-content-center'}>
            <Col md="1" lg="2" className = {styles.colLogo}> 
                <Image rounded  src={userImage} className={styles.imgLogo}/>
                
                </Col>
                <Col md="5" lg="10" className = {styles.Colname}> 
                <Stack gap={0} >
                <Card.Text className={styles.cardText}>Jhersy A. Fernandez</Card.Text>
                <Card.Text className={styles.cardText}>2 hr</Card.Text>
                </Stack>
                
                </Col>
            </Row>
            
            <Row>
            <Col md="12" className={styles.colContent}> 
            <Card.Text className={styles.cardCotent}>
                {props.Types=="Pros"?"PROS COMMENTS":"CONS COMMENTS"}
                
                </Card.Text>
                
                </Col>
            </Row>
            <Row>
            <Col md="12" className={styles.colReplies}>
              <div className={styles.btnReplies}  onClick={clickreplies}>
                          <Card.Text className={styles.repliesText}>
                          {isReplies?<TiArrowSortedUp className={styles.arrowDown} />:<TiArrowSortedDown className={styles.arrowDown} /> }Replies
                          </Card.Text>  
              </div>            
             </Col>
            </Row>
            <Row style={{display:isReplies?"block":"none"}}>
           
           
          
            {/* Cons Replies */}
            <Replies type={props.Types} postID={props.postID}/>
           
            {/* Cons Replies */}
            </Row>
        </Container>

        </Col>
    
  );
}

export default Comments;

