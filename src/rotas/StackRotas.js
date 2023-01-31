import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabRotas from "../rotas/TabRotas";
import SignIn from "../telas/SignIn";
import TelaPrincipal from "../telas/TelaPrincipal";
import Produto from "../telas/Produto";
import Carrinho from "../telas/CarrinhoDeCompras";

const Stack = createNativeStackNavigator();

const StackRotas = () => {
    return (
        <Stack.Navigator initialRoutName="Tela Principal">
            <Stack.Screen name= "Tela Principal" component={TelaPrincipal}></Stack.Screen>
            <Stack.Screen name= "SignIn" component={SignIn}></Stack.Screen>
            <Stack.Screen name= "Tab Rotas" component={TabRotas}></Stack.Screen>
            <Stack.Screen name= "Produto" component={Produto}></Stack.Screen>
            <Stack.Screen name= "Carrinho" component={Carrinho}></Stack.Screen>

        </Stack.Navigator>
    )
}

export default StackRotas;