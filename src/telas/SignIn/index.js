import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {
    const navigation = useNavigation();
    return (<>
        <View style={estilos.cabecalho}></View>
        <View style={{flexDirection:"row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={estilos.linkLogin}>Login</Text>
        <Text style={estilos.linkCadastro}>Cadastro</Text>
        </View>

        <View style={estilos.tela}>
            <Text style={estilos.titulo}> Sign In </Text>
            <View style={{ flexDirection: "row" }}>
                <Text>Bem-vindo! Nao possui uma conta?</Text>
                <TouchableOpacity>
                    <Text style={estilos.linkSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={estilos.input}
                placeholder="E-mail"
                keyboardType="email-address"
            />

            <TextInput
                style={estilos.input}
                placeholder="Senha"
                keyboardType="password"
                secureTextEntry
                autoCorrect={false}
            />

            <TouchableOpacity style={estilos.botaoLogIn}
            onPress={()=>{
                navigation.navigate("Tab Rotas")
            }}>
                <Text style={estilos.textoBotaoLogIn}>Log In</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
                <Checkbox
                    style={estilos.checkbox}
                    value={true}
                    onValueChange={() => { }}
                    color={true ? "#FF7A00" : undefined}
                />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ marginTop: 10 }}> Mantenha-me conectado</Text>
                    <TouchableOpacity>
                        <Text style={[estilos.linkSignUp, { marginTop: 10 }]}>Esqueci a Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={estilos.separador}>Or</Text>

            <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <MaterialCommunityIcon name="google" size={20} color="#000000" />
                    <Text style={estilos.textoBotaoSignUp}>Entrar com Gmail</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <MaterialCommunityIcon name="apple" size={20} color="#000000" />
                    <Text style={estilos.textoBotaoSignUp}>Entrar com Apple ID</Text>
                </TouchableOpacity>

        </View>
    </>
    )
}

const estilos = StyleSheet.create({

    tela: {
        margin: 25
    },
    cabecalho: {
        height: 250,
        backgroundColor: "#FF7A00"
    },
    separador: {
        color: "#FF7A00",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        marginVertical: 20,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    linkSignUp: {
        color: "#FF7A00",
        paddingStart: 5
    },
    linkLogin: {
        color: "#FF7A00",
        paddingStart: 5,
        fontSize:20,
        marginStart:"20%"
    },
    linkCadastro: {
        color: "#FF7A00",
        paddingStart: 5,
        fontSize:20,
        marginEnd:"20%"
    },
    titulo: {
        marginTop: 5,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 10,

    },
    botaoLogIn: {
        backgroundColor: "#FF7A00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: "100%",
        marginTop: 20,
    },
    textoBotaoLogIn: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    botaoSignUp: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textoBotaoSignUp: {
        textAlign: "center",
        marginStart: 5
    },
    checkbox: {
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D9D9D9",

    }


})