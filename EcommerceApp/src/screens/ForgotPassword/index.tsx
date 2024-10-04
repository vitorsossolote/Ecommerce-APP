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
    Image,
    Center
} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { StyleSheet, View, Text, Dimensions, } from "react-native"
import { Icon, User,Mail } from "lucide-react-native"

import DefaultInput from "../../components/inputForm";
import PasswordInput from "../../components/inputForm/password";


const { width: screenWidth } = Dimensions.get('screen');

const ForgotPassword = () => (
    <GluestackUIProvider config={config}>
        <SafeAreaView>
            <View style={{ padding: 25, width: 250, marginLeft: 10, }}>
                <Text style={{ color: "#000", fontSize: 34, fontWeight: "bold" }}>Esqueceu sua Senha?</Text>
            </View>
            <Center>
            <View style={{ flexDirection: "column", alignItems: "center", marginTop: 15, gap: 24, width: screenWidth - 60, }}>
                <DefaultInput label="Insira seu E-mail"/>
                <Text>Nós iremos enviar uma mensagem para redefinir sua nova senha</Text>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={{ backgroundColor: "#F83758", width: screenWidth - 60, height: 60, marginTop: 5, }}
                >
                    <ButtonText>Enviar</ButtonText>
                </Button>
            </View>
            </Center>
        </SafeAreaView>
    </GluestackUIProvider>
);


export default ForgotPassword