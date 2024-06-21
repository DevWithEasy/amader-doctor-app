import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import * as Constant from 'expo-constants'
import { AntDesign } from '@expo/vector-icons';

export default function Screen({header=true,color = 'white',children}) {
  return (
    <SafeAreaView
        style={{
            flex : 1,
            paddingTop : Platform.OS === 'android' ? Constant.default.statusBarHeight : 0,
            backgroundColor : color
        }}
    >
      <View
        className
      >
        <AntDesign name="menu-fold" size={24} color="black" />
      </View>
      {children}
    </SafeAreaView>
  )
}