import React from "react"
<<<<<<< HEAD
import { View, Text, Image, Button, ButtonText, ButtonIcon } from "@gluestack-ui/themed"
import { StyleSheet, SafeAreaView, ScrollView, Dimensions,Pressable } from "react-native"
=======
import {View, Text,Image} from "@gluestack-ui/themed"
import { StyleSheet,SafeAreaView,ScrollView,Dimensions} from "react-native"
>>>>>>> ca2ae00824be9c09ded86a204aaa94b710fa8554

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
<<<<<<< HEAD
import banner from "../../assets/images/hotbanner.png"
import sponsored from "../../assets/images/sponsored.png"

import { ArrowRight } from "lucide-react-native"
import { ChevronRight } from "lucide-react-native"
=======
>>>>>>> ca2ae00824be9c09ded86a204aaa94b710fa8554

const { width: screenWidth } = Dimensions.get('window');

export default function Home() {
<<<<<<< HEAD
    return (
        <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
            <ScrollView>
                <Header />
                <SearchBar />
                <Section />
                <Categories />
                <Carrosel />
                <Offer title="Deal of the Day" bgColor={"#4392F9"} showCountDown={true} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: "#fff", padding: 15, }} >
                    <OfferProducts />
                    <OfferProducts />
                    <OfferProducts />
                    <OfferProducts />
                </ScrollView>
                <View style={{ flex: 1, width: screenWidth - 20, height: 120, justifyContent: "flex-start", flexDirection: "row", gap: 10, alignSelf: "center", backgroundColor: '#fff' }}>
                    <View style={{ padding: 15, alignItems: "flex-start", justifyContent: "center", }}>
                        <Image source={oferta} alt="oferta" />
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center", width: 200, }}>
                        <Text style={{ color: "#000", fontFamily: "Montserrat-Medium", fontSize: 20, }}>Special Offers</Text>
                        <Text style={{ fontFamily: "Montserrat-Light", fontSize: 14, color: "#000" }}>We make sure you get the offer you need at best prices</Text>
                    </View>
                </View>
                <View style={{ width: screenWidth - 30, height: 200, flexDirection: "row", left: 15,marginTop:20 }}>
                    <View style={{ flexDirection: "row", width: 170, }}>
                        <Image source={retangulo} style={{ width: 17, height: "100%" }} alt=""/>
                        <Image source={bubble} style={{ width: 78, height: 180, top: 10, right: 5, }} alt=""/>
                        <Image source={sapato} style={{ width: 200, height: 140, top: 30, position: "absolute" }} alt=""/>
                    </View>
                    <View style={{ flexDirection: "column", marginTop: 30, flex: 1, gap:5,}}>
                        <Text style={{ color: "#232327", fontFamily: "Montserrat-Medium", fontSize: 22, }}>Flat and Heels</Text>
                        <Text style={{ color: "#232327", fontFamily: "Montserrat-Regular", fontSize: 12 }}>Stand a chance to get rewarded</Text>
                        <Button
                            size="md"
                            variant="solid"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                            style={{width:130, height:34, backgroundColor:"#F83758",alignSelf:"flex-end",top:10}}
                        >
                            <ButtonText style={{fontFamily:"Montserrat-Medium", fontSize:14,}}>Visit Now</ButtonText>
                            <ButtonIcon as={ArrowRight} style={{left:10,top:1,}}/>
                        </Button>
                    </View>
                </View>
                <Offer title="Trending Products" bgColor={"#FD6E87"} showCountDown={false} margin={30}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: "#fff", padding: 15, }} >
                    <OfferProducts />
                    <OfferProducts />
                    <OfferProducts />
                    <OfferProducts />
                </ScrollView>
                <View style={{marginTop:20, backgroundColor:"#fff", width:screenWidth - 20,height:310, borderTopRightRadius:10, borderTopLeftRadius:10, alignSelf:"center"}}>
                    <Image source={banner} style={{ width:"100%", height:240,borderTopRightRadius:10, borderTopLeftRadius:10, }}/>
                    <View style={{flexDirection:"row"}}>
                    <View style={{paddingHorizontal:15, gap:1, marginTop:8,}}>
                        <Text style={{fontFamily:"Montserrat-Medium", fontSize:24, color:"#000"}}>New Arrivals</Text>
                        <Text style={{fontFamily:"Montserrat-Regular", fontSize:17, color:"#000"}}>Summer´ 25 Collections</Text>
                    </View>
                    <View style={{justifyContent:"flex-end"}}>
                    <Button
                            size="md"
                            variant="solid"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                            style={{width:110, height:30, backgroundColor:"#F83758",alignSelf:"flex-end", left:30}}
                        >
                            <ButtonText style={{fontFamily:"Montserrat-Medium", fontSize:14,}}>View All</ButtonText>
                            <ButtonIcon as={ArrowRight} style={{left:10,top:1,}}/>
                        </Button>
                    </View>
                </View>
                </View>
                <View style={{backgroundColor:"#fff", width:screenWidth - 30,marginTop:20, alignSelf:"center", height:400,padding:15,}}>
                    <Text style={{color:"#000", fontFamily:"Montserrat-Medium", fontSize:22,}}>Sponsored</Text>
                    <Image source={sponsored} style={{width:350, height:300, alignSelf:"center",top:15,}}/>
                    <Pressable onPress={() => console.log("promo")}>
                    <View style={{flexDirection:"row", justifyContent:"space-between",top:25, left:5,}}>
                        <Text style={{color:"#000", fontFamily:"Montserrat-Medium", fontSize:17,}}>up to 50% Off</Text>
                        <ChevronRight style={{color:"#000"}}/>
                    </View> 
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
=======
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
>>>>>>> ca2ae00824be9c09ded86a204aaa94b710fa8554
