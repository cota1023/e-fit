import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import OrderItemDetail from '../OrderItemDetail/OrderItemDetail'
import { Link } from 'react-router-dom'


const CartToOrder = () => {

  const { cart, getCartTotalAmount } = useContext(CartContext)
  
  const cartEmpty = cart.length === 0 ? true : false
  
  return (

    <>
      {cartEmpty ?
        <div>
          <h2>Todavía no hay productos en el carrito</h2>
          <Link to="/" className='btn btn-secondary'>Comprar!</Link>
        </div>
        
        : 
          <div className='container'>
            <h1>Lista de productos</h1>
            {cart.map(cartProduct=>
                <OrderItemDetail product={cartProduct}/>  
              )}
              <h3>{`Total: ${getCartTotalAmount()}`} </h3>
          </div>

        }
    </>
  )
}

export default CartToOrder