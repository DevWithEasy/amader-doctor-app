import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function ServicesArea() {
    const router = useRouter()
    const services = [
        {
            title: 'ডাক্তার খুঁজুন',
            image: require('../../assets/service_doctor.png'),
            path : '/doctors'
        },
        {
            title: 'হাসপাতাল',
            image: require('../../assets/service_hospital.png'),
            path : '/hospitals'
        },
        {
            title: 'অ্যাম্বুলেন্স',
            image: require('../../assets/service_ambulance.png'),
            path : '/ambulences'
        },
        {
            title: 'ব্লাড ব্যাংক',
            image: require('../../assets/service_blood_bank.png'),
            path : '/blood'
        },
        {
            title: 'ম্যাপস',
            image: require('../../assets/service_maps.png'),
            path : '/maps'
        },
    ]
    return (
        <View>
            <View
                className='px-2 flex-row justify-between'
            >
                <Text
                    className='font-hmedium'
                >
                    আমাদের সেবা সমূহ
                </Text>
            </View>
            <View
                className='flex flex-row flex-wrap'
            >
                {
                    services.map((service, i) =>
                        <TouchableOpacity
                            key={i}
                            onPress={()=>router.push(service.path)}
                            className='w-4/12 p-1'
                        >
                            <View
                                className='bg-white p-2 justify-center items-center space-y-2 rounded-md'
                            >
                                <Image
                                    source={service.image}
                                    className='w-10 h-10'
                                />
                                <Text
                                    className='font-hregular'
                                >
                                    {service.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}