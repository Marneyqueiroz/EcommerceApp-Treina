import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FinalizarCompraModal = ({visivel, setVisivel}) =>{
    return (
        <View style={estilos.container}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={visivel}
            onRequestClose={() => {!visivel}}
            >
                <View style={estilos.modal}>
                    <Text style={estilos.texto}>Compra Finalizada</Text>

                    <TouchableOpacity style={estilos.botao} onPress={() => { setVisivel(false)}}>
                        <Text style={estilos.textoBotao}> Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}


export default FinalizarCompraModal;

const estilos = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: "center",
        alignItems:"center",
        marginTop: 20
    },
    modal:{
        marginHorizontal:10,
        backgroundColor:"#FFF",
        borderRadius:10,
        paddingVertical:25,
        paddingHorizontal:35,
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation:5

    },
    texto:{
        marginBottom: 15,
        textAlign: "center",
        fontSiz: 16

    },
    botao:{
        borderRadius:5,
        padding:10,
        backgroundColor:"#FF7A00"
    },
    textoBotao:{
        color:"#FFF",
        fontWeight:"bold",
        textAlign:"center"
    }
})