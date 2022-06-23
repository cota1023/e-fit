import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import "../OrderItemDetail/OrderItemDetail.css"



const OrderItemDetail = ({ product }) => {

    const { removeItem } = useContext(CartContext)

    return (


<div className="orderItemDetail mt-3">
            <div className='container col-md-3'>
            <p className='fw-bold'>{product.name}</p>
            </div>
            <div className='container col-md-2'>
            <p>{`Cantidad: ${product.count}`}</p>
            </div>
            <div className='container col-md-2'>
            <p>{`Precio: ${product.price}`}</p>
            </div>
            <div className='container col-md-3'>
            <p className='totalText'>{`Total: ${product.price * product.count}`}</p>
            </div>
            <div className='container col-md-2'>
            <button className='btn btn-danger'
            onClick={()=>{removeItem(product.id)}}>Remover Item</button>
            </div>            
        </div>
     



    )
}

export default OrderItemDetail