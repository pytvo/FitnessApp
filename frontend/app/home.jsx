import { View, Platform } from 'react-native'
import {React, useState, useEffect} from 'react'
import Header from '../components/header'
import Body from '../components/body'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  
  const [profile, setProfile] = useState({})
  
  useEffect(() => {
    fetch('http://localhost:8000/auth/jwt/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username":"Oleh1", "password":"qwerty"})
    }).then(response => response.json())
    .then((data) => {
      login(data['access'])
    })
  }, [])

  const login = (token) => {
    fetch('http://localhost:8000/auth/users/me/', {
      'method': 'GET',
      headers: {
        'Authorization': `JWT ${token}`
      }
    }).then((response) => response.json())
    .then(data => {
      setProfile(data)
    })
  }

  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: '#000'}}>
      <View style = {{flex: 1, width: wp(94), alignSelf: 'center', marginTop: Platform.OS === 'android' ? hp(1) : hp(0)}}>
          <Header name={profile.full_name} image={profile.image}/>
          <Body />
      </View>
    </SafeAreaView>
  )
}