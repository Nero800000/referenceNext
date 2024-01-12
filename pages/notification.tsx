
import Layoult from "@/src/components/templates/layoult"
import useAppData from "@/src/data/context/hook/useAppData"

export default function notification() {
  const dados = useAppData()
  return (
       <Layoult titulo="Notificações" subtitulo="aqui você irá gerenciar as suas notificações!">
       
          
       </Layoult>
  )
}
