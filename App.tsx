import React, {useRef, useState} from 'react';
import { Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';

import { Modalize } from "react-native-modalize";

import Market from './Market';
import Wallet from './Wallet';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  const modalizeDestino = useRef<Modalize>(null);

  const [status, setStatus] = useState(false);

  const toggle = () => {
    !status ? modalizeDestino.current?.open() : modalizeDestino.current?.close()
    setStatus(!status);
  };

  return (
    <>
    
    <NavigationContainer>
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-stats-chart' : 'md-stats-chart';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'wallet' : 'wallet';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F0B90B',
          inactiveTintColor: '#f0f0f0',
          showLabel: false,
          inactiveBackgroundColor: "#1F2630",
          activeBackgroundColor: "#1F2630",
          adaptive: true,

          safeAreaInsets: {
            bottom: 0
          },
          iconStyle: {
            paddingBottom: 20
          },
          style: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === "ios" ? 84 : 64,
          },
        }}
        
      >
        <Tab.Screen name="Home" component={Market} />
        <Tab.Screen name="Settings" component={Wallet} />
      </Tab.Navigator>
      
      <TouchableOpacity style={{ 
        position: 'absolute', bottom: Platform.OS === 'android' ? 16 : 30, 
        zIndex: 999999999999, alignSelf: 'center',
        backgroundColor: '#F0B90B', padding: 6, borderRadius: 10,
        transform: !status ? [{ rotate: "45deg" }] : [{ rotate: "90deg" }]
      }}
        onPress={()=> toggle()}
      >
        {!status && <FontAwesome5 name='exchange-alt' size={24} color="#000" 
          style={{transform: [{ rotate: "-45deg" }]}}
        />}
        {status && <AntDesign name='close' size={24} color="#000" 
          style={{transform: [{ rotate: "-90deg" }]}}
        />}
      </TouchableOpacity>
      <Modalize ref={modalizeDestino} snapPoint={280}>
        <View
          style={{
            flex: 1,
            height: 280,
            padding: 20,
            backgroundColor: '#232A34',
          }}
        >
          <Text>Modal content</Text>
        </View>
      </Modalize>
    </NavigationContainer>
      
    </>
  );
}
