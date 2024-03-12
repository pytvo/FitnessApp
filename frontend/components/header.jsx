import { View, Text, Image } from 'react-native'
import {React, useEffect, useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Header(profile) {

  console.log(profile['image'])
  
  return (
    <View className = "border-b-2 border-neutral-500 flex-row items-center" style = {{height: hp(6.5)}}>
      <View className = 'flex-1 items-start'>
        <Text style = {{fontSize: hp(4)}} className = "text-white mb-1">Hello, <Text className = "font-semibold">{profile['name']}</Text></Text>
      </View>
      <View className = "items-end">
        <Image className = "rounded-full" source = {{uri : profile['image']}} style = {{width: hp(5), height: hp(5)}}/>
      </View>
    </View>
  )  
}
