import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
    Image,
    Input,
    InputSlot,
    InputField,
    InputIcon,
} from "@gluestack-ui/themed"
import { SearchIcon,Mic } from 'lucide-react-native';

 //TODO ver react-magic-motion library

const SearchBar = () => {
    return(
        <View>
            <Input style={{borderRadius: 30, width: 370,height: 50,alignSelf: "center",backgroundColor: "#fff",marginTop:10,}}>
                            <InputSlot pl="$3">
                                <InputIcon as={SearchIcon} size="lg" color={"#bbbbbb"} />
                            </InputSlot>
                            <InputField placeholder="Procure algum Produto ..." placeholderTextColor='#bbbbbb' />
                            <InputSlot pr="$4">
                            <InputIcon as={Mic} size="lg" color={"#bbbbbb"}/></InputSlot>
                        </Input>
        </View>
);
};

export default SearchBar;