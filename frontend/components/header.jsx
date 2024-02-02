import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Header() {
  return (
    <View className = "border-b-2 border-neutral-400">
      <Text style = {{fontSize: hp(4)}} className = "text-white mb-1">Hello, <Text className = "text-bold">Oleh</Text></Text>
    </View>
  )
}