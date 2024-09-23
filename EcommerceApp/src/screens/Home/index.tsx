import React from "react"
import {View, Text} from "@gluestack-ui/themed"
import { StyleSheet} from "react-native"

export default function Home() {
        return(
            <View style={styles.main}>
                <Text>Home</Text>
            </View>
        )
    };

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
});