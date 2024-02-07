import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
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

    const steps = 15020;
    const goal = 6000;

    const progress = Math.round((steps / goal * 100)/2.5); 
    const limitedProgress = progress >= 100 ? 97 : progress;
    console.log(limitedProgress)
    

    const fill = useSharedValue(0);
    const linefill = useSharedValue(0);
    useEffect(() => {
        fill.value = withTiming(limitedProgress, {duration: 1500})
    })
    console.log(fill.value)
    const animatedProps = useAnimatedProps(() => ({
        height: `-${[fill.value]}%`
    }))

    useEffect(() => {
        linefill.value = withTiming(wp(12), {duration: 1500})
    })
    const lineProps = useAnimatedProps(() => ({
        width: linefill.value
    }))

    return (
        <View className = "border-b-2 border-neutral-500" style = {{height: hp(25)}}>
        <View style = {{height: hp(20), paddingTop: hp(2)}}>
          <Svg>
            {/* Розділити на 2.5 щоб було максимум 250% */}
            {/* Monday */}
            <AnimatedRect x = {wp(2)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(2)} y = "100%" width = {wp(12)} animatedProps={animatedProps} fill = "#204444" opacity = {1} />
            {/* Tuesday */}
            <AnimatedRect x = {wp(15)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(15)} y = "100%" width = {wp(12)} animatedProps = {animatedProps} fill = "#204444" opacity={1}/>
            {/* Wednesday */}
            <AnimatedRect x = {wp(28)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(28)} y = "100%" width = {wp(12)} animatedProps={animatedProps} fill = "#204444" opacity={1}/>
            {/* Thursday */}
            <AnimatedRect x = {wp(41)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(41)} y = "100%" width = {wp(12)} animatedProps={animatedProps} fill = "#204444" opacity={1}/>
            {/* Friday */}
            <AnimatedRect x = {wp(54)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(54)} y = "100%" width = {wp(12)} animatedProps={animatedProps} fill = "#204444" opacity={1}/>
            {/* Saturday */}
            <AnimatedRect x = {wp(67)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(67)} y = "100%" width = {wp(12)} animatedProps={animatedProps} fill = "#204444" opacity={1}/>
            {/* Sunday */}
            <AnimatedRect x = {wp(80)} y = {`${-limitedProgress + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(80)} y = "100%" width = {wp(12)} animatedProps={animatedProps} fill = "#204444" opacity={1}/>
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