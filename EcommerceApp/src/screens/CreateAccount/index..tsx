import * as React from "react";
import {
    GluestackUIProvider,
    SafeAreaView,
    Input,
    InputField,
    FormControl,
    FormControlLabel,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabelText,
    Button,
    ButtonText,
    Pressable,
    Image
} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { StyleSheet, View, Text, Dimensions, } from "react-native"
import { Icon, User } from "lucide-react-native"

import DefaultInput from "../../components/inputForm";
import PasswordInput from "../../components/inputForm/password";

import google from "../../assets/images/google.png"
import facebook from "../../assets/images/facebook.png"
import apple from "../../assets/images/apple.png"

const { width: screenWidth } = Dimensions.get('screen');

const CreateAccount = () => (
    <GluestackUIProvider config={config}>
        <SafeAreaView>
            <View style={{ padding: 25, width: 250, marginLeft: 10, }}>
                <Text style={{ color: "#000", fontSize: 34, fontWeight: "bold" }}>Crie sua Conta</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", marginTop: 15, gap: 24, }}>
                <DefaultInput label="Seu E-mail"/>
                <PasswordInput  label = "Sua senha"/>
                <PasswordInput  label = "Confirme sua senha"/>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={{ backgroundColor: "#F83758", width: screenWidth - 60, height: 60, marginTop: 24, }}
                >
                    <ButtonText>Login</ButtonText>
                </Button>
                <View style={{ flexDirection: "column", height: '100%', width: "100%", alignItems: "center" }}>
                    <View style={{}}><Text style={{ fontSize: 16, fontWeight: "600" }}>- Ou continue com -</Text></View>
                    <View style={{ flexDirection: "row", gap: 20, marginTop: 20, }}>
                        <View style={{ backgroundColor: "#FCF3F6", borderRadius: 30, width: 60, height: 60, borderColor: "#f83758", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                            <Image source={google} style={{ width: 30, height: 30, }} alt="Google" />
                        </View>
                        <View style={{ backgroundColor: "#FCF3F6", borderRadius: 30, width: 60, height: 60, borderColor: "#f83758", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                            <Image source={facebook} style={{ width: 30, height: 30, }} alt="Facebook" />
                        </View>
                        <View style={{ backgroundColor: "#FCF3F6", borderRadius: 30, width: 60, height: 60, borderColor: "#f83758", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                            <Image source={apple} style={{ width: 30, height: 30, }} alt="Apple" />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center", gap:5, marginTop:5,}}>
                        <Text style={{fontSize:16}}>Já tem uma conta?</Text>
                        <Button
                            size="md"
                            variant="link"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                        >
                            <ButtonText style={{ color: "#F83758", fontSize: 16 }} underline={true}>Login</ButtonText>
                        </Button>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    </GluestackUIProvider>
);


export default CreateAccount