import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home'
import Exercise from './exercise'
import Meals from './meals';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: 'rgba(255,255,255,0.08)',
            position: 'absolute',
            bottom: hp(3),
            left: hp(12),
            right: hp(12),
            borderRadius: 15,
            borderTopWidth: 0,
            height: hp(6),
            paddingBottom: 0
    }}}>
      <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name="home" size={28} color={focused ? "#58ecdc" : "#Bfbfbf"} />
              </View>
          )
      }}/>
      <Tab.Screen name="Exercise" component={Exercise} options={{
          tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name="dumbbell" size={28} color={focused ? "#58ecdc" : "#Bfbfbf"} />
              </View>
          )
      }}/>
      <Tab.Screen name="Meals" component={Meals} options={{
          tabBarIcon: ({focused}) => (
              <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name="hamburger" size={28} color={focused ? "#58ecdc" : "#Bfbfbf"} />
              </View>
          )
      }}/>
    </Tab.Navigator>
  )
}