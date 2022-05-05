export default function Titulo ({ titulo, subTit='Subtítulo' }) {
    console.log(titulo)
return (

    <>
        <h1>{titulo}</h1>
        <h3>{subTit}</h3>
    </>

    )
}