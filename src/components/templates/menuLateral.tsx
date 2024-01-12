import { iconeAjustes, iconeCasa,iconeSino,logout } from "../icons"
import MenuItem from "./menuItem"
import Logo from "./Logo"
export default function MenuLateral() {
    return (
        <aside className="flex flex-col">
            <div className={` flex flex-col 
            items-center justify-center
            h-20 w-20 
            bg-gradient-to-r 
            from-indigo-500 to
             bg-purple-800`}>
              <Logo/>
            </div>
           <ul className="flex-grow">
            <MenuItem url="/" texto="Inicio" icone={iconeCasa}/>
            <MenuItem url="/ajustes" texto="Ajustes" icone={iconeAjustes}/>
            <MenuItem url="/notification" texto="Novidades" icone={iconeSino}/>
            </ul>
            <ul >
           
            <MenuItem url="/notification" texto="Sair"
             icone={logout} onClick={()=> console.log("logout")}
             className={`text-red-600 hover:bg-red-400 hover:text-white`}
             />
            </ul>
        
        </aside>
    )
}