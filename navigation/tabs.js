import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home, Wallet } from "../frontend/screens"
import { FONTS, icons,  COLORS,  } from "../constants"


const Tab = createBottomTabNavigator()




const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: { 
                position: 'absolute',
                bottom:0, 
                left:0, 
                right:0, 
                elevation:0, 
                backgroundColor: COLORS.white, 
                height:100, 
                borderTopColor: "transparent",
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50
            },
            
          }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style= {{ alignItems: 'center',
                        justifyContent: 'center'}} >
                            <Image 
                                source={icons.pizza_tab}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                            }} >PIZZA</Text>
                        </View>
                    )
                }}
            />
           
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style= {{ alignItems: 'center',
                        justifyContent: 'center'}} >
                            <Image 
                                source={icons.wallet_tab}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                            }} >MY WALLET</Text>
                        </View>
                    )
                }}
            />

          
        </Tab.Navigator>
    )
}



export default Tabs;