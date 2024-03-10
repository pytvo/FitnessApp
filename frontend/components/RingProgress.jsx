import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SVG, {Circle} from 'react-native-svg'
import Animated, {useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const color = '#58ecdc';

const RingProgress = ({radius = 50, strokeWidth = 20, progress = 0.2}) => {
  const innerRadius = radius - strokeWidth / 2  
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, {duration: 1500})
  }, [progress])

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));

  const circleDefaultProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,
    strokeWidth: strokeWidth,
    stroke: color,
    strokeLinecap: 'round',
    rotation: '-90',
    
  };
  return (
    <View style = {{height: 100, width: 100}}>
      <SVG>
        {/* Background */}
        <Circle {...circleDefaultProps} opacity = {0.1} />
        {/* Progress */}
        <AnimatedCircle animatedProps = {animatedProps} {...circleDefaultProps} />
      </SVG>
    </View>
  )
}

export default RingProgress;