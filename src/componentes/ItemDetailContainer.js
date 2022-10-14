import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {getFirestore,doc,getDoc} from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [dato,setDato]=useState({})
    //obtener el id que viene por URL
    const {id}=useParams()

    useEffect(() => {
      const querydb=getFirestore();
      const queryDoc=doc(querydb,'products',id)
      getDoc(queryDoc)
      .then(res=>setDato({id:res.id,...res.data()}))
    
      
    },[id])
    
  return (
    <div>
        <ItemDetail dato={dato}/>
    </div>
  )
}

export default ItemDetailContainer