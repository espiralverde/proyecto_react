const productos = [
    {
        "id" : '1',
        "nombre" : "Disco abrasivo de corte",
        "tamanio" : "115X1,6 MM",
        "cantidad" : "50 Unidades",
        "codigo" : "DA1116_50",
        "precio" : "500",
        "img" : "./img/DA1116_50.jpg",
        "categoria" : "Insumos"
    },
    {
        "id" : '2',
        "nombre" : "Disco diamantado",
        "tamanio" : "115 MM",
        "cantidad" : "30 Unidades",
        "codigo" : "DM180",
        "precio" : "5000",
        "img" : "./img/DM180.jpg",
        "categoria" : "Insumos"
    },
    {
        "id" : '3',
        "nombre" : "Disco abrasivo flap",
        "tamanio" : "115X1,6 MM",
        "cantidad" : "10 Unidades",
        "codigo" : "DF1580",
        "precio" : "2500",
        "img" : "./img/DF1580.jpg",
        "categoria" : "Catálogo"
    }
]

export const getFetch = (id) =>{
    return new Promise ((resolve) => {
        setTimeout (() => {
            const query = id ? productos.find (productos => productos.id === id) : productos
            resolve (query)
        }, 2000)
    })
}