import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router'

export default function Body() {
  const router = useRouter();
  return (
    <View>
        <TouchableOpacity onPress = {() => console.log('press')} className = "items-center bg-neutral-400 justify-center self-center rounded-[30px] mb-4" style = {{height: hp(10), width: wp(90)}}>
            <Text>Steps</Text>
        </TouchableOpacity>
        <View className = "items-center bg-neutral-400 justify-center self-center rounded-[30px] mb-4" style = {{height: hp(10), width: wp(90)}} >
            <Text>Distance</Text>
        </View>
        <View className = "items-center bg-neutral-400 justify-center self-center rounded-[30px] mb-4" style = {{height: hp(10), width: wp(90)}} >
            <Text>Calories</Text>
        </View>
        <View className = "items-center bg-neutral-400 justify-center self-center rounded-[30px] mb-4" style = {{height: hp(10), width: wp(90)}} >
            <Text>Test</Text>
        </View>
        <View className = "items-center bg-neutral-400 justify-center self-center rounded-[30px] " style = {{height: hp(10), width: wp(90)}} >
            <Text>Test</Text>
        </View>
    </View>
  )
}