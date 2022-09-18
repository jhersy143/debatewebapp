import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Card,Form,Button,Div } from 'react-bootstrap';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import Replies from './Replies';
import styles from './Comments.module.css';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
function Comments({token,prosisActivve,onClick,Types,postID}) {

    const [offset, setOffset] = useState(0);
    const [scroll,setScroll] = useState(false);
    const[contents,setContent]  = useState([]);
    const[inputs,setInputs] = useState([]);
    const[comment,setComment] = useState('');
    const  navigate = useNavigate();
    const [isReplies,setReplies] = useState(false);
    const [isFocustxtcomment,setFocustxtcomment] = useState(false);
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
          const value = token.token;
      
          setInputs(values=>({...values,[name]:value}))
        }
        function insertPostID(){
          const name = "postID";
          const value = postID;
      
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
   
            const cancel = async(event)=>{
              setInputs([]);
              setComment('');
              getComment();
              insertUserID();
              insertPostID();
              onBlurtxtcomment();
 
           
            }
            const  addComment = async (event)=>{
      
              event.preventDefault();
          
          
              axios.post("http://localhost/api/comments.php",inputs).then(function(response){
              
                console.log(response.data);
              });
       
              navigate('/');
            }
  return (
      

        <Col className={styles.colComment}  sm={Types=="Pros"?prosisActivve?"11":"1":prosisActivve?"1":"11"} style={{display:Types=="Pros"?prosisActivve?"":"none":prosisActivve?"none":"" }} >
 
        <Container fluid="md" >
        <Form   name="a" onSubmit={addComment}>
          <Row style={{marginTop:30}}>
            <Col lg = "12" className={styles.colComentTextarea}>
                <Form.Control as="textarea"  value={comment} className={styles.comentTextarea} name = "comment" onChange={handlechange}  placeholder="Leave a comment here" onFocus={onFocustxtcomment}  />  
            </Col>
          
          </Row>
         
          <Row>
        
          </Row>
              <Row  className={isFocustxtcomment?styles.rowbtnComment:styles.rowbtnInvicomment}>
              
              <Col md={{span: 3, offset: 6 }} sm="3" className={styles.colbtnComment}>
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
            <Row >
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
                {Types=="Pros"?"PROS COMMENTS":"CONS COMMENTS"}
                
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
            <Replies token={token} type={Types} postID={postID}/>
           
            {/* Cons Replies */}
            </Row>
        </Container>

        </Col>
    
  );
}

export default Comments;

