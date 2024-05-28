import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Profilelayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    // headerShown: false,
                    // title: 'হোম',
                }}
            />
            <Tabs.Screen
                name='transections'
                options={{
                    // headerShown: false,
                    // title: 'হোম',
                }}
            />
            <Tabs.Screen
                name='appointments'
                options={{
                    // headerShown: false,
                    // title: 'হোম',
                }}
            />
        </Tabs>
    )
}