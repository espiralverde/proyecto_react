import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >Ir al Carrito</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount

// const ButtonCount= ({handleInter})=> {
//     return <button className="btn btn-outline-success" onClick={handleInter}>Agregar Al Carrito</button>
// }

// const Intercambiabilidad = () => {

//     const [inputType, setInputType ] = useState('button')
    

//     const handleInter=()=>{
//         setInputType('input')
//     }
        
//     return (
//         <div>        
//             {
//                 inputType === 'button' ? 
//                 <ButtonCount handleInter={handleInter} />
//                 : 
//                 <InputCount />
//             }
//         </div>
//     )
// }

//export default Intercambiabilidad

