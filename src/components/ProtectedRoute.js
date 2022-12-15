//componente responsável por permitir o acesso às rotas
//protegidas apenas aos usuários logados

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from '../contexts/authContext.js'

function ProtectedRoute({ Component }) {
    const { loggedUser } = useContext(AuthContext)

    //se tem usuário logado
    if(loggedUser) {
        //retorna o componente(que será a página que se pretende acessar)
        return <Component />
    } else {
        //retorna o usuário para o login
        return <Navigate to="/" />
    }
}

export default ProtectedRoute