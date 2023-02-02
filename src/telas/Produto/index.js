import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import BotaoTamanho from "./componentes/BotaoTamanho";
import Carrossel from "./componentes/Carrossel";

const imagens = [modelo1, modelo2, modelo3, modelo4];

const itens = [
    {
        id: 1,
        nome: "Camisa de Algodão Regular Fit",
        preco: "100",
        tamanho: "P"
    },
    {
        id: 2,
        nome: "Camisa de Algodão Regular Fit",
        preco: "100",
        tamanho: "M"
    },
    
]



const Produto = ({ navigation }) => {
    const [tamanho, setTamanho] = useState("");
    const [numItens, setNumItens] = useState(1);
    const [imagemAtiva, setImagemAtiva] = useState(0);

    const [carrinhoDeCompras, setCarrinhoDeCompras] = useState([itens]);

    return (
        <SafeAreaView >
            <Carrossel
                imagens={imagens}
                imagemAtiva={imagemAtiva}
                setImagemAtiva={setImagemAtiva}
            />
            <View style={estilos.tela}>
                <View style={estilos.row}>{
                    imagens?.map((imagem, index) => {
                        return (
                            <TouchableOpacity onPress={() => { }} key={index}>
                                <Image source={imagem}
                                    style={(index === 2) ? [estilos.miniatura, estilos.miniaturaAtiva] : estilos.miniatura} />
                            </TouchableOpacity>
                        )
                    })}
                </View>


                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesignIcon name="star" size={20} color="#FDCC0D" />
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginStart: 5 }}>5</Text>
                    <Text style={{ color: "#CACACA", marginStart: 5 }}>(85 Reviews)</Text>
                </View>

                <Text style={{ fontSize: 16, marginTop: 10 }}>Camisa</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>R$ 100</Text>

                <Text style={{ fontSize: 16, marginTop: 15 }}>Selecionar Tamanho:</Text>

                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <BotaoTamanho label={"P"} tamanho={tamanho} setTamanho={setTamanho} />
                    <BotaoTamanho label={"M"} tamanho={tamanho} setTamanho={setTamanho} />
                    <BotaoTamanho label={"G"} tamanho={tamanho} setTamanho={setTamanho} />
                    <BotaoTamanho label={"GG"} tamanho={tamanho} setTamanho={setTamanho} />
                </View>


                <View style={[estilos.row, { alignItems: "center", justifyContent: "space-between", marginTop: 25 }]}>
                    <View style={estilos.quantidadeItem}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (numItens > 1) {
                                        setNumItens(numItens - 1)
                                    }
                                }}
                                style={estilos.botaoNumeroItens}>
                                <AntDesignIcon name="minus" size={15} color="#000" />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{numItens}</Text>

                            <TouchableOpacity
                                onPress={() => { setNumItens(numItens + 1) }}
                                style={estilos.botaoNumeroItens}>
                                <AntDesignIcon name="plus" size={15} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setCarrinhoDeCompras
                            }}
                        style={estilos.botaoCarrinho}>
                        <Text style={estilos.textoBotaoCarrinho}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    miniatura: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#CACACA",
        width: 80,
        height: 80,
        marginBottom: 15
    },
    miniaturaAtiva: {
        borderColor: "#FFA959",
    },
    botao: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#D9D9D9"
    },
    botaoTamanho: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 20
    },
    botaoNumItens: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    botaoAddCarrinho: {
        backgroundColor: "#FF7A00",
        padding: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 180,
        marginStart: 20
    },
    textoBotaoAddCarrinho: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    botaoSelecionado: {
        backgroundColor: "#FFA959",
        borderColor: "#FFA959"
    },
    quantidadeItem: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 5,
        padding: 5,
        padding: 10,
        backgroundColor: "#D9D9D9"
    },
    botaoNumeroItens: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 10,
        padding: 10
    },
    botaoCarrinho: {
        backgroundColor: "#FF7A00",
        padding: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 180,
    },
    textoBotaoCarrinho: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
})

export default Produto;
