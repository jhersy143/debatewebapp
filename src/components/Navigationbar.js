import styles from './Navigationbar.module.css';
import {Container,Button,Form} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'react-bootstrap/Image';
import  Logo from '../images/icon.png';
import { MdSearch } from "react-icons/md";
import {FaEdit} from "react-icons/fa";
function Navigationbar({token}) {
  //const tokenNav = useToken.token;

   const logout = ()=>{
   
    sessionStorage.clear()
  }

  return (
    <Navbar expand="lg" fixed='top' className={styles.nabvar} >
      <Container>
        <Navbar.Brand href="#home"><Image  src={Logo} className={styles.logo} rounded/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
            <Nav.Link href="/">Home</Nav.Link>
            {!token?<Nav.Link href="/register">Sign-Up</Nav.Link>:<Nav.Link href="/profile">Profile</Nav.Link>
            }
              <Form className={!token?styles.searchNone:styles.searchBox+" "+"d-flex"} >
            <Form.Control type="search" className = {styles.searchBoxControl} placeholder="Search" aria-label="Search"
            />
            <Button variant="primary" className={styles.btnSearch}><MdSearch/></Button>
          </Form>
          
            <Button className={!token?styles.searchNone:styles.btnCreate}>
            <FaEdit className={styles.iconCreate}/>Create a Debate
          </Button> 

      
            {!token?<Nav.Link href="/login" className={styles.navlinkLogout}>Login</Nav.Link>:<Nav.Link href="/login" onClick={logout} className={styles.navlinkLogout}>Logout</Nav.Link>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;