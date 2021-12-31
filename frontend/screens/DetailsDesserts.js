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
    Touchable,
} from 'react-native';
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { TextButton, MenuButton } from '../../components';

import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import localhost from 'react-native-localhost';
import Web3 from 'web3';
import PizzaShop from '../../artifacts/contracts/PizzaShop.sol/PizzaShop.json';
const DetailsDesserts=({navigation}) => {
    const connector = useWalletConnect();
    const payDessert = React.useCallback(async () => {
        try {
           await connector.sendTransaction({
            data: '0x21', //data dessert
            from: `${connector.accounts}`,
            to: '0xBcC732b0acE59557FE2C8D86Dbca6e6d738b043c',
            value: '1000000000000000',
          });
        } catch (e) {
          console.error(e);
        }
      }, [connector]);

    const scrollX = React.useRef(new Animated.Value(0)).current
    const menuScrollViewRef = React.useRef()
    const numberOfCharts = [1,2,3]

    function renderDots() {
        const dotPosition = Animated.divide(scrollX,  SIZES.width)
        return (
            <View style= {{ height: 30,}}>
                <View 
                    style={{ 
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: -60
                    }}
                >
                    {numberOfCharts.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index , index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        const dotSize = dotPosition.interpolate({
                            inputRange:[index - 1, index , index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        })
                        const dotColor = dotPosition.interpolate({
                            inputRange:[index - 1, index , index + 1],
                            outputRange: [COLORS.red2, COLORS.primary, COLORS.white ],
                            extrapolate: 'clamp'
                        })
    
                        return (
                            <Animated.View 
                                key={`dot-${index}`}
                                
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: 10,
                                    backgroundColor: dotColor,
                                    marginTop: -20
                                }}
                            />
                        )
                    })}
                </View>
    
            </View>
        )
    }
   
    function renderList() {
        return (
            <>
            <View>
            <Animated.FlatList 
                    ref={menuScrollViewRef}
                    data={dummyData.dessertsList}
                    horizontal
                    pagingEnabled
                    
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    onScroll={Animated.event([
                        {nativeEvent: {contentOffset: {x: scrollX}}}
                    ], {
                        useNativeDriver: false
                    })}
                    renderItem={({item, index}) => {
                        return (
                            <SafeAreaView
                                style={{
                                   flexDirection: 'column',
                                    alignItems: 'center',
                                    width: SIZES.width,
                                    
                                }}
                            >   
                                
                               <SafeAreaView
                                style={{
                                  width: 330,
                                  height: 300,
                                  marginTop: -90
                                }}
                               >
                                <Image
                                    source={item.thumbnail}
                                    resizeMode="center"
                                    style={{
                                        width: "100%",
                                    }}
                                />
                              </SafeAreaView>
                              <View
                                style={{
                                  marginTop: 90,
                                  height:200
                                }}
                              >
                                
                                <Text style={{color: COLORS.red, ...FONTS.h2, textAlign:'center', marginHorizontal: 40 }} > {item.name} </Text>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3, textAlign:'center', margin: 20,  }} > {item.description} </Text>
                                <View
                                style={{
                                    height:80,
                                    width:80,
                                    borderRadius:40,
                                    backgroundColor: COLORS.primary,
                                    marginLeft: "70%",
                                    marginTop: -150
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign:'center',
                                        alignSelf:'center',
                                        marginTop:30,
                                        color:COLORS.white
                                    }}
                                >{item.price}</Text>
                            </View>
                           
                            </View>
                           
                        
                            </SafeAreaView>
                        )
                    }}
            />
             {renderDots()}
            </View>
            </>
        )
    }
    return (
        <>
        <SafeAreaView
            style={{
                alignItems:'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 100
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image 
                    source={icons.leftArrow}
                    style={{
                        height: 30,
                        width: 15,
                        marginLeft:-80,
                        margin:10
                    }}
                />
            </TouchableOpacity>
            <Text
                style={{
                    color: COLORS.primary,
                    ...FONTS.h1,
                    
                }}
            >
                Pizza Menu
            </Text>
        </SafeAreaView>
        <ScrollView
            style={{
                backgroundColor: COLORS.backColar,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                
            }}
        >
            <View>
            {renderList()}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: -50
                }}
            >
                <TextButton 
                    label={"Now Pay"}
                    customContainerStyle={{
                        width:40 +"%",
                        marginLeft: 20
                    }}
                    onPress={payDessert}
                />
                <TextButton 
                    label={"Add to Cart"}
                    customContainerStyle={{
                        width:40 +"%",
                        marginLeft: 30,
                        backgroundColor: COLORS.red,
                        marginBottom: 20
                    }}
                />
            </View>
            
        </ScrollView>
        </>
    )
}

export default DetailsDesserts