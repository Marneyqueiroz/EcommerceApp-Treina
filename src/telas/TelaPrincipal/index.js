import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import imagem from "../../../assets/tela_principal.png";

export default function TelaPrincipal() {
    return <>
        <View>
            <Image source={imagem} style={estilos.imagem}></Image>
            <Text>teste</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({

    imagem: {
        marginTop: 120,
        width: 360,
        height: 360

    }

})