import React from "react"
import { Center, View, Text,} from "@gluestack-ui/themed"
import { StyleSheet,} from "react-native"

import { MapPin, LockKeyhole, ShieldCheck} from "lucide-react-native";
const ShopTags = () => (
    <View style={{width:"100%", left:15,bottom:20, flexDirection:"row", gap:10}}>
        <View style={{width:140,height:30,borderColor:"#828282", borderWidth:2, flexDirection:"row", alignItems:"center", borderRadius:8, paddingLeft:5, gap:5,}}>
            <MapPin color={"#828282"} size={20}/>
            <Text style={{fontSize:14,fontFamily:"Montserrat-Medium"}}>Nearest Store</Text>
        </View>
        <View style={{width:70,height:30,borderColor:"#828282", borderWidth:2, flexDirection:"row", alignItems:"center", borderRadius:8, paddingLeft:5, gap:5,}}>
            <LockKeyhole color={"#828282"} size={20}/>
            <Text style={{fontSize:14,fontFamily:"Montserrat-Medium"}}>VIP</Text>
        </View>
        <View style={{width:140,height:30,borderColor:"#828282", borderWidth:2, flexDirection:"row", alignItems:"center", borderRadius:8, paddingLeft:5, gap:5,}}>
            <ShieldCheck color={"#828282"} size={20}/>
            <Text style={{fontSize:14,fontFamily:"Montserrat-Medium"}}>Return Policy</Text>
        </View>
    </View>
);

export default ShopTags