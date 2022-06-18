import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { getProductsById } from '../asyncmock'
import Counter from '../Counter/Counter'
import '../Item/Item.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, price, description, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {

    if (count > 0) {
      console.log(`Se agregaron ${count} unidades de ${name}`)
      addItem({ id, name, price, count })
      setQuantityAdded(count)
      console.log(`quantityAdded:  ${quantityAdded}`)
    } else console.log("la cantidad es cero o menor -- no se agrega nada")

  }



  return (
    <>
      <div className="cardDetail1">
        <div className="cardDetail">
          <img src={img} alt={name} className='imagenCard' />
          <div className="container">
            <h4><b>{name}</b></h4>
            <h4><b>{description}</b></h4>
            <h4><b className="priceText">${price}</b></h4>
            {
              quantityAdded === 0
                ?
                <Counter initial={1} stock={stock} onAdd={handleOnAdd} />
                :
                <>
                 <div className='container'>
                  <Link to='/'className='btn btn-secondary'>Seguir comprando</Link>
                  </div>
                  <div className='container'>
                  <Link to='/cart' className='btn btn-success'>Ir a finalizar compra</Link>
                </div>
                </>

            }
          </div>
        </div>
      </div>
    </>)
}

export default ItemDetail