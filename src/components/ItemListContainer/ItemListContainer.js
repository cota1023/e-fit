import React from "react"
import { useEffect, useState } from "react"
import '../ItemListContainer/ItemListContainer.css'
import { getProducts, getProductsByCategory, getProductsByName } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Carrousel from "../Carrousel/Carrousel"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const {category, name} = useParams()

    useEffect(() => {
        setIsLoading(true)

        if(!category){
            getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(err=> {console.log(err)})
            .finally(()=>{setIsLoading(false)})
        }else{
            getProductsByCategory(category)
            .then(prods=>{
                setProducts(prods)
            })
            .catch(err=>{console.log(err)})
            .finally(()=>{setIsLoading(false)})
    
        }
        
    }, [category])

    const handleSubmit = (e) => {
        e.preventDefault()
        getProductsByName(input)
        .then(response =>{
            setProducts(response)
        })
        .catch(err=>{console.log(err)})
            .finally(()=>{setIsLoading(false)})

    }
    
    
    if(isLoading){
        return(
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
            <form onSubmit={handleSubmit} >
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Buscar</button>
            </form>
            <ItemList products={products} />
            <Carrousel/>
        </div>

    )

}

export default ItemListContainer