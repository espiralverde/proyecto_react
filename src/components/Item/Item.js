import { Link } from "react-router-dom"
import '../Item/Item.css'
import React from 'react'

export const Item = ({productos}) => {

    return (
        <div className='col-md-10 w-25 mx-5' >
                <div className="card w-90 mt-5  card border-secondary" >
                    <div className="card-header">
                        {`${productos.nombre}`}
                    </div>
                    <div className="card-body">
                        <img src={productos.img} alt='' className='w-50' />
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${productos.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Ver Detalle
                            </button>                
                        </Link>
                    </div>
                </div>
        </div>
    )
}