import { useScrollToTop } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
import FinalizarCompraModal from "./componentes/FinalizarCompraModal";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";


const CarrinhoDeCompras = ({route}) => {

    const {itens} = useContext(GlobalContext)
    
    return (

        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={itens}
                renderItem={({ item }) =><Item item={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => { return <Header /> }}
                ListFooterComponent={() => { return <ResumoCompra /> }}
            />
            <FinalizarCompraModal/>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    tela:{
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 35
    }
})
export default CarrinhoDeCompras;