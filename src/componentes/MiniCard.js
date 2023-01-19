import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const MiniCard = ({ imagem, legenda }) => {
    return (
        <>
            <TouchableOpacity style={estilos.container} onPress={() => { }}>
                <Image source={imagem} style={estilos.image}></Image>
                <Text>{legenda}</Text>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959"
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 15
    }
})

export default MiniCard;