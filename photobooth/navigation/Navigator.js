import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../ui/screens/Home';

import Details from '../ui/screens/Details';


//declaring Navigator
const Stack = createStackNavigator();

const HomeStackNavigation = () => {

    return (
        <Stack.Navigator
        >
        <Stack.Screen 
         name="Home"
         component={Home}
         options={{
             title: 'Home'
         }}
            
        />

       <Stack.Screen 
         name="Details"
         component={Details}
         options={{
             title: 'Details'
         }}
            
        />

        </Stack.Navigator>
    )
}


const Navigator = () => {
    return (
        <NavigationContainer>
            <HomeStackNavigation/>
        </NavigationContainer>
    )
}

export default Navigator;