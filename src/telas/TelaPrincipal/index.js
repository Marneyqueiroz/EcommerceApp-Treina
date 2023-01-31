import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import imagem from "../../../assets/tela_principal.png";
import { useNavigation } from '@react-navigation/native';

export default function TelaPrincipal() {
    const navigation = useNavigation();

    return (<View>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Text style={estilos.titulo}>Todas as suas compras num só app!</Text>
        <Text style={estilos.subtitulo}>Venda seus produtos da maneira mais inteligente e rápida para obter dinheiro imediato e uma consciência mais limpa.</Text>

        <View style={estilos.botoes}>
            <TouchableOpacity style={estilos.botaoLogin} 
            onPress={() => { navigation.navigate('SignIn') }}>
                <Text style={estilos.textoBotaoLogin}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoSingUp}
            onPress={() => { navigation.navigate('SignIn') }}>
                <Text style={estilos.textoBotaoSingUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>

    )
}


const estilos = StyleSheet.create({

    imagem: {
        marginTop: 120,
        width: 360,
        height: 360
    },
    titulo: {
        margin: 25,
        marginBottom: 15,
        fontSize: 35
    },
    subtitulo: {
        margin: 25,
        marginTop: 0,
        fontSize: 16
    },
    botoes: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    botaoLogin: {
        backgroundColor: "#FF7A00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 170,
        marginStart: 25
    },
    textoBotaoLogin: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    botaoSingUp: {
        backgroundColor: "#FF7A00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 170,
        marginEnd: 25
    },
    textoBotaoSingUp: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    }

})