import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '../components/header'
import Body from '../components/body'
import Navbar from '../components/navbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Home() {
  return (
    <View style = {{flex: 1, width: wp(94), alignSelf: 'center', marginTop: Platform.OS === 'android' ? hp(1) : hp(0)}}>
        <Header />
        <Body />
    </View>
  )
}