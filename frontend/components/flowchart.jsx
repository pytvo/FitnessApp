import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import Svg, {Rect} from 'react-native-svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Flowchart() {
    const getDayOfWeek = () => {
        const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, and so on
        return daysOfWeek[today === 0 ? 6 : today - 1]; // Adjust index for Monday start
    };
      
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const today = getDayOfWeek();

    
    //  color: day => (day === today ? '#3498db' : '#fff'),
    // marginRight: wp(3),
    // width: wp(10)

    return (
        <View className = "border-b-2 border-neutral-500" style = {{height: hp(25)}}>
        <View style = {{height: hp(20), paddingTop: hp(2)}}>
          <Svg>
            {/* Розділити на 2.5 щоб було максимум 250% */}
            <Rect x = {wp(2)} y = "100%" width = {wp(12)} height = "-40%" fill = "#50ecda" opacity = {0.4} />
            <Rect x = {wp(15)} y = "100%" width = {wp(12)} height = "-88%" fill = "#50ecda" opacity={0.4}/>
            <Rect x = {wp(28)} y = "100%" width = {wp(12)} height = "-88%" fill = "#50ecda" opacity={0.4}/>
            <Rect x = {wp(41)} y = "100%" width = {wp(12)} height = "-88%" fill = "#50ecda" opacity={0.4}/>
            <Rect x = {wp(54)} y = "100%" width = {wp(12)} height = "-88%" fill = "#50ecda" opacity={0.4}/>
            <Rect x = {wp(67)} y = "100%" width = {wp(12)} height = "-88%" fill = "#50ecda" opacity={0.4}/>
            <Rect x = {wp(80)} y = "100%" width = {wp(12)} height = "-100%" fill = "#50ecda" opacity={0.4}/>
          </Svg>
        </View>
        <View className = "flex-row mt-1" style = {{marginLeft: wp(2)}}>
            {daysOfWeek.map((day, index) => (
                <View key = {index}>
                    <Text style={{color: day === today ? '#2ac7b5' : '#b2b8b7', marginRight: wp(3), width: wp(10)}} className = "text-gray-400">{day}</Text>
                </View>
                
            ))}
        </View>
      </View>
    )
}