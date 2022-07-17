import { useState, useEffect } from "react"
import React from "react"
import '../Counter/Counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'



const Counter = ({ initial, stock, onAdd }) => {


    const [count, setCount] = useState(initial)

    useEffect(() => {

    }, [count])


    const incrementQ = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            Swal.fire(
                'No hay mas stock disponible',
                'No tenemos esa cantidad. Intentá eligiendo menos unidades',
                'error'
              )
        }
    }

    const decrementQ = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            Swal.fire(
                'Epa!',
                'No podés seleccionar menos unidades',
                'error'
              )
        }
    }


    return (
        <>
            <div className="Counter">
                <button onClick={decrementQ}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <h3 className="ps-2 pe-2"> {count} </h3>
                <button onClick={incrementQ}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className="container p-3">
                <button className="btn btn-danger"
                onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>

        </>
    )




}

export default Counter