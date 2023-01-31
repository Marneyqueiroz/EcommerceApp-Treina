import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../telas/Home";
import Loja from "../telas/Loja"
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();
const TabRotas = () => {
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color, size}) => {
                let nomeDoIcone = "home";

                if(route.name ==="Loja"){
                    nomeDoIcone= "handbag";

                    return <SimpleLineIconsIcon name={nomeDoIcone} size={size} color={color}/>
                }

                return <Ionicons name={nomeDoIcone} size={size} color={color}/>
            },
            tabBarActiveTintColor: "#FF7A00",
            tabBarInactiveTintColor:"#000"

        })}>
            <Tab.Screen name ="Home" component={Home}/>
            <Tab.Screen name ="Loja" component={Loja}/>
                    </Tab.Navigator>
    )
}

export default TabRotas;