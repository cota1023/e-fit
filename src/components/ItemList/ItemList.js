import Item from "../Item/Item"
import '../ItemList/ItemList.css'
import React from "react"
import Footer from "../Footer/Footer"

const ItemList = ({ products }) => {

    return (
        <>
            <div className="container">
                <div className="cardList">
                    {products.map(prod => <Item key={prod.id} {...prod} />)}
                </div>
            </div>
        </>





    )
}

export default ItemList