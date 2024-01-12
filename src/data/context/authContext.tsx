

import { createContext } from "react";
import firebase from "../../firebase/firebaseConnect";
import Usuario from "@/src/model/usuario";
import { useState } from "react";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  const provedor =
    usuarioFirebase.providerData && usuarioFirebase.providerData[0]
      ? usuarioFirebase.providerData[0].providerId
      : "Valor Padrão";
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

export function AuthProvider(props: any) {
  const [usuario, setUsuario] = useState<Usuario>();

  async function loginGoogle() {
      const resp = await firebase.auth().signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
      )
      if(resp.user?.email) {
        const usuario = await usuarioNormalizado(resp.user)
        setUsuario(usuario)
        console.log("foiii")
      }
   
        
  }

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
