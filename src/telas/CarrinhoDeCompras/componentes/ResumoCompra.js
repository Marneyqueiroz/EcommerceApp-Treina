import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Modal } from "react-native";
import FinalizarCompraModal from "./FinalizarCompraModal";

const ResumoCompra = () => {
    
    const [visivel, setVisivel] = useState(false);

    return (
        <View>
            <View style={estilos.row}>
                <TextInput
                    style={estilos.input}
                    placeholder={"Código Promocional"}
                    keyboardType="text"
                    onChangeText={() => {}}
                />
                <TouchableOpacity onPress={() => {}} style={estilos.botaoPromocao}>
                    <Text style={estilos.textoBotao}>Aplicar</Text>
                </TouchableOpacity>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.label}>Sub-Total</Text>
                <Text style={estilos.valor}>R$2.600,00</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.label}>Voucher</Text>
                <Text style={estilos.valor}>-R$100,00</Text>
            </View>
            <View style={estilos.row}>
                <Text style={estilos.label}>Taxa de Entrega</Text>
                <Text style={estilos.valor}>R$20,00</Text>
            </View>
            <View style={estilos.separador}></View>
            <View style={estilos.row}>
                <Text style={estilos.valor}>Total</Text>
                <Text style={estilos.valor}>R$2.520,00</Text>
            </View>

            <TouchableOpacity style={estilos.botao} onPress={()=>{setVisivel(true)}}>
                <Text style={estilos.textoBotao}>Finalizar</Text>
            </TouchableOpacity>

            <FinalizarCompraModal visivel={visivel} setVisivel={setVisivel}></FinalizarCompraModal>
        </View>
    )
}

export default ResumoCompra;

const estilos = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:15
    },
    input:{
        borderRadius:5,
        borderColor:"#CACACA",
        borderWidth:1,
        padding:15,
        backgroundColor:"#FFF",
        flex:0.9
    },
    botaoPromocao:{
        backgroundColor:"#FF7A00",
        alignSelf:"stretch",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#FF7A00",
        width:100
    },
    textoBotao:{
        fontWeight:"bold",
        color:"#FFF",
        textAlign:"center"
    },
    label:{
        fontSize:18,
        color:"#7B7B7B"
    },
    valor:{
        fontSize:18,
        fontWeight:"600"
    },
    separador:{
        borderBottomColor:"#CACACA",
        marginTop:15,
        borderBottomWidth:1
    },
    botao:{
        backgroundColor:"#FF7A00",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#FF7A00",
        width:190,
        margin:25,
        padding:15,
        alignSelf:"center"
    }

})