import React from "react"

const Item = ({img, name})=>{
return(
    <li>
        <img src={img} alt={name} />
        <button>Más Info</button>
    </li>

)

    
}

export default Item