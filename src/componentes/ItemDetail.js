import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({dato}) => {


    const [contador, setContador] = useState(0)
    const ctx =useContext(CartContext)

    const onAdd=(qty)=>{
        alert(`usted a agregado ${qty} item`)
        setContador(qty)
       ctx.addItem(dato,qty)


    }
  
  
    return (
         <div className="card mb-3 container mt-5">
            <div className="row g-0">
                <div className="col-md-3 text-center justify-content-center ">
                    <img
                        src={dato.imagen}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{dato.nombre}</h5>
                        <p className="card-text fs-4">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to

                        </p>
                        <p className="card-text d-flex">
                            <small className="text-muted fs-2">${dato.precio}</small>
                            <small className="text-muted ms-5 fs-2"> stock <span className='fs-3'>{dato.stock}</span></small>
                        </p>
                    </div>
                </div>
                <div className='col-md-4 text-center justify-content-center'>
                    {contador===0 
                    ?<ItemCount stock={dato.stock} initial={contador} onAdd={onAdd} />
                    : <Link to="/Cart"><button type="button" className="btn btn-primary">Finalizar compra</button>
</Link>
                    }
                </div>
                
            </div>
           
        </div>

    )
}

export default ItemDetail