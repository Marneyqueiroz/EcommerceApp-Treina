import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Header=()=>{
    const navigation = useNavigation();
    return (
        <View style={estilos.row}>
            <TouchableOpacity onPress={() => {navigation.goBack() }}>
                <AntDesignIcon name="arrowleft" size={20} color="#000"></AntDesignIcon>
                <Text></Text>
            </TouchableOpacity>

            <Text style={estilos.titulo}>Minhas Compras</Text>

            <TouchableOpacity onPress={() => {limpar()}}>
                <Text style={estilos.link}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 1
    },
    titulo:{
        fontSize:18,
        fontWeight:"bold"
    },
    link:{
        color:"#FF7A00"
    }
})
export default Header;