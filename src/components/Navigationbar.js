import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import useToken from './token';
import styles from './Navigationbar.module.css';
function Navigationbar({token}) {
  //const tokenNav = useToken.token;

   const logout = ()=>{
   
    sessionStorage.clear()
  }
  return (
    <Navbar expand="lg" fixed='top' className={styles.nabvar} >
      <Container>
        <Navbar.Brand href="#home">Debate App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
            <Nav.Link href="/">Home</Nav.Link>
            {!token?<Nav.Link href="/register">Sign-Up</Nav.Link>:<Nav.Link href="/profile">Profile</Nav.Link>
            }
            {!token?<Nav.Link href="/login">Login</Nav.Link>:<Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;