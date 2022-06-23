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

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id) 
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const getCartTotalAmount = () => {
        let totalAmount = 0

        cart.forEach(prod => {
            totalAmount += prod.price
        })

        return totalAmount
    }







    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            totalQuantity,
            removeItem,
            getCartTotalAmount
        }}>
            {children}
        </CartContext.Provider>

    )

}






export default CartContext