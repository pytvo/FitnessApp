import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Flowchart from './flowchart'
import RingProgress from './RingProgress';
import { SimpleLineIcons } from '@expo/vector-icons';

export const goal = 6000;
export const steps = 15020;

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
          {/* Average steps */}
          <Text className = "text-neutral-300 font-semibold" style = {{fontSize: hp(1.2)}} >AVERAGE</Text>
          <Text className = "font-semibold self-center" style = {{fontSize: hp(2), color: '#58ecdc'}}>10423</Text>
        </View>
        <View className = "">
          <Text className = "text-neutral-300 font-semibold" style = {{fontSize: hp(1.2)}}>DISTANCE</Text>
          <Text className = "font-semibold" style = {{fontSize: hp(2), color: '#58ecdc'}}>7.2km</Text>
        </View>
      </View>
      <View className = "flex flex-row justify-between mt-10">
        <View className = "flex border-neutral-500 border rounded-xl items-center justify-center" style = {{width: wp(43), height: hp(25)}}>
          <Text className = "text-neutral-300 mb-4" style = {{fontSize: hp(2)}}><SimpleLineIcons name="fire" size={22} color="#737373" /> Calories</Text>
          <RingProgress />
          <Text className = "text-neutral-300 mt-2" style = {{fontSize: hp(2)}}> 2000</Text>
          <Text className = "text-neutral-500" style = {{fontSize: hp(1.7)}}> Kcal</Text>
        </View>
        <View className = "flex border-neutral-500 border rounded-xl" style = {{width: wp(43), height: hp(25)}}>
          <Text> BMI?</Text>
        </View>
      </View>
    </View>
  )
}

