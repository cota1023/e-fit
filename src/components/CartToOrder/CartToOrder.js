import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import OrderItemDetail from '../OrderItemDetail/OrderItemDetail'
import { Link } from 'react-router-dom'
import CustomerForm from '../CustomerForm/CustomerForm'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/firebase/index'


const CartToOrder = () => {

  const { cart, getCartTotalAmount } = useContext(CartContext)

  const handleCreateOrder = () =>{


    const objOrder = {
      buyer: {
        name: "Carlos Ota",
        phone: "11254654654",
        address: "Direcciòn 123",
        email: "mail@google.com"
      },
      items: cart,
      total: getCartTotalAmount
    }
  }
  
  const cartEmpty = cart.length === 0 ? true : false
  
  return (

    <>
      {cartEmpty ?
        <div>
          <h2>Todavía no hay productos en el carrito</h2>
          <Link to="/" className='btn btn-secondary'>Comprar!</Link>
          <CustomerForm />
        </div>
        
        : 
          <div className='container'>
            <h1>Lista de productos</h1>
            {cart.map(cartProduct=>
                <OrderItemDetail product={cartProduct}/>  
              )}
              <h3>{`Total: ${getCartTotalAmount()}`} </h3>
              <br></br>
              <CustomerForm />
          </div>

        }
    </>
  )
}

export default CartToOrder