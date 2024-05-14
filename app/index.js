import { View, Text,Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import doctor_image from '../assets/doctor_male.png'


export default function index() {
    return (
        <ScrollView
            className = 'bg-white mt-10 p-4'
        >
            <StatusBar />
            <View
                className = 'w-1/2 justify-center items-center border p-2 rounded'
            >
            <Image 
                source={doctor_image} 
                style={{ width: 100, height: 100 }} 
            />
            <Text className='text-blue-500'>Dr. Abedur Rahman</Text>
            <Text>Rangpur Medical Collage</Text>
        </View>
        </ScrollView>
        
    )
}