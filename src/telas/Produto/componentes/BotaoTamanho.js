import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BotaoTamanho = ({tamanho}) => {
    return (
        <TouchableOpacity style={(tamanho==="M" ? [estilos.botaoSelecionado, estilos.botao]: estilos.botao)} onPress = {() => {}}>
            <Text style={{fontSize: 16}}>{tamanho}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao:{
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 20,
        marginEnd:20
    },
    botaoSelecionado:{
        backgroundColor: "#FFA959",
        borderColor: "#FFA959"
    }
})

export default BotaoTamanho;