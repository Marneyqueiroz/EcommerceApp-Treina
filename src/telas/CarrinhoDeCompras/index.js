import { useScrollToTop } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import FinalizarCompraModal from "./componentes/FinalizarCompraModal";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";


const CarrinhoDeCompras = ({route}) => {

    const {carrinho, setCarrinho} = route.params;
    
    return (

        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={carrinho}
                renderItem={({ item }) =><Item nome={item.nome} preco={item.preco} tamanho={item.tamanho} />}
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