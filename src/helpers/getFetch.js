const productos = [
    {
        "id" : '1',
        "nombre" : "Disco abrasivo de corte",
        "tamanio" : "115X1,6 MM",
        "cantidad" : 50,
        "codigo" : "DA1116_50",
        "precio" : 500,
        "img" : "../img/DA1116_50.jpg",
        "categoria" : "insumos"
    },
    {
        "id" : '2',
        "nombre" : "Disco diamantado",
        "tamanio" : "115 MM",
        "cantidad" : 30,
        "codigo" : "DM180",
        "precio" : 5000,
        "img" : "../img/DM180.jpg",
        "categoria" : "insumos"
    },
    {
        "id" : '3',
        "nombre" : "Disco abrasivo flap",
        "tamanio" : "115X1,6 MM",
        "cantidad" : 10,
        "codigo" : "DF1580",
        "precio" : 2500,
        "img" : "../img/DF1580.jpg",
        "categoria" : "insumos"
    },
    {
        "id" : '4',
        "nombre" : "Amoladora Angular",
        "tamanio" : "Discos 115 mm. (4-1/2”)",
        "cantidad" : 10,
        "codigo" : "ULT115",
        "precio" : 1000,
        "img" : "../img/ULT115.jpg",
        "categoria" : "bateria"
    },
    {
        "id" : '5',
        "nombre" : "Sierra Circular",
        "tamanio" : "Para discos 165 mm (max)",
        "cantidad" : 10,
        "codigo" : "ULT11",
        "precio" : 1000,
        "img" : "../img/ULT117.jpg",
        "categoria" : "bateria"
    },
    {
        "id" : '6',
        "nombre" : "Taladro Percutor",
        "tamanio" : "Embrague de 16+3 posiciones",
        "cantidad" : 10,
        "codigo" : "ULT111",
        "precio" : 1000,
        "img" : "../img/ULT111.jpg",
        "categoria" : "bateria"
    },
    {
        "id" : '7',
        "nombre" : "Amoladora",
        "tamanio" : "Discos 115 mm.",
        "cantidad" : 10,
        "codigo" : "HAA001",
        "precio" : 1000,
        "img" : "../img/HAA001.jpg",
        "categoria" : "electrica"
    },
    {
        "id" : '8',
        "nombre" : "Engrapadora",
        "tamanio" : "Grapas: Tipo 53 (8/16 mm.)",
        "cantidad" : 10,
        "codigo" : "HEE001",
        "precio" : 1000,
        "img" : "../img/HEE001.jpg",
        "categoria" : "electrica"
    },
    {
        "id" : '9',
        "nombre" : "Lijadora",
        "tamanio" : "Base de 125 mm",
        "cantidad" : 10,
        "codigo" : "HLR001",
        "precio" : 1000,
        "img" : "../img/HLR001.jpg",
        "categoria" : "electrica"
    },
]

export const getFetch = (id) =>{
    return new Promise ((resolve) => {
        setTimeout (() => {
            const query = id ? productos.find (producto => producto.id === id) : productos
            resolve (query)
        }, 2000)
    })
}