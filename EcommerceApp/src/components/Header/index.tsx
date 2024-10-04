import React from "react"
import {View, Text,Image} from "@gluestack-ui/themed"
import { StyleSheet} from "react-native"
import { Menu, Wind } from "lucide-react-native"

import Logo from "../../assets/images/logoheader.png"
import Perfil from "../../assets/images/perfil.png"

export default function Header() {
        return(
            <View style={{flexDirection:"row",padding:15,justifyContent:"space-between", alignItems:"center",backgroundColor:"#FFF"}}>
                <View style={{backgroundColor:"#f1f1f1", borderRadius:30, width:40, height:40, justifyContent:"center", alignItems:"center"}}>
                    <Menu color="#323232"/>
                </View>
                <View>
                    <Image source={Logo} style={{width:50, height:40,}}  alt="Logo"/>
                </View>
                <View style={{backgroundColor:"#e1e1e1", borderRadius:30, width:50, height:50, justifyContent:"center", alignItems:"center"}}>
                    <Image source={Perfil} style={{width:60, height:50}}/>
                </View>
            </View>
        )
    };

