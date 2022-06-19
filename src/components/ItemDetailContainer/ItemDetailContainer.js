import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'items', detalleId)
        getDoc(dbQuery)
        .then(resp => setProd( { id: resp.id, ...resp.data() } ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])


    return (
        <div>
            {loading ? <h2 class="spinner-border" role="status"></h2> :  <ItemDetail products={prod}  />}
        </div>
    )
}
export default ItemDetailContainer
