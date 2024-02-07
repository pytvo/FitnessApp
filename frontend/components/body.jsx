import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Flowchart from './flowchart'

const goal = 6000;
const steps = 15020;

export default function Body() {
  return (
    <View className = "flex-1">
      <View className = "border-neutral-500 border-b-2 justify-center flex-row" style = {{height: hp(6.5)}}>
        <View className = "flex-1 items-start flex-row self-center">
          <Text className = "text-white font-semibold" style = {{fontSize: hp(4.5)}}>{steps}</Text>
        </View>
        <View className = "items-end justify-center">
          <Text className = "text-neutral-300"> Today's goal</Text>
          <Text className = "font-semibold" style = {{fontSize: hp(2), color: '#58ecdc'}}>{goal}</Text>
        </View>
      </View>
      <Flowchart />
      <View className = "border-neutral-500 border-b-2 justify-between flex-row items-center" style = {{height: hp(6)}}>
        <View className = "">
          <Text className = "text-neutral-300 font-semibold" style = {{fontSize: hp(1.2)}}>FLOORS</Text>
          <Text className = "font-semibold" style = {{fontSize: hp(2), color: '#58ecdc'}}>14</Text>
        </View>
        <View className = "">
          <Text className = "text-neutral-300 font-semibold" style = {{fontSize: hp(1.2)}} >CALORIES</Text>
          <Text className = "font-semibold self-center" style = {{fontSize: hp(2), color: '#58ecdc'}}>604</Text>
        </View>
        <View className = "">
          <Text className = "text-neutral-300 font-semibold" style = {{fontSize: hp(1.2)}}>DISTANCE</Text>
          <Text className = "font-semibold" style = {{fontSize: hp(2), color: '#58ecdc'}}>7.2km</Text>
        </View>
      </View>
    </View>
  )
}

