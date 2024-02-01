import { View, Text} from 'react-native'
import React, { Fragment } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../components/header'
import Body from '../components/body'

export default function Index() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style = {{flex:1, backgroundColor: "black"}}>
        <Header />
        <Body />
      </SafeAreaView>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  )
}