import { useEffect, useState } from "react"
import  {ItemList}  from "../ItemList/ItemList"

import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"

export const ItemListContainer = ({greeting='Esto es Item List Container'}) => {

    const[productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)

const { id } = useParams() 

useEffect(() => {
    if (id) {
        getFetch() 
        .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categoria === id)))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                             
    } else {
        getFetch()
        .then(respuesta=> setProductos(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                 
    }
}, [id])

console.log (id)

const onAdd = (cantidad) => {console.log(cantidad)}
return (
    <div>
        {greeting}

        { loading ?
        <h2> Cargando... </h2> //acá puede ir un spinner
        :
        <ItemList productos={productos} />
        }
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
    </div>
    
    
)
}

export default ItemListContainer