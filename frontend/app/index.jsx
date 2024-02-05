import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Home from './home'

export default function Index() {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#000"}}>
      <Home />
    </SafeAreaView>
  )
}