import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const SectionHeader = ({ titulo, link }) => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <TouchableOpacity onPress={() => { }}>
                <Text style={estilos.link}>{link}</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: "space-between",       
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    link: {
        marginTop: 10,
        textAlign: "center",
        color: "#FF7A00"
    }
})

export default SectionHeader;