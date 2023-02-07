import { useEffect, useState } from "react";
import { obterProdutos } from "../servicos";

export const useProdutos = (estadoInicial) => {

    const [produtos, setProdutos] = useState(estadoInicial);

    useEffect(() => {
        obterProdutos(setProdutos)
    }, []);

    return [produtos, setProdutos]


}