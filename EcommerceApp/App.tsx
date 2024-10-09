import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box, Text, Image} from '@gluestack-ui/themed';
import SplashScreen from "./src/screens/SplashScreen"
import OnboardingScreen from './src/screens/Onboarding';
import Home from './src/screens/Home';
import Login from './src/screens/Login/index'
import CreateAccount from "./src/screens/CreateAccount/index.";
import ForgotPassword from "./src/screens/ForgotPassword";
import ProductScreen from "./src/screens/productScreen";

function App(): JSX.Element {
 return (
      <GluestackUIProvider config={config}>
        <ProductScreen/>
      </GluestackUIProvider>
  );
}

export default App;
