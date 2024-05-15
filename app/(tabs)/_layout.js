import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Tablayout() {
  return (
    <Tabs>
    <Tabs.Screen
        name='index'
        options={{
            headerShown: false,
            title: 'হোম',
        }}
    />
    <Tabs.Screen
        name='find'
        options={{
            headerShown: false,
            title: 'হোম',
        }}
    />
    <Tabs.Screen
        name='doctors'
        options={{
            headerShown: false,
            title: 'হোম',
        }}
    />
    <Tabs.Screen
        name='hospitals'
        options={{
            headerShown: false,
            title: 'হোম',
        }}
    />
    <Tabs.Screen
        name='ambulences'
        options={{
            headerShown: false,
            title: 'হোম',
        }}
    />
    <Tabs.Screen
        name='blood'
        options={{
            headerShown: false,
            title: 'হোম',
        }}
    />
</Tabs>
  )
}