import React from "react";
import { anuncios } from "../../../mocks/anuncios";
import { ScrollView } from "react-native";
import HorizontalCards from "./HorizontalCards";

const Anuncios = () =>{
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

