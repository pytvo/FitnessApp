import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Header() {
  return (
    <View className = "border-b-2 border-neutral-400 justify-center">
        <Image style = {{width: wp(12), height: wp(12), position: "absolute", alignSelf: 'flex-end'}} className = "rounded-full" source={require('../assets/images/portrait-white-man-isolated.jpg')} />
        <Text style = {{fontSize: hp(4), alignSelf: 'flex-start'}} className = "mt-2 mb-2 ml-4 text-white">Hello, <Text className = "font-bold">Oleh</Text></Text>
    </View>
  )
}