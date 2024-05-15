import { View, Text, Image, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const { toBengaliNumber } = require('bengali-number')
import specializationImage from '../assets/brain.png'
import { Link } from 'expo-router'

export default function Index() {
    const inset = useSafeAreaInsets()
    const [doctors, setDoctors] = useState([])
    const [specilaizations, setSpecilaizations] = useState([])
    useEffect(() => {
        function getData() {
            fetch(`https://amaderdoctor.onrender.com/api/doctor/home-data`)
                .then(res => res.json())
                .then(res => {
                    setDoctors(res.data.doctors)
                    setSpecilaizations(res.data.specializations)
                })
                .catch(err => console.log(err))
        }
        getData()
    }, [])
    console.log(specilaizations)
    return (
        <ScrollView
            style={{
                paddingTop: inset.top
            }}
            className='bg-blue-50'
        >
            <StatusBar />
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
                            <View
                                className='w-4/12 p-2'
                            >
                                <TouchableOpacity
                                    key={specilaization?._id}
                                    className='bg-white p-2 justify-center items-center space-y-2 rounded-md'
                                >
                                    <Image
                                        source={specializationImage}
                                        className='w-10 h-10'
                                    />
                                    <Text
                                        className='font-hregular'
                                    >
                                        {specilaization?.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }

                </View>
            </View>
            <View>
                <View
                    className='px-2 pb-2 flex-row justify-between'
                >
                    <Text
                        className='font-hregular'
                    >
                        জনপ্রিয় ডাক্তারগণ
                    </Text>
                    <Link
                        href=''
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
                                        {toBengaliNumber(doctor?.feesPerConsultation)} -৳
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

        </ScrollView>

    )
}