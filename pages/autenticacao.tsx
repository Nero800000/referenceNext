import AuthInput from "@/src/components/auth/authInput";
import useAuth from "@/src/data/context/hook/useAuth";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


export default function Autenticacao() {
    const {usuario,loginGoogle} = useAuth()

    const [modo,setModo] = useState<'login' | 'cadastro'>("login")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function  submeter() {
        if(modo ==='login') {
            console.log('login')
        } else {
            console.log("cadastrar")
        }
    }
    return (
        <div className="flex  h-screen items-center justify-center">
        <div className="hidden md:block md:w-1/2 lg:w-2/3">
            <img src="https://source.unsplash.com/random"
             alt="Imagem da tela de Autenticação"
             className="h-screen w-full object-cover"
             />
             
        </div>
        <div className="m-10 w-full md:w-1/2 lg:w-1/3">
            <h1 className={`text-2xl font-bold mb-5`}>    
                {modo === 'login' ? 'Entre com a sua conta':'Cadastre-se na platafroma'}
            </h1>
            <AuthInput 
             label="Email"
             tipo="email"
             valor={email}
             valorMudou={setEmail}
             obrigatorio={true}
            />

         <AuthInput 
             label="Password"
             tipo="password"
             valor={password}
             valorMudou={setPassword}
             obrigatorio={true}
            />
            <button onClick={submeter} className={`
             w-full bg-indigo-500 hover:bg-indigo-400
             text-white rounded-lg px-4 py-3 mt-6
            `}>
            {modo === 'login' ? 'Entrar':'Cadastrar'}
            </button>
            <hr className="my-6 border-gray-300 w-full" />
            <button onClick={loginGoogle} className={`
             w-full bg-red-500 hover:bg-red-400
             text-white rounded-lg px-4 py-3 mt-6
            `}>
             entrar com o Google
            </button>
            {modo === 'login' ? (
                 <p className="mt-8">
                    Novo por aqui??
                    <a onClick={()=> setModo('cadastro')} className={`
                     text-blue-500 hover:text-blue-700 font-semibold
                     cursor:pointer
                    `}> Criar uma conta gratuitamente </a>
                    
                 </p>
            ): (
                <p className="mt-8">
                    já faz parte da Nossa comunidade??
                 <a onClick={()=> setModo('login')} className={`
                 text-blue-500 hover:text-blue-700 font-semibold
                 cursor:pointer
                `}> Entre com as suas Credenciais </a>
                    
                
             </p>
             
            )}
        </div>
        </div>
    )
}