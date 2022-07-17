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
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const { category, name } = useParams()

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
        <div className="container-fluid">
            <h2 className="title">{greeting}</h2>
            {/* <form onSubmit={handleSubmit} >
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Buscar</button>
            </form> */}
            <ItemList products={products} />
            <Carrousel />
        </div>

    )

}

export default ItemListContainer