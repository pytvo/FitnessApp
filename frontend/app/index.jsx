import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/header'
import Body from '../components/body'

export default function Index() {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#000"}}>
      <Header />
      <Body />
    </SafeAreaView>
  )
}