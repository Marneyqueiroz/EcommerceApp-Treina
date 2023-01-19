import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
    return (
        <View style={estilos.container}>
            <View style={estilos.barraBusca}>
                <TextInput
                    style={estilos.texto}
                    placeholder="Faça sua busca aqui!"
                    placeholderTextColor={"#CACACA"}
                    keyboardType="text"
                    defaultValue=""
                    onChange={() => { }}
                />
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="search-outline" size={20} color={"#D9D9D9"} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={estilos.carrinhoCompras}>
                <Ionicons name="cart-outline" size={30} color="#000000" />
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 71
    },
    barraBusca: {
        width: 315,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20,
        alignItems: "center"
    },
    carrinhoCompras: {
        justifyContent: "center"
    },
    texto: {
        color: "#CACACA"        
    },
})

export default Header;