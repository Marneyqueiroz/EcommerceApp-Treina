import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function VerticalCards({imagem, titulo}) {
    return (
        <TouchableOpacity >
        <Image source={imagem} style={estilos.imagemOferta}></Image>
        <Text>{titulo}</Text>
    </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    titulo: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "bold"
    },imagemOferta: {
        marginTop: 20,
        width: 150,
        height: 150,
        marginBottom: 15
    }
})