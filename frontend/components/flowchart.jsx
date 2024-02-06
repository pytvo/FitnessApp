import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import Svg, {Rect} from 'react-native-svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedRect = Animated.createAnimatedComponent(Rect);

export default function Flowchart() {
    const getDayOfWeek = () => {
        const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, and so on
        return daysOfWeek[today === 0 ? 6 : today - 1]; // Adjust index for Monday start
    };
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const today = getDayOfWeek();

    const steps = 14000;
    const goal = 6000;
    const progress = Math.round((steps / goal * 100)/2.5); 
    const progressTUE = Math.round((steps / goal * 100)/2.5) + 10;
    const trya = progressTUE > 100 ? 97 : progressTUE;
    console.log("progress " + progress)
    console.log("trya "+ trya)
    console.log("progressTUE " + progressTUE)
    return (
        <View className = "border-b-2 border-neutral-500" style = {{height: hp(25)}}>
        <View style = {{height: hp(20), paddingTop: hp(2)}}>
          <Svg>
            {/* Розділити на 2.5 щоб було максимум 250% */}
            {/* Monday */}
            <Rect x = {wp(2)} y = {`${-progress + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(2)} y = "100%" width = {wp(12)} height = {`-${progress}%`} fill = "#204444" opacity = {1} />
            {/* Tuesday */}
            <Rect x = {wp(15)} y = {`${-trya + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(15)} y = "100%" width = {wp(12)} height = {`-${trya}%`} fill = "#204444" opacity={1}/>
            {/* Wednesday */}
            <Rect x = {wp(28)} y = {`${-progress + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(28)} y = "100%" width = {wp(12)} height = {`-${progress}%`} fill = "#204444" opacity={1}/>
            {/* Thursday */}
            <Rect x = {wp(41)} y = {`${-progress + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(41)} y = "100%" width = {wp(12)} height = {`-${progress}%`} fill = "#204444" opacity={1}/>
            {/* Friday */}
            <Rect x = {wp(54)} y = {`${-progress + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(54)} y = "100%" width = {wp(12)} height = {`-${progress}%`} fill = "#204444" opacity={1}/>
            {/* Saturday */}
            <Rect x = {wp(67)} y = {`${-progress + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(67)} y = "100%" width = {wp(12)} height = {`-${progress}%`} fill = "#204444" opacity={1}/>
            {/* Sunday */}
            <Rect x = {wp(80)} y = {`${-progress + 97}%`} width = {wp(12)} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <Rect x = {wp(80)} y = "100%" width = {wp(12)} height = {`-${progress}%`} fill = "#204444" opacity={1}/>
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