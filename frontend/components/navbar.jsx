import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function navbar() {
  return (
    <View className = "bg-white self-center mb-4 rounded-full opacity-40" style = {{width: wp(90), height: hp(5)}}>
        
    </View>
  )
}