import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () =>{
    return (
        <View style={estilos.row}>
            <View style={estilos.barraBusca}>
                <TextInput 
                style={estilos.texto}
                placeholder="Faça sua busca aqui!"
                placeholderTextColor={"#CACACA"}
                keyboardType="text"
                defaultValue=""
                size="88%"
                onChange={() =>{}}
                />
                <Ionicons name="search-outline" size={20} color={"#CACACA"} />
            </View>
            <TouchableOpacity style={estilos.botao}>
                <Ionicons name="cart-outline" size={20} />
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 71
    },
    barraBusca:{
        width:315, 
        marginBottom:20,
        marginLeft:21,
        backgroundColor:"#FFF",
        borderRadius:10, 
        flexDirection:"row",
        justifyContent:"space-between",
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:1
        },
        shadowOpacity:0.20,
        shadowRadius:1.41,
        elevation:2, 
        padding:20, 
        alignItems:"center"
    },
    botao:{
        padding:20,
        marginBottom:21,
        alignItems:"center",
        justifyContent:"center"

    }
})

export default Header;