import React from 'react'
import { useEffect, useState } from "react"
import  {ItemList}  from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



export const ItemListContainer = () => {

    const[prods, setProds] = useState([])
    const[loading, setLoading] = useState(true)
    const { id } = useParams() 


useEffect(() => {
    const db = getFirestore()
    if (id) {
        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = query(queryCollection, where('category', '==', id))
        getDocs(queryCollectionFilter)
        .then(resp => setProds( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                             
    } else {
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setProds( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                  
    }
}, [id])


return (
    <div>
        { loading ?
        <p className="spinner-border"></p>
        :
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <ItemList prods={prods} />
        </div>
        }
    </div>
    
    
)
}

export default ItemListContainer