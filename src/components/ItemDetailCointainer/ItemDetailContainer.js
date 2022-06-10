import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState([])
  
  const {productId} = useParams()

  useEffect(()=>{
    getProductsById(productId)
    .then(res => {
        setProduct(res)
    })

  },[])
  
    return (
    <>
    <h1>Detalle del producto</h1>
    <ItemDetail {...product}/>
    </>
  )
}

export default ItemDetailContainer