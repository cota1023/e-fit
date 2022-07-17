
import React, { useContext } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/CartContext";

const CardWidget = () => {
    
    const {totalQuantity} = useContext(CartContext)
    
    return (
        <>
        <AiOutlineShoppingCart />
        <span>{totalQuantity}</span>
        </>
    )



}

export default CardWidget