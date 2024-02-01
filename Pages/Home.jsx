import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data=useFetch("https://dummyjson.com/products")
 const dispatch=useDispatch()

  return (
    <>
    <Row className='ms-5' style={{marginTop:'100px'}}>



  {
    data?.length>0.?data?.map((products,index)=>(
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
        <button className='btn border' onClick={()=>dispatch(addToWishlist(products))} style={{color:'midnightblue'}}><i class="fa-solid fa-heart-circle-plus fa-xl"></i></button>
        <button className='btn' onClick={()=>dispatch(addToCart(products))} style={{backgroundColor:'midnightblue',color:'white'}}>Add to cart <i class="fa-solid fa-cart-shopping fa-xl"></i></button>
        </div>
        
      </Card.Body>
    </Card>
      </Col>
      )): <p className='text-danger fs-4 fw-bolder'>nothing to display</p>
      }
    </Row>

    </>
  )
}

export default Home