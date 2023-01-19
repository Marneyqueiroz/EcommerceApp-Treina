import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import usuarioIcne from "../../../../assets/usuario_icone.png";

const Header = () => {
    return (
        <View style={estilos.cabecalho}>
            <View >
                <Text>Bem-Vindo,    </Text>
                <Text style={estilos.titulo}>Usuário</Text>
            </View>
            <View>
                <Image source={usuarioIcne} style={estilos.imagem}></Image>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titulo: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "bold"
    },
    imagem: {
        width: 50,
        height: 50
    },
})

export default Header;