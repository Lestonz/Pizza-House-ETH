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
import { TextButton } from '../../components';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
const Wallet=({navigation}) => {
  
    const connector = useWalletConnect();

    const killSession = React.useCallback(() => {
        return connector.killSession();
      }, [connector]);
    

    return (
        <>
        
        <SafeAreaView
            style={{
                alignItems:'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 50
            }}
        >
            <Text
                style={{
                    color: COLORS.primary,
                    ...FONTS.h1,
                    marginBottom:10
                }}
            >
                My Wallet
            </Text>
        </SafeAreaView>
        <ScrollView
            style={{
                backgroundColor: COLORS.backColar,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                marginBottom:100
            }}
        >
            <View
                style={{
                    marginTop: -100,
                    marginHorizontal: "30%",
                }}
            >
               <Image 
                source={images.user_icon}
                resizeMode='center'
                style={{
                    justifyContent:'center',
                    alignSelf:'center'
                }}
               />
               <Text 
                style={{
                    marginTop:-120,
                    textAlign:'center',
                    ...FONTS.h2,
                    color: COLORS.secondary
                }}
            >
                
            </Text>

            <Text 
                style={{
    
                    textAlign:'center',
                    ...FONTS.h2,
                    color: COLORS.secondary
                }}
            >
                Wallet Adress
            </Text>
           
            <Text 
                style={{
                    textAlign:'center',
                    ...FONTS.body3,
                    color: COLORS.primary
                }}
            >
                {connector.accounts}
            </Text>
            </View>
            <SafeAreaView>
            {connector.connected && <TextButton 
                label={"Log Out"}
                customContainerStyle={{
                    width:80 +"%",
                    marginLeft: 40,
                    marginTop:50,
                    backgroundColor: COLORS.red,
                    marginBottom:100
                }}
                onPress={killSession}
            />}
           {!killSession && navigation.navigate("Login")}
            </SafeAreaView>
        </ScrollView>
       
        </>
    )
}

export default Wallet