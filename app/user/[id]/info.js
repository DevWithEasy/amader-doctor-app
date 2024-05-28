import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../../../components/Screen'
import { useGlobalSearchParams, usePathname } from 'expo-router'

export default function Info() {
  const {id} = useGlobalSearchParams()
  console.log(id)
  return (
    <Screen>
      <View>
        <Text>Info</Text>
      </View>
    </Screen>
  )
}