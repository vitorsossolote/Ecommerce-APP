
import React from "react"
import { Center, View, Text, Button, ButtonText, } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native"
import { Rating, AirbnbRating } from 'react-native-ratings';

const ShopDescription = () => (
    <View style={{ width: "100%", left: 15 }}>
        <View>
            <Text style={{ color: "#000", fontFamily: "Montserrat-SemiBold", fontSize: 18 }}>Size: 7UK</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <Button
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={{ width: 83, borderColor: "#FA7189", borderWidth: 2, }}
            >
                <ButtonText style={{ color: "#FA7189", fontFamily: "Montserrat-SemiBold" }}>6 UK</ButtonText>
            </Button>
            <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={{ width: 83, borderColor: "#FA7189", borderWidth: 2, backgroundColor: "#FA7189" }}
            >
                <ButtonText style={{ color: "#fff", fontFamily: "Montserrat-SemiBold" }}>6 UK</ButtonText>
            </Button>
            <Button
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={{ width: 83, borderColor: "#FA7189", borderWidth: 2, }}
            >
                <ButtonText style={{ color: "#FA7189", fontFamily: "Montserrat-SemiBold" }}>6 UK</ButtonText>
            </Button>
            <Button
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={{ width: 83, borderColor: "#FA7189", borderWidth: 2, }}
            >
                <ButtonText style={{ color: "#FA7189", fontFamily: "Montserrat-SemiBold" }}>6 UK</ButtonText>
            </Button>
        </View>
        <View style={{ marginTop: 15, gap: 6 }}>
            <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 22, color: "#000" }}>NIke Sneakers</Text>
            <Text style={{ fontFamily: "Montserrat-Regular", }}>Vision Alta Men’s Shoes Size (All Colours)</Text>
        </View>
        <View style={{marginTop:10, flexDirection:'row', gap:8,}}>
            <Rating
                type='star'
                ratingColor='#ff2'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={20}
                style={{ alignSelf: "flex-start",}}
                readonly={true}
            />
            <Text style={{color:"#828282"}}>54.600</Text>
        </View>
    </View>
);

export default ShopDescription