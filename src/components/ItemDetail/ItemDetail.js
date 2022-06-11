import React from 'react'
import { getProductsById } from '../asyncmock'
import Counter from '../Counter/Counter'
import '../Item/Item.css'

const ItemDetail = ({name, img, price, description, stock}) => {
  return (
   <>
   <div className="cardDetail1">
   <div className="cardDetail">
            <img src={img} alt={name} className='imagenCard' />
            <div className="container">
                <h4><b>{name}</b></h4>
                <h4><b>{description}</b></h4>
                <h4><b className="priceText">${price}</b></h4>
                <Counter initial={0} stock={stock}/>
                <button>Comprar</button>
            </div>
        </div>
        </div>
  </>)
}

export default ItemDetail