
import React from "react"
import { Center, View, Text} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native"

import { ChevronLeft, ShoppingCart} from "lucide-react-native"



interface Props{
    title: string,
    withIcon: boolean
}

const ShopHeader = ({title, withIcon} : Props) => (
    <View style={{marginTop:25, flexDirection:"row", justifyContent:"space-between",marginHorizontal:15, alignItems:"center"}}>
            <View>
                <ChevronLeft color={"#000"} size={35}/>
            </View>
            <View>
                <Text style={{fontFamily:"Montserrat-Medium", fontSize:22, color:"#000"}}>{title}</Text>
            </View>
            {withIcon ? (<>
            <View style={{justifyContent:"center", alignItems:"center", backgroundColor:"#e1e1e1", width:40, height:40, borderRadius:40}}>
                <ShoppingCart color={"#000"} size={24}/>
            </View>
            </>) : <View style={{justifyContent:"center", alignItems:"center", backgroundColor:"transparent", width:50, height:50, borderRadius:40}}>
                <ShoppingCart color={"transparent"} size={30}/>
            </View>}
            
    </View>
);

export default ShopHeader;