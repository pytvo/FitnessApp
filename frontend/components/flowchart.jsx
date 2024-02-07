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

    const steps = 8000;
    const goal = 6000;

    const progress = Math.round((steps / goal * 100)/2.5); 
    const limitedProgress = progress >= 100 ? 97 : progress;
    const progressTue = 22;
    const progressWed = 90;
    const progressThu = 43;
    const progressFri = 10;
    const progressSat = 67;
    const progressSun = 97;
    

    const fillMon = useSharedValue(0);
    const fillTue = useSharedValue(0);
    const fillWed = useSharedValue(0);
    const fillThu = useSharedValue(0);
    const fillFri = useSharedValue(0);
    const fillSat = useSharedValue(0);
    const fillSun = useSharedValue(0);
    const linefill = useSharedValue(0);

    useEffect(() => {
        fillMon.value = withTiming(limitedProgress, {duration: 1500})
        fillTue.value = withTiming(22, {duration: 1500})
        fillWed.value = withTiming(90, {duration: 1500})
        fillThu.value = withTiming(43, {duration: 1500})
        fillFri.value = withTiming(10, {duration: 1500})
        fillSat.value = withTiming(67, {duration: 1500})
        fillSun.value = withTiming(97, {duration: 1500})
    })
    const animatedPropsMon = useAnimatedProps(() => ({
        height: `-${[fillMon.value]}%`
    }))
    const animatedPropsTue = useAnimatedProps(() => ({
        height: `-${[fillTue.value]}%`
    }))
    const animatedPropsWed = useAnimatedProps(() => ({
        height: `-${[fillWed.value]}%`
    }))
    const animatedPropsThu = useAnimatedProps(() => ({
        height: `-${[fillThu.value]}%`
    }))
    const animatedPropsFri = useAnimatedProps(() => ({
        height: `-${[fillFri.value]}%`
    }))
    const animatedPropsSat = useAnimatedProps(() => ({
        height: `-${[fillSat.value]}%`
    }))
    const animatedPropsSun = useAnimatedProps(() => ({
        height: `-${[fillSun.value]}%`
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
            <AnimatedRect x = {wp(2)} y = "100%" width = {wp(12)} animatedProps={animatedPropsMon} fill = "#204444" opacity = {1} />
            {/* Tuesday */}
            <AnimatedRect x = {wp(15)} y = {`${-progressTue + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(15)} y = "100%" width = {wp(12)} animatedProps = {animatedPropsTue} fill = "#204444" opacity={1}/>
            {/* Wednesday */}
            <AnimatedRect x = {wp(28)} y = {`${-progressWed + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(28)} y = "100%" width = {wp(12)} animatedProps={animatedPropsWed} fill = "#204444" opacity={1}/>
            {/* Thursday */}
            <AnimatedRect x = {wp(41)} y = {`${-progressThu + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(41)} y = "100%" width = {wp(12)} animatedProps={animatedPropsThu} fill = "#204444" opacity={1}/>
            {/* Friday */}
            <AnimatedRect x = {wp(54)} y = {`${-progressFri + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(54)} y = "100%" width = {wp(12)} animatedProps={animatedPropsFri} fill = "#204444" opacity={1}/>
            {/* Saturday */}
            <AnimatedRect x = {wp(67)} y = {`${-progressSat + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(67)} y = "100%" width = {wp(12)} animatedProps={animatedPropsSat} fill = "#204444" opacity={1}/>
            {/* Sunday */}
            <AnimatedRect x = {wp(80)} y = {`${-progressSun + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(80)} y = "100%" width = {wp(12)} animatedProps={animatedPropsSun} fill = "#204444" opacity={1}/>
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