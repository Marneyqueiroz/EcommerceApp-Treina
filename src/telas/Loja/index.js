import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native";
import imgCard1 from "../../../assets/cartao_compras_icon_1.png";
import imgCard2 from "../../../assets/cartao_compras_icon_2.png";
import imgCard3 from "../../../assets/cartao_compras_icon_3.png";
import imgCard4 from "../../../assets/cartao_compras_icon_4.png";
import MiniCard from "../../componentes/MiniCard";
import SectionHeader from "../../componentes/SectionHeader";
import ShopCard from "../../componentes/ShopCard";
import { produtos } from "../../mocks/produtos";
import Header from "./componentes/Header";
import usuarioIcne from "../../../assets/usuario_icone.png";


const Loja = () => {
    return (
        <SafeAreaView style={estilos.tela}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <SectionHeader titulo={"Comprar por Categoria"} link={"Ver Tudo"} />
                <View style={estilos.categorias}>
                    <MiniCard imagem={imgCard1} legenda="Popular"></MiniCard>
                    <MiniCard imagem={imgCard2} legenda="Homem"></MiniCard>
                    <MiniCard imagem={imgCard3} legenda="Mulher"></MiniCard>
                    <MiniCard imagem={imgCard4} legenda="Criança"></MiniCard>
                </View>

                <SectionHeader titulo={"Itens Recomendados"} link={"Ver Tudo"}/>
                <ScrollView
                    contentContainerStyle={estilos.container}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={0}
                    pagingEnabled
                >
                    {
                        produtos?.map((produto, index) => {
                            return (
                                <ShopCard
                                    imagem={produto.imagem}
                                    produto={produto.produto}
                                    key={index}
                                    style={estilos.card}
                                />
                            )
                        })
                    }
                </ScrollView>


                
            </ScrollView>
        </SafeAreaView >
    )
}

const estilos = StyleSheet.create({
    tela: {
        margin: 25,
        marginTop:0
    },
    imagem: {
        width: 50,
        height: 50
    },
    compras: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    textoBotaoVerTudo: {
        marginTop: 8,
        textAlign: "center",
        color: "#FF7A00",
    },
    categorias: {
        marginTop: 20,
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 15
    },
    card: {
        width: "50%"
    }

})

export default Loja;