import React, { useContext } from 'react'
import { CartContext } from './CartContext'


const Cart = () => {
  const ctx =useContext(CartContext)
  console.log(ctx.cartList)
  return (
    <>
    
    {ctx.totalCantidad() !== 0 ?
      <>
    <div>
        
        <div className='container'>
        <button className='btn bg-danger text-white justify-content-end ' onClick={ctx.clear}> borrar carrito</button>
              <h3 className='fs-2  text-center '>pecio total ${ctx.totalPrice()}</h3>
</div>
        {
          ctx.cartList.map(Item => (
            <div key={Item.id} className='container justify-content-center text-center '>
              
              <div className='row  bg-light align-items-center'>
                <div className='col-md-3'>
                  <img variant="card-img-top" src={Item.imagen} alt="imagen producto" />
                </div>
                <div className='col-md-6 '>
                  <h2 className='text-dark'>{Item.nombre}  x {Item.qty}</h2>
                  <p className='fs-2  '>c/u ${Item.precio}</p>
                  


                </div>
                <div className='col-md-3  '><button className='btn bg-primary text-white' onClick={()=>ctx.removeItem(Item.id)}> eliminar </button> </div>
              </div>
  
            </div>))
        
  
    
      }
    </div>
    </> 
    : <h2>No hay productos</h2>}</>
  )
}

export default Cart