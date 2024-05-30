import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';


function Navigation() {
  return (
    <div>
         <>
      <Navbar   className="navbar-dark bg-light "style={{ padding: '12px 20px', fontSize: '18px' }}>
        <Container className='gap-5 '>
          <Navbar.Brand className='fw-bolder sofia-regular'  style={{color:'blue',fontSize:"40px"}}><i>Taste It</i></Navbar.Brand>
          <Nav className=" gap-5">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
             <Link to="/blogs">Blogs</Link>
            <Link to="/contacts">Contact</Link>


          </Nav>
        </Container>
      </Navbar>
        {/* navbar ends here */}



     </>

    </div>
  )
}

export default Navigation