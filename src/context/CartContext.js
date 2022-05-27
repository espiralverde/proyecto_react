import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext (CartContext)


const CartContextProvider = ({children}) =>{
    //estados y funciones globales
    const [cartList, setCartList] = useState([]) //Acá guardo mis productos añadidos

    //función para agregar productos
    function addToCart (item) {
        const index = cartList.findIndex(product => product.id === item.id) //pone -1 si no lo encuentra
        if (index !== -1){
            const cantidadVieja = cartList[index].cantidad
            cartList[index].cantidad += cantidadVieja
            setCartList([...cartList])
        }else {
            setCartList ([
                ...cartList,
                item
            ])
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const cantidadTotal = () => {
        return cartList.reduce((contador, prod)=> contador += prod.cantidad ,0)

    }

    const precioTotal = () => {
        return cartList.reduce((contador, prod)=> contador + (prod.cantidad * prod.precio) ,0)

    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            vaciarCarrito,
            removeItem,
            cantidadTotal,
            precioTotal
            } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider