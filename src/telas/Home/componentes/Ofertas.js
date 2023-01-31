import React from "react";
import { ScrollView } from "react-native";
import VerticalCards from "./VerticalCard";
import {useOfertas} from "../../../hooks/useOfertas";

const Ofertas = () => {
    const [ofertas] = useOfertas([]);
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {
                ofertas?.map((oferta, indice) => {

                    return (
                        <VerticalCards
                            titulo={oferta.titulo}
                            imagem={oferta.imagem}
                            key={indice} />
                    )
                })
            }
        </ScrollView>

    )
}


export default Ofertas;