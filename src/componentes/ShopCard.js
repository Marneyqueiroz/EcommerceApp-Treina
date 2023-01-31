import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const ShopCard = ({ imagem, produto }) => {
    const navigation = useNavigation();
    return (
        <View style={estilos.container} onPress={() => { }} >
            <Image source={imagem} style={estilos.imagem} />

            <View style={estilos.reviews}>
                <Ionicons name="star-outline" size={15} color="#FDCC0D"></Ionicons>
                <Text style={estilos.textoReview}>4.9</Text>
            </View>

            <View style={estilos.favoritos}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="heart-outline" size={18} color="#000000"></Ionicons>
                </TouchableOpacity>
            </View>

            <View style={estilos.conteudo} onPress={() => { }}>
                <Text>{produto}</Text>
                <View style={estilos.informacoes}>
                    <Text style={estilos.preco}>R$ 100,00</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Produto')}}>
                        <Ionicons name="arrow-forward-outline" size={20} color="#000000"></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    reviews: {
        flexDirection: "row",
        position: "absolute",
        top: 15,
        marginStart: 10,
        alignSelf: "flex-start",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5
    },
    textoReview: {
        fontSize: 14,
        fontWeight: "bold",
        marginStart: 5
    },
    favoritos: {
        flexDirection: "row",
        position: "absolute",
        top: 15,
        marginStart: 130,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5
    },
    conteudo: {
        padding: 15,
    },
    informacoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
    },
    imagem: {
        width: 170,
        height: 170
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default ShopCard;