import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BluetoothDevicesScreen from '../screens/BluetoothDevicesScreen';
import BluetoothPaymentScreen from '../screens/BluetoothPaymentScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1a1a2e',
            borderTopColor: '#2a2a3e',
          },
          tabBarActiveTintColor: '#00d4aa',
          tabBarInactiveTintColor: '#888',
          headerStyle: {
            backgroundColor: '#1a1a2e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name="Devices"
          component={BluetoothDevicesScreen}
          options={{
            tabBarIcon: () => '📱',
            title: 'Bluetooth Devices'
          }}
        />
        <Tab.Screen
          name="Payment"
          component={BluetoothPaymentScreen}
          options={{
            tabBarIcon: () => '💸',
            title: 'Bluetooth Payment'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;