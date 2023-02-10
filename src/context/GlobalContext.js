import React, { createContext, useEffect, useState } from "react";
import { obterItensDoCarrinho, removerLocalmente, salvarLocalmente } from "../servicos/local";

export const GlobalContext = createContext({});

export const ComprasProvider = ({ children }) => {

    const [id, setId] = useState(1);
    const [itens, setItens] = useState([]);

    useEffect(() => {
        obterItensDoCarrinho(setItens)
    }, [])

    const adicionarItem = async (item) => {
        setItens([...itens, item]);

        setId(id + 1);

        await salvarLocalmente(...itens, item);     
    }

    const removerItem = (item) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== item.id);
        setItens(listaDeItens)
    }

    const limpar = async () => {
        setItens([])

        await removerLocalmente();
    }
    return (
        <GlobalContext.Provider value={{ id, itens, adicionarItem, removerItem }}>
            {children}
        </GlobalContext.Provider>
    )


}