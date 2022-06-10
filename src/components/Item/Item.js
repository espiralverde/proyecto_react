import { Link } from "react-router-dom"
import '../Item/Item.css'
import React from 'react'



export const Item = ({productos}) => {

    return (
        <div className='col-md-10 w-25'>
            
                <div className="card w-90 mt-5" >
                    <div className="card-header">
                        {`${productos.nombre} - ${productos.codigo}`}
                    </div>
                    <div className="card-body">
                        <img src={productos.img} alt='' className='w-50' />
                        <p>Precio: </p>{productos.precio}
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${productos.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle
                            </button>                
                        </Link>
                    </div>
                </div>
            
        </div>
    )
}