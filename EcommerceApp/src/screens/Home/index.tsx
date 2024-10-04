import React from "react"
import {View, Text,Image} from "@gluestack-ui/themed"
import { StyleSheet,SafeAreaView,ScrollView,Dimensions} from "react-native"

import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"
import Section from "../../components/Section"
import Categories from "../../components/Categories"
import Carrosel from "../../components/Carrosel"
import Offer from "../../components/Offer"
import OfferProducts from "../../components/OfferProducts"

import oferta from "../../assets/images/offer.png"
import retangulo from "../../assets/images/retangulo.png"
import bubble from "../../assets/images/bubble.png"
import sapato from "../../assets/images/sapato.png"

const { width: screenWidth } = Dimensions.get('window');

export default function Home() {
        return(
            <SafeAreaView style={{backgroundColor:"#f2f2f2"}}>
                <ScrollView>
                <Header/>
                <SearchBar/>
                <Section/>
                <Categories/>
                <Carrosel/>
                <Offer/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: "#fff", padding: 15, }} >
                <OfferProducts/>
                <OfferProducts/>
                <OfferProducts/>
                <OfferProducts/>
                </ScrollView>
                <View style={{flex:1, width: screenWidth -20,height:120,justifyContent:"flex-start",marginLeft:15, flexDirection:"row",gap:10,alignSelf:"center"}}>
                    <View style={{padding:15,alignItems:"flex-start", justifyContent:"center",}}>
                        <Image source={oferta} alt="oferta"/>
                    </View>
                    <View  style={{flexDirection:"column",justifyContent:"center",width:200,}}>
                        <Text style={{color:"#000", fontFamily:"Montserrat-Medium", fontSize:20, }}>Special Offers</Text>
                        <Text style={{fontFamily:"Montserrat-Light",fontSize:14,color:"#000"}}>We make sure you get the offer you need at best prices</Text>
                    </View>
                </View>
                <View>

                </View>
                </ScrollView>
                </SafeAreaView>
        )
    };