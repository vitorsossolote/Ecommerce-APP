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

import banner1 from "../../assets/images/banner1.png"

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
        <View style={{ flex: 1, width: screenWidth - 20, height: 230, backgroundColor: "#000", alignSelf: "center", borderRadius: 30, marginTop: 10, }}>
            <Image source={banner1} alt="banner1" style={{ width: "100%", height: "100%", borderRadius: 30, }} />
            <View style={{ position: "absolute", padding: 25, marginTop: 25, gap:5, }}>
                <Text style={{ color: "#fff", fontSize: 25, fontFamily: "Montserrat-Bold" }}>50-40% OFF</Text>
                <Text style={{ color: "#fff", fontFamily: "Montserrat-regular" }}>Now in (product)</Text>
                <Text style={{ color: "#fff", fontFamily: "Montserrat-regular" }}>All colours</Text>
                <Button
                    size="md"
                    variant="outline"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={{borderColor:"#fff", marginTop:5, width:120,}}
                >
                    <ButtonText color={"#fff"}>Shop Now</ButtonText>
                    <ButtonIcon as={ArrowRight} color="#fff"  style={{marginLeft:5,marginTop:5,}}/>
                </Button>
            </View>
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
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 3,
          backgroundColor: '#FFA3B3',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
        </View>
    );
};

const Carrosel = () => {
    return (
        <MyCarousel data={dummyData} />
    );
};

export default Carrosel;