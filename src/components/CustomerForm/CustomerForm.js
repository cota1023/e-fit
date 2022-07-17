import React from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import Swal from 'sweetalert2'
import { useNavigate} from 'react-router-dom'

const CustomerForm = () => {

    const { cart, getCartTotalAmount, clearCart } = useContext(CartContext)

    const { register, handleSubmit, formState: {errors} } = useForm()

    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log("HOla")

        const date = new Date().toISOString();

        const objOrder = {
            buyer: {
                name: data['Nombre'],
                phone: data['Direccion'],
                address: data['Celular'],
                email: data['Tarjeta']
            },
            date: date,
            items: cart,
            total: getCartTotalAmount()
        }

        const productsOutOfStock = []

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const collectionsRef = collection(db, 'products')

        getDocs(query(collectionsRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.count

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                        console.log("paso1")
                    } else {
                        productsOutOfStock.push({ id: doc.id, ...dataDoc })
                        console.log("paso2")
                    }
                })
            })
            .then(() => {
                if (productsOutOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    console.log("paso3")
                    return addDoc(collectionRef, objOrder)

                } else {
                    console.log("paso4")
                    return Promise.reject({ type: 'out_of_stock', products: productsOutOfStock })
                }})
            .then(({ id }) => {
                batch.commit()
                clearCart()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Tu orden fue creada correctamente con el id:${id}`,
                    showConfirmButton: false,
                    timer: 2500
                  })
            }).catch(error => {
                if (error.type === 'out_of_stock') {
                    Swal.fire(
                        'No pudimos procesar tu compra',
                        'Hay algunos productos que no tienen stock',
                        'error'
                      )
                } else {
                    console.log(error)
                }
            }).finally(()=>{
                navigate("/")
            }

            )
    }


    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 d-flex flex-column align-items-start" >
                    <label for="inputName" className="form-label">Nombre: </label>
                    <input type="text" className="form-control" id="inputName" {...register('Nombre', {
                        required: true,
                        maxLength: 50
                    })} />
                </div>
                <div className="mb-3 d-flex flex-column align-items-start" >
                    <label for="inputAddress" className="form-label">Dirección: </label>
                    <input type="text" className="form-control" id="inputAddress" {...register('Direccion',  {
                        required: true,
                        maxLength: 100
                    })} />
                </div>
                <div className="mb-3 d-flex flex-column align-items-start" >
                    <label for="inputPhone" className="form-label">Celular: </label>
                    <input type="text" className="form-control" id="inputPhone" {...register('Celular',  {
                        required: true
                    })} />
                </div>
                <div className="mb-3 d-flex flex-column align-items-start" >
                    <label for="inputCreditCard" className="form-label">Tarjeta: </label>
                    <input type="number" className="form-control" id="inputCreditCard" {...register('Tarjeta',  {
                        required: true,
                        maxLength: 16
                    })} />
                </div>
                <div className='container'>
                <button type='submit' className="btn btn-success pe">Realizar Compra</button>
                </div>    
                <div className='container pt-3'>
                <button onClick={() => clearCart()} className="btn btn-danger btn-sm">Anular Compra</button>
                </div>
            </form>
        </div>

    )
}


export default CustomerForm