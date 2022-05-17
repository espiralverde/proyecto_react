import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {

    return (
        <div className='ItemList'>
            {
                    productos.map (prod => {
                    return <Item key={prod.id} productos={prod} />
                })
            }
        </div>
    )
}