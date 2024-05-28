import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profilelayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon : ({color})=>{
                        return(
                            <FontAwesome6 name="user-tie" size={24} color={color} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name='info'
                options={{
                    headerShown: false,
                    title: 'Information',
                    tabBarIcon : ({color})=>{
                        console.log(color)
                        return(
                            <Ionicons name="information-circle" size={24} color={color} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name='appointments'
                options={{
                    headerShown: false,
                    title: 'Appointments',
                    tabBarIcon : ({color})=>{
                        console.log(color)
                        return(
                            <Ionicons name="book" size={24} color={color} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name='transections'
                options={{
                    headerShown: false,
                    title: 'Transections',
                    tabBarIcon : ({color})=>{
                        console.log(color)
                        return(
                            <FontAwesome name="exchange" size={24} color={color} />
                        )
                    }
                }}
            />
        </Tabs>
    )
}