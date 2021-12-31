import React from "react";
import { StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";    

const TextButton = ({ label, icon, customContainerStyle, customLabelStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                justifyContent:'space-between',
                ...customContainerStyle
            }}
            onPress={onPress}
        >
            <Text style={{color: COLORS.white, ...FONTS.body2,marginTop: 10, justifyContent:'center', ...customLabelStyle}} >
                {label}
            </Text>

            <Image 
                source={icon}
                style={{
                   width:25,
                   height:25
                }}
            />

        </TouchableOpacity>
    )
}

export default TextButton