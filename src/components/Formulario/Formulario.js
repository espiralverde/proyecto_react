// import Titulo from '../Titulo/Titulo'

export function Formulario ({saludo}) {
    return (
        <div>
            {/* <Titulo titulo='Soy el título del Input' subTit= 'Subtitulo de Input'/> */}
            <form>
                <input type="text" placeholder="ingresar" />
                <button onClick={saludo}>Saludo</button>
            </form>
        </div>
    )
}

