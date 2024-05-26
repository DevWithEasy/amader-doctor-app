import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { toBengaliNumber } from 'bengali-number'
import specializationImage from '../assets/brain.png'
import { Link, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Picker } from '@react-native-picker/picker';
import days from '../utils/days'
import dayNameBangla from '../utils/dayNameBangla'

export default function Index() {
    const inset = useSafeAreaInsets()
    const [doctors, setDoctors] = useState([])
    const [specilaizations, setSpecilaizations] = useState([])
    const [specilaization, setSpecilaization] = useState([])
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
    const router = useRouter()
    return (
        <ScrollView
            // style={{
            //     paddingTop: inset.top
            // }}
            className='bg-blue-50'
        >
            {/* <StatusBar style="light" /> */}
            <View
                className='p-2'
            >
                <View
                    className='flex-row bg-white rounded-md'
                >
                    <View
                        className='w-7/12 p-2 space-y-2'
                    >
                        <Text
                            className='text-[16px] font-hmedium text-blue-500'
                        >
                            খুঁজুন এবং অ্যাপয়েন্টমেন্ট নিন
                        </Text>
                        <View
                            className='space-y-1'
                        >
                            <View
                                className='border border-gray-400 rounded'
                            >
                                <Picker
                                    selectedValue={specilaization}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSpecilaization(itemValue)
                                    }
                                    style={{
                                        height: 40,
                                        marginTop: -10
                                    }}
                                >
                                    <Picker.Item
                                        label='অভিজ্ঞতা বাছাই করুন'
                                    />
                                    {
                                        specilaizations.map(specilaization =>
                                            <Picker.Item
                                                key={specilaization._id}
                                                label={specilaization.name}
                                                value={specilaization._id}
                                            />
                                        )
                                    }
                                </Picker>
                            </View>
                            <View
                                className='border border-gray-400 rounded'
                            >
                                <Picker
                                    selectedValue={specilaization}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSpecilaization(itemValue)
                                    }
                                    style={{
                                        height: 40,
                                        marginTop: -10
                                    }}
                                >
                                    <Picker.Item
                                        label='বার বাছাই করুন'
                                    />
                                    {
                                        days.map((day,i) =>
                                            <Picker.Item
                                                key={i}
                                                label={dayNameBangla(day)}
                                                value={day}
                                            />
                                        )
                                    }
                                </Picker>
                            </View>
                            <TouchableOpacity
                                className='py-2 bg-blue-500 rounded'
                                onPress={()=>router.push('/signup')}
                            >
                                <Text
                                    className='text-white text-center'
                                >
                                    খুঁজুন
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        className='w-5/12 justify-center items-center'
                    >
                        <Image
                            source={require('../assets/doctor_visit.png')}
                            className='w-[120px] h-[120px]'
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
                                className='w-4/12 p-1'
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
                                className='w-4/12 p-1'
                            >
                                <TouchableOpacity
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
                                </TouchableOpacity>
                            </View>
                        )
                    }

                </View>
            </View>
            <View
                className='pb-12'
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});