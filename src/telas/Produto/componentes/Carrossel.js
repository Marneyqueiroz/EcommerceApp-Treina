import React from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import modelo1 from "../../../../assets/modelo_1.png";
import modelo2 from "../../../../assets/modelo_2.png";
import modelo3 from "../../../../assets/modelo_3.png";
import modelo4 from "../../../../assets/modelo_4.png";


const imagens = [modelo1, modelo2, modelo3, modelo4];

const Carrossel = () => {
    return (
            <View style={estilos.container}>
                <ScrollView
                    horizontal
                    style={estilos.container}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={() => { }}
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
                                style={index === 2 ? [estilos.indicador, estilos.indicadorAtivo] : estilos.indicador}
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