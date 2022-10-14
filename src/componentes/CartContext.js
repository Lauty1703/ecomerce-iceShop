import React, { createContext, useState } from 'react'
export const CartContext=createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const addItem = (product, qty) => {

        setCartList([...cartList,product])
        if(isInCart(product.id)===undefined){
            product.qty=qty;
        setCartList([...cartList, product]);
        }else{setCartList(cartList.map(product=>product.id===product.id?{...product,qty:product.qty+qty}:product));

    
       

}

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id);
    }

    const totalCantidad = () => {
        let totalCan = cartList.map(item => item.qty)
        return(
            totalCan.reduce((acumulador, qty) => acumulador += qty, 0)
        )
    }
    const totalPrice = () => {
        return cartList.reduce((acumulador, item) => acumulador += (item.qty * item.precio), 0);
      
    }  
    return (
    <CartContext.Provider value={{cartList,addItem,clear,removeItem,totalCantidad,totalPrice}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider