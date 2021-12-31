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
import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import localhost from 'react-native-localhost';
import Web3 from 'web3';

import PizzaShop from '../../artifacts/contracts/PizzaShop.sol/PizzaShop.json';

const styles = StyleSheet.create({
    center: { alignItems: 'center', justifyContent: 'center' },
    // eslint-disable-next-line react-native/no-color-literals
    white: { backgroundColor: 'white' },
  });
  
  const shouldDeployContract = async (web3, abi, data, from: string) => {
    const deployment = new web3.eth.Contract(abi).deploy({ data });
    const gas = await deployment.estimateGas();
    const {
      options: { address: contractAddress },
    } = await deployment.send({ from, gas });
    return new web3.eth.Contract(abi, contractAddress);
  };

const Login=({navigation}) => {

  const connector = useWalletConnect();
  const [message, setMessage] = React.useState<string>('Loading...');
  const web3 = React.useMemo(
    () => new Web3(new Web3.providers.HttpProvider(`http://${localhost}:${HARDHAT_PORT}`)),
    [HARDHAT_PORT]
  );
  React.useEffect(() => {
    void (async () => {
      const { address } = await web3.eth.accounts.privateKeyToAccount(HARDHAT_PRIVATE_KEY);
      const contract = await shouldDeployContract(
        web3,
        PizzaShop.abi,
        PizzaShop.bytecode,
        address
      );
      
    })();
  }, [web3, shouldDeployContract, setMessage, HARDHAT_PRIVATE_KEY]);
  const connectWallet = React.useCallback(() => {
    return connector.connect()
  }, [connector]);
  
 
    return (
        <>
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
                    marginBottom: 10
                }}
            >
                Login
            </Text>
        </SafeAreaView>
        <ScrollView 
            style={{
                backgroundColor: "#Ffeed2",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50
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
                <Text
                    style={{
                        ...FONTS.h1,
                        marginTop:-200,
                        width: "40%",
                        textAlign:'center',
                        marginLeft: 30,
                        color:COLORS.red
                    }}
                >
                    Welcome Lestonz's Pizza House
                </Text>
                <Text
                    style={{
                        ...FONTS.body2,
                        marginTop: 100,
                        
                        textAlign:'center',
                        margin:20,
                        color:COLORS.lightGreen
                    }}
                >
                Please Connect Your Crypto Wallet to Taste Delicious Pizzas...
                </Text>
            </View>
            {!connector.connected &&
            <TextButton 
                label={"Connet Wallet"}
                customContainerStyle={{
                    width:80 +"%",
                    marginLeft: 40,
                    marginTop:50,
                    backgroundColor: COLORS.primary
                }}
                onPress={connectWallet}
            />}
            {!!connector.connected && navigation.navigate("Home")}
           
        </ScrollView>   
        </>
    )
}

export default Login