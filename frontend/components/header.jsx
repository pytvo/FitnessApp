import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Header() {
  return (
    <View className = "border-b-2 border-neutral-500 justify-center flex-row">
      <View className = 'flex-1 items-start'>
        <Text style = {{fontSize: hp(4)}} className = "text-white mb-1">Hello, <Text className = "font-semibold">Oleh</Text></Text>
      </View>
      <View className = "items-end">
        <Image className = "rounded-full" source = {require('../assets/images/portrait-white-man-isolated.jpg')} style = {{width: wp(10), height: wp(10)}}/>
      </View>
    </View>
  )  
}
