import React, {useState} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Cookies from 'js-cookie';
import "../../styles/HeaderStyle.css";
import { Link} from 'react-router-dom';
import logo from "../../assets/logo.png";


// export default 
function Header() {  
  const [LoggedIn, setLoggedIn] = useState(Cookies.get('Loggedin') === "true")
  

  const [ nav, setNav] = useState(false)
  
  // scroll Navbar

  const changevalueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue >= 100 ? setNav(true) : setNav(false);
    
  };
  window.addEventListener('scroll', changevalueOnScroll)

  function handleClick() {
    Cookies.set('Loggedin', "false")
    setLoggedIn(false)
    Cookies.remove('name')
  }


  return (
  <header>
    <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
            <Link to="/" className='logo'>
            <img src={logo} alt='Logo' className='img-fluid'/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/restaurant">Restaurant</Nav.Link>
            
            {LoggedIn ? (
                <Nav.Link as={Link} onClick={handleClick}  to='/' className='btn btn_red rounded-0'>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/Login" className='btn btn_red rounded-0'>Login</Nav.Link>
            
              )}
            <Nav.Link as={Link} to="/">
                <div className='cart'>
                <i class="bi bi-bag fs-5"></i>
                <em className='roundpoint'>2</em>
                </div>
            </Nav.Link>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header
