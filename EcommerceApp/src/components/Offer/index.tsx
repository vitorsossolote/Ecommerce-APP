import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
    Image,
} from "@gluestack-ui/themed"
import CountDown from 'react-native-countdown-component';
import { AlarmClock,ArrowRight } from 'lucide-react-native';

const { width: screenWidth } = Dimensions.get('window');

const Offer = () => {
    return (
        <View style={{ backgroundColor: "#4392F9", width: screenWidth - 20, alignSelf: "center", height: 80, borderRadius: 15, padding: 10, flexDirection:"column" }}>
            <Text style={{ color: "#fff", fontFamily: "Montserrat-Medium", fontSize: 20, left:10, }}>Deal of the Day</Text>
            <View style={{flexDirection:"row", }}>
            <CountDown
                style={{alignSelf:'flex-start', fontFamily:"Montserrat-Medium",}}
                size={18}
                until={2074870}
                onFinish={() => console.log('Finished')}
                digitStyle={{ backgroundColor: 'transparent',}}
                digitTxtStyle={{ color: '#fff', fontWeight:"500" }}
                timeLabelStyle={{ color: '#fff', fontWeight: '500' }}
                separatorStyle={{ color: '#fff' }}
                timeToShow={['D', 'H', 'S']}
                timeLabels={{ m: null, s: null }}
                showSeparator
            />
            <Text style={{color:"#fff", fontFamily:"Montserrat-Medium", fontSize:16,top:13,right:5,}}>Remaining</Text>
            <Button
                    size="md"
                    variant="outline"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={{borderColor:"#fff", marginTop:5, width:120,alignSelf:"flex-end",position:"absolute", left:250, bottom:20,borderWidth:2,}}
                >
                    <ButtonText color={"#fff"}>View All</ButtonText>
                    <ButtonIcon as={ArrowRight} color="#fff"  style={{marginLeft:5,marginTop:5,}}/>
                </Button>
            </View>
        </View>
    );
};



export default Offer;