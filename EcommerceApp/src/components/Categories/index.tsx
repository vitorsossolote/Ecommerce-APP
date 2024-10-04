import React from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
    Image,
} from "@gluestack-ui/themed"

import categoria1 from "../../assets/images/categoria1.png"
import categoria2 from "../../assets/images/categoria2.png"
import categoria3 from "../../assets/images/categoria3.png"
import categoria4 from "../../assets/images/categoria4.png"
import categoria5 from "../../assets/images/categoria5.png"

const Categories = () => {
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#fff", height:130, padding:15,}} >
            <View style={{flexDirection:"row", gap:10,}}>
            <View style={{flexDirection:"column", alignItems:"center",gap:5}}>
                <Image source={categoria1} alt="categoria"/>
                <Text>Beleza</Text>
            </View>
            <View style={{flexDirection:"column", alignItems:"center",gap:5}}>
                <Image source={categoria2} alt="categoria"/>
                <Text>Moda</Text>
            </View>
            <View style={{flexDirection:"column", alignItems:"center",gap:5}}>
                <Image source={categoria3} alt="categoria"/>
                <Text>Kids</Text>
            </View>
            <View style={{flexDirection:"column", alignItems:"center",gap:5}}>
                <Image source={categoria4} alt="categoria"/>
                <Text>Masculino</Text>
            </View>
            <View style={{flexDirection:"column", alignItems:"center",gap:5}}>
                <Image source={categoria5} alt="categoria"/>
                <Text>Feminino</Text>
            </View>
            </View>
        </ScrollView>
);
};



export default Categories;