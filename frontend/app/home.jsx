import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/header'
import Body from '../components/body'
import Navbar from '../components/navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFonts, RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono'
export default function Home() {
  return (
    <View style = {{flex: 1, width: wp(94), alignSelf: 'center'}}>
        <Header />
        <Body />
    </View>
  )
}