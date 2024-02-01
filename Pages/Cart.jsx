import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
 

  const cartArray=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
  const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])


const handleCart=()=>{
  dispatch(emptyCart())
  alert("Order Placed Successfully , Thank You for Purchasing")
  navigate('/')
}


  return (

    <div className="container" style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
        <div className="row mt-5">        <div className="col-lg-8">

          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
              {
                  cartArray.map((products,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{products.title}</td>
                      <td><img width={'100px'} height={'100px'} src={products.thumbnail} alt="" /></td>
                      <td>{products.price}</td>
                      <td><button style={{color:'midnightblue',boxShadow:'none'}} onClick={(()=>dispatch(removeFromCart(products.id)))} className='btn'><i className='fa-solid fa-trash fa-xl'></i></button></td>
                    </tr>
                  ))

              }
            </tbody>
          </table>
          </div>
<div className="col-lg-1"></div>
<div className="col-lg-3">
  <div className="border mt-3 rounded shadow p-2 w-100">
    <h2   style={{color:'midnightblue'}}>Cart Summary</h2>
    <h4>Total Products : <span>{cartArray.length}</span></h4>
    <h4 className='mt-3'>Total : <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
  <div className="d-grid">
  <button onClick={handleCart}  style={{backgroundColor:'midnightblue',color:'white'}} className='btn  mt-5 rounded text-bolder'>Check Out</button>
  </div>
  </div>
  
</div>

        
        
        </div>:<div style={{height:'100vh'}}className='w-100 flex-column justify-content-center align-items-center'>
        <center>
        <img height={'350px'}src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="Empty" />
        
        <h3 className='text-center bold' >Cart is empty !</h3>
        <Link to={'/'}  style={{color:'darkslategrey'}} >Back to home</Link>
        </center>
      </div>
      }
    </div>
      
  )
}

export default Cart