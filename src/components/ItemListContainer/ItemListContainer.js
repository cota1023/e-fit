import React from "react"
import { useEffect, useState } from "react"
import '../ItemListContainer/ItemListContainer.css'
import { getProducts } from "../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, [])

    console.log(products)


    return (
        <div>
            <h2 className="title">{greeting}</h2>
            <ItemList products={products} />
        </div>

    )

}

export default ItemListContainer