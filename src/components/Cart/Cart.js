import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

const Cart = () => {
    const {cartList, vaciarCarrito, precioTotal, removeItem} = useCartContext()
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })

async function generarOrden(e) {
    e.preventDefault()  

    let orden = {}  
    orden.buyer = dataForm
    orden.total = precioTotal()

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio * cartItem.cantidad
        const cantidad = cartItem.cantidad
        
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
        where( documentId() , 'in', cartList.map(it => it.id) )
    )
    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    }) ))
    .finally(()=> console.log('actulalizado'))
    batch.commit()
}   

const handlerChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
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
            </>
        }

        {/* FORM Start */}

        { cartList.length !== 0 &&
            <center>
                <form 
                    className='form-control w-50 mt-5'
                    onSubmit={generarOrden}         
                    
                >
                    <h5>Formulario: </h5>                
                    <input 
                        className='form-control'
                        type='text' 
                        name='name' 
                        placeholder='Ingrese el nombre' 
                        value={dataForm.name}
                        onChange={handlerChange}
                    /><br />
                    <input 
                        className='form-control'
                        type='text' 
                        name='phone'
                        placeholder='Ingrese el telefono' 
                        value={dataForm.phone}
                        onChange={handlerChange}
                    /><br/>
                    <input 
                        className='form-control'
                        type='email' 
                        name='email'
                        placeholder='Ingrese el email' 
                        value={dataForm.email}
                        onChange={handlerChange}
                    /><br/>
                    <button  className="btn btn-outline-primary"  onClick={generarOrden} >Terminar Compra</button>
                </form>
            </center>
        }
    </div>
)}

export default Cart