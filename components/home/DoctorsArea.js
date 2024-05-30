import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { toBengaliNumber } from 'bengali-number'
import { Link, useRouter } from 'expo-router'
import API_URL from '../../utils/api_url'
import find_image_url from '../../utils/find_image_url'
import Doctor from '../doctor-list-item'

export default function DoctorsArea({ doctors }) {
    const router = useRouter()
    return (
        <View
            className='pb-4'
        >
            <View
                className='px-2 py-2 flex-row justify-between'
            >
                <Text
                    className='font-hmedium'
                >
                    জনপ্রিয় ডাক্তারগণ
                </Text>
                <Link
                    href='/doctors'
                    className='font-hregular text-blue-500 items-center'
                >
                    আরো ডাক্তারগণ
                </Link>
            </View>
            <View
                className='px-2 space-y-2'
            >
                {doctors.length > 0 &&
                    doctors.map(doctor =>
                        <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        />
                    )

                }
            </View>
        </View>
    )
}