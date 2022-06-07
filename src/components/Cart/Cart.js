import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"


const Cart = () => {
const {cartList, vaciarCarrito, precioTotal, removeItem} = useCartContext()

//

async function generarOrden() {

let orden = {}     

orden.buyer = { name: 'Martin', email: 'martin@gmail.com', phone: '01234569879 ' }
orden.total = precioTotal()

orden.items = cartList.map(cartItem => {
    const id = cartItem.id
    const nombre = cartItem.nombre
    const precio = cartItem.precio * cartItem.cantidad
    // const cantidad = cartItem.cantidad
    
    return {id, nombre, precio}   
})   

// crear
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> vaciarCarrito())


// actualizar el stock
const queryCollectionStock = collection(db, 'items')

const queryActulizarStock = await query(
    queryCollectionStock, 
    where( documentId() , 'in', cartList.map(it => it.id) ) // in es que estén en ..         
)

const batch = writeBatch(db)

await getDocs(queryActulizarStock)
.then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
}) ))
.finally(()=> console.log('actulalizado'))

batch.commit()


}   


return (
<div>
    {cartList.length === 0 ? 
        <div className="container mt-5">
            <label className="alert alert-warning">No hay items en el Carrito</label><br />
            <Link to='/'>
                <button className='btn btn-outline-primary'>Productos</button>
            </Link>
        </div>
    :
        <>
            {cartList.map(product =>    <div key={product.id} >
                                            <li >
                                                <img src={product.img} style={{width: 60}} />
                                                {product.nombre} - Precio: {product.precio} - Cantidad: {product.cantidad}
                                                {' '}
                                                <button className='btn btn-outline-primary' onClick={()=> removeItem(product.id)}> X </button> 
                                            </li>
                                        </div>)}
            <h2>El precio total es: {precioTotal()}</h2>
            <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
            <button onClick={generarOrden} className='btn btn-outline-success'>Comprar!</button>
            
        </>
    }

    {/* <Formulario /> */}
</div>
)

}




//   return (
//     <div>
//       {cartList.map(prod =>
//         <li key={prod.id}>
//           <img src={prod.img} style={{width: 60}} />
//           {prod.nombre} -  precio: {prod.precio} - tamanio: {prod.tamanio} - cantidad: {prod.cantidad}
//           <button className="btn btn-outline-secondary" onClick={()=> removeItem(prod.id)}> X </button>
//         </li>)}
//         {precioTotal() !== 0 ?
//               <h3>El precio total es: {precioTotal()}  </h3>
//               :
//               <Link to ='/'>
//                   {<button>Volver al inicio </button>}
//               </Link>
//               }
//       {/* <h3>Precio Total es: {precioTotal() !== 0 && precioTotal()} </h3> */}
//       <button onClick={vaciarCarrito}>Vaciar Carrito</button>
//     </div>
//   )
// }

export default Cart
