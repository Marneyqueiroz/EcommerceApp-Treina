import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import oferta1 from "../../../assets/oferta_1.png";
import usuarioIcne from "../../../assets/usuario_icone.png";
import HorizontalCards from "./componentes/HorizontalCards";
import {anuncios} from "../../mocks/anuncios"


export default function Home() {

    return (
        <View style={estilos.tela}>
            <View style={estilos.cabecalho}>
                <View >
                    <Text>Bem-Vindo,    </Text>
                    <Text style={estilos.titulo}>Usuário</Text>
                </View>
                <View>
                    <Image source={usuarioIcne} style={estilos.imagem}></Image>
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    anuncios?.map((anuncio, indice)=>{

                        return (
                            <HorizontalCards 
                            titulo={anuncio.titulo} 
                            descricao={anuncio.descricao} 
                            textoBotao={anuncio.textoBotao}
                            key={indice}/>
                        )

                    })
                }
                
            </ScrollView>

            <View style={estilos.cabecalho}>
                <Text style={estilos.titulo}>Ofertas Incríveis</Text>
                <Text style={estilos.linkVerTudo}>Ver Tudo</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
            <TouchableOpacity >
                <Image source={oferta1} style={estilos.imagemOferta}></Image>
                <Text>Liquidação</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={oferta1} style={estilos.imagemOferta}></Image>
                <Text>Liquidação</Text>
            </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titulo: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "bold"
    },
    linkVerTudo: {
        marginTop: 8,
        fontSize: 18,
        color: "#FF7A00"
    },
    imagem: {
        width: 50,
        height: 50
    },
    cartao: {
        marginVertical: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        flexDirection: "row",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5
    },
    descricao: {
        marginTop: 10,
        width: 200
    },
    botaoSaibaMais: {
        backgroundColor: "#FFA959",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 120,
        marginTop: 15,
        opacity: 94
    },
    textoBotaoSaibaMais: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold"
    },
    imagemCartao: {
        marginTop: 5,
        width: 120,
        height: 120
    },
    cartaoOferta: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        marginTop: 20,
        width: 150,
        height: 150,
        marginBottom: 15
    },
    imagemOferta: {
        marginTop: 20,
        width: 150,
        height: 150,
        marginBottom: 15
    }


})