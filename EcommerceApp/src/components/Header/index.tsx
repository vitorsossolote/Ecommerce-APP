import React from "react"
import {View, Text} from "@gluestack-ui/themed"
import { StyleSheet} from "react-native"

export default function Header() {
        return(
            <View style={styles.main}>
                <Text style={styles.title}>Screen</Text>
            </View>
        )
    };

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        height:60,
    },
    title:{
        fontFamily: 'Libre-Caslon-Text'
    },
});