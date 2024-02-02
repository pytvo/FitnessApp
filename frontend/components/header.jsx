import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Header() {
  return (
    <View className = "border-b-2 border-neutral-400 justify-center">
      <Text style = {{fontSize: hp(4)}} className = "text-white mb-1">Hello, <Text className = "text-bold">Oleh</Text></Text>
      <Image source = {require('../assets/images/portrait-white-man-isolated.jpg')} style = {{width: wp(10), height: wp(10)}} className = "rounded-full absolute self-end" />
    </View>
  )
}