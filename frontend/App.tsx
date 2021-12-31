import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import localhost from 'react-native-localhost';
import Web3 from 'web3';
import { DetailsPizza, Login, DetailsDesserts, DetailsDrinks } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from "../navigation/tabs.js"

const Stack = createStackNavigator();
import PizzaShop from '../artifacts/contracts/PizzaShop.sol/PizzaShop.json';

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

export default function App(): JSX.Element {

  React.useEffect(() => {
    SplashScreen.hide()
  })

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
    return connector.connect();
  }, [connector]);
  const signTransaction = React.useCallback(async () => {
    try {
       await connector.signTransaction({
        data: '0x',
        from: '0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3',
        gas: '0x9c40',
        gasPrice: '0x02540be400',
        nonce: '0x0114',
        to: '0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359',
        value: '0x00',
      });
    } catch (e) {
      console.error(e);
    }
  }, [connector]);
  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Login'}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="Order"
          component={Tabs}
        />
        <Stack.Screen
          name="Wallet"
          component={Tabs}
        />
        
        <Stack.Screen
          name="DetailsPizza"
          component={DetailsPizza}
        />
        <Stack.Screen
          name="DetailsDesserts"
          component={DetailsDesserts}
        />
        <Stack.Screen
          name="DetailsDrinks"
          component={DetailsDrinks}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}