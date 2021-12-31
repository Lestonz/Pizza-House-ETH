import React from "react";
import { StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const MenuButton = ({icon, name, imageStyles, category, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
        <View
            style={{
                margin:20,
                height: 80,
                width: "90%",
                borderWidth: 0.5,
                flexDirection:'row',
                flex:1,
                justifyContent: "space-between",
                borderRadius: 20,
                borderColor: COLORS.pink,
                
            }}
        >
            <Image 
                source={icon}
                resizeMode="cover"
                style={{
                    width:60,
                    height:60,
                    marginTop: 10,
                    margin:10
                }}
            />
            <View style= {{flexDirection:'column', margin: 10, marginLeft: -120,
        alignSelf:'center'}}>
                <Text style= {{...FONTS.h3, color:COLORS.purple}}> {name} </Text>
                <View style= {{flexDirection:'row',  }}>
                    <Image 
                        source={icons.heart}
                        style={{
                            height:10,
                            width:10,
                            color: COLORS.red,
                            alignSelf:'center',
                            ...imageStyles
                        }}
                        
                    />
                    <Text style= {{color: COLORS.gray ,...FONTS.body4}}> {category} </Text>
                </View>
                
            </View>

            <Image 
                source={icons.rightArrow}
                style={{
                    height:16,
                    width: 8,
                    marginRight:20,
                    alignSelf:'center'
                }}
            />
        </View>
        </TouchableOpacity>
    )
}

export default MenuButton