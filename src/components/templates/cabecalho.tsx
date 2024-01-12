import Titulo from "./titulo"




interface cabecalhoProps {
    titulo:string
    subtitulo:string

}

export default function Cabecalho(props:cabecalhoProps) {
    return (
        <div>   
           <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        </div>
    )
}