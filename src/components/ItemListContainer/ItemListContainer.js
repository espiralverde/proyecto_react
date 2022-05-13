import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
// import { normalizePathname } from "react-router/lib/router"

const productos = [
    {
        "id" : 1,
        "nombre" : "Disco abrasivo de corte",
        "tamanio" : "115X1,6 MM",
        "cantidad" : "50 Unidades",
        "codigo" : "DA1116-50",
        "precio" : "500",
        "img" : "https://hamilton.com.ar/wp-content/uploads/2022/01/DA1116.jpg"
    },
    {
        "id" : 2,
        "nombre" : "Disco diamantado",
        "tamanio" : "115 MM",
        "cantidad" : "30 Unidades",
        "codigo" : "DM180",
        "precio" : "5000",
        "img" : "img/DM180.jpg"
    },
    {
        "id" : 3,
        "nombre" : "Disco abrasivo flap",
        "tamanio" : "115X1,6 MM",
        "cantidad" : "10 Unidades",
        "codigo" : "DF1580",
        "precio" : "2500",
        "img" : "./img/DF1580.jpg"
    }
]


const getFetch =  new Promise ((resolve, reject)=> {
    setTimeout(() => {
        resolve (productos)
    }, 3000)
})

export const ItemListContainer = ({greeting='mensaje default'}) => {

    const[productos, setProductos] = useState([])
    // const[loading, setLoading] = useState(true)

useEffect(() => {
    getFetch 
    .then (resp => setProductos(resp))
    .catch ((err) => console.log(err))
    // .finally (() => setLoading(false))
}, [])

const onAdd = () => {console.log ("Producto agregado")}


return (
    <div>
        {greeting}
        <ItemList productos={productos} />
    </div>
    
)
}

export default ItemListContainer