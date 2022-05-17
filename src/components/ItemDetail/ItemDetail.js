//import { Item } from "../Item/Item"
import './ItemDetail.css';

export const ItemDetail = ({productos}) => {

    return (
        <div className="row" >
            <div className="col">
                <img className="foto_detalle" src={productos.img} alt="foto" />
            </div>
            <div className="col">
                <h1>{productos.nombre}</h1>
                <h2>{productos.codigo}</h2>
                <p>$ {productos.precio}</p>
                <p>{productos.tamanio}</p>
            </div>        
        </div>
        //<Item prod={productos} />
    )
}
export default ItemDetail
