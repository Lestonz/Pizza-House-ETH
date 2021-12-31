import React, {useRef, useMemo, useState, useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    FlatList,
} from 'react-native';
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { MenuButton } from "../../components"

const Home=({navigation}) => {
    return (
        <>
        <SafeAreaView>
        <SafeAreaView
            style={{
                alignItems:'center',
                justifyContent: 'center',
                
            }}
        >
            <Text
                style={{
                    color: COLORS.primary,
                    ...FONTS.h1,
                    marginBottom: 5
                }}
            >
                Lestonz's Pizza House
            </Text>
        </SafeAreaView>
        <ScrollView 
            style={{
                backgroundColor: "#Ffeed2",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                marginBottom:120
            }}
        >
             <View>
                <Image 
                    source={
                        images.pizza_shop
                    }
                    style={{
                        width:300,
                        height:300,
                        marginLeft: 180
                    }}
                />
            </View>
            
            <MenuButton 
                icon={images.pizza_menu}
                name={"Pizza"}
                category={"Main Food"}
                onPress={() => navigation.navigate("DetailsPizza")}
            />
            <MenuButton 
                icon={images.cake_menu}
                name={"Sweet Things"}
                category={"Desserts"}
                onPress={() => navigation.navigate("DetailsDesserts")}
            />
            <MenuButton 
                icon={images.drink_menu}
                name={"Soft Drinks"}
                category={"Drinks"}
                onPress={() => navigation.navigate("DetailsDrinks")}
            />
           
        </ScrollView>   
        </SafeAreaView>
        </>
    )
}

export default Home