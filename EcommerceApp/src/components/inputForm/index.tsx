import React, { useState } from "react";
import { GluestackUIProvider,
    SafeAreaView,
    Input,
    InputField,
    FormControl,
    FormControlLabel,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabelText,
    InputSlot,
    InputIcon,
  } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { StyleSheet,View,Text,Dimensions} from "react-native"
import { User,EyeIcon,EyeOffIcon,Lock } from "lucide-react-native"
const { width: screenWidth } = Dimensions.get('screen');

interface Props{
    label: string,
}

export default function DefaultInput({label} : Props){
  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return(
  <GluestackUIProvider config={config}>
    <View>
    <FormControl style={{width: screenWidth - 60,}}>
          <FormControlLabel>
          </FormControlLabel>
          <Input style={{borderRadius:14, height:60, backgroundColor:"#F3F3F3", borderColor:"#676767"}}>
            <User color="#676767" style={{marginTop:17, marginLeft:9,}} />
            <InputField placeholder={label} />
          </Input>
        </FormControl>
    </View>
    </GluestackUIProvider>
  )
};
