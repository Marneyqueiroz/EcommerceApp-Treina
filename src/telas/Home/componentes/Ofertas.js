import React from "react";
import { ScrollView } from "react-native";
import { ofertas } from "../../../mocks/ofertas";
import VerticalCards from "./VerticalCard";

const Ofertas = () => {
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