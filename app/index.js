import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const { toBengaliNumber } = require('bengali-number')
import specializationImage from '../assets/brain.png'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import RNPickerSelect from 'react-native-picker-select';

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
    const services = [
        {
            title: 'ডাক্তার খুঁজুন',
            image: require('../assets/service_doctor.png')
        },
        {
            title: 'হাসপাতাল',
            image: require('../assets/service_hospital.png')
        },
        {
            title: 'অ্যাম্বুলেন্স',
            image: require('../assets/service_ambulance.png')
        },
        {
            title: 'ব্লাড ব্যাংক',
            image: require('../assets/service_blood_bank.png')
        },
        {
            title: 'ম্যাপস',
            image: require('../assets/service_maps.png')
        },
    ]
    console.log(specilaizations)
    return (
        <ScrollView
            style={{
                paddingTop: inset.top
            }}
            className='bg-blue-50'
        >
            <StatusBar style="light" />
            <View
                className='p-2'
            >
                <View
                    className='flex-row bg-white rounded-md'
                >
                    <View
                        className='w-7/12 p-2'
                    >
                        <Text
                            className='text-lg font-hmedium text-blue-500'
                        >
                            খুঁজুন এবং অ্যাপয়েন্টমেন্ট নিন
                        </Text>
                        <View>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={specilaizations.map(specilaization => {
                                    return {
                                        label: specilaization.name,
                                        value: specilaization._id
                                    }
                                })
                                }
                                style={{
                                    inputAndroid : {
                                        border : '1px solid gray'
                                    }
                                }}
                            />
                        </View>
                    </View>
                    <View
                        className='w-5/12 justify-center items-center'
                    >
                        <Image
                            source={require('../assets/doctor_visit.png')}
                            className='w-[150px] h-[150px]'
                        />
                    </View>
                </View>
            </View>

            <View>
                <View
                    className='px-2 flex-row justify-between'
                >
                    <Text
                        className='font-hregular'
                    >
                        আমাদের সেবা সমূহ
                    </Text>
                </View>
                <View
                    className='flex flex-row flex-wrap'
                >
                    {
                        services.map((service, i) =>
                            <View
                                key={i}
                                className='w-4/12 p-2'
                            >
                                <TouchableOpacity
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
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </View>
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
                                key={specilaization?._id}
                                className='w-4/12 p-2'
                            >
                                <TouchableOpacity
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
            <View
                className='pb-10'
            >
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

        </ScrollView>

    )
}