import { Link } from "react-router-dom";
import React from 'react'


const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary mb-5 mx-2" 
            >Ir al Carrito</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-outline-primary mb-5" 
            >Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount
