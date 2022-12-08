//context estabelece informações que podem ser utilizadas por todo projeto
//são contextos de ambiente
//as informações do contexto não precisam ser passadas por props

import { createContext, useEffect, useState } from "react";

//cria objeto onde será armazenada o usuário e o token
const AuthContext = createContext({ user: {}, token: "" })

//componente (função) do contexto
//o objetivo é verificar se o usuário pode acessar determinada rota
//protegida ou não
function AuthContextComponent(props) {
    //objeto que recebe e mantem atualizado os dados do usuário
    const [loggedUser, setLoggedUser] = useState({
        user: {},
        token: ""
    })

    //captura os dados do usuário no localstorage
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedUser")
        const storedUserParse = JSON.parse(storedUser || '""')

        //se possuir um token
        if(storedUserParse.token) {
            //retorna que está logado
            setLoggedUser(storedUserParse)
        } else {
            //retorna que não tem usuário logado
            setLoggedUser(null)
        }
    }, []);

    //retorna a base do componente onde será englobada todas as rotas
    //do app
    return (
        //contexto   //Provider - tem a função de fornecer as informações do contexto 
                              //envia as informações do usuário logado e a possibilidade de 
                              //serem atualizados
        <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
            {/* indica que entre essas tags estarão as rotas filhas */}
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextComponent, AuthContext }