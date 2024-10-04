import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
    Image,
    Text,
} from "@gluestack-ui/themed"
import { Rating, AirbnbRating } from 'react-native-ratings';


import product1 from "../../assets/images/product1.png"

const OfferProducts = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: "#fff", padding: 15, }} >
            <View style={{ flexDirection: "row", }}>
                <View style={{ backgroundColor: "#fff", height: 300, width: 200, borderRadius: 15, alignItems: "center" }}>
                    <Image source={product1} alt='produto1' style={{ width: "100%", height: 130, borderRadius: 15, }} />
                    <View style={{ flexDirection: "column", width: 170, alignItems: "center", marginTop: 10, gap: 7, }}>
                        <Text style={{ color: "#000", fontSize: 14, fontFamily: "Montserrat-Medium" }}>HRX by Hrithik Roshan</Text>
                        <Text style={{ color: "#000", fontSize: 12, fontFamily: "Montserrat-Regular" }}>Neque porro quisquam est qui dolorem ipsum quia</Text>
                        <Text style={{ color: "#000", alignSelf: "flex-start", fontFamily: "Montserrat-Medium" }}>R$ 240</Text>
                        <View style={{ flexDirection: "row", gap: 10, alignSelf: "flex-start" }}>
                            <Text style={{ alignSelf: "flex-start", fontFamily: "Montserrat-Light", }} strikeThrough={true}>R$ 480</Text>
                            <Text style={{ color: "#ee2d32" }}>50% OFF</Text>
                        </View>
                        <Rating
                            type='star'
                            ratingColor='#ff2'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={15}
                            style={{alignSelf:"flex-start",}}
                            readonly={true}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};


export default OfferProducts;