import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {

    return (
        <div className='ItemList' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                    productos.map (prod => {
                    return <Item key={prod.id} productos={prod} />
                })
            }
        </div>
    )
}