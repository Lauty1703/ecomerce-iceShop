import React from 'react'
import {useState} from 'react'
const ItemCount = ({stock,initial,onAdd}) => {

const [contador, setContador] = useState(initial)

const sumar=()=>{
    if(contador<stock){
        setContador(contador+1)
    }
}
const restar=()=>{
    if(contador>initial){
        setContador(contador-1)
    }
}
 

 


  return (
    <div className="text-center justify-content-center bg-light  btn-card-container">
        <div className="d-flex text-center justify-content-center mt-5">
            <button className="btn " onClick={() => restar()}>-</button>
            <div className="fs-4 pt-3">{contador}</div>

            <button className="btn" onClick={() => sumar()}>+</button>

        </div>
        <div className="container">  
            { stock
                 ?<button className="btn-carrito" onClick={() => onAdd(contador)} >Add to Cart</button>
                : <button className="btn-carrito" disabled>Add to Cart</button>
                
            }</div>
    </div>
)
}

export default ItemCount