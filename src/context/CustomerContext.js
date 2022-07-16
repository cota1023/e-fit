import { createContext, useState } from "react";

import React from 'react'

const CustomerContext = createContext()

export const CustomerProvider = ({ children })  => {
  
  const [customer, setCustomer] = useState([])


  const handleCustomerData = (customer) => {
    if (customer) {
        setCustomer(customer)
    }

}
  
    return (
        <CustomerContext.Provider value={{
            handleCustomerData
        }}>
            {children}
        </CustomerContext.Provider>
  )
}

export default CustomerContext

