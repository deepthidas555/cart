import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
const dispatch=useDispatch()
const handleWishlistCart=(products)=>{
  dispatch(addToCart(products))
  dispatch(removeFromWishlist(products.id))
}
  return (
   <Row className='ms-5' style={{marginTop:'100px'}}>
    {
      wishlistArray.length>0?
      wishlistArray.map((products,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem',height:'30rem' }}>
        <Card.Img variant="top" src={products.thumbnail} style={{height:'165px'}}/>
        <Card.Body>
          <Card.Title style={{color:'black',height:'62px'}}>{products.title}</Card.Title>
          <Card.Text>
  
            
            <div className="d-flex justify-content-between" style={{fontWeight:'bold'}}>
            <p style={{color:'black'}}>&#8377; {products.price}</p>
            <p style={{color:'green'}}>{products.discountPercentage}% Off</p>
            </div>
            <p style={{fontSize:13}}>{products.description.slice(0,55)}...</p>
            <p style={{color:'darkslategrey'}}><i class="fa-solid fa-star-half-stroke"></i>{products.rating}</p>
          </Card.Text>
          <div className="d-flex justify-content-between">
          <button className='btn border' onClick={()=>dispatch(removeFromWishlist(products.id))} style={{color:'midnightblue'}}><i class="fa-solid fa-trash fa-xl"></i></button>
          <button className='btn' onClick={()=>handleWishlistCart(products)} style={{backgroundColor:'midnightblue',color:'white'}}>Add to cart <i class="fa-solid fa-cart-shopping fa-xl"></i></button>
          </div>
          
        </Card.Body>
      </Card>
        </Col>
      )): <div style={{height:'100vh'}}className='w-100 flex-column justify-content-center align-items-center'>
        <center>
        <img height={'350px'}src="https://cdn.dribbble.com/users/1514097/screenshots/3550111/wishlist-icon.gif" alt="Empty" />
        
        <h3 className='text-center bold' >Wishlist is empty !</h3>
        <Link to={'/'}  style={{color:'darkslategrey'}} >Back to home</Link>
        </center>
      </div>
    }
   </Row>
  )
}

export default Wishlist