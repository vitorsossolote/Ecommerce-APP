import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
    Image,
} from "@gluestack-ui/themed"
import { ArrowDownUp,Filter} from 'lucide-react-native';


const Section = () => {
    return (
        <View style={{ flexDirection: "row", padding: 25, left: 5, justifyContent: "space-between" }}>
            <Text style={{ color: "#000", fontSize: 24, fontWeight: "bold", }}>Destaques</Text>
            <View style={{ flexDirection: "row", gap:10,top:3, }}>
                <Button
                    variant="solid"
                    style={{backgroundColor:"#fff", gap:10, width:100, height:30,}}
                >
                    <ButtonText color={"#000"}>Ordenar</ButtonText>
                    <ButtonIcon as={ArrowDownUp}color={"#000"} />
                </Button>
                <Button
                    variant="solid"
                    style={{backgroundColor:"#fff", gap:10, width:100, height:30,}}
                >
                    <ButtonText color={"#000"}>Filtrar</ButtonText>
                    <ButtonIcon as={Filter}color={"#000"} />
                </Button>
            </View>
        </View>
    );
};

export default Section;