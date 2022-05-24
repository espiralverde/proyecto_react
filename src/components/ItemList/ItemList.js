import { Item } from "../Item/Item"
import '../ItemList/ItemList.css'

export const ItemList = ({productos}) => {

    return (
        <div className='ItemList'>
            {
            productos.map (prod => 
                {
                    return <Item key={prod.id} productos={prod} />
                })
            }
        </div>
    )
}