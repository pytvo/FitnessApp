import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Exercise() {
  return (
    <SafeAreaView className = "bg-black">
      <View style = {{height: hp(100)}} className = "bg-black">
        <View className = "flex flex-row flex-wrap justify-between ml-6 mr-6">
          <View style = {{height: hp(20), width: wp(40)}} className= "bg-white rounded-3xl mt-2"></View>
          <View style = {{height: hp(20), width: wp(40)}} className= "bg-white rounded-3xl mt-2"></View>
          <View style = {{height: hp(20), width: wp(40)}} className= "bg-white rounded-3xl mt-2"></View>
          <View style = {{height: hp(20), width: wp(40)}} className= "bg-white rounded-3xl mt-2"></View>
          <View style = {{height: hp(20), width: wp(40)}} className= "bg-white rounded-3xl mt-2"></View>
          <View style = {{height: hp(20), width: wp(40)}} className= "bg-white rounded-3xl mt-2"></View>
        </View>
      </View>
    </SafeAreaView>
  )
}