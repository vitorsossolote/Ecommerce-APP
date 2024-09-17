
import React from 'react';
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

function App(): JSX.Element {
 return (
      <GluestackUIProvider config={config}>
        <SplashScreen/>
      </GluestackUIProvider>
  );
}

export default App;
