import React from 'react'
import { useEffect, useState } from "react"
import  {ItemList}  from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



export const ItemListContainer = ({greeting='Esto es Item List Container'}) => {

    const[productos, setProductos] = useState([])
    // const[producto, setProducto] = useState({})
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


return (
    <div>
        {greeting}

        { loading ?
        <p class="spinner-border"></p> //acá puede ir un spinner
        :
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <ItemList productos={productos} />
        </div>
        }
    </div>
    
    
)
}

export default ItemListContainer