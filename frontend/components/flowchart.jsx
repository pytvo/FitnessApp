import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Rect, G, TSpan, Ellipse } from 'react-native-svg'
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

    const steps = 10000;
    const goal = 6000;

    const progressMon = Math.round((steps / goal * 100)/2.5);
    const limitedProgressMon = progressMon >= 86 ? 86 : progressMon;
    const progressTue = 22;
    const limitedProgressTue = progressTue >= 86 ? 86 : progressTue;
    const progressWed = 70;
    const limitedProgressWed = progressWed >= 86 ? 86 : progressWed;
    const progressThu = 40;
    const limitedProgressThu = progressThu >= 86 ? 86 : progressThu;
    const progressFri = 25;
    const limitedProgressFri = progressFri >= 86 ? 86 : progressFri;
    const progressSat = 67;
    const limitedProgressSat = progressSat >= 86 ? 86 : progressSat;
    const progressSun = 56;
    const limitedProgressSun = progressSun >= 86 ? 86 : progressSun;
    

    const fillMon = useSharedValue(0);
    const fillTue = useSharedValue(0);
    const fillWed = useSharedValue(0);
    const fillThu = useSharedValue(0);
    const fillFri = useSharedValue(0);
    const fillSat = useSharedValue(0);
    const fillSun = useSharedValue(0);

    const linefill = useSharedValue(0);

    useEffect(() => {
        fillMon.value = withTiming(limitedProgressMon, {duration: 1500})
        fillTue.value = withTiming(limitedProgressTue, {duration: 1500})
        fillWed.value = withTiming(limitedProgressWed, {duration: 1500})
        fillThu.value = withTiming(limitedProgressThu, {duration: 1500})
        fillFri.value = withTiming(limitedProgressFri, {duration: 1500})
        fillSat.value = withTiming(limitedProgressSat, {duration: 1500})
        fillSun.value = withTiming(limitedProgressSun, {duration: 1500})
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

    const dashes = new Array(Math.floor(wp(95) / 16)).fill(null);

    return (
        <View className = "border-b-2 border-neutral-500" style = {{height: hp(25)}}>
        <View style = {{height: hp(20), paddingTop: hp(2)}}>
          <Svg>
            {/* Розділити на 2.5 щоб було максимум 250% */}
            {/* Monday */}
            <AnimatedRect x = {wp(2)} y = {`${-limitedProgressMon + 86}%`} animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'MON' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(5)} y = {`${-limitedProgressMon + 87}%`}>
                {Math.round(progressMon*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(2)} y = {`${-limitedProgressMon + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(2)} y = "100%" width = {wp(12)} animatedProps={animatedPropsMon} fill = "#58ecdc" opacity={0.3} />
            {/* Tuesday */}
            <AnimatedRect x = {wp(15)} y = {`${-limitedProgressTue + 86}%`}  animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'TUE' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(18)} y = {`${-limitedProgressTue + 87}%`}>
                {Math.round(progressTue*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(15)} y = {`${-limitedProgressTue + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(15)} y = "100%" width = {wp(12)} animatedProps = {animatedPropsTue} fill = "#58ecdc" opacity={0.3}/>
            {/* Wednesday */}
            <AnimatedRect x = {wp(28)} y = {`${-limitedProgressWed + 86}%`}  animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'WED' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(31)} y = {`${-limitedProgressWed + 87}%`}>
                {Math.round(progressWed*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(28)} y = {`${-limitedProgressWed + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(28)} y = "100%" width = {wp(12)} animatedProps={animatedPropsWed} fill = "#58ecdc" opacity={0.3}/>
            {/* Thursday */}
            <AnimatedRect x = {wp(41)} y = {`${-limitedProgressThu + 86}%`}  animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'THU' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(44)} y = {`${-limitedProgressThu + 87}%`}>
                {Math.round(progressThu*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(41)} y = {`${-limitedProgressThu + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(41)} y = "100%" width = {wp(12)} animatedProps={animatedPropsThu} fill = "#58ecdc" opacity={0.3}/>
            {/* Friday */}
            <AnimatedRect x = {wp(54)} y = {`${-limitedProgressFri + 86}%`}  animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'FRI' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(57)} y = {`${-limitedProgressFri + 87}%`}>
                {Math.round(progressFri*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(54)} y = {`${-limitedProgressFri + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(54)} y = "100%" width = {wp(12)} animatedProps={animatedPropsFri} fill = "#58ecdc" opacity={0.3}/>
            {/* Saturday */}
            <AnimatedRect x = {wp(67)} y = {`${-limitedProgressSat + 86}%`}  animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'SAT' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(70)} y = {`${-limitedProgressSat + 87}%`}>
                {Math.round(progressSat*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(67)} y = {`${-limitedProgressSat + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(67)} y = "100%" width = {wp(12)} animatedProps={animatedPropsSat} fill = "#58ecdc" opacity={0.3}/>
            {/* Sunday */}
            <AnimatedRect x = {wp(80)} y = {`${-limitedProgressSun + 86}%`}  animatedProps={lineProps} rx = {hp(0.5)} height = {"8%"} fill = {today === 'SUN' ? '#58ecdc' : '#000'} />
            <TSpan fontWeight='bold' fill="#000" dy="9" x={wp(83)} y = {`${-limitedProgressSun + 87}%`}>
                {Math.round(progressSun*2.5)}%
            </TSpan>
            <AnimatedRect x = {wp(80)} y = {`${-limitedProgressSun + 97}%`} animatedProps={lineProps} height = "1.5%" fill = "#58ecdc" opacity = {1} />
            <AnimatedRect x = {wp(80)} y = "100%" width = {wp(12)} animatedProps={animatedPropsSun} fill = "#58ecdc" opacity={0.3}/>
            {/* Limit line for goal */}
            <G>
                {dashes.map((_, index) => (
                    <Rect
                        key={index}
                        x = {wp(2)}
                        y="60%"
                        width="8"
                        height="1"
                        fill="#828282"
                        translateX= {[15.7 * index]}
                    />
                ))}
            </G>
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