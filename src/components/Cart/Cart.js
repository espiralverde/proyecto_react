import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

const Cart = () => {
    const {cartList, emptyCart, totalPrice, removeItem} = useCartContext()
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })

async function generarOrden(e) {
    e.preventDefault()  

    let orden = {}  
    orden.buyer = dataForm
    orden.total = totalPrice()

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const name = cartItem.name
        const price = cartItem.price * cartItem.qty
        const qty = cartItem.qty
        
        return {id, name, price, qty}   
    })   

// crear
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> emptyCart())


// actualizar el stock
    const queryCollectionStock = collection(db, 'items')
    const queryActulizarStock = await query(
        queryCollectionStock, 
        where( documentId() , 'in', cartList.map(it => it.id) )
    )
    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).qty
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
                                                    {product.name} - Precio: {product.price} - Cantidad: {product.qty}
                                                    {' '}
                                                    <button className='btn btn-outline-primary' onClick={()=> removeItem(product.id)}> X </button> 
                                                </li>
                                            </div>)}
                <h2>El precio total es: {totalPrice()}</h2>
                <button onClick={emptyCart} className='btn btn-outline-danger'>Vaciar carrito</button>
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