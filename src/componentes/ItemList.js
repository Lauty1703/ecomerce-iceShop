import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {


  return (
    <div className='d-flex justify-content-around text-center row '>
        {
        
        
        
            
            
            data.map(item=> (<Item 
              key={item.id} 
              id={item.id} 
              nombre={item.nombre} 
              precio={item.precio} 
              imagen={item.imagen}/>))
        
        
        }
       
    </div>
  )
}

export default ItemList
