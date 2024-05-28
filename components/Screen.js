import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import * as Constant from 'expo-constants'

export default function Screen({color = 'white',children}) {
  return (
    <SafeAreaView
        style={{
            flex : 1,
            paddingTop : Platform.OS === 'android' ? Constant.default.statusBarHeight : 0,
            backgroundColor : color
        }}
    >
      {children}
    </SafeAreaView>
  )
}