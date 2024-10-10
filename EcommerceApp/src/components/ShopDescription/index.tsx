
import React from "react"
import { Center, View, Text, Button, ButtonText, } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native"
import { Rating, AirbnbRating } from 'react-native-ratings';

const ShopDescription = () => (
    <View style={{ width: "90%", left: 15, bottom:30 }}>
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
            <Text style={{color:"#828282"}}>56.890</Text>
        </View>
        <View style={{flexDirection:"row", marginTop:10, gap:10}}>
            <Text style={{color:"#808488", fontSize:18}} strikeThrough={true}>₹2,999</Text>
            <Text style={{color:"#000", fontFamily:"Montserrat-Medium", fontSize:18}}>₹1,500</Text>
            <Text style={{color:"#FA7189", fontFamily:"Montserrat-SemiBold", fontSize:18}}>50% OFF</Text>
        </View>
        <View style={{marginTop:10, gap:5,}}>
            <Text style={{fontFamily:"Montserrat-Medium", color:"#000", fontSize:22}}>Product Details</Text>
            <Text style={{fontFamily:"Montserrat-Regular", color:"#000"}}>Perhaps the most iconic sneaker of all-time, this original "Chicago"? 
                colorway is the cornerstone to any sneaker collection. Made famous in 1985
                 by Michael Jordan, the shoe has stood the test of time, becoming the most 
                 famous colorway of the Air Jordan 1. This 2015 release saw the </Text>
        </View>
    </View>
);

export default ShopDescription