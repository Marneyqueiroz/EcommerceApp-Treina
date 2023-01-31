import React from "react";

import { ScrollView } from "react-native";
import { useAnuncios } from "../../../hooks/useAnuncios";
import HorizontalCards from "./HorizontalCards";

const Anuncios = () =>{

    const [anuncios] = useAnuncios([]);
    return(
        <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {
                        anuncios?.map((anuncio, indice) => {

                            return (
                                <HorizontalCards
                                    titulo={anuncio.titulo}
                                    descricao={anuncio.descricao}
                                    textoBotao={anuncio.textoBotao}
                                    key={indice} />
                            )
                        })
                    }

                </ScrollView>
    )
}

export default Anuncios;

