import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"


const Cart = () => {
const {cartList, vaciarCarrito, precioTotal, removeItem, cantidadTotal} = useCartContext()




  return (
    <div>
      {cartList.map(prod =>
        <li key={prod.id}>
          {prod.nombre} -  precio: {prod.precio} - tamanio: {prod.tamanio} - cantidad: {prod.cantidad}
          <button className="btn btn-outline-secondary" onClick={()=> removeItem(prod.id)}> X </button>
        </li>)}
        {precioTotal() !== 0 ?
              <h3>El precio total es: {precioTotal()}  </h3>
              :
              <Link to ='/'>
                  {<button>Volver al inicio </button>}
              </Link>
              }
      {/* <h3>Precio Total es: {precioTotal() !== 0 && precioTotal()} </h3> */}
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
