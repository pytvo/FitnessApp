import { View, Platform } from 'react-native'
import React from 'react'
import Header from '../components/header'
import Body from '../components/body'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: '#000'}}>
      <View style = {{flex: 1, width: wp(94), alignSelf: 'center', marginTop: Platform.OS === 'android' ? hp(1) : hp(0)}}>
          <Header />
          <Body />
      </View>
    </SafeAreaView>
  )
}