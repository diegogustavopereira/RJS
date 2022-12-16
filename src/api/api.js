//responsável por manter todas as informações para comunicação com o backend
//permitirá acessar a api sem necessidade de chamar o axios a cada requisição

import axios from "axios";

//informa o endereço da api que será utilizada para requisitar os dados
//development: ""
//production: ""
const apiURL = {
    development: "http://localhost:8080", production: "https://api-sirejud.cyclic.app"

};

//cria a base URL da api
//NODE_ENV => quando da compilação será obtido o valor dessa variável
//e serve para indicar se está em development ou production
const api = axios.create({ baseURL: apiURL[process.env.NODE_ENV]});


//método que captura o usuário que está requisitando as informações
//de modo a verificar se ele tem permissão para aquilo
api.interceptors.request.use((config) => {
    // capturar o usuário logado -> localStorage (armazenamento local)
    //essa informação é armazenada em json
    const loggedUserJSON = localStorage.getItem("loggedUser");
    // transformar o json em objeto
    const loggedUserObj = JSON.parse(loggedUserJSON || '""');

    // verificar se o usuário tem o token -> autorização
    // informar o token no header da requisição
    if(loggedUserObj.token) {
        // Authorization é o nome da chave que conterá o valor. ex: 'Bearer 453fasaJfe'
        config.headers = { Authorization: `Bearer ${loggedUserObj.token}` }
    };

    return config;
});

//não é exportado como default
export { api };