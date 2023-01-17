import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import imagemCelular1 from "../../../../assets/celular_1.png";

export default function HorizontalCards({titulo, descricao, textoBotao}) {
    return (
        <View style={estilos.cartao}>
            <View>
                <Text style={estilos.titulo}>{titulo}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <TouchableOpacity style={estilos.botaoSaibaMais}>
                    <Text style={estilos.textoBotaoSaibaMais}>{textoBotao}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={imagemCelular1} style={estilos.imagemCartao}></Image>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "bold"
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
        elevation: 5,
        marginEnd:10
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
    imagemCartao:{
        marginTop:5,
        width: 120,
        height: 120
    }
})