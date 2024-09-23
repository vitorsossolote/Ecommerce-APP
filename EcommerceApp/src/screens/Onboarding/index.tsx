import React, {useState} from "react"
import { Center, View, Text, Image} from "@gluestack-ui/themed"
import { StyleSheet,Dimensions } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider";

const { width: screenWidth } = Dimensions.get('window');
const slides = [ 
    {
        id: 1,
        title: 'Escolha Produtos',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        image: require("../../assets/images/onboarding1.png")
    },
    {
        id: 2,
        title: 'Faça o Pagamento',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        image: require("../../assets/images/onboarding2.png")
    },
    {
        id: 3,
        title: 'Receba seu Pedido',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        image: require("../../assets/images/onboarding3.png")
    }
]

export default function OnboardingScreen() {
    const buttonLabel = (label,color) => {
        return(
            <View style={styles.buttonContainer}>
                <Text style={{
                    color: color,
                    fontWeight:'600',
                    fontSize:18
                }}>
                    {label}
                </Text>
            </View>
        )
    }
     return(
            <AppIntroSlider
                data={slides}
                renderItem={({item}) => {
                    return(
                        <View style = {styles.main}>
                            <Image
                             source={item.image} style={styles.image} resizeMode="contain" alt="Onboarding"/>
                             <Text style={styles.title}>{item.title}</Text>
                             <Text style={styles.desc}>{item.description}</Text>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor:"#17223B",
                    width:30,
                }}
                showSkipButton
                renderNextButton={() => buttonLabel("Próximo","#F83758")}
                renderSkipButton={() => buttonLabel("Pular","#17223B")}
                renderDoneButton={() => buttonLabel("Explorar", "#F83758")}
                // onDone={navigation.navigate("Home")}
                />
        )
};

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    image:{
        width: 350,
        height:250,
    },
    title:{
        color:'#000',
        fontSize:26,
        fontWeight:'900',
        marginBottom:15,
    },
    desc:{
        textAlign:'center',
    },
    buttonContainer:{
        padding:13
    },
    buttonText:{
        color:""
    }
});