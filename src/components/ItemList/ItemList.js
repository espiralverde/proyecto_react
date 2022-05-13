import { Item } from "../Item/Item"



export const ItemList = ({productos}) => {

    return (
        <ul className='ItemList'>
            {
                productos.map (prod => {
                    return <Item productos={prod} />
                })
            }
        </ul>
    )
}