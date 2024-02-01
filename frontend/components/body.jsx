import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router'

export default function Body() {
  const router = useRouter();
  return (
    <View>
        <View className = "flex border-b-2 border-neutral-500">
            <Text style = {{fontSize:hp(5), height: hp(10)}} className = "text-white text-bold ">15,160</Text>
        </View>
    </View>
  )
}