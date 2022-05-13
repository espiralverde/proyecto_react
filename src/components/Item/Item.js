



export const Item = ({productos}) => {
    console.log (productos)

    return (

        <div 
            key={productos.id}
            className='col-md-10 w-25'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${productos.nombre} - ${productos.codigo}`}
                </div>
                <div className="card-body">
                    <img src={productos.img} alt='' className='w-50' />
                    {productos.precio}                                                            
                </div>
                <div className="card-footer">  
                        <button className="btn btn-outline-primary btn-block">
                            Detalle
                        </button>                
                </div>
            </div>
        </div>



    )
}