import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./componentes/Header";
import SectionHeader from "../../componentes/SectionHeader"
import MiniCard from "../../componentes/MiniCard"
import imgCard1 from "../../../assets/cartao_compras_icon_1.png"
import imgCard2 from "../../../assets/cartao_compras_icon_2.png"
import imgCard3 from "../../../assets/cartao_compras_icon_3.png"
import imgCard4 from "../../../assets/cartao_compras_icon_4.png"
import modelo1 from "../../../assets/modelo_1.png"
import modelo2 from "../../../assets/modelo_2.png"
import modelo3 from "../../../assets/modelo_3.png"
import modelo4 from "../../../assets/modelo_4.png"
import ShopCard from "../../componentes/ShopCard";

const Loja = () => {
    return (
        <View style={estilos.tela}>
            <Header />
            <SectionHeader
                titulo={"Comprar por Categoria"}
                link={"Ver Tudo"} />
            <View style={estilos.categorias}>
                <MiniCard imagem={imgCard1} legenda="Popular"></MiniCard>
                <MiniCard imagem={imgCard2} legenda="Popular"></MiniCard>
                <MiniCard imagem={imgCard3} legenda="Popular"></MiniCard>
                <MiniCard imagem={imgCard4} legenda="Popular"></MiniCard>
            </View>

            <SectionHeader>
                titulo={"Itens Recomendados"}
                link={"Ver Tudo"}
            </SectionHeader>

            <ShopCard imagem={modelo1}>

            </ShopCard>
        </View>
    )
}

const estilos = StyleSheet.create({
    categorias: {
        flexDirection: "row",
        justifyContent: "center"


    }

})

export default Loja;