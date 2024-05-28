import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router'

export default function Find() {
  const { specilaization, day } = useGlobalSearchParams()

  console.log(specilaization, day)
  return (
    <View>
      <Text>Find</Text>
    </View>
  )
}