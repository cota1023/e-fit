import React from 'react'
import {useForm} from 'react-hook-form'
import CustomerContext from '../../context/CustomerContext'
import { useContext } from 'react'


const CustomerForm = () => {
    
    const { handleCustomerData } = useContext(CustomerContext)

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }


    return (
        <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 d-flex flex-column align-items-start" >
                <label for="inputName" className="form-label">Nombre: </label>
                <input type="text" className="form-control" id="inputName" {...register('Nombre',{
                    required:true
                })}/>
            </div>
            <div className="mb-3 d-flex flex-column align-items-start" >
                <label for="inputAddress" className="form-label">Dirección: </label>
                <input type="text" className="form-control" id="inputAddress" {...register('Direccion')}/>
            </div>
            <div className="mb-3 d-flex flex-column align-items-start" >
                <label for="inputPhone" className="form-label">Celular: </label>
                <input type="text" className="form-control" id="inputPhone" {...register('Celular')}/>
            </div>
            <div className="mb-3 d-flex flex-column align-items-start" >
                <label for="inputCreditCard" className="form-label">Tarjeta: </label>
                <input type="number" className="form-control" id="inputCreditCard" max="9999999999999999" {...register('Tarjeta')}/>
            </div>
            {/* <button onClick={() => clearCart()} className="btn btn-secondary">Limpiar carrito</button> */}
            <button type='submit' className="btn btn-primary">Realizar Compra</button>
        </form>
        </div>

    )
}

export default CustomerForm