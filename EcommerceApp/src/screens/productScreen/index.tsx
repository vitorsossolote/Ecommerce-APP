
import React from "react"
import { Center, View, Text} from "@gluestack-ui/themed"
import { StyleSheet, SafeAreaView } from "react-native"
import ShopHeader from "../../components/ShopHeader"
import ShopCarrosel from "../../components/ShopCarousel";
import ShopDescription from "../../components/ShopDescription";

const ProductScreen = () => (
    <SafeAreaView>
        <ShopHeader title={""} withIcon={true}/>
        <ShopCarrosel/>
        <ShopDescription/>
    </SafeAreaView>

);

export default ProductScreen;