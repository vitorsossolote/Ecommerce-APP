import React from "react"
import {View, Text,Image} from "@gluestack-ui/themed"
import { StyleSheet} from "react-native"
import { Menu} from "lucide-react-native"

import Logo from "../../assets/images/logoheader.png"
import Perfil from "../../assets/images/perfil.png"

export default function Header() {
        return(
            <View style={{flexDirection:"row",padding:15,justifyContent:"space-between", alignItems:"center",backgroundColor:"#f2f2f2"}}>
                <View style={{backgroundColor:"#e5e5e5", borderRadius:30, width:40, height:40, justifyContent:"center", alignItems:"center"}}>
                    <Menu color="#323232"/>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:5,}}>
                    <Image source={Logo} style={{width:50, height:40,}}  alt="Logo"/>
                    <Text style={{fontFamily:'LibreCaslonText-Bold', color:"#4392F9", fontSize:24, fontWeight:"500"}}>Stylish</Text>
                </View>
                <View style={{backgroundColor:"#e1e1e1", borderRadius:30, width:50, height:50, justifyContent:"center", alignItems:"center"}}>
                    <Image source={Perfil} style={{width:60, height:50}} alt="perfil"/>
                </View>
            </View>
        )
    };

