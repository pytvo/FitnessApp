import React from 'react'
import { Stack } from 'expo-router/stack'

export default function _layout() {
  return (
    <Stack screenOptions={{headerShown: false}} />
  )
}