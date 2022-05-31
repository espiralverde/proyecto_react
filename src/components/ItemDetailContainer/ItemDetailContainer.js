import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const { detalleId } = useParams()
    

    useEffect(() => {
        getFetch(detalleId) 
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))     
    }, [detalleId])
    
    console.log(detalleId)
    console.log(producto)
    return (
        <div>
            {loading ? <h2>Cargando Detalles </h2> :  <ItemDetail productos={producto}  />}
        </div>
    )
}
export default ItemDetailContainer
