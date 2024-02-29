import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Exercise() {
  return (
    <SafeAreaView className = "bg-black">
      <View style = {{height: hp(100)}} className = "flex bg-black">
        <Text className = "text-white">Exercise</Text>
      </View>
    </SafeAreaView>
  )
}