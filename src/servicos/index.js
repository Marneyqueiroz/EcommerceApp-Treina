import axios  from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000"
    //baseURL:"https://7a46adff-85b1-4880-887d-5a952916d127.mock.pstmn.io"
})

export const obterProdutos = async (setProdutos) =>{
    await api.get("/produtos").then((response) => {setProdutos(response.data)})
                            .catch((error) => {
                                console.log(JSON.stringify(error))
                              });
}   

export const obterAnuncios = async (setAnuncios) =>{
    await api.get("/anuncios").then((response) => {setAnuncios(response.data)})
                            .catch((erro) => console.error(erro));
}   

export const obterOfertas = async (setOfertas) =>{
    await api.get("/ofertas").then((response) => {setOfertas(response.data)})
                            .catch((erro) => console.error(erro));
}   
