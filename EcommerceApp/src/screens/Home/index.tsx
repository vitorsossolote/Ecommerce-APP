import React from "react"
import {View, Text} from "@gluestack-ui/themed"
import { StyleSheet} from "react-native"
import Header from "../../components/Header"

export default function Home() {
        return(
                <Header/>
        )
    };

const styles = StyleSheet.create({
    main:{
        flex:1,
        padding:20,
    },
});