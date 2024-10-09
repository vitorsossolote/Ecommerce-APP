import React,{useState,useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import Carousel,{Pagination} from "react-native-snap-carousel"
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
    Image,
} from "@gluestack-ui/themed"
import { ArrowRight} from 'lucide-react-native';

import banner2 from "../../assets/images/banner2.png"

const { width: screenWidth } = Dimensions.get('window');

const dummyData = [
    { id: 1, rating: '93%' },
    { id: 2, rating: '85%' },
    { id: 3, rating: '89%' },
    { id: 4, rating: '93%' },
    { id: 5, rating: '85%' }
];

const MyCarousel = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={{ width: screenWidth - 20, height: 230, backgroundColor: "#000", alignSelf: "center", borderRadius: 30, marginTop: 40, }}>
            <Image source={banner2} alt="banner2" style={{ width: "100%", height: "100%", borderRadius: 30, }} />
        </View>
    );
    const [index, setIndex]= useState(0);
    const isCarousel = useRef(null);
    return (
        <View>
        <Carousel
            ref={isCarousel}
            data={data}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            onSnapToItem={index => setIndex(index)}
        />
        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: -3,
          backgroundColor: '#FFA3B3',
          bottom:15,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
        </View>
    );
};

const ShopCarrosel = () => {
    return (
        <MyCarousel data={dummyData} />
    );
};

export default ShopCarrosel;