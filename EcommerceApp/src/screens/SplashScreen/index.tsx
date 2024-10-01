import React from "react"
import { Center, View, Text, VStack,Image} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native"

import Logo from "../../assets/images/Logo.png"

const SplashScreen = () => (
  <GluestackUIProvider config={config}>
    <View style={styles.container}>
            <Image source={Logo} alt = "Logo" style={styles.image}/>
    </View>
    </GluestackUIProvider>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    image:{
        width:278,
        height:100,
    }
});

export default SplashScreen;