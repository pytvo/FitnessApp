import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Header() {
  return (
    <View className = "border-b-2 border-neutral-400 mb-4" style = {{alignItems: 'flex-end'}}>
        <Image style = {{width: wp(13), height: wp(13), position: "absolute"}} className = "rounded-full ml-2" source={require('../assets/images/portrait-white-man-isolated.jpg')} />
        <Text style = {{fontSize: hp(4), alignSelf: 'flex-start'}} className = "mt-2 mb-2 ml-4 text-white">Hello, <Text className = "font-bold">Oleh</Text></Text>
    </View>
  )
}