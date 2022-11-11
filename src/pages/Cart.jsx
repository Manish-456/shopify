
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { remove } from '../store/CartSlice'



const Cart = () => {
const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)
  const removeHandle = (product) => {
   dispatch(remove(product))
  }
  return (
    <div>
   
      <div className="cart-wrapper">

  
  <div class="row">
{products.map((pro) =>{
  return <div className=" bg-white cart-card d-flex flex-wrap my-4 justify-content-around align-items-center" style={{ boxShadow: "0.2rem 0.3rem 0.4rem black"}}>
    <img src={pro.image} style={{width: "100px", height: "100px"}} alt="..."/>

       <h5>{pro.title}</h5> <br/>
    <h5 className="mx-4">Price: {pro.price > 100 ? "$" + Math.floor(pro.price - pro.price*0.15)  :  "$" + Math.floor(pro.price - pro.price*0.05)}`\- only</h5>
    <h1>{pro.id}</h1>
     
    <button onClick={() => {removeHandle(pro.id)}} className='btn btn-primary'>Remove</button>
  </div>
})}
    
     </div>
</div>
 
    </div>

  )
}

export default Cart
