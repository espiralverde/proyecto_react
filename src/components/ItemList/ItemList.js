import { memo } from "react"
import  {Item}  from "../Item/Item"

import '../ItemList/ItemList.css'


//memo (componente)

// const ItemList = memo (({productos}) => {
//     console.log('ItemList')
//     return (
//         productos.map ((prod) => <Item key={prod.id} prod={prod}/>)
//     )
//     }
// )
// export default ItemList

export const ItemList = ({productos}) => {
    return (
        <div className='ItemList'> {
            productos.map (prod => 
                {
                    return <Item key={prod.id} productos={prod} />
                })
            }
        </div>
    )
}
