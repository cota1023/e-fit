import React from "react"
import { useEffect, useState } from "react"
import '../ItemListContainer/ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Carrousel from "../Carrousel/Carrousel"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { category} = useParams()

    useEffect(() => {
        
        setIsLoading(true)
        
        const collectionRef = category 
        
        ? (query(collection(db,'products'), where('category','==',category)))
        : (collection(db, "products"))
        
        getDocs(collectionRef)
            .then(resp => {
                const productsFirebase = resp.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(productsFirebase)
            }).catch(error => { console.log(error) })
            .finally(
                ()=>{setIsLoading(false)}
            )


    }, [category])


    if (isLoading) {
        return (
            <>
                <div className="cointainerSpinner">
                    <div className='spinner'></div>
                    <h3>Cargando...</h3>
                </div>

            </>


        )
    }

    
    return (
        <div className="container-fluid mt-3">
            <h2 className="title mt-5 text-uppercase fw-bold">{greeting}</h2>
            
            { !category ? 
            <h5 className="pt-5"> Somos la mejor tienda de productos para equipar tu gimnasio / box. Contamos con asesorías personalizadas para recomendarte la mejor opción en base a tu presupuesto.</h5> 
             : <h2 className="text-uppercase fw-bold">{category}</h2>}

            <ItemList products={products} />
            {!category ? <Carrousel /> : <br></br> }
            
            
        </div>

    )

}

export default ItemListContainer