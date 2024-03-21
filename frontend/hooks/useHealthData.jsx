import { View, Text } from 'react-native'
import React from 'react'
import AppleHealthKit from 'react-native-health'

export default function () {
    AppleHealthKit.initHealthKit();
    const permissions = {
        read: [
            
        ]
    }
    return (
        <View></View>
    )
}