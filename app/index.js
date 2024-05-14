import { View, Text, Image, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import doctor_image from '../assets/doctor_male.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function index() {
    const inset = useSafeAreaInsets()
    
    return (
        <ScrollView
            style={{
                paddingTop: inset.top
            }}
            className='px-4 bg-blue-100'
        >
            <StatusBar />
            <View
                className='flex-row p-2 bg-white rounded'
            >
                <Image
                    source={doctor_image}
                    className='h-[80px] w-[80px]'
                />
                <View
                    className=''
                >
                    <Text
                        className='text-blue-500 font-hbold'
                    >
                        ডাঃ আবেদুর রহমান
                    </Text>
                    <Text
                        className='font-hregular'
                    >
                        রংপুর মেডিক্যাল কলেজ হাসপাতাল
                    </Text>
                    <Text
                        className='font-hregular'
                    >
                        সার্ভিস চার্জ - ৫০০ টাকা
                    </Text>
                    <TouchableOpacity
                        className='bg-green-100 rounded px-2'
                    >
                        <Text
                            className='font-hregular text-green-500 text-center'
                        >
                            কার্ডিওলোজি
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )
}