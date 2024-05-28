import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
                            <FontAwesome6 name="user-doctor" size={24} color={color} />
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
                name='chambers'
                options={{
                    headerShown: false,
                    title: 'Chambers',
                    tabBarIcon : ({color})=>{
                        console.log(color)
                        return(
                            <MaterialCommunityIcons name="hospital-marker" size={24} color={color} />
                        )
                    }
                }}
            />
        </Tabs>
    )
}