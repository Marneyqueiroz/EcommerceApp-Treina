import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackRotas = () => {
    return (
        <Stack.Navigator initialRoutName="Tela Principal">
            <Stack.Screen name= "Tela Principal" component={TelaPrinciapal}></Stack.Screen>
            <Stack.Screen name= "SignIn" component={SignIn}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackRotas;