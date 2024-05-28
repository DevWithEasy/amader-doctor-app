import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { toBengaliNumber } from 'bengali-number'
import { Link, useRouter } from 'expo-router'

export default function DoctorsArea({ doctors }) {
    const router = useRouter()
    return (
        <View
            className='pb-12'
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
                        <TouchableOpacity
                            key={doctor?._id}
                            onPress={() => router.push(`/doctors/${doctor?._id}`)}
                            className='flex-row p-2 bg-white rounded relative cursor-pointer hover:bg-blue-500'
                        >
                            <View
                                className='w-[90px] justify-center items-center space-y-1'
                            >
                                <Image
                                    source={{ uri: `https://amaderdoctor.onrender.com${doctor?.user?.image?.url}` }}
                                    className='h-[80px] w-[80px]'
                                />
                                <Text
                                    className='font-hregular bg-blue-50 px-2 text-blue-600 rounded-md'
                                >
                                    {toBengaliNumber(doctor?.feesPerConsultation)}-৳
                                </Text>
                            </View>

                            <View
                                className='pl-4'
                            >
                                <Text
                                    className='text-blue-500 font-hbold'
                                >
                                    {doctor?.name}
                                </Text>
                                <Text
                                    className='font-hregular'
                                >
                                    {doctor?.experienceArea}
                                </Text>
                                <Text
                                    className='font-hregular'
                                >
                                    {doctor?.workedAt}
                                </Text>
                                <Text
                                    className='font-hregular'
                                >
                                    {toBengaliNumber(doctor?.experience)}+ বছরের অভিজ্ঞতা
                                </Text>
                            </View>
                            <TouchableOpacity
                                className='absolute right-0.5 top-0.5 bg-green-100 rounded px-2'
                            >
                                <Text
                                    className='font-hregular text-green-500 text-center'
                                >
                                    {doctor?.specialization?.name}
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )

                }
            </View>
        </View>
    )
}