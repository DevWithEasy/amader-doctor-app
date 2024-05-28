import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import specializationImage from '../../assets/brain.png'
import { Link, useRouter } from 'expo-router'

export default function SpecilaizationArea({ specilaizations }) {
    const router = useRouter()
    return (
        <View>
            <View
                className='px-2 flex-row justify-between'
            >
                <Text
                    className='font-hregular'
                >
                    বিভাগ সমূহ
                </Text>
                <Link
                    href=''
                    className='font-hregular text-blue-500 items-center'
                >
                    আরো বিভাগ
                </Link>
            </View>
            <View
                className='flex flex-row flex-wrap'
            >
                {specilaizations.length > 0 &&
                    specilaizations.map(specilaization =>
                        <TouchableOpacity
                            key={specilaization?._id}
                            onPress={() => router.push(`/specializations/${specilaization?._id}`)}
                            className='w-4/12 p-1'
                        >
                            <View
                                className='bg-white p-2 justify-center items-center space-y-2 rounded-md'
                            >
                                <Image
                                    source={specializationImage}
                                    className='w-10 h-10'
                                />
                                <Text
                                    className='font-hregular text-nowrap'
                                >
                                    {specilaization?.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

            </View>
        </View>
    )
}