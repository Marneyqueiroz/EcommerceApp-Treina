import { useEffect, useState } from "react";
import { obterOfertas } from "../servicos";

export const useOfertas = (estadoInicial) => {

    const [Ofertas, setOfertas] = useState(estadoInicial);

    useEffect(() => {
        obterOfertas(setOfertas)

        console.log(Ofertas)
    }, []);

    return [Ofertas, setOfertas]


}