interface conteudoProps {
    children:any
   
  
}

export default function Conteudo(props:conteudoProps) {
    return (
        <div className={`flex flex-col mt-7`}>   
           {props.children}
        </div>
    )
}