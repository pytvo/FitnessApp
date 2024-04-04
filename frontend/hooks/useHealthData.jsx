import { Platform } from 'react-native'
import { useState, useEffect} from 'react'
import AppleHealthKit from 'react-native-health'

const permissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.FlightsClimbed,
            AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            AppleHealthKit.Constants.Permissions.ActiveEnergyBurned
        ],
        write: []
    }
}

export default function useHealthData() {
    const [hasPermission, setHasPermission] = useState(false)
    const [steps, setSteps] = useState(0)
    const [flights, setFlights] = useState(0)
    const [distance, setDistance] = useState(0)
    const [calories, setCalories] = useState(0)

    useEffect(() => {
        if (Platform.OS !== 'ios') {
            return;
        }
        AppleHealthKit.isAvailable((err, isAvailable) => {
            if (err) {
                console.log("error initializing Healthkit: ", err);
                return;
            }
            if (!isAvailable){
                console.log("Apple HealthKit is not available on this device")
                return;
            }
            AppleHealthKit.initHealthKit(permissions, (err) => {
            if (err) {
                console.log("error initializing Healthkit: ", err);
                return;
            }
            setHasPermission(true);
        
        })})},[]);
        useEffect(() => {
            if (!hasPermission){
            return;
            }
    
            const options = {
            includeManuallyAdded: false,
            }
    
            AppleHealthKit.getStepCount(options, (err, results) => {
            if (err){
                console.log("error getting step count: ", err);
                return;
            }
            console.log("results: ", results);
            console.log("results steps: ", results.value)
            setSteps(results.value);
            })
    
            AppleHealthKit.getFlightsClimbed(options, (err, results) => {
            if (err){
                console.log("error getting flights count: ", err);
                return;
            }
            console.log("results: ", results);
            setFlights(results.value);
            })
    
            AppleHealthKit.getDistanceWalkingRunning(options, (err, results) => {
            if (err){
                console.log("error getting flights count: ", err);
                return;
            }
            console.log("results: ", results);
            setDistance(results.value);
            })
            
            AppleHealthKit.getActiveEnergyBurned(options, (err, results) => {
            if (err){
                console.log("error getting flights count: ", err);
                return;
            }
            console.log("results: ", results);
            setCalories(results.value);
            })
    
        }, [hasPermission])
    return {
        steps,
        flights,
        distance,
        calories
    }
}