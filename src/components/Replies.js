import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import userImage from '../images/users.png';
import Image from 'react-bootstrap/Image';
import { useState,useEffect } from 'react';
import  styles  from  './Replies.module.css';
import { Card,Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Replies({token,type,postID}) {
    const [offset, setOffset] = useState(0);
    const [scroll,setScroll] = useState(false);
    const[contents,setContent]  = useState([]);
    const[inputs,setInputs] = useState([]);
    const[comment,setComment] = useState('');
    const  navigate = useNavigate();
    const [isReplies,setReplies] = useState(false);
    const [isFocustxtcomment,setFocustxtcomment] = useState(false);
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
    const handlechange =  (event)=>{
      
        const name = event.target.name;
        const value = event.target.value;
        event.target.style.height = `24px`;
        event.target.style.height = `${event.target.scrollHeight}px`;

        setComment(event.target.value);
        setInputs(values=>({...values,[name]:value}));
        
      }
      
      const cancel = async(event)=>{
        setInputs([]);
        setComment('');
        getComment();
        insertUserID();
        insertPostID();
        console.log(inputs);
     
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
 
    
            <Row className={styles.row}> 
                        
                        <Col md="11">
                        <Container fluid="md" >
                                <Row>
                            
                           
                        </Row>
                        <Row className={styles.rowLogo}>
                        <Col md="1" className={styles.colLogo}> 
                            <Image rounded  src={userImage}  className={styles.imgLogo}/>
                        
                        </Col>
                        <Col md="5" className={styles.rowName}> 
                        <Stack gap={0} >
                        <Card.Text className={styles.cardTitle}>Jhersy A. Fernandez</Card.Text>
                            <Card.Text className={styles.cardTitle}>2 hr</Card.Text>
                            </Stack>
                            
                        </Col>
                        </Row>
                        <Row>
                       
                        <Col lg="12" className={styles.colreplyText}> 
                        <Card.Text  className={styles.replyText}>
                        {type=="Pros"?"PROS REPPLIES":"CONS REPPLIES"}
                
                        </Card.Text>
                            
                        </Col>
                        </Row>
                        <Form   name="a" onSubmit={addComment}>
                        <Row style={{marginTop:30}}>
                            <Col lg = "10" className={styles.colComentTextarea}>
                                <Form.Control as="textarea"  value={comment} className={styles.comentTextarea} name = "comment" onChange={handlechange}  placeholder="Leave a reply here" onFocus={onFocustxtcomment} onBlur={onBlurtxtcomment}/>  
                            </Col>
                        
                        </Row>
                        <Row>
                
                    </Row>
                    <Row  className={isFocustxtcomment?styles.rowbtnComment:styles.rowbtnInvi}>
                            
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
                        </Container>
                        </Col>
            </Row>
          
      
    
  );
}

export default Replies;

