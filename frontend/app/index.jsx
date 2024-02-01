import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../components/header'
import Body from '../components/body'

export default function Index() {
  return (
    <SafeAreaProvider className = "bg-black"> 
      <SafeAreaView>
        <Header />
        <Body />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}