import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Flowchart from './flowchart'

export default function Body() {
  return (
    <View className = "flex-1">
      <View className = "border-neutral-500 border-b-2 justify-center flex-row" style = {{height: hp(6.5)}}>
        <View className = "flex-1 items-start flex-row self-center">
          <Text className = "text-white font-semibold" style = {{fontSize: hp(4.5)}}>15020</Text>
        </View>
        <View className = "items-end justify-center">
          <Text className = "text-neutral-300"> Today's goal</Text>
          <Text className = "font-semibold" style = {{fontSize: hp(2), color: '#50ecda'}}>6000</Text>
        </View>
      </View>
      <Flowchart />
    </View>
  )
}

