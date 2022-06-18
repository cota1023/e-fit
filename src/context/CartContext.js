import { useState, useEffect } from "react";
import { createContext } from "react";
import React from "react";


const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.count
        })
        setTotalQuantity(totalQuantity)
    }, [cart])

    const addItem = (productAdded) => {
        if (!isInCart(productAdded.id)) {
            setCart([...cart, productAdded])
        }
        console.log(cart)

    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    console.log(cart)







    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>

    )

}






export default CartContext