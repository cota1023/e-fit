import { createContext, useState } from "react";
import React from 'react'

const CustomerContext = createContext()

export const CustomerProvider = ({ children }) => {

    const [customer, setCustomer] = useState([])


    const handleCustomerData = (customerData) => {

        setCustomer(customerData)
    }

    return (
        <CustomerContext.Provider value={{
            customer,
            handleCustomerData
        }}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContext

