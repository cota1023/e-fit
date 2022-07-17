import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState([])
  
  const {productId} = useParams()

  useEffect(()=>{


    const docRef = doc(db,'products', productId)

    getDoc(docRef)
    .then(doc=>{
      const productFirebase = {id: doc.id,...doc.data()}
      setProduct(productFirebase)
    })
    
    .catch(err =>{
      console.log(err)
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