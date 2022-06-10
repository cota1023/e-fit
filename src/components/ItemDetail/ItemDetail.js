import React from 'react'
import { getProductsById } from '../asyncmock'
import '../Item/Item.css'

const ItemDetail = ({name, img, price, description}) => {
  return (
   <>
   <div className="cardDetail1">
   <div className="cardDetail">
            <img src={img} alt={name} className='imagenCard' />
            <div className="container">
                <h4><b>{name}</b></h4>
                <h4><b>{description}</b></h4>
                <h4><b className="priceText">${price}</b></h4>

                <button>Comprar</button>
            </div>
        </div>
        </div>
  </>)
}

export default ItemDetail