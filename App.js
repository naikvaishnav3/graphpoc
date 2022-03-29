import React, { Component } from 'react';
import { Text,  View } from 'react-native';
import Graphs from './src/graphs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Uploads() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Uploads!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15
        },
        tabBarIconStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="Graphs" component={Graphs} options={{headerShown: false}}/>
      <Tab.Screen name="Upload" component={Uploads} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

