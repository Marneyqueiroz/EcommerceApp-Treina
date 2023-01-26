import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";


const Carrossel = ({ imagens, imagemAtiva, setImagemAtiva }) => {

    const handleOnChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement .width);
            if (slide != imagemAtiva) {
                setImagemAtiva(slide);
            }
        }
    }
    return (
        <View style={estilos.container}>
            <ScrollView
                horizontal
                style={estilos.container}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={({ nativeEvent }) => { handleOnChange(nativeEvent) }}
            >{
                    imagens?.map((imagem, index) => {
                        return (
                            <Image source={imagem} key={index} style={estilos.container} />
                        )
                    })
                }
            </ScrollView>
            <View style={estilos.indicadores}>{
                imagens.map((_, index) => {
                    return (
                        <Text key={index}
                            style={index === imagemAtiva ? [estilos.indicador, estilos.indicadorAtivo] : estilos.indicador}
                        >
                            <Octicons name="dot-fill" size={25} />
                        </Text>
                    )
                })
            }
            </View>
        </View>
    )
}

export default Carrossel;

const estilos = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.40,
    },
    indicadores: {
        position: "absolute",
        flexDirection: "row",
        alignSelf: "center",
        bottom: 0
    },
    indicador: {
        margin: 5,
        marginBottom: 15,
        color: "#CACACA"
    },

    indicadorAtivo: {
        color: "#FFA959"
    },


})