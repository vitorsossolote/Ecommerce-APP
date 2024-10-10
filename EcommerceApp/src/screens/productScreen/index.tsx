
import React from "react"
import { Center, View, Text} from "@gluestack-ui/themed"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"
import ShopHeader from "../../components/ShopHeader"
import ShopCarrosel from "../../components/ShopCarousel";
import ShopDescription from "../../components/ShopDescription";
import ShopTags from "../../components/ShopTags";

const ProductScreen = () => (
    <ScrollView>
        <ShopHeader title={""} withIcon={true}/>
        <ShopCarrosel/>
        <ShopDescription/>
        <ShopTags/>
    </ScrollView>

);

export default ProductScreen;