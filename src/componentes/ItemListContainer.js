import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import {getFirestore,collection,getDocs,where,query} from 'firebase/firestore'
import  db  from "../utilis/config";
 import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [data,setData]=useState([]);
    //     //obtener el id que viene por URL
    const {categoria} =useParams()

    
        useEffect(() =>{
 
       
            const querydb = getFirestore();
      
            const queryCollection = collection(querydb, 'products');
      
            if (categoria) {
              const queryFilter = query(queryCollection, where('categoria', '==', categoria));
            
              getDocs(queryFilter)
                .then(res => setData(res.docs.map(menu => ({ id: menu.id, ...menu.data() }))))
            
            } else {
            getDocs(queryCollection)
              .then(res => setData(res.docs.map(menu => ({ id: menu.id, ...menu.data() }))))
            } 
       
            console.log(data)
        }, [categoria]);

    //     const querydb=getFirestore();
    //   const queryCollection=collection(querydb,'products')
    //   getDoc(queryCollection)
    
    //   .then(res=>console.log(res.docs.map(product=>[{id:product.id,...product.data()}])))
    //      if( id){
    //      FechData(2000,products.filter(item=>item.categoryId === parseInt(id)) )
    //      .then(data=> setData(data))
    //      .catch(err=>console.log(err))
    //      }else{
    //          FechData(2000,products)
    //      .then(data=> setData(data))
    //      .catch(err=>console.log(err))
    //      }
    
//     const getData = async () => {
//         if (categoryId){
//             const q =  query(collection(db, "products"), where("categoryId", "==", categoryId))
        
//             const queryShot = await getDocs(q)
//             const productos = queryShot.docs.map(item=>({
//                 id:item.id,...item.data()
//             })) 
//             setData(productos)
//         }
//         else{
//             const queryShot = await getDocs(collection(db, "products"))
//             const productos = queryShot.docs.map(item=>({
//                 id:item.id,...item.data()
//             })) 
//             setData(productos)
//         }
//     }
//     getData()
// }, [categoryId])
// console.log(data)

     return (
        <div>
            <div><ItemList data={data}/></div>
        </div>
    )
}

export default ItemListContainer