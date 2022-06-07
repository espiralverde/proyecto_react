import { useEffect, useState } from "react"
import  {ItemList}  from "../ItemList/ItemList"
import React from 'react'
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'



export const ItemListContainer = ({greeting='Esto es Item List Container'}) => {

    const[productos, setProductos] = useState([])
    const[producto, setProducto] = useState({})
    const[loading, setLoading] = useState(true)


const { id } = useParams() 


useEffect(() => {
    const db = getFirestore()
    if (id) {
        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = query(queryCollection, where('categoria', '==', id))
        getDocs(queryCollectionFilter)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                             
    } else {
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                  
    }
}, [id])
console.log(id)





                    // como estaba antes
// useEffect(() => {
//     if (id) {
//         getFetch() 
//         .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categoria === id)))
//         .catch((err)=> console.log(err))
//         .finally(()=>setLoading(false))                             
//     } else {
//         getFetch()
//         .then(respuesta=> setProductos(respuesta))
//         .catch((err)=> console.log(err))
//         .finally(()=>setLoading(false))                 
//     }
// }, [id])

//console.log (productos)

const onAdd = (cantidad) => {console.log(cantidad)}
return (
    <div>
        {greeting}

        { loading ?
        <h2> Cargando... </h2> //acá puede ir un spinner
        :
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <ItemList productos={productos} />
        </div>
        }
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
    </div>
    
    
)
}

export default ItemListContainer