import MenuLateral from "./menuLateral"
import Cabecalho from "./cabecalho"
import Conteudo from "./Conteudo"

interface LayoultProps {
    titulo:string
    subtitulo:string
    children?:any
}

export default function layoult(props:LayoultProps) {
    return (
        <div className={`flex h-screen w-screen`}>   
           <MenuLateral/>
           <div className={`flex flex-col w-full p-7 bg-gray-300`}>
           <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
           <Conteudo>
             {props.children}
           </Conteudo>
           </div>
     
        </div>
    )
}