import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import modelo1 from "../../../../assets/modelo_1.png";
import { GlobalContext } from "../../../context/GlobalContext";

const Item = ({item}) => {
    console.log(item)
    const {removerItem} = useContext(GlobalContext);
    return (
        <View style={[estilos.container, estilos.row]}>
            <Image source={modelo1} style={estilos.imagem} />
            <View>
                <View style={[estilos.row,  { width: 220 }]}>
                    <Text style={estilos.titulo}>{item.produto.nome}</Text>

                    <TouchableOpacity onPress={() => removerItem(item)}>
                        <FontAwesomeIcon name="trash-o" size={20} color="#000"></FontAwesomeIcon>
                    </TouchableOpacity>

                </View>

                <Text style={estilos.tamanho}> {item.produto.tamanho}</Text>


                <View style={estilos.row}>
                    <Text style={estilos.preco}>{item.produto.preco}</Text>

                    <View style={estilos.row}>
                        <TouchableOpacity style={[estilos.botaoNumItens, {marginEnd:10}]} >
                            <FontAwesomeIcon name="minus" size={15} color="#000" ></FontAwesomeIcon>
                        </TouchableOpacity>

                        <Text style={estilos.quantidade}>2</Text>

                        <TouchableOpacity style={[estilos.botaoNumItens, {marginStart:10}]}>
                            <FontAwesomeIcon name="plus" size={15} color="#000" ></FontAwesomeIcon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View >
    )

}

export default Item;

const estilos = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagem: {
        width: 90,
        height: 90
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titulo: {
        fontSize: 14
    },
    tamanho: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold"
    },
    botao: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    quantidade:{
        fontSize: 20, 
        fontWeight: "bold"
    },
    botaoNumItens:{
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFFFFF"
    }
})