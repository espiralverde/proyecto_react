import  {Item}  from "../Item/Item"
import React from 'react'
import '../ItemList/ItemList.css'

export const ItemList = ({prods}) => {
    return (
        <div className='ItemList'> {
            prods.map (prod => 
                {
                    return <Item key={prod.id} products={prod} />
                })
            }
        </div>
    )
}

export default ItemList
