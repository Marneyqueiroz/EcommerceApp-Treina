import { useEffect, useState } from "react";
import { obterAnuncios } from "../servicos";

export const useAnuncios = (estadoInicial) => {

    const [Anuncios, setAnuncios] = useState(estadoInicial);

    useEffect(() => {
        obterAnuncios(setAnuncios)

        console.log(Anuncios)
    }, []);

    return [Anuncios, setAnuncios]


}