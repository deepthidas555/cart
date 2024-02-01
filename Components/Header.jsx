import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  return (
   <>
   
       <Navbar expand="lg" className="bg-body-secondary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:'darkslategrey',fontWeight:'bold',textDecoration:'none'}}><i class="fa-solid fa-truck-fast"></i> E-cart</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'darkslategrey',fontWeight:'bold'}}> <i class="fa-solid fa-heart fa-lg"></i><Badge className='rounded ms-2 bg-secondary'> {wishlist.length}</Badge> </Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'darkslategrey',fontWeight:'bold'}}> <i class="fa-solid fa-shopping-cart  fa-lg"></i><Badge className='rounded ms-2 bg-secondary'> {cart.length}</Badge> </Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header