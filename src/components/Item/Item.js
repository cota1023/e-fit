import React from "react"
import '../Item/Item.css'
import { Link } from "react-router-dom"

const Item = ({ img, name, price, id }) => {
    return (
        <div className="card">
            <img src={img} alt={name} className='imagenCard' />
            <div className="container">
                <h4><b>{name}</b></h4>
                <h4><b className="priceText">${price}</b></h4>
                <Link to={`/detail/${id}`} className='css-button-3d--red'>Más info</Link>
                <button className='css-button-3d--yellow'>Comprar</button>
            </div>
        </div>


    )


}

export default Item